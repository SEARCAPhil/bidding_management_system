import XHR  from '../../../mixins/XHR/XHR'
import Navbar  from '../Navbar/Navbar'

export default class{
	constructor(){
		this.url='pages/suppliers/settings.html'
		this.target='#main-page';
		this.nav=new Navbar();
	}

	loadPage(){
		var xhr=new XHR();
		return xhr.request({url:this.url}).then((res)=>{
			//navbar
			this.nav.enable().active('.settings-tab')
			
			document.querySelector(this.target).innerHTML=res
		}).catch((err)=>{ console.log(err) })
	}

}
