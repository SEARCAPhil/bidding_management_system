export default class Menu{
	constructor(props){
		this.props=props
	}


	add(props){
		
		return new Promise((resolve,reject)=>{
			//store items
			let menuItems=[]

			//save callback to windows
			window.bms=window.bms||{}
			window.bms.callback=window.bms.callback||{}

			for(let prop in props){
				var el=document.querySelectorAll(props[prop].el)
				//set reference
				var callbackReference=Date.now()+Math.random();
				window.bms.callback[callbackReference]=(props[prop].callback)

				//get all element
				menuItems.push(el)

				//assign attributes in all element
				el.forEach((val,index)=>{
					val.setAttribute('data-menu',this.props.menu)
					val.setAttribute('data-active-class',this.props.activeClass)
					val.setAttribute('data-callback',callbackReference)
					val.removeEventListener('click',this._setActive)
					val.addEventListener('click',this._setActive)
					//val.addEventListener('click',props[prop].callback)
					resolve(menuItems)
				})
			}

		});
					
		
	}

	_setActive(){

		return this.getAttribute('data-role')=='none'||(new Promise((resolve,reject)=>{
			try{
				//remove all active-class
				document.querySelectorAll(`[data-menu=${this.getAttribute('data-menu')}]:not([data-role="none"])`).forEach((val,index)=>{
					val.classList.remove(this.getAttribute('data-active-class'))
					resolve(val)
				})
			}catch(e){
				reject(e);
			}

		}).then((el)=>{
			//set the current element as active
			this.classList.add(this.getAttribute('data-active-class'))
			
			//execute callback
			let callbackReferenceKey=this.getAttribute('data-callback')
			window.bms.callback[callbackReferenceKey]()

		}).catch((e)=>{}))
	}

}