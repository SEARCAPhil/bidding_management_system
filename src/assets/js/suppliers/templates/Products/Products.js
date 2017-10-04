/*-----------------------------------------
| Templates/Products/Products.js
|
| ES6 is Classes is not yet fully supported by browsers and for this reasonn
| all functions must be implemented in es5 way
| Template for suppliers list
|-----------------------------------------*/
(function(window,document,undefined){
	"use strict";


	let Products={


		/*--------------------------------------
		| List template
		|--------------------------------------*/
		item:function(data){

			//do not return value for non object params
			if(typeof data!='object'){return false;}

			//fail admin buttons silently
			if(typeof data.buttons=='undefined') data.buttons=[];

			let htm=`<details>
						<summary>${data.name}<span class="pull-right"><b>PHP: 100.00</b></span></summary>
						<div class="col col-md-12">
							<small>`;

								//admin buttons
								if(data.buttons.indexOf('update')>=0){
									htm+=`<button class="btn btn-primary btn-xs"><i class="material-icons md-12">edit</i> Update</button>`
								}

								if(data.buttons.indexOf('remove')>=0){
										htm+=`<button class="btn btn-danger btn-xs"><i class="material-icons md-12">remove</i> Remove</button>`;
								}

								htm+=`<hr>`;

								/*------------------------------------------------
								| Return Product and corresponding specifications
								|-------------------------------------------------*/
								for(let x=0;x<data.specs.length;x++){
									//specifications
									for(let specsName in data.specs[x]){
										htm+=`<p><b>${specsName}</b><br>
												${data.specs[x][specsName]}
											</p>`
									}
										htm+=`<hr/>`
								}
					

				htm+=`	
						</small>
					</div>
				</details>`;

			return(htm)		
		},
		
	}


	if(typeof window.bms=='undefined') window.bms={}
	if(typeof window.bms.suppliers=='undefined') window.bms.suppliers={}
	if(typeof window.bms.suppliers.products=='undefined') window.bms.suppliers.products={}
	if(typeof window.bms.suppliers.products.templates=='undefined') window.bms.suppliers.products.templates=Products;


})(window,document);
