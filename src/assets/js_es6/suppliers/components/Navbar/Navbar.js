import XHR  from '../../../mixins/XHR/XHR'

export default class{
	constructor(){}

	load(){
		var xhr=new XHR();
		return xhr.request({url:'pages/suppliers/menu.html'}).then((res)=>{
			document.querySelector('.suppliers_menu_section').innerHTML=res
		}).catch((err)=>{ console.log(err) })

	}

	enable(){
		document.querySelector('.suppliers_top_menu').setAttribute('data-active',true)
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

}
