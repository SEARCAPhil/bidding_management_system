export default class{
	constructor(){
		this.suppliersID
		this.xhr=new window.bms.exports.XHR()
		this.url='pages/suppliers/profile/suppliers_profile.html'
		this.target='#main-page';
	}

	_loadMoreDetails(e){
		e.preventDefault()
		document.querySelector('.about-section').innerHTML=this.getAttribute('data-full-details').replace(new RegExp('\r?\n','g'), '<br />')
		this.remove()
	}

	_bindMoreDetails(){
		setTimeout(e=>{		
			//exand button
			var expandMore=document.querySelector('.expandMore')
			expandMore.style.display="block"
			expandMore.addEventListener('click',this._loadMoreDetails)
		},400)
	}

	loadPage(id){
		return this.xhr
			.request({url:this.url})
			.then((res)=>{
				document.querySelector(this.target).innerHTML=res
			}).catch((err)=>{ console.log(err); console.log(this) })
	}

	getDetails(id){
		let xhr=new window.bms.exports.XHR();
		return xhr.request({url:`http://localhost/bms_api/src/api/suppliers/?id=${id}`})
	}

	loadDetails(json){
		
		var data=JSON.parse(JSON.stringify(json))||{}
		data.about=json.about.replace(new RegExp('\r?\n','g'), '<br />')||''
		data.about=(data.about.length>650)?data.about.substring(0,650):data.about
		data.industry=json.industry||'N/A'
		data.location=json.location||'N/A'


		return new Promise((resolve,reject)=>{
			let about=`
				<article class=" col col-md-12 col-lg-12 col-xs-12 profile-section" style="margin-top: 0px;">
					<section>
						<p><b>About</b></p>
						<p class="text-muted about-section">${data.about}</p>
						<small><a href="#" class="expandMore" data-full-details="${json.about}">expand</a></small>
					</section>
				</article>

				<article class="hidden-xs col col-lg-12 text-muted" style="margin-top: 20px;"></article>

				<article class=" col col-md-12 col-lg-12  col-xs-12 profile-section" style="margin-top: 0px;">
					<section>
						<p><b>Industry</b></p>
						<p>${data.industry}</p>
					</section>
				</article>


				<article class="hidden-xs col col-lg-12 text-muted" style="margin-top: 20px;"></article>

				<article class=" col col-md-12 col-lg-12  col-xs-12 profile-section" style="margin-top: 0px;">
					<section>
						<p><b>Location</b></p>
						<p>${data.location}</p>
					</section>
				</article>


				<article class="hidden-xs col col-lg-12 text-muted" style="margin-top: 20px;"></article>

				<article class=" col col-md-12 col-lg-12 col-xs-12 profile-section" style="margin-top: 0px;">
					<section>
						<p><b>Contact Information:</b></p>
						<p class="text-muted"> N/A </p>
					</section>
				</article>
			`
			document.querySelector('.profile-tabs-about').innerHTML=about

			this._bindMoreDetails()

			resolve(this)
		});
	}


}
