export default class{
	constructor(){}

	dump(){ return this }

	render(properties){
		this.properties=properties||{}
		this.properties.description=this.properties.description||{}
		this.properties.class=this.properties.class||''
		this.properties.button=this.properties.buttons||[]
		this.properties.role=this.properties.role||'none'
		this.properties.style=this.properties.style||''
		this._template()
		return this.element;
	}

	_template(){
		//create element
		this.element=document.createElement('div');
		this.element_content=document.createElement('div')
		this.element_content.className=`${this.properties.class}`
		this.element_content.style=`${this.properties.style}`
		this.element_content.setAttribute('data-role',`${this.properties.role}`)

		this.element_content.innerHTML=`
                        <span class="text-info menuList allNav active"><a href="#/suppliers/all/">All</a></span> 
                        <span class="text-success menuList blockedNav"><a href="#/suppliers/blocked/">Blocked</a></span> 
                        <span class="text-success menuList suppliers_new_button"><a href="#/suppliers/forms/registration/">NEW<i class="material-icons md-18">add</i></a></span>
                        <br> `

        this.element.appendChild(this.element_content)

        return this.element;
	}

}