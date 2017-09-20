import Lists  from '../templates/Lists/Lists'
import Product  from '../templates/Products/Products'
import MenuList  from '../templates/Menu/MenuList/MenuList'
import XHR  from '../../mixins/XHR/XHR'
import MainMenu  from '../../pages/Menu/Menu'
import Navbar  from '../components/Navbar/Navbar'
import ListPage  from '../components/Lists/Lists'
import ProductPage  from '../components/Products/Products'
import ProfilePage  from '../components/Profile/Profile'
import AccountPage  from '../components/Accounts/Accounts'
import LogPage  from '../components/Logs/Logs'
import SettingsPage  from '../components/Settings/Settings'

var ListTemplate=new Lists();
var ProductsTemplate=new Product();
var MenuListTemplate=new  MenuList();
var Nav=new Navbar();
var ProdPage=new ProductPage();
var ProfPage=new ProfilePage();
var AccPage=new AccountPage();
var LogsPage=new LogPage();
var SettPage=new SettingsPage();
var ListsPage=new ListPage();

console.log(ListTemplate.render({name:'abc',description:'lorem ipsum',status:'closed',id:1}))
console.log(ProductsTemplate.render({class:'col col-md-12',buttons:['remove']}))
console.log(MenuListTemplate.render({}))


window.init=function(){
	console.log('Initializing . . .')
}


function loadList(){
	ListsPage.loadPage();
}

function loadProfile(){
	ProfPage.loadPage();
}

function loadProducts(){
	ProdPage.loadPage()
}

function loadAccounts(){
	AccPage.loadPage()
}

function loadLogs(){
	LogsPage.loadPage()
}
function loadSettings(){
	SettPage.loadPage()
}

function _bind(el,event,func){
	return new Promise((resolve,reject)=>{
		document.querySelectorAll(el).forEach((val,index)=>{
			val.addEventListener(event,func)
			resolve(this)
		})	
	})
	

}


function loadWelcomePage(){

	//load Navbar
	Nav.load().then(()=>{
		loadList() //load list by default
		
		_bind('.suppliers-list-tab','click',loadList).then(()=>{
			
		})
		_bind('.profile-tab','click',loadProfile)
		_bind('.products-tab','click',loadProducts)
		_bind('.accounts-tab','click',loadAccounts)
		_bind('.logs-tab','click',loadLogs)
		_bind('.settings-tab','click',loadSettings)

	})
}



new MainMenu({menu:'main-menu-list-item',activeClass:'active'}).add([
			{	el:'.suppliers_main_menu',
				page:'',
				callback:loadWelcomePage
			},
			{	
				el:'.suppliers_main_menu2',
				page:'',
				callback:loadWelcomePage
			,
			}])
			.then((el)=>{
				console.log(el)
			})