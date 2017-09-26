import Lists  from '../templates/Lists/Lists'
import Product  from '../templates/Products/Products'
import MenuList  from '../templates/Menu/MenuList/MenuList'
import XHR  from '../../mixins/XHR/XHR'
import MainMenu  from '../../pages/Menu/Menu'
import Navbar  from '../components/Navbar/Navbar'
import ListPage  from '../components/Lists/Lists'

var ListTemplate=new Lists();
var ProductsTemplate=new Product();
var MenuListTemplate=new  MenuList();
var Nav=new Navbar();

//console.log(ListTemplate.render({name:'abc',description:'lorem ipsum',status:'closed',id:1}))
//console.log(ProductsTemplate.render({class:'col col-md-12',buttons:['remove']}))
//console.log(MenuListTemplate.render({}))


window.init=function(){
	console.log('Initializing . . .')
	loadDefaultPage()
}

function loadDefaultPage(){
	fetch('pages/welcome.html').then(response=>{return response.text()})
	.then((data)=>{
		var el=document.createElement('div')
		el.setAttribute('class','col col-lg-6 col-lg-offset-3 row')
		el.innerHTML=data
		document.querySelector('.main-content').prepend(el)
	})
}

function loadWelcomePage(){ 	

	//remove default page
	try{
		//prevent deletion of the .main-page section
		if(!document.getElementById('main-page').parentNode.classList.contains('main-content'))	document.getElementById('main-page').parentNode.remove()
	}catch(e){}

	//load Navbar
	Nav.load().then(()=>{
		let ListsPage=new ListPage();
		ListsPage.loadPage(); //load list by default

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