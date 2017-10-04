import Lists  from '../templates/Lists/Lists'
import Product  from '../templates/Products/Products'
import MenuList  from '../templates/Menu/MenuList/MenuList'
import XHR  from '../../mixins/XHR/XHR'
import MainMenu  from '../../components/Menu/Menu'
import Navbar  from '../components/Navbar/Navbar'
import ListPage  from '../components/Lists/Lists'
import Spinner  from '../../components/Spinner/Spinner'

var ListTemplate=new Lists();
var ProductsTemplate=new Product();
var MenuListTemplate=new  MenuList();
var Nav=new Navbar();

//console.log(ListTemplate.render({name:'abc',description:'lorem ipsum',status:'closed',id:1}))
//console.log(ProductsTemplate.render({class:'col col-md-12',buttons:['remove']}))
//console.log(MenuListTemplate.render({}))

//Create new spinner
let spinner=new Spinner({
	target:'.main-content',
	class:'spinner'
})

function loadWelcomePage(){ 	

	//remove default page
	//prevent deletion of the .main-page section
	try{
		if(!document.getElementById('main-page').parentNode.classList.contains('main-content'))	document.getElementById('main-page').parentNode.remove()
	}catch(e){}

	//show list section
	//if docker-menu is not visible, system is currently running in large device
	//therefore main page should not be visible
	if(window.getComputedStyle(document.querySelector('#item-docker-menu')).display=='none'){
		document.querySelector('#item-docker-menu').classList.add('show')
		document.querySelector('#main-page').classList.add('hide')
	}
	
	
	//loading
	spinner.show()

	//load Navbar
	Nav.load().then(()=>{
		spinner.hide()
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

