import Forms  from '../../../../suppliers/components/Form/Form.js'
class Index{

	constructor(){
		this.Form=new Forms()
	}
	loadDefaultRouter(){
		/*-----------------------------------------------------------
		| Router
		|-------------------------------------------------------------*/
		window.bms.router.on({
			"/suppliers/forms/registration/":()=>{	
				this.Form.loadForm().then(e=>{
					
				})
			},
			"/suppliers/forms/registration/welcome":()=>{
					this.Form.loadWelcomePage().then(e=>{ });
			}
		})
	
	}

	
}

let index=new Index()
index.loadDefaultRouter()

	











