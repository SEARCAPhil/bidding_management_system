!function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return r(n||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var i={exports:{}};t(i.exports),e.Spinner=i.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(n){return t(this,e),this.options=n||{},this.options.style=this.options.style||"",this.options.class=this.options.class||"",this._spinnerWrapperClass="spinner-container",this._spinnerWrapperClassSelector=".spinner-container",this._template=this._createTemplate(),this}return n(e,[{key:"_createTemplate",value:function(){return this._element=document.createElement("div"),this._element.setAttribute("class",this._spinnerWrapperClass+" "+this.options.class),this._element.setAttribute("style",this.options.style),this._element.innerHTML=' \n\t\t\t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>',this._element}},{key:"show",value:function(){var e=this,t=document.querySelectorAll(this.options.target);this.hide().then(function(){return new Promise(function(n,i){var r=!0,o=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)a.value.prepend(e._template),n(e)}catch(e){o=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}})})}},{key:"hide",value:function(){var e=this,t=document.querySelectorAll(this.options.target);return new Promise(function(n,i){var r=!0,o=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)for(var c=a.value.children,l=c.length,f=0;f<l;f++)c[f].classList.contains(e._spinnerWrapperClass)&&c[f].parentNode.removeChild(c[f]),n(e)}catch(e){o=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}})}}]),e}();e.default=i})},{}],2:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var i={exports:{}};t(i.exports),e.XHR=i.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(){t(this,e)}return n(e,[{key:"request",value:function(e){var t=this;return this.props=e||{},new Promise(function(e,n){var i=new XMLHttpRequest;i.open(t.props.method||"GET",t.props.url),i.onload=function(){200==i.status&&4==i.readyState?e(i.response):n(i.statusText)},i.onerror=function(){n(i.statusText)},i.send(t.props.body||null)})}}]),e}();e.default=i})},{}],3:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"));else{var r={exports:{}};i(r.exports,t.XHR,t.Navbar),t.Accounts=r.exports}}(this,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=i(t),s=i(n),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(){function e(){r(this,e),this.url="pages/suppliers/accounts.html",this.target="#main-page",this.nav=new s.default}return a(e,[{key:"loadPage",value:function(){var e=this;return(new o.default).request({url:this.url}).then(function(t){e.nav.enable().active(".accounts-tab"),document.querySelector(e.target).innerHTML=t}).catch(function(e){console.log(e)})}}]),e}();e.default=u})},{"../../../mixins/XHR/XHR":2,"../Navbar/Navbar":6}],4:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../../templates/Lists/Lists","../Profile/Profile","../Navbar/Navbar","../../../components/Spinner/Spinner"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../../templates/Lists/Lists"),e("../Profile/Profile"),e("../Navbar/Navbar"),e("../../../components/Spinner/Spinner"));else{var r={exports:{}};i(r.exports,t.XHR,t.Lists,t.Profile,t.Navbar,t.Spinner),t.Lists=r.exports}}(this,function(e,t,n,i,r,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});s(t);var u=s(n),c=s(i),l=s(r),f=s(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(){function e(){a(this,e),this.nav=new l.default}return p(e,[{key:"loadPage",value:function(){var e=this;return new Promise(function(t,n){e.nav.active(".suppliers-list-tab"),e._showSearchBox().then(function(n){"object"==d(window.cordova)&&(document.querySelector(".list-container").style.maxHeight="none",document.querySelector(".list-container").style.overflowY="auto"),e.showSuppliersList().then(function(){e._showListSection(),t(e)})}),e._showListsMenu()})}},{key:"showSuppliersList",value:function(){var e=this,t=new u.default;return new Promise(function(n,i){try{for(var r=0;r<20;r++)document.querySelector(".list-container").appendChild(t.render({name:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",class:"col col-xs-12 col-md-12 list",established:"2016-2017",events:{click:e._selectSupplier}})),n(e)}catch(e){i(e.getMessage())}})}},{key:"_deactivateAllItems",value:function(){var e=document.querySelectorAll(".list");e.length;e.forEach(function(e,t){e.classList.remove("active")})}},{key:"_showSearchBox",value:function(){var e=this;return new Promise(function(t,n){document.getElementById("item-docker-menu").innerHTML='\n\t\t\t\t<section class="row">\n\t\t\t\t\t<input class="form-control" type="text" style="background:#fff;padding:4px;" placeholder="SEARCH"/>\n\t\t\t\t</section>\n\t\t\t\t<section class="item-docker-menu-content"><div class="list-container row"></div></div>',t(e)})}},{key:"_showListsMenu",value:function(){var e=this;return new Promise(function(t,n){document.querySelector(".list-container").innerHTML='\n\t\t\t\t<div class="col col-md-12  list-details" data-role="none">\n\t                <span class="text-info">ALL</span> \n\t                <span>BLOCKED</span> \n\t                <span class="text-success suppliers_new_button">NEW <i class="material-icons md-18">add</i></span>\n\t                <br>    \n\t            </div>',t(e)})}},{key:"_selectSupplier",value:function(){var e=document.querySelectorAll(".list");e.length;e.forEach(function(e,t){e.classList.remove("active")}),this.classList.add("active");var t=new c.default;console.log(this);var n=new f.default({target:".main-content",class:"spinner"});n.show(),t.loadPage().then(function(){return n.hide()}),"none"==window.getComputedStyle(document.querySelector("#main-page")).display&&(document.querySelector("#item-docker-menu").classList.add("hide"),document.querySelector("#item-docker-menu").classList.remove("show"),document.querySelector("#main-page").classList.remove("hide"),document.querySelector("#main-page").classList.add("show"))}},{key:"_showListSection",value:function(){"none"==window.getComputedStyle(document.querySelector("#item-docker-menu")).display&&(document.querySelector("#item-docker-menu").classList.add("show"),document.querySelector("#main-page").classList.remove("show"))}}]),e}();e.default=h})},{"../../../components/Spinner/Spinner":1,"../../../mixins/XHR/XHR":2,"../../templates/Lists/Lists":10,"../Navbar/Navbar":6,"../Profile/Profile":8}],5:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"));else{var r={exports:{}};i(r.exports,t.XHR,t.Navbar),t.Logs=r.exports}}(this,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=i(t),s=i(n),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(){function e(){r(this,e),this.url="pages/suppliers/logs.html",this.target="#main-page",this.nav=new s.default}return a(e,[{key:"loadPage",value:function(){var e=this;return(new o.default).request({url:this.url}).then(function(t){e.nav.enable().active(".logs-tab"),document.querySelector(e.target).innerHTML=t}).catch(function(e){console.log(e)})}}]),e}();e.default=u})},{"../../../mixins/XHR/XHR":2,"../Navbar/Navbar":6}],6:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"));else{var r={exports:{}};i(r.exports,t.XHR),t.Navbar=r.exports}}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(t),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){n(this,e)}return r(e,[{key:"load",value:function(){return(new i.default).request({url:"pages/suppliers/menu.html"}).then(function(e){document.querySelector(".suppliers_menu_section").innerHTML=e}).catch(function(e){console.log(e)})}},{key:"enable",value:function(){return document.querySelector(".suppliers_top_menu").setAttribute("data-active",!0),this}},{key:"active",value:function(e){this._disableNavigation().then(function(){for(var t=document.querySelectorAll(e),n=t.length,i=0;i<n;i++)t[i].classList.add("active")})}},{key:"_disableNavigation",value:function(){var e=document.querySelectorAll(".suppliers_menu_tab"),t=e.length;return new Promise(function(n,i){for(var r=0;r<t;r++)e[r].classList.remove("active"),n(e)})}}]),e}();e.default=o})},{"../../../mixins/XHR/XHR":2}],7:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar","../../../components/Spinner/Spinner"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"),e("../../../components/Spinner/Spinner"));else{var r={exports:{}};i(r.exports,t.XHR,t.Navbar,t.Spinner),t.Products=r.exports}}(this,function(e,t,n,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),a=r(n),u=r(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(){function e(){o(this,e),this.url="pages/suppliers/products.html",this.target="#main-page",this.nav=new a.default}return c(e,[{key:"loadPage",value:function(){var e=this,t=new u.default({target:".main-content",class:"spinner"});return t.show(),(new s.default).request({url:this.url}).then(function(n){e.nav.enable().active(".products-tab"),document.querySelector(e.target).innerHTML=n,t.hide()}).catch(function(e){console.log(e)})}}]),e}();e.default=l})},{"../../../components/Spinner/Spinner":1,"../../../mixins/XHR/XHR":2,"../Navbar/Navbar":6}],8:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar","../Lists/Lists","../Products/Products","../Accounts/Accounts","../Logs/Logs","../Settings/Settings","../../../components/Spinner/Spinner"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"),e("../Lists/Lists"),e("../Products/Products"),e("../Accounts/Accounts"),e("../Logs/Logs"),e("../Settings/Settings"),e("../../../components/Spinner/Spinner"));else{var r={exports:{}};i(r.exports,t.XHR,t.Navbar,t.Lists,t.Products,t.Accounts,t.Logs,t.Settings,t.Spinner),t.Profile=r.exports}}(this,function(e,t,n,i,r,o,s,a,u){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var f=c(t),d=c(n),p=c(i),h=c(r),v=c(o),m=c(s),b=c(a),y=c(u),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),w=function(){function e(){l(this,e),this.url="pages/suppliers/suppliers_profile.html",this.target="#main-page",this.nav=new d.default,this.spinner=new y.default({target:".main-content",class:"spinner"})}return g(e,[{key:"_showListSection",value:function(){"none"==window.getComputedStyle(document.querySelector("#item-docker-menu")).display&&(document.querySelector("#item-docker-menu").classList.add("show"),document.querySelector("#item-docker-menu").classList.remove("hide"),document.querySelector("#main-page").classList.remove("show"),document.querySelector("#main-page").classList.add("hide"))}},{key:"_hideListSection",value:function(){"none"==window.getComputedStyle(document.querySelector("#main-page")).display&&(document.querySelector("#main-page").classList.remove("hide"),document.querySelector("#main-page").classList.add("show"),document.querySelector("#item-docker-menu").classList.remove("show"),document.querySelector("#item-docker-menu").classList.add("hide"))}},{key:"_loadList",value:function(){var e=this;this.spinner.show(),this.ListsPage=new p.default.default,this.ListsPage.loadPage().then(function(){e._showListSection(),e.spinner.hide()})}},{key:"_loadProfile",value:function(){var e=this;return this.spinner.show(),this._hideListSection(),(new f.default).request({url:this.url}).then(function(t){e.nav.enable().active(".profile-tab"),e.spinner.hide(),document.querySelector(e.target).innerHTML=t}).catch(function(t){console.log(t),console.log(e)})}},{key:"_loadProducts",value:function(){var e=this;this.spinner.show(),this._hideListSection(),this.ProdPage=new h.default,this.ProdPage.loadPage().then(function(){e.spinner.hide()})}},{key:"_loadAccounts",value:function(){var e=this;this.spinner.show(),this._hideListSection(),this.AccPage=new v.default,this.AccPage.loadPage().then(function(){e.spinner.hide()})}},{key:"_loadLogs",value:function(){var e=this;this.spinner.show(),this._hideListSection(),this.LogsPage=new m.default,this.LogsPage.loadPage().then(function(){e.spinner.hide()})}},{key:"_loadSettings",value:function(){var e=this;this.spinner.show(),this._hideListSection(),this.SettPage=new b.default,this.SettPage.loadPage().then(function(){e.spinner.hide()})}},{key:"loadPage",value:function(){var e=this;return(new f.default).request({url:this.url}).then(function(t){e.nav.enable().active(".profile-tab"),document.querySelector(e.target).innerHTML=t,e._bindMenu()}).catch(function(t){console.log(t),console.log(e)})}},{key:"_bindMenu",value:function(){var e=this;setTimeout(function(){e._bind(".suppliers-list-tab","click",function(){return e._loadList()}),e._bind(".profile-tab","click",function(){return e._loadProfile()}),e._bind(".products-tab","click",function(){return e._loadProducts()}),e._bind(".accounts-tab","click",function(){e._loadAccounts()}),e._bind(".logs-tab","click",function(){e._loadLogs()}),e._bind(".settings-tab","click",function(){e._loadSettings()})},300)}},{key:"_bind",value:function(e,t,n){var i=this;return new Promise(function(r,o){document.querySelectorAll(e).forEach(function(e,o){var s=e,a=s.cloneNode(!0);a.addEventListener(t,n),s.parentNode.replaceChild(a,s),r(i)})})}}]),e}();e.default=w})},{"../../../components/Spinner/Spinner":1,"../../../mixins/XHR/XHR":2,"../Accounts/Accounts":3,"../Lists/Lists":4,"../Logs/Logs":5,"../Navbar/Navbar":6,"../Products/Products":7,"../Settings/Settings":9}],9:[function(e,t,n){!function(t,i){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar","../../../components/Spinner/Spinner"],i);else if(void 0!==n)i(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"),e("../../../components/Spinner/Spinner"));else{var r={exports:{}};i(r.exports,t.XHR,t.Navbar,t.Spinner),t.Settings=r.exports}}(this,function(e,t,n,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),a=r(n),u=r(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(){function e(){o(this,e),this.url="pages/suppliers/settings.html",this.target="#main-page",this.nav=new a.default}return c(e,[{key:"loadPage",value:function(){var e=this,t=new u.default({target:".main-content",class:"spinner"});return t.show(),(new s.default).request({url:this.url}).then(function(n){e.nav.enable().active(".settings-tab"),document.querySelector(e.target).innerHTML=n,t.hide()}).catch(function(e){console.log(e)})}}]),e}();e.default=l})},{"../../../components/Spinner/Spinner":1,"../../../mixins/XHR/XHR":2,"../Navbar/Navbar":6}],10:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var i={exports:{}};t(i.exports),e.Lists=i.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(){t(this,e)}return n(e,[{key:"_template",value:function(){return this.element=document.createElement("div"),this.element_content=document.createElement("div"),this.properties.description=this.properties.description.length>200?this.properties.description.substr(0,200)+". . .":this.properties.description,this.element_content.setAttribute("class",this.properties.class+" "+this.properties.status),this.element_content.setAttribute("data-list",""+this.properties.id),this.element_content.innerHTML="\n\t\t\t<h4>"+this.properties.name+'</h4>\n            <small class="established_date" onload="'+(this.properties.established||"element.remove();")+'">\n            \t<p><i class="material-icons md-18">date_range</i>'+(this.properties.established||"Estabished date is unspecified")+'</p>\n            </small>\n            <p class="text-muted">'+this.properties.description+"</p>",this.element.appendChild(this.element_content),this}},{key:"_bind",value:function(){window.bms=window.bms||{},window.bms.callback=window.bms.callback||{};for(var e in this.properties.events)this.element.children[0].addEventListener(e,this.properties.events[e])}},{key:"render",value:function(e){return this.properties=e||{},this.properties.description=this.properties.description||"",this.properties.class=this.properties.class||"",this._template(),this._bind(),this.element}},{key:"dump",value:function(){return this}}]),e}();e.default=i})},{}]},{},[8]);