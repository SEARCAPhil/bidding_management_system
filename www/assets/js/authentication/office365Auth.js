/*----------------------------------------------------------------------------------------------------------
| MSAL script
| This script is for authenticating user with microsoft AD and office365 ADVV2
|
| REQUIREMENTS:
| MSAL                  MSAL.js  [https://github.com/AzureAD/microsoft-authentication-library-for-js]
|
| NOTE: 
| Running MSAL inside es6 class intermitently triggers token renewal error
| As a work around, MSAL object was created as per official repo's example. Please see github link above
|----------------------------------------------------------------------------------------------------------*/

(function(window,document,undefined){
    "use strict";

    let userAgentApplication = new Msal.UserAgentApplication("dd7a26d3-c6ef-4aba-8ed4-b79688983849", null)
    let profile_data={}

    let getAccessToken=function(userAgentApplication,callback){
        
        //show loading here
        

            userAgentApplication.acquireTokenSilent(["user.read"]).then(function(token){

                  /*-------------------------------------------------
                 | Call Graph API
                 |--------------------------------------------------*/ 
                 $.ajax({
                  type:'GET',
                  url:"https://graph.microsoft.com/beta/me/",
                  headers:{
                    'Authorization':'Bearer '+token
                  }
                }).done(function(data){

                   //hide loading here
                   

                   //set profile data
                   profile_data={full_name:data.displayName,first_name:data.givenName,id:data.id,email:data.mail,office:data.officeLocation,department:data.department,position:data.jobTitle,surname:data.surname,token:token}


                   //connect to SDFT auth API
                   __ajax_auth(profile_data,oauth_success_callback,oauth_error_callback);


                   //run callback
                   callback(profile_data);

                })

            }, function (error) {

              //hide loading here
              

              // interaction required 
              if(error.indexOf("interaction_required") != -1){
                  login();
              }else{
                alert('Oops!Something went wrong.Please Try again ater.')
              }

          });
     }


    let office365Login=function(callback=function(data){}){

          userAgentApplication.loginPopup(["user.read"]).then(function(token){
              var user = userAgentApplication.getUser();
             
              // signin successful
              //this.credentials.msToken=token;

              /*------------------------------------------------------------------------------
              | For getting msgraph token
              | Note: token generated by msal could not be used to query msgraph API
              |  userAgentApplication.acquireTokenSilent must be used to acquire needed token
              |--------------------------------------------------------------------------------*/ 
              
              getAccessToken(userAgentApplication,callback);

          }, function (error) {

          });
    }



    /*ajax auth*/
    function __ajax_auth(data,success_callback,error_callback){
      $.ajax({
        url:'http://192.168.80.53/bms_api/public/api/authentication/office365Auth.php',
        method:'POST',
        data:data,
        beforeSend:function(){
           //show loading here

           //enable debugging
           if(__config.debug) console.log('\u{26AB} Connecting . . .')
        },success:function(json){ 

          //hide loading here


            success_callback(json);

           //enable debugging
            if(__config.debug) console.log('\u{26AB} Connected')

        }

      }).fail(function(json){ 
        
        //hide loading here



        error_callback(json); 

        //enable debugging
        if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

      })

    }


   /*-------------------------------------------------
   | Save details in to device
   |--------------------------------------------------*/ 

    function __save_token_to_storage(token){
      window.localStorage.setItem('token',token);
    }

    function __save_user_details_to_storage(data){
     
        window.localStorage.setItem('cached_full_name',data.details.full_name);
        window.localStorage.setItem('cached_first_name',data.details.first_name);
        window.localStorage.setItem('cached_last_name',data.details.last_name);
        window.localStorage.setItem('cached_department',data.details.department);
        window.localStorage.setItem('cached_alias',data.details.alias);
        window.localStorage.setItem('cached_position',data.details.position);
        window.localStorage.setItem('cached_uid',data.details.uid);
        window.localStorage.setItem('cached_user_data',JSON.stringify(data));
    };




    //callback

    let oauth_success_callback=function(json){

        try{

          var data=JSON.parse(json);

          if(data.status==200){

              if(data.token.length>10){
                  //save token to device
                 __save_token_to_storage(data.token);
                 __save_user_details_to_storage(data);

                 //go to main page
                 setTimeout(function(){
                    window.location='../../../index.html';
                 },700)
              }


          }else{

            $('.auth-error').html(` <div class="alert alert-danger" style="border-radius: 5px !important;">
                  <small>
                    <p>Oops! Invalid username or password.</p>
                  </small>
                </div>`).fadeIn();  
          }


        }catch(e){

            $('.auth-error').html(` <div class="alert alert-danger" style="border-radius: 5px !important;">
                  <small>
                    <p>Unable to connect to server. Please check your internet connection.</p>
                  </small>
                </div>`).fadeIn();
        }
        
    }

    let oauth_error_callback=function(data){
      $('.auth-error').html(` <div class="alert alert-danger" style="border-radius: 5px !important;">
                  <small>
                    <p>Unable to connect to server. Please check your internet connection.</p>
                  </small>
                </div>`).fadeIn();
    }









   /*-------------------------------------------------
   | Make office365 login available to global scope
   |--------------------------------------------------*/  
    if(typeof window.bms!='object')   window.bms={} 
    if(typeof window.bms.user!='object')   window.bms.user={} //user
    
    window.bms.office365Login=office365Login;
    window.bms.user=profile_data;

    //console
    console.log("%cUnauthorized Access","color: red; font-size: x-large")
    console.log("%cBidding Management System : You are trying to view the code in console","color: grey")

})(window,document);
