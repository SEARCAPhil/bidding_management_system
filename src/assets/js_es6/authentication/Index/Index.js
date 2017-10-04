import Authentication from '../Authentication/Authentication'
import Spinner  from '../../components/Spinner/Spinner'

let Auth=new Authentication()
let spinner=new Spinner({
	target:'body',
	class:'spinner',
	style:'margin-left:47%;'
})



function listenOnUsernameChange(e){ 
	var el=document.getElementById('organization');
	if(el.value.length<1) return false
		
	spinner.show()
	//redirect to o365 Oauth page
	var isSearca=Auth.checkCorporateEmailAddress({domain:'searca',email:el.value})
	if(isSearca){
	 	this.setAttribute('disabled','disabled')
		setTimeout(()=>{window.location=window.location.href.substr(0,window.location.href.lastIndexOf('/'))+'/o365/index.html'},600)
	}

	//show login form
	if(!isSearca){
		document.querySelector('.auth-org').style.display='none'
		document.querySelector('.auth-default').style.display='block'	
	}
	
	setTimeout(()=>{ spinner.hide() },1000)

}

window.addEventListener('DOMContentLoaded',()=>{
	document.querySelector('#loginOrgButton').addEventListener('click',listenOnUsernameChange,false)
})