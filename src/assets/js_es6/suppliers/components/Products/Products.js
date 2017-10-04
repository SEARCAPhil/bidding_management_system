import XHR  from '../../../mixins/XHR/XHR'
import Navbar  from '../Navbar/Navbar'
import Spinner  from '../../../components/Spinner/Spinner'

export default class{
	constructor(){
		this.url='pages/suppliers/products.html'
		this.target='#main-page';
		this.nav=new Navbar();
	}

	loadPage(){

		let spinner=new Spinner({
			target:'.main-content',
			class:'spinner'
		})

		spinner.show()

		var xhr=new XHR();
		return xhr.request({url:this.url}).then((res)=>{
			//navbar
			this.nav.enable().active('.products-tab')
			document.querySelector(this.target).innerHTML=res
			spinner.hide()
		}).catch((err)=>{ console.log(err) })
	}

}
