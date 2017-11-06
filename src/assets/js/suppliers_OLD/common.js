/*--------------------------------------------------
| Toggle list section
| click showmore button when scrolled down
|--------------------------------------------------*/
function toggleDockerOpen(){
	$('#main-page').removeClass('hide');
	$('#main-page').addClass('show');
	document.querySelector('#item-docker-menu').classList.remove('show');
	document.querySelector('#item-docker-menu').classList.add('hide');	
}

function toggleDockerClosed(){
	$('#main-page').removeClass('show');
	$('#main-page').addClass('hide');
	document.querySelector('#item-docker-menu').classList.remove('hide');
	document.querySelector('#item-docker-menu').classList.add('show');
}

function toggleDocker(){

	$('.docker-menu-toggle-content').click(function(e){
		var itemCssDefaultDisplay=window.getComputedStyle($('#item-docker-menu')[0]).display

		if(itemCssDefaultDisplay=='none'){
			toggleDockerClosed()	
		}else{
			toggleDockerOpen()
		}
	})

}

/*--------------------------------------------------------
| Detect if Application is running inside inAppBrowser
|---------------------------------------------------------*/
function isMobile(){
	return window.bms.deviceInstance==='mobile'?true:false;
}


function loadPageViaAjax(target,page,success_callback=function(){}){
	$(target).load('pages/suppliers/modal/'+page,function(){
		success_callback()
	})
}

