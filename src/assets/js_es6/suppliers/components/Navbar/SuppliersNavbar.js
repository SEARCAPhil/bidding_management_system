import XHR  from '../../../mixins/XHR/XHR'

export default class{
	constructor(){
		this.xhr=new XHR()
	}

	_disableNavigation(){
		var el=document.querySelectorAll('.suppliers_menu_tab')
		var n=el.length

		return new Promise((resolve,reject)=>{
			for(let x=0;x<n; x++){
				el[x].classList.remove('active')
				resolve(el)
			}
		})
	}

	load(){
		return new Promise((resolve,reject)=>{
			this.xhr.request({url:'pages/suppliers/menu/suppliers.html'}).then((res)=>{
				document.querySelector('.suppliers_menu_section').innerHTML=res
				resolve(this)
			}).catch((err)=>{ 
				reject(err) 
			})
		});

	}

	enable(){
		var el=document.querySelectorAll('.suppliers_top_menu')
		el.forEach((val,index)=>{
			val.setAttribute('data-active',true)
		})
		return this
	}

	active(elements){
		this._disableNavigation().then(()=>{
			var el=document.querySelectorAll(elements)
			var n=el.length
			for(let x=0;x<n; x++){
				el[x].classList.add('active')
			}
		})
			
	}
}
