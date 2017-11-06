export default class Categories{
	constructor(){}

	dump(){ return this }

	render(properties){
		this.properties=properties||{}
		this.properties.description=this.properties.description||{}
		this.properties.class=this.properties.class||''
		this.properties.button=this.properties.buttons||[]
		this._template()
		return this.element;
	}

	_template(){
		//create element
		this.element=document.createElement('div');

		let htmlContent=`
					<h4 class="page-header"><i class="material-icons md-18">label</i> ${this.properties.name}</h4>
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


		this.element.innerHTML=htmlContent;

        return this;
	}

}