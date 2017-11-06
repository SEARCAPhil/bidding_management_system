import MenuList from '../../../suppliers/templates/Menu/MenuList/MenuList.js'
import Lists from '../../../suppliers/templates/Lists/Lists.js'

export default class{
	constructor(){
		this.data={}
	}

	showSection(){
		return new Promise((resolve,reject)=>{
			document.getElementById('item-docker-menu').innerHTML=`
				<section class="item-docker-menu-content row">
					<section>
						<input class="form-control" type="text" style="padding:4px;border:none;background:#fcfcfc;" placeholder="Search"/>
					</section>
					<div class="list-container"></div>
				</div>`
			resolve(this)
		})
	}

	showListsMenu(){
		return new Promise((resolve,reject)=>{
			this.menuList=new MenuList();
			this.el=document.createElement('div')
			this.el.className='list-section'
			document.querySelector('.list-container').append(this.menuList.render({class:"col col-md-12",style:'margin-bottom:5px;'}))
			document.querySelector('.list-container').append(this.el)
	        resolve(this)
		})

	}

	getSuppliersList(param=''){
		let xhr=new window.bms.exports.XHR();
		return xhr.request({url:'http://localhost/bms_api/src/api/suppliers/'+param})
	}

	loadSuppliers(json){
		//load template
		let listTemplate=new Lists();

		return new Promise((resolve,reject)=>{
			try{
				
				//APPEND ITEMS IN LIST
		        for(let x=0;x<json.length;x++){
		        	document.querySelector('.list-section').appendChild(listTemplate.render({id:json[x].id,name:json[x].name,description:json[x].description,class:'col col-xs-12 col-md-12 list',established:json[x].established,events:{click:this._goToSuppliersProfile}}))
		        	resolve(this)
		        }

		       }catch(e){
		       		reject(e)
		       }
		})

	}

	loadSuppliersForm(){
		return new Promise((resolve,reject)=>{
			let xhr=new window.bms.exports.XHR();
			return xhr.request({url:'pages/suppliers/forms/registration.html'}).then((res)=>{
				document.querySelector('#main-page').innerHTML=res;
				setTimeout(()=>{
					resolve(this)
				},300)	
			})
		})
	}

	_goToSuppliersProfile(e){
		var id=(this.getAttribute('data-list'))
		window.bms.router.navigate('/suppliers/'+id)	
	}
}
