/*-----------------------------------------
| Menu/submenu/submenu.js
|
| ES6 is Classes is not yet fully supported by browsers and for this reasonn
| all functions must be implemented in es5 way
| Template for suppliers list
|-----------------------------------------*/
(function(window,document,undefined){
	"use strict";

	const submenuUrl='pages/suppliers/menu.html';
	const productsListUrl='pages/suppliers/products.html';
	const targetElement='.suppliers_menu_section';

	let submenu={

		load:(callback=function(){})=>{

				submenu.show()
				//show target element before loading content

				//load via AJAX
				return $(targetElement).load(submenuUrl,function(e){callback(e)});
		},

		show:()=>{ return $(targetElement).show(); },
		hide:()=>{ return $(targetElement).hide(); },

		/*load products*/
		loadProductsList:(callback=function(){})=>{
			 $('#main-page').load(productsListUrl,function(){

				/*-------------------------------------------------------
	            | Products Template
	            | Require Templates/Products
	            |-------------------------------------------------------*/   
	            let productTemplate=window.bms.suppliers.products.templates;


	           	//empty products
	           //	$('.products-section').html(`<center class="text-muted" style="margin:80px 80px;"><i class="material-icons text-muted md-48">remove_shopping_cart</i><h4>No Products Available</h4></center>`);


                for(let x=0;x<20;x++){
                      $('.products-section').append(productTemplate.item({
                            name:'HPE ProLiant BL460c Gen10 Server Bladey',
                            status:'unavailable',
                            specs:[{
                                'Processor family':'Intel® Xeon® Scalable 8100 series Intel® Xeon® Scalable 6100 series Intel® Xeon® Scalable 5100 series Intel® Xeon® Scalable 4100 series Intel® Xeon® Scalable 3100 series',
                                'Processor speed ':'3.6 GHz'

                            }]
                      }));
                };  


                callback(this)
		         
			 });
		},

		bindSuppliersListNavigation:(callback=function(){})=>{
			$('.suppliers-list-tab').off('click');
    		$('.suppliers-list-tab').on('click',function(){

				//active link
   				$('.suppliers_menu_tab').removeClass('active')
   				$(this).addClass('active')

   				//open section
   				//require common.js
                 toggleDockerClosed();


   				callback(this)


    		})
		},


		bindProductNavigation:(callback=function(){})=>{

			$('.products-tab').off('click');
			$('.products-tab').on('click',function(){

				//active link
   				$('.suppliers_menu_tab').removeClass('active')
   				$(this).addClass('active')

   				callback(this)

			})
		},


		bindProfileNavigation:(callback=function(){})=>{
			 /*--------------------------------------------
		    | Profile
		    |--------------------------------------------*/
		    $('.profile-tab').off('click');
		    $('.profile-tab').on('click',function(){
		        //active link
		        $('.suppliers_menu_tab').removeClass('active')
		        $(this).addClass('active')

		         $('#main-page').load('pages/suppliers/suppliers_profile.html',function(){

		           callback(this);

		         });
		    })
		},


		bindAccountsNavigation:(callback=function(){})=>{

			$('.accounts-tab').off('click');
			$('.accounts-tab').on('click',function(){

				//active link
   				$('.suppliers_menu_tab').removeClass('active')
   				$(this).addClass('active')


   				$('#main-page').load('pages/suppliers/accounts.html',function(){
           			callback()
        		});

   				

			})
		},


		bindLogsNavigation:(callback=function(){})=>{

			$('.logs-tab').off('click');
			$('.logs-tab').on('click',function(){

				//active link
   				$('.suppliers_menu_tab').removeClass('active')
   				$(this).addClass('active')

   				$('#main-page').load('pages/suppliers/logs.html',function(){
           			callback()
         		});

			})
		},



		bindSettingsNavigation:(callback=function(){})=>{

			$('.settings-tab').off('click');
			$('.settings-tab').on('click',function(){

				//active link
   				$('.suppliers_menu_tab').removeClass('active')
   				$(this).addClass('active')

   				$('#main-page').load('pages/suppliers/settings.html',function(){
           			callback()
         		});

			})
		},

		unbindProductNavigation:()=>{
			$('.products-tab').off('click');
		}
	}


	//save the object in window
	if(typeof window.bms=='undefined') window.bms={}
	if(typeof window.bms.suppliers=='undefined') window.bms.suppliers={}
	if(typeof window.bms.suppliers.menu=='undefined') window.bms.suppliers.menu={}
	if(typeof window.bms.suppliers.menu.submenu=='undefined') window.bms.suppliers.menu.submenu=submenu;


})(window,document);

