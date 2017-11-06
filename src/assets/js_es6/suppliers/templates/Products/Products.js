export default class Product{
	constructor(){}

	dump(){ return this }

	render(properties){
		this.properties=properties||{}
		this.properties.description=this.properties.description||{}
		this.properties.class=this.properties.class||''
		this.properties.button=this.properties.buttons||[]
		this.properties.specs=this.properties.specs||[]
		this._template()
		return this.element;
	}

	_template(){
		//create element
		this.element=document.createElement('div');
		this.element_content=document.createElement('details')

		let htmlContent=`
					<summary>${this.properties.name}<span class="pull-right"><b>${this.properties.prices[0].currency} ${this.properties.prices[0].amount}</b></span></summary>
					<div class="${this.properties.class}">
						<small>`
							//admin buttons
							if(this.properties.buttons.indexOf('update')>=0){
								htmlContent+=`<button class="btn btn-primary btn-xs"><i class="material-icons md-12">edit</i> Update</button>`
							}

							if(this.properties.buttons.indexOf('remove')>=0){
								htmlContent+=`<button class="btn btn-danger btn-xs"><i class="material-icons md-12">remove</i> Remove</button>`;
							}

			htmlContent+=`</small>
					</div>`

			this.properties.specs.forEach((val,index)=>{ 
				htmlContent+=`<div class="col col-lg-2"><b>${val.name}</b></div>`
				htmlContent+=`<div class="col col-lg-10">${val.value}</div>`
			})


		this.element_content.innerHTML=htmlContent;

        this.element.appendChild(this.element_content)

        return this;
	}

}