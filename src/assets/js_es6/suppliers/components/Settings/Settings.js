import XHR  from '../../../mixins/XHR/XHR'

export default class{
	constructor(){
		this.url='pages/suppliers/settings.html'
		this.target='#main-page';
	}

	loadPage(){
		var xhr=new XHR();
		return xhr.request({url:this.url}).then((res)=>{
			//navbar
			document.querySelector(this.target).innerHTML=res
		}).catch((err)=>{ console.log(err) })
	}

}
