import Router from 'Navigo'
import XHR  from '../mixins/XHR/XHR'
import Spinner  from '../components/Spinner/Spinner'
import Navbar  from '../suppliers/components/Navbar/Navbar'

window.bms=window.bms||{
	deviceInstance:'mobile',
	router:new Router('http://localhost/bidding_management_system/www/',true),
	suppliers:{selected:{}},
	exports:{
		Router,
		XHR,
		Spinner,
		Navbar
	}
}
