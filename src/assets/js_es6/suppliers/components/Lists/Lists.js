import XHR  from '../../../mixins/XHR/XHR'
import Lists from '../../templates/Lists/Lists'
import Supplier from '../Profile/Profile'
import Navbar  from '../Navbar/Navbar'
import Spinner  from '../../../components/Spinner/Spinner'

export default class{
	constructor(){
		this.nav=new Navbar();
	}

	loadPage(){
		return new Promise((resolve,reject)=>{
			//navbar
			this.nav.active('.suppliers-list-tab')
			this._showSearchBox().then((pageClass)=>{
				//must have no overflow for cordova app
				if(typeof window.cordova=='object'){
					document.querySelector('.list-container').style.maxHeight='none'
					document.querySelector('.list-container').style.overflowY='auto'
				}

				this.showSuppliersList().then(()=>{
					this._showListSection()
					resolve(this)
				})
			})

			this._showListsMenu()
		})
	}


	showSuppliersList(){
		//load template
		let listTemplate=new Lists();

		return new Promise((resolve,reject)=>{
			try{
				//APPEND ITEMS IN LIST
		        for(let x=0;x<20;x++){
		        	document.querySelector('.list-container').appendChild(listTemplate.render({name:'Lorem Ipsum',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',class:'col col-xs-12 col-md-12 list',established:'2016-2017',events:{click:this._selectSupplier}}))
		        	resolve(this)
		        }

		       }catch(e){
		       		reject(e.getMessage())
		       }
		})

	}

	_deactivateAllItems(){
		let lists=document.querySelectorAll('.list')
		let n=lists.length
		lists.forEach((val,index)=>{
			val.classList.remove('active')
		})
	}

	_showSearchBox(){
		return new Promise((resolve,reject)=>{
			document.getElementById('item-docker-menu').innerHTML=`
				<section class="row">
					<input class="form-control" type="text" style="background:#fff;padding:4px;" placeholder="SEARCH"/>
				</section>
				<section class="item-docker-menu-content"><div class="list-container row"></div></div>`
			resolve(this)
		})
	}

	_showListsMenu(){
		return new Promise((resolve,reject)=>{
			document.querySelector('.list-container').innerHTML=`
				<div class="col col-md-12  list-details" data-role="none">
	                <span class="text-info">ALL</span> 
	                <span>BLOCKED</span> 
	                <span class="text-success suppliers_new_button">NEW <i class="material-icons md-18">add</i></span>
	                <br>    
	            </div>`	
	        resolve(this)
		})

	}

	_selectSupplier(){
		let lists=document.querySelectorAll('.list')
		let n=lists.length
		lists.forEach((val,index)=>{
			val.classList.remove('active')
		})

		//set active
		this.classList.add('active')

		let supplierPage=new Supplier()
		console.log(this)

		//Create new spinner
		var spinner=new Spinner({
			target:'.main-content',
			class:'spinner'
		})

		spinner.show()

		supplierPage.loadPage().then(()=>spinner.hide())

		//hide container
		if(window.getComputedStyle(document.querySelector('#main-page')).display=='none'){
			//hide menu
			document.querySelector('#item-docker-menu').classList.add('hide')
			document.querySelector('#item-docker-menu').classList.remove('show')
			//show main-page
			document.querySelector('#main-page').classList.remove('hide')
			document.querySelector('#main-page').classList.add('show')
		}	

		
	}

	_showListSection(){
		//must execute for cordova apps only

		if(window.getComputedStyle(document.querySelector('#item-docker-menu')).display=='none'){
			//show list
			document.querySelector('#item-docker-menu').classList.add('show')

			//hide main-page
			document.querySelector('#main-page').classList.remove('show')
		}	
	}
}
