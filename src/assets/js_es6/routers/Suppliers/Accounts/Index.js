import Accounts  from '../../../suppliers/components/Accounts/Accounts.js'


class Index{

	constructor(){
		this.Nav=new window.bms.exports.Navbar({selector:'.submenu li:not([data-role="none"])'})
		this.Acc=new Accounts()
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
			"/suppliers/:id/accounts":(param)=>{
				let spinner=new window.bms.exports.Spinner({
					target:'#main-page',
					class:'spinner'
				})
				setTimeout(()=>{
					this.spinner.show()
					this.Acc.loadAccounts(param.id).then(e=>{
						this.spinner.hide()
						this.Nav.enable('.accounts-tab-navigation')
					})
				},300)	
			}
		})

	
	}


	
}

let index=new Index();
index.loadDefaultRouter()
	











