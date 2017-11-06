/*-----------------------------------------
| Menu/menu/menu.js
|
| ES6 is Classes is not yet fully supported by browsers and for this reasonn
| all functions must be implemented in es5 way
| Template for suppliers list
|-----------------------------------------*/
(function(window,document,undefined){
	"use strict";

	const parentElement='#main-page';
	const mainPageUrl='pages/suppliers/welcome.html';
	const targetElement='.suppliers_main_menu';


	let Menu={
		loadWelcomePage:(callback=function(){})=>{
			$(parentElement).load(mainPageUrl,callback)
		},

		bindNavigation:(callback=function(){})=>{
			$(targetElement).off('click');
			$(targetElement).on('click',function(){
				$('.main-menu-list-item').removeClass('active');
				$(targetElement).addClass('active');

				//load welcome page
				//Menu.loadWelcomePage(callback);
				callback(this);


			})
		}

	}

	//save the object in window
	if(typeof window.bms=='undefined') window.bms={}
	if(typeof window.bms.suppliers=='undefined') window.bms.suppliers={}
	if(typeof window.bms.suppliers.menu=='undefined') window.bms.suppliers.menu={}
	if(typeof window.bms.suppliers.menu.main=='undefined') window.bms.suppliers.menu.main=Menu;

})(window,document);