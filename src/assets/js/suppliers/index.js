"use strict";

function showDefaultWelcomePage(){
    //clear list section
    $('#item-docker-menu').html(' ')

    $('#main-page').load('pages/welcome.html',function(){ });
}


function deviceReady(){
	//initialize docker
    docker.init();toggleDocker(); 

    let Index=window.bms.suppliers.index;
    Index.init();

    showDefaultWelcomePage();

}


function deviceReadyForMobile(){
	//save to window
	window.bms.deviceInstance='mobile';
	window.open=cordova.InAppBrowser.open;


}



function init(){

	window.bms.deviceInstance='desktop';

	//detect if application is running in cordova
	document.addEventListener("deviceready",deviceReadyForMobile,false);

	//execute for cordova app
	//this will be ignored in mobile app
	document.addEventListener("deviceready",deviceReady,false);


	setTimeout(function(){ 
		if(window.bms.deviceInstance=='desktop'){
			$(document).ready(function(){				
				deviceReady();
			});
		}

	},100);

}