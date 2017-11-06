import Sidebar from '../../components/Sidebar/Sidebar.js'


class Index{

	constructor(){
		this.sideBar=false;
		this.spinner=new window.bms.exports.Spinner({
			target:'.main-content',
			class:'spinner'
		})
		this.xhr=new window.bms.exports.XHR();


		//config that always run
		this.config={
			deviceInstance:'mobile',
			router:new window.bms.exports.Router('http://localhost/bidding_management_system/www/',true),
			suppliers:{selected:{}}
		}
		
		/*----------------------------------------------------
		| Default router
		| This will always run before any other routers
		|-----------------------------------------------------*/
		this.config.router.on({
			'*':()=>{ 
				this.loadPageInit()
			}
		})

		

		/*-----------------------------------------------------------
		| Main router
		| This will only execute once and saved router to global
		|-------------------------------------------------------------*/

		//window variables
		/*window.bms=window.bms||{
			deviceInstance:'mobile',
			router:new window.bms.Router('http://localhost/bidding_management_system/www/',true),
			suppliers:{selected:{}}
		}*/

		window.bms.router.on({
			'*':()=>{ 
				console.log('loading global router')
				this._clearSections()
				this.loadDefaultPage()
			}
		})
	}

	_loadDefaultSettings(){
		//cordova in-app-browser module
		this._inAppBrowserOverride()
		//sidebar
		if(!this.sideBar) this._sideBarInit()
	}

	_inAppBrowserOverride(){
		//override window.open in cordova
		//require cordava-inapp-browser plugin
		try{
			window.open=cordova.InAppBrowser.open;
		}catch(e){
			console.log('Cordova InAppBrowser is required')
		}
	}

	_sideBarInit(){
		this.sideBar=new Sidebar('.docker-menu ','#docker-sidebar')
		this.sideBar.toggle()
	}

	_clearSections(){
		//document.querySelector('.suppliers_menu_section').innerText=' '
		document.querySelector('#main-page').innerText=' '
		document.querySelector('#item-docker-menu').innerText=' '
	}

	loadPageInit(){
		console.log('Initializing apps . . .')
		this._loadDefaultSettings()
	}

	loadDefaultPage(){
		this.spinner.show()
		return this.xhr.request({url:'pages/welcome.html'}).then((res)=>{
			//Load default page
			var el=document.createElement('div')
			el.setAttribute('class','col col-lg-6 col-lg-offset-3 row')
			el.innerHTML=res
			//show content
			document.querySelector('.main-content').prepend(el)
			this.spinner.hide()
		}).catch((err)=>{ console.log(err) })
	}

}


/*------------------------------------------------------
| FUNCTIONS && GLOBALS
| Place all functions and global variables beyond this
| notice
|-------------------------------------------------------*/


//check login
function loginInstance(){
	var token=window.localStorage.getItem('token')||''
	return token.length>0?true:false
}

//calls the default route *
function loadRouters(){
	window.bms.router.resolve()	
}




/*------------------------------------------------------
| INITIALIZE APPLICATION
| Place all EVENTLISTENERS beyond this notice
| 
|-------------------------------------------------------*/

//Application instance
let index=new Index()

//MOBILE Device Listener
document.addEventListener('deviceready',function(){
	index.config.router.resolve()
	loadRouters()
})

//MOBILE && WEB
document.addEventListener("DOMContentLoaded", function(event) {	
	//for WEB only
	if(!loginInstance()&&typeof window.cordova=='undefined'){
		window.location=window.location.href.substr(0,window.location.href.lastIndexOf('/'))+'/pages/authentication/index.html'
	}
	if(typeof window.cordova=='undefined'){
		index.config.router.resolve()
		loadRouters()
	}
});











