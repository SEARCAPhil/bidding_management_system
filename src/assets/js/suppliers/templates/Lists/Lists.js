/*-----------------------------------------
| Templates/Lists/Lists.js
|
| ES6 is Classes is not yet fully supported by browsers and for this reasonn
| all functions must be implemented in es5 way
| Template for suppliers list
|-----------------------------------------*/
(function(window,document,undefined){
	"use strict";


	let Lists={

		/*--------------------------------------
		| List section
		| PARENT of MENU and LIST
		|--------------------------------------*/
		section:function(callback=function(){}){

			//delay callback
			setTimeout(function(){ callback(); },100);

			return(`<section class="row">
						<div class="col col-lg-12 row">
							<input class="form-control" type="text" style="background:#fff;padding:4px;" placeholder="SEARCH"/>
						</div>
					</section>
					<section class="col col-md-12 col-xs-12 item-docker-menu-content"><div class="list-container row"></div></div>
					`)

			
		},


		menu:function(data={}){
			return(`<div class="col col-md-12  list-details row" data-role="none">
                        <span class="text-info">All</span> 
                        <span>Blocked</span> 
                        <span class="text-success suppliers_new_button">NEW <i class="material-icons md-18">add</i></span>
                        <br>    
                    </div>`);
		},



		/*--------------------------------------
		| List template
		|--------------------------------------*/
		item:function(data){

			//do not return value for non object params
			if(typeof data!='object'){return false;}


			//shorten description
			if(data.description!='undefined'){
				data.description=data.description.length>200?data.description.substr(0,200)+'. . .':data.description;
			}


			//create element
			let element=document.createElement('div');



			//set HTML content
			let element_content=document.createElement('div');
			element_content.setAttribute('class','list col col-md-12 row '+`${data.status}`)
			element_content.setAttribute('data-list',`${data.id}`)
			element_content.innerHTML=`<h4>${data.name}</h4>
                                <small>
                                    <p><i class="material-icons md-18">date_range</i>${data.established}</p>
                                </small>
                            <p class="text-muted">${data.description}</p>`

            

            //add click event if onclick is given
            if(typeof data.onclick=='function'){
            	this.bindClickEvent(element_content,data.onclick)
            }


			return element.appendChild(element_content)
			
		},

		bindClickEvent:function(element,functions){
			element.addEventListener('click',functions);

		}
		
	}


	if(typeof window.bms=='undefined') window.bms={}
	if(typeof window.bms.suppliers=='undefined') window.bms.suppliers={}
	if(typeof window.bms.suppliers.lists=='undefined') window.bms.suppliers.lists={}
	if(typeof window.bms.suppliers.lists.templates=='undefined') window.bms.suppliers.lists.templates=Lists;


})(window,document);
