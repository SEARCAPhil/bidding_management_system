
import XHR  from '../../../mixins/XHR/XHR'
import Navbar  from '../Navbar/Navbar'
import ListPage  from '../Lists/Lists'
import ProductPage  from '../Products/Products'
import AccountPage  from '../Accounts/Accounts'
import LogPage  from '../Logs/Logs'
import SettingsPage  from '../Settings/Settings'
import Spinner  from '../../../pages/Spinner/Spinner'

export default class{
	constructor(){
		this.url='pages/suppliers/suppliers_profile.html'
		this.target='#main-page';
		this.nav=new Navbar();
		this.spinner=new Spinner({
			target:'.main-content',
			class:'spinner'
		})
	}

	_loadList(){
		this.spinner.show()
		this.ListsPage=new ListPage.default();
		this.ListsPage.loadPage().then(()=>{this.spinner.hide()})
	}

	_loadProfile(){
		this.spinner.show()
		this.nav.enable().active('.profile-tab')
		fetch(this.url).then(response=>{return response.text()})
		.then(data=>{
			document.querySelector(this.target).innerHTML=data
			this.spinner.hide()
		})
	}

	_loadProducts(){
		this.spinner.show()
		this.ProdPage=new ProductPage();
		this.ProdPage.loadPage().then(()=>{this.spinner.hide()})

	}
	_loadAccounts(){
		this.spinner.show()
		this.AccPage=new AccountPage();
		this.AccPage.loadPage().then(()=>{this.spinner.hide()})
	}

	_loadLogs(){
		this.spinner.show()
		this.LogsPage=new LogPage();
		this.LogsPage.loadPage().then(()=>{this.spinner.hide()})
	}

	_loadSettings(){
		this.spinner.show()
		this.SettPage=new SettingsPage();
		this.SettPage.loadPage().then(()=>{this.spinner.hide()})	
	}


	loadPage(){

		var xhr=new XHR();
		return xhr.request({url:this.url}).then((res)=>{
			//enable profile
			this.nav.enable().active('.profile-tab')
			//show content
			document.querySelector(this.target).innerHTML=res
			this._bindMenu()

		}).catch((err)=>{ console.log(err); console.log(this) })
	}

	_bindMenu(){
		//enable other navbar links if there is an item selected on the list
		//otherwise stays unbinded
		setTimeout(()=>{			
			this._bind('.suppliers-list-tab','click',()=>{ return this._loadList() })
			this._bind('.profile-tab','click',()=>{	return this._loadProfile() })
			this._bind('.products-tab','click',()=>{return this._loadProducts() })
			this._bind('.accounts-tab','click',()=>{this._loadAccounts() })
			this._bind('.logs-tab','click',()=>{this._loadLogs() })
			this._bind('.settings-tab','click',()=>{this._loadSettings() })
		},300)	
	}

	_bind(el,event,func){
		return new Promise((resolve,reject)=>{
			document.querySelectorAll(el).forEach((val,index)=>{
				//remove all eventListeners by replacing the whole element
				//this is slower but could be ignore for small number of elements
				//in our case, attached  event listeners could not be removed by removeEventListener
				//doing this solves the issue. However, other listeners other than given param : event will be removed as well
				var oEl = val
				var nEl = oEl.cloneNode(true);
				nEl.addEventListener(event,func)
				oEl.parentNode.replaceChild(nEl, oEl);
				resolve(this)
			})	
		})
	}


}
