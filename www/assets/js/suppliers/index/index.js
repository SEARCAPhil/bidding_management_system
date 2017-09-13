 /*--------------------------------------------------------
 |
 |
 |
 |-------------------------------------------------------*/
(function(window,document,undefined){

    "use strict";


    function showSuppliersWelcomePage(){
        //clear list section
        $('#item-docker-menu').html(' ')

        $('#main-page').load('pages/suppliers/welcome.html',function(){
            $('.getting-started').click(function(){
                showSuppliersPage(function(){
                    $('#main-page').load('pages/suppliers/welcome_new.html');
                })   
            })
        });
    }



    function selectSupplier(){
        $('.list').removeClass('active');
        $(this).addClass('active')

        //set profile top menu
        //active link
        $('.suppliers_menu_tab').removeClass('active')
        $('.profile-tab').addClass('active')

        $('#main-page').load('pages/suppliers/suppliers_profile.html');
        $('.suppliers_menu').addClass('block'); 



        //hide list for small devices then show main page
        //main page is hidden in small-devices by DEFAULT
        let itemCssDefaultDisplay=window.getComputedStyle($('#main-page')[0]).display;
        
        if(itemCssDefaultDisplay==='none'){
            toggleDockerOpen();
        }



        /*--------------------------------------------------------
        | Enable subMenu
        |--------------------------------------------------------*/

        //submenu
        let SubMenu=window.bms.suppliers.menu.submenu;

        SubMenu.bindProductNavigation(function(){

            //load product list
            SubMenu.loadProductsList(function(){
                 $('.loadModalContent').off('click'); 
                $('.loadModalContent').on('click',function(){

                    let target=$(this).attr('data-target');
                    let page=$(this).attr('data-page');

                    loadPageViaAjax(target,page,function(){

                    });


                })
            });

            if(itemCssDefaultDisplay==='none'){ toggleDockerOpen(); }

            

        })


        SubMenu.bindProfileNavigation(function(){
           if(itemCssDefaultDisplay==='none'){ toggleDockerOpen(); }
        });


        SubMenu.bindAccountsNavigation(function(){
            if(itemCssDefaultDisplay==='none'){ toggleDockerOpen(); }
        });

        SubMenu.bindLogsNavigation(function(){
            if(itemCssDefaultDisplay==='none'){ toggleDockerOpen(); }
        });


         SubMenu.bindSettingsNavigation(function(){
            if(itemCssDefaultDisplay==='none'){ toggleDockerOpen(); }
        });

    }

    function bindEventToSuppliersNewButton(){
       /*-------------------------------------------------
       | Add new Supplier button
       |------------------------------------------------*/
       $('.suppliers_new_button').off('click')
       $('.suppliers_new_button').on('click',function(){
            $('#main-page').load('pages/suppliers/new.html',function(){

                //hide list
                let itemCssDefaultDisplay=window.getComputedStyle($('#main-page')[0]).display;
                if(itemCssDefaultDisplay==='none'){
                    toggleDockerOpen();
                }

            });
            
       })
    }


    function showSuppliersList(){


        //show LIST SECTION
        //Load list template from Templates/Lists/
        let List=window.bms.suppliers.lists.templates;

        //LIST MENU SECTION
        //This must be called before calling other list function
        $('#item-docker-menu').html(List.section(function(){

            //LIST MENU
            $('.item-docker-menu-content > .list-container').html((List.menu()))


            //new suppliers welcome page
            $('#main-page').load('pages/suppliers/welcome_new.html',function(){
                //enable suppliers add new button
                bindEventToSuppliersNewButton();    
            });


            //suppliers add new button
            //affects both new page and button in list
            bindEventToSuppliersNewButton();



            //APPEND ITEMS IN LIST
            for(let x=0;x<20;x++){

                //LIST ITEMS
                $('.list-container').append((List.item({id:1,name:'Southeast Asian Regional Center for Graduate Studies in Research and Agriculture (SEARCA)',established:'November 15, 2018',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',status:'open',onclick:selectSupplier})))
            }


        })) 

    }

    function init(){

        //ENABLE MENU FOR SUPPLIER
        let Menu=window.bms.suppliers.menu.main;

        //load welcome page
        Menu.bindNavigation(function(){

            //hide submenu
            let SubMenu=window.bms.suppliers.menu.submenu;
            SubMenu.hide();

            //show main page and hide other contents
            //require common.js
            //if(isMobile()) toggleDockerOpen();
            
            //hide sidebar
            $('#docker-sidebar').removeClass('docker-toggle-open').addClass('docker-toggle-close');


            //clear list section
            $('#item-docker-menu').html(' ');



            //$('.getting-started').on('click',function(){

                //show list section
                if(isMobile()) toggleDockerClosed();


                //show submenu
                SubMenu.load(function(){
                    SubMenu.bindSuppliersListNavigation(function(){
                       //SHOW suppliers list in view
                        //do callback here

                    });

                })

                //show suppliers list in vew [DEFAULT BEHAVIOR]
                showSuppliersList() 

            //})
        });

       

    }

    let index={init}

    //save the object in window
    if(typeof window.bms=='undefined') window.bms={}
    if(typeof window.bms.suppliers=='undefined') window.bms.suppliers={}
    if(typeof window.bms.suppliers.index=='undefined') window.bms.suppliers.index={}
    if(typeof window.bms.suppliers.index.init=='undefined') window.bms.suppliers.index=index;

})(window,document);