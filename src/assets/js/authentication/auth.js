/*
* Authentication Init
* call auth_init() onload
*/

window.sdft={}
window.sdft.deviceInstance='desktop';


function deviceReadyForMobile(){
	//save to window
	window.sdft.deviceInstance='mobile';
	//require cordava-inapp-browser plugin
	try{
		window.open=cordova.InAppBrowser.open;
	}catch(e){
		console.log('Cordova InAppBrowser is required')
	}

}


function deviceReady(){

	$('.btn-office365').on('click',function(){

		if(window.sdft.deviceInstance==='desktop'){
		     /*------------------------------------------
		     | login using office 365
		     |------------------------------------------*/
		     window.bms.office365Login(function(data){})
		}
    })

    /*---------------------------------------
    | Detects Online/offline events
    | show appropriate form for these events
    |----------------------------------------*/
            
    window.addEventListener('offline', function(e) { $('#loginFormOnline').hide(); $('#loginForm').show(); });
    window.addEventListener('online', function(e) { $('#loginFormOnline').show(); $('#loginForm').hide(); });
}


function auth_init(){
	/*------------------------------------------------------
	| DESKTOP DETECTION
	| Load function if deviceinstance is non-mobile
	|------------------------------------------------------*/
	document.addEventListener("deviceready",deviceReady,false);
	document.addEventListener("deviceready",deviceReadyForMobile,false); //set mobile


	setTimeout(function(){ 
		if(window.sdft.deviceInstance=='desktop'){
			$(document).ready(function(){
				
				deviceReady();
			});
		}
	},300)

}




  