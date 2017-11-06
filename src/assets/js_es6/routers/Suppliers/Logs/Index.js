import Logs  from '../../../suppliers/components/Logs/Logs.js'


class Index{

	constructor(){
		this.Log=new Logs()
		this.Nav=new window.bms.exports.Navbar({selector:'.submenu li:not([data-role="none"])'})
		this.spinner=new window.bms.exports.Spinner({
			target:'.main-content',
			class:'spinner'
		})

	}
	loadDefaultRouter(){
		/*-----------------------------------------------------------
		| Router
		|-------------------------------------------------------------*/
		window.bms.router.on({
			"/suppliers/:id/logs":(param)=>{
				let spinner=new window.bms.exports.Spinner({
					target:'#main-page',
					class:'spinner'
				})
				setTimeout(()=>{
					this.Log.loadLogs().then(e=>{
						this.Nav.disable().then(e=>{ e.enable('.logs-tab-navigation') })
					})
				},300)	
			}
		})

	
	}

	
}

let index=new Index();

index.loadDefaultRouter()
	











