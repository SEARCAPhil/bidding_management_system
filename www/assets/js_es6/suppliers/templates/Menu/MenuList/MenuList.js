export default class MenuList{
	constructor(){}

	dump(){ return this }

	render(properties){
		this.properties=properties||{}
		this.properties.description=this.properties.description||{}
		this.properties.class=this.properties.class||''
		this.properties.button=this.properties.buttons||[]
		this.properties.role=this.properties.role||'none'
		this._template()
		return this.element;
	}

	_template(){
		//create element
		this.element=document.createElement('div');
		this.element_content=document.createElement('details')

		this.element_content.innerHTML=`
					<div class="${this.properties.class}" data-role="${this.properties.role} ">
                        <span class="text-info">All</span> 
                        <span>Blocked</span> 
                        <span class="text-success suppliers_new_button">NEW <i class="material-icons md-18">add</i></span>
                        <br>    
                    </div>`

        this.element.appendChild(this.element_content)

        return this;
	}

}