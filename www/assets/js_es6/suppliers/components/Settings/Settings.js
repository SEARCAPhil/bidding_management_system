!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n||e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var r={exports:{}};t(r.exports),e.Spinner=r.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(n){return t(this,e),this.options=n||{},this.options.style=this.options.style||"",this.options.class=this.options.class||"",this._spinnerWrapperClass="spinner-container",this._spinnerWrapperClassSelector=".spinner-container",this._template=this._createTemplate(),this}return n(e,[{key:"_createTemplate",value:function(){return this._element=document.createElement("div"),this._element.setAttribute("class",this._spinnerWrapperClass+" "+this.options.class),this._element.setAttribute("style",this.options.style),this._element.innerHTML=' \n\t\t\t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>\n\t\t  \t\t<div class="block"></div>',this._element}},{key:"show",value:function(){var e=this,t=document.querySelectorAll(this.options.target);this.hide().then(function(){return new Promise(function(n,r){var i=!0,o=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done);i=!0)a.value.prepend(e._template),n(e)}catch(e){o=!0,s=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}})})}},{key:"hide",value:function(){var e=this,t=document.querySelectorAll(this.options.target);return new Promise(function(n,r){var i=!0,o=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done);i=!0)for(var l=a.value.children,c=l.length,f=0;f<c;f++)l[f].classList.contains(e._spinnerWrapperClass)&&l[f].parentNode.removeChild(l[f]),n(e)}catch(e){o=!0,s=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}})}}]),e}();e.default=r})},{}],2:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var r={exports:{}};t(r.exports),e.XHR=r.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){t(this,e)}return n(e,[{key:"request",value:function(e){var t=this;return this.props=e||{},new Promise(function(e,n){var r=new XMLHttpRequest;r.open(t.props.method||"GET",t.props.url),r.onload=function(){200==r.status&&4==r.readyState?e(r.response):n(r.statusText)},r.onerror=function(){n(r.statusText)},r.send(t.props.body||null)})}}]),e}();e.default=r})},{}],3:[function(e,t,n){!function(t,r){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR"],r);else if(void 0!==n)r(n,e("../../../mixins/XHR/XHR"));else{var i={exports:{}};r(i.exports,t.XHR),t.Navbar=i.exports}}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return i(e,[{key:"load",value:function(){return(new r.default).request({url:"pages/suppliers/menu.html"}).then(function(e){document.querySelector(".suppliers_menu_section").innerHTML=e}).catch(function(e){console.log(e)})}},{key:"enable",value:function(){return document.querySelector(".suppliers_top_menu").setAttribute("data-active",!0),this}},{key:"active",value:function(e){this._disableNavigation().then(function(){for(var t=document.querySelectorAll(e),n=t.length,r=0;r<n;r++)t[r].classList.add("active")})}},{key:"_disableNavigation",value:function(){var e=document.querySelectorAll(".suppliers_menu_tab"),t=e.length;return new Promise(function(n,r){for(var i=0;i<t;i++)e[i].classList.remove("active"),n(e)})}}]),e}();e.default=o})},{"../../../mixins/XHR/XHR":2}],4:[function(e,t,n){!function(t,r){if("function"==typeof define&&define.amd)define(["exports","../../../mixins/XHR/XHR","../Navbar/Navbar","../../../components/Spinner/Spinner"],r);else if(void 0!==n)r(n,e("../../../mixins/XHR/XHR"),e("../Navbar/Navbar"),e("../../../components/Spinner/Spinner"));else{var i={exports:{}};r(i.exports,t.XHR,t.Navbar,t.Spinner),t.Settings=i.exports}}(this,function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=i(t),a=i(n),u=i(r),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(){o(this,e),this.url="pages/suppliers/settings.html",this.target="#main-page",this.nav=new a.default}return l(e,[{key:"loadPage",value:function(){var e=this,t=new u.default({target:".main-content",class:"spinner"});return t.show(),(new s.default).request({url:this.url}).then(function(n){e.nav.enable().active(".settings-tab"),document.querySelector(e.target).innerHTML=n,t.hide()}).catch(function(e){console.log(e)})}}]),e}();e.default=c})},{"../../../components/Spinner/Spinner":1,"../../../mixins/XHR/XHR":2,"../Navbar/Navbar":3}]},{},[4]);