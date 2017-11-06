import Cat from '../../../suppliers/templates/Products/Categories/Categories.js'
import Products from '../../../suppliers/templates/Products/Products.js'

export default class{
	constructor(){
		this.url='pages/suppliers/products/products.html'
		this.target='.profile-tabs-section';
		this.nav=new window.bms.exports.Navbar();
	}

	getProductList(cid){
		let xhr=new window.bms.exports.XHR();
		return xhr.request({url:`http://localhost/bms_api/src/api/suppliers/products/categories/?cid=${cid}&sub=true&prod=true`})
	}

	loadProducts(id){
		return new Promise((resolve,reject)=>{
			let prod=`
				<article class=" col col-md-12 col-lg-12  profile-section" style="margin-top: 0px;">
					<section class="col col-md-12">
						<h3>Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<hr/>
						<div class="col col-md-12"><p><b>Add new product using</b></p></div>
						<div class="col col-md-12 row">
							
							<div class="col col-sm-3 col-sm-6 col-lg-4 col-md-4">

								<button class="btn btn-default btn-block loadModalContent" data-target="#modal" data-popup-toggle="open"><i class="material-icons md-32">insert_drive_file</i>Blank</button>
							</div>

							<div class="col col-sm-3 col-sm-6 col-lg-6 col-md-4">
								<div class="dropdown">
									<button class="btn btn-block btn-default dropdown-toggle" data-toggle="dropdown">Template <i class="material-icons md-18">view_module</i> <i class="material-icons md-12">expand_more</i> 
										
									</button>

									<ul class="dropdown-menu">
									    <li class="loadModalContent" data-page="products/select_template.html"  data-toggle="modal" data-target="#myModal"><a href="#">Select template</a></li>
									    <li class="loadModalContent" data-page="products/new_template.html"  data-toggle="modal" data-target="#myModal"><a href="#">Create new +</a></li>
									  </ul>
								</div>
							</div>

							

					</section>
					<section class="col col-md-12">
						<div class="products-section">
							
						</div>
					</section>
				</article>
			`
			document.querySelector('.profile-tabs-about').innerHTML=prod
			resolve(this)
		});
	}


	loadCategories(json){
		//load template
		let catTemplate=new Cat();
		let prodTemplate=new Products();

		return new Promise((resolve,reject)=>{
			try{
				var prod_sec=document.querySelector('.products-section')

				var container=document.createElement('div')
				container.className='product-category-section'
				//APPEND ITEMS IN LIST
		        for(let x=0;x<json.length;x++){
		        	container.appendChild(catTemplate.render({id:json[x].id,name:json[x].name,class:'col col-xs-12 col-md-12',buttons:[]}))

		        	//sub category list
		        	var sub_cat=`<ul class="breadcrumb"><li class="active">Sub Categories <i class="material-icons md-12">arrow_forward</i> </li>`
		        	json[x].sub_categories.forEach((val,index)=>{
		        		sub_cat+=`<li><a href="#">${val[index].name}</a></li>`

		        	})

					sub_cat+=`</ul>`
					sub_cat+=`<div class="product-section-${json[x].id}"></div>`
					container.innerHTML+=sub_cat

					prod_sec.appendChild(container)


					//product list
					json[x].products.forEach((val,index)=>{ console.log(val[index])
		        		document.querySelector(`.product-section-${json[x].id}`).appendChild(prodTemplate.render({id:val[index].id,name:val[index].name,class:'col col-xs-12 col-md-12',buttons:[],specs:val[index].specs,prices:val[index].prices}))

		        	})

		        

		        	resolve(this)
		        }

		       }catch(e){
		       		reject(e)
		       }
		})

	}

}
