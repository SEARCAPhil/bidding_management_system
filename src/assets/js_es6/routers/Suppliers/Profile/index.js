import Profile  from '../../../suppliers/components/Profile/Profile.js'


class Index{

	constructor(){
		this.Prof=new Profile()
		this.Nav=new window.bms.exports.Navbar({selector:'.submenu li:not([data-role="none"])'})
		this.spinner=new window.bms.exports.Spinner({
			target:'.main-content',
			class:'spinner'
		})

		/*-------------------------------------------------------------
		| Global router
		|-------------------------------------------------------------*/
		//config that always run
		this.config={
			deviceInstance:'mobile',
			router:new window.bms.exports.Router('http://localhost/bidding_management_system/www/',true),
			suppliers:{selected:{}}
		}
		
		/*----------------------------------------------------
		| Default router
		| This will run ONLY if the window is reloaded
		|-----------------------------------------------------*/
		this.config.router.on({
			'/suppliers/:id/':(param)=>{ 
				//run for the first time
				if(!this._getState()){

					this.Prof.loadPage(param.id).then(e=>{
						this._saveState()
						this._disableNavigation(param.id)
					})	

				}else{
					this._disableNavigation(param.id)	
				}
				
			},
			'/suppliers/:id/*':(param)=>{ 
		
				//run for the first time
				if(!this._getState()){
					this.Prof.loadPage(param.id).then(e=>{
						this._saveState()
						this._disableNavigation(param.id)
					})
				}else{
					this._disableNavigation(param.id)	
				}		
			}
		})


		
	}
	_saveState(){
		//prevent reloading route
		window.bms.suppliers.profile=window.bms.suppliers.profile||{}
		window.bms.suppliers.profile.loaded=true
	}

	_getState(){
		//check if route was loaded
		window.bms.suppliers.profile=window.bms.suppliers.profile||{}
		window.bms.suppliers.profile.loaded=window.bms.suppliers.profile.loaded||false
		return window.bms.suppliers.profile.loaded
	}

	_disableNavigation(id){
		this.Nav.bindMenu(id).disable()
	}

	loadDefaultRouter(){
		/*-----------------------------------------------------------
		| Router
		|-------------------------------------------------------------*/
		window.bms.router.on({
			"/suppliers/:id/":(param)=>{
				let spinner=new window.bms.exports.Spinner({
					target:'#main-page',
					class:'spinner'
				})

				this.spinner.show()

				setTimeout(()=>{
					
					this.Prof.getDetails(param.id).then(data=>{
						var json=JSON.parse(data)

						try{
							//changed company name in view
							document.querySelector('.company-name').innerHTML=`<b>${json.data.data[0].name}</b>`;
							//retrieve all details
							this.Prof.loadDetails(json.data.data[0]).then(e=>{
								this.spinner.hide()
								this.Nav.enable('.profile-tab-navigation')
							})
						}catch(e){

						}
						
					})

					
				},500)	
			}
		})

		

	
	}

	loadGlobalRouter(){
		this.config.router.resolve()
	}

	
}

let index=new Index();
index.loadGlobalRouter()
index.loadDefaultRouter()
	











