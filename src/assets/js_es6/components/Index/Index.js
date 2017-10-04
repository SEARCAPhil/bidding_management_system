import XHR  from '../../mixins/XHR/XHR'
import Sidebar from '../Sidebar/Sidebar'
import Spinner  from '../../components/Spinner/Spinner'


class Index{

	constructor(){
		console.log('Initializing apps . . .')

		//window scope
		window.bms=window.bms||{}
		window.bms.deviceInstance='mobile'

		this.spinner=new Spinner({
			target:'.main-content',
			class:'spinner'
		})	

		//setup sidebar
		var sideBar=new Sidebar('.docker-menu ','#docker-sidebar')
		sideBar.toggle()
		
		this.loadDefaultPage()
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

//for mobile
document.addEventListener('deviceready',function(){
	var index=new Index();
})

//for web
document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof window.cordova=='undefined'){
		return new Index();
	}
});







