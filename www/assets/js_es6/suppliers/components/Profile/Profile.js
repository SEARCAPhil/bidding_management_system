
import XHR  from '../../../mixins/XHR/XHR'
import Navbar  from '../Navbar/Navbar'
import ListPage  from '../Lists/Lists'
import ProductPage  from '../Products/Products'
import AccountPage  from '../Accounts/Accounts'
import LogPage  from '../Logs/Logs'
import SettingsPage  from '../Settings/Settings'

export default class{
	constructor(){
		this.url='pages/suppliers/suppliers_profile.html'
		this.target='#main-page';
		this.nav=new Navbar();
	}

	_loadList(){
		this.ListsPage=new ListPage.default();
		this.ListsPage.loadPage();
	}

	_loadProfile(){
		this.loadPage();
	}

	_loadProducts(){
		this.ProdPage=new ProductPage();
		this.ProdPage.loadPage();

	}
	_loadAccounts(){
		this.AccPage=new AccountPage();
		this.AccPage.loadPage()
	}

	_loadLogs(){
		this.LogsPage=new LogPage();
		this.LogsPage.loadPage();
	}

	_loadSettings(){
		this.SettPage=new SettingsPage();
		this.SettPage.loadPage();	
	}


	loadPage(){
		var xhr=new XHR();
		return xhr.request({url:this.url}).then((res)=>{

			//enable profile
			this.nav.enable().active('.profile-tab')

			//show content
			document.querySelector(this.target).innerHTML=res

			//enable other navbar links if there is an item selected on the list
			//otherwise stays unbinded
			setTimeout(()=>{			
				this._bind('.suppliers-list-tab','click',this._loadList).then(()=>{ })
				this._bind('.profile-tab','click',()=>{	return this._loadProfile()	})
				this._bind('.products-tab','click',this._loadProducts)
				this._bind('.accounts-tab','click',this._loadAccounts)
				this._bind('.logs-tab','click',this._loadLogs)
				this._bind('.settings-tab','click',this._loadSettings)
			},300)


		}).catch((err)=>{ console.log(err); console.log(this) })
	}

	_bind(el,event,func){
		return new Promise((resolve,reject)=>{
			document.querySelectorAll(el).forEach((val,index)=>{
				val.removeEventListener(event,func)
				val.addEventListener(event,func)
				resolve(this)
			})	
		})
	}


}
