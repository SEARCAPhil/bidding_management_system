import Products  from '../../../suppliers/components/Products/Products.js'


class Index{

	constructor(){
		this.Prod=new Products()
		this.Nav=new window.bms.exports.Navbar({selector:'.submenu li:not([data-role="none"])'})
		this.spinner=new window.bms.exports.Spinner({
			target:'.profile-tabs-about',
			class:'spinner'
		})
	}

	loadDefaultRouter(){

		/*-----------------------------------------------------------
		| Router
		|-------------------------------------------------------------*/

		window.bms.router.on({
			"/suppliers/:id/products":(param)=>{

				setTimeout(()=>{	
					this.Prod.loadProducts(param.id).then(e=>{
						this.Nav.enable('.products-tab-navigation')

						this.Prod.getProductList(param.id).then(res=>{
							let data=JSON.parse(res).data
							this.Prod.loadCategories(data)
						})
					})
				},500)
			}
		})
	}

	
}

let index=new Index();
index.loadDefaultRouter()












