import XHR  from '../../mixins/XHR/XHR'
import Sidebar from '../Sidebar/Sidebar'
import Spinner  from '../../components/Spinner/Spinner'


class Index{

	constructor(){
		console.log('Initializing apps . . .')

		//window scope
		window.bms=window.bms||{}
		window.bms.deviceInstance='mobile'

		this._inAppBrowserOverride()

		this.spinner=new Spinner({
			target:'.main-content',
			class:'spinner'
		})	

		//setup sidebar
		var sideBar=new Sidebar('.docker-menu ','#docker-sidebar')
		sideBar.toggle()
		
		this.loadDefaultPage()
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


	loadDefaultPage(){
		this.spinner.show()

		/*fetch('pages/welcome.html').then(response=>{return response.text()})
		.then((data)=>{

			//Load default page
			var el=document.createElement('div')
			el.setAttribute('class','col col-lg-6 col-lg-offset-3 row')
			el.innerHTML=data
			document.querySelector('.main-content').prepend(el)

			spinner.hide()
		})*/

		var xhr=new XHR();
		return xhr.request({url:'pages/welcome.html'}).then((res)=>{
			//Load default page
			var el=document.createElement('div')
			el.setAttribute('class','col col-lg-6 col-lg-offset-3 row')
			el.innerHTML=res
			document.querySelector('.main-content').prepend(el)

			this.spinner.hide()

		}).catch((err)=>{ console.log(err) })

	}

}



//check login
function loginInstance(){
	var token=window.localStorage.getItem('token')||''
	return token.length>0?true:false
}

//for mobile
document.addEventListener('deviceready',function(){
	var index=new Index();
})

//for web
document.addEventListener("DOMContentLoaded", function(event) {	
	if(!loginInstance()&&typeof window.cordova=='undefined'){
		window.location=window.location.href.substr(0,window.location.href.lastIndexOf('/'))+'/pages/authentication/index.html'
	}
	if(typeof window.cordova=='undefined'){
		return new Index();
	}
});









