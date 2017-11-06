import SuppliersList  from '../../suppliers/components/Lists/Lists.js'


class Index{

	constructor(){
		this.Supp=new SuppliersList()
		this.spinner=new window.bms.exports.Spinner({
			target:'.main-content',
			class:'spinner'
		})

		this.emptyMessage=`<center class="text-muted" style="margin-top:100px;"><i class="material-icons md-48">inbox</i><br/>Empty List</center>`

		/*----------------------------------------------------
		| Default router
		| This will always run before any suppliers routers
		|-----------------------------------------------------*/
		this.router=new window.bms.exports.Router('http://localhost/bidding_management_system/www/',true)
		this.router.on({
			'/suppliers/*':()=>{ 
				//enable menu
				document.querySelector('#suppliers_main_menu').classList.add('active')	
			}
		})
		/*-----------------------------------------------------------
		| Router
		|-------------------------------------------------------------*/

		//window variables
		/*window.bms=window.bms||{
			deviceInstance:'mobile',
			router:new window.bms.Router('http://localhost/bidding_management_system/www/',true),
			suppliers:{selected:{}}
		}*/

		window.bms.router.on({
			"/suppliers":()=>{
				this._loadPage().then(e=>{
					this._enabeMenu('.allNav')
				})
			},
			"/suppliers/all":()=>{
				this._loadPage().then(e=>{
					this._enabeMenu('.allNav')
				})
			},
			"/suppliers/blocked":()=>{
				this._loadPage("?status=blocked").then(e=>{
					this._enabeMenu('.blockedNav')
				})
			}
		})


	}

	_enabeMenu(selector){
		document.querySelectorAll('.menuList').forEach((el,index)=>{
			el.classList.remove('active')
		})
		setTimeout(e=>{ document.querySelector(selector).classList.add('active') },300)
	}

	_loadPage(param){
		this.spinner.show()	
					
		//get list via AJAX
		return this.Supp.getSuppliersList(param).then(data=>{
			this.json=JSON.parse(data)
			this.json.data=this.json.data||{}
			if(this.json.data.length>0){
				this._loadList(this.json)
			}else{
				this.spinner.hide()
				document.querySelector('.list-section').innerHTML=this.emptyMessage	
				this._goToSuppliersForm()
				
			}
		})
	}

	_loadList(json){
		//show list section
		this.Supp.showSection().then(e=>{
			this.Supp.showListsMenu().then(e=>{
				//load data into view
				this.Supp.loadSuppliers(json.data)
				this.spinner.hide()	
			})
			
		})
	}

	_goToSuppliersForm(){
		//router in window
		window.bms.router.navigate('/suppliers/forms/registration/welcome')
	}


	
}

let index=new Index();
index.router.resolve()










