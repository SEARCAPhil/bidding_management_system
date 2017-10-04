/*config*/
var __config={}

/*-----------------------------------------
| Debug
| Set to true to output log into console
|-----------------------------------------*/
__config.debug=true;


/*----------------------------
| Console
|----------------------------*/
__config.console={}
__config.console.message='';


/*-----------------------------
| Session
|----------------------------*/
__config.session={}
__config.session.token=window.localStorage.getItem('token');
__config.session.fullName=window.localStorage.getItem('cached_full_name');
__config.session.firstName=window.localStorage.getItem('cached_first_name');
__config.session.lastName=window.localStorage.getItem('cached_last_name');
__config.session.position=window.localStorage.getItem('cached_position');
__config.session.department=window.localStorage.getItem('cached_department');
__config.session.uid=window.localStorage.getItem('cached_uid');



/*-------------------------------
| Cache settings
| Prevent API request caching
|-------------------------------*/
__config.cache= new Date().getTime()


/*-------------------------------
| Enpoint
|-------------------------------*/
__config.endpoint={}
__config.endpoint.host='192.168.80.53';
__config.endpoint.protocol='http://';
__config.endpoint.pathname='sdft_api/public/api/';
__config.endpoint.url=__config.endpoint.protocol+''+__config.endpoint.host+'/'+__config.endpoint.pathname;


/*-------------------------------
| Authentication
|-------------------------------*/
__config.endpoint.auth={
	url:__config.endpoint.url+'authentication/auth.php',
	method:'POST'
}

