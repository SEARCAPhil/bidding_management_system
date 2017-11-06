
export default class{
	constructor(){
	
	}


	loadWelcomePage(){
		let xhr=new window.bms.exports.XHR();
		return xhr.request({url:'pages/suppliers/forms/registration_home.html'}).then((res)=>{
			document.querySelector('#main-page').innerHTML=res;	
		})
	}


	loadForm(option){
		this.options=this.options||{}
		this.options.target=this.options.target||'#main-page'
		let xhr=new window.bms.exports.XHR();

		return new Promise((resolve,reject)=>{
			xhr.request({url:'pages/suppliers/forms/registration.html'}).then((res)=>{
				document.querySelector(this.options.target).innerHTML=res;
				resolve(this)	
			}).catch((err)=>{
				reject(err)
			})	
		})
		
	}
}
