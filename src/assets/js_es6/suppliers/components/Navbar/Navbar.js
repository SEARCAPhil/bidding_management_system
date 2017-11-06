
export default class{
	constructor(options={}){
		this.options=options||{}
		this.options.selector=options.selector||null
		this.options.disabled=options.disabled||false

		if(this.options.disabled) this.disable(this.options.disabled)
		
	}

	
	_changeAttr(el,attr,val){
		document.querySelectorAll(el).forEach((el,index)=>{
			el.setAttribute(attr,val)
		})
	}

	

	css(classes){
		let el=document.querySelector('.suppliers_menu_section')
		for(let x=0; x<classes.length;x++){
			el.classList.add(classes[x])
		}
		
		return this
	}

	bindMenu(id){ 			
			this._changeAttr('.profile-tab-navigation > a','href',`#/suppliers/${id}`)
			this._changeAttr('.products-tab-navigation > a','href',`#/suppliers/${id}/products`)
			this._changeAttr('.accounts-tab-navigation > a','href',`#/suppliers/${id}/accounts`)
			this._changeAttr('.logs-tab-navigation > a','href',`#/suppliers/${id}/logs`)
			return this
	}

	disable(){
		return new Promise((resolve,reject)=>{
			let el=document.querySelectorAll(this.options.selector)
			let n=el.length

			for(let x=0;x<n; x++){
				el[x].classList.remove('active')
				resolve(this)
			}
		})
	}

	enable(selector){
		let el=document.querySelectorAll(selector)
		let n=el.length

		return new Promise((resolve,reject)=>{
			for(let x=0;x<n; x++){
				el[x].classList.add('active')
				resolve(el)
			}
		})
	}
}
