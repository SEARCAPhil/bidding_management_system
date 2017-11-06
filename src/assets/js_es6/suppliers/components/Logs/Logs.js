//import XHR  from '../../../mixins/XHR/XHR'
//import Navbar  from '../Navbar/Navbar'

export default class{
	constructor(){
		this.url='pages/suppliers/logs.html'
		this.target='.profile-tabs-about'
	}

	loadPage(){
		var xhr=new window.bms.exports.XHR();
		return xhr.request({url:this.url}).then((res)=>{
			document.querySelector(this.target).innerHTML=res
		}).catch((err)=>{ console.log(err) })
	}

	loadLogs(id){
		return new Promise((resolve,reject)=>{
			let logs=`		
				<article class=" col col-md-12 col-lg-12 profile-section" style="margin-top: 0px;">
					<section class="col col-md-12">
						<h3>Logs</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<hr/>
					</section>

					<section class="col col-md-12">
						<p class="logs"><span class="text-danger">[8-22-17 3:37:04]</span> John Added new computer <a href="#">HPE ProLiant DL380 Gen9 Server OID7271241 | HPE</a></p>
						<p class="logs"><span class="text-danger">[8-22-17]</span> John Added new computer <a href="#">HPE ProLiant DL380 | HPE</a></p>
						<p class="logs"><span class="text-danger">[8-22-17]</span> John Added new computer <a href="#">HPE ProLiant DL380 Gen9 Se 71241 | HPE</a></p>
						<p class="logs"><span class="text-danger">[8-22-17]</span> John Added new computer <a href="#">HPE ProLiant DL380 Genr OID7271241 | HPE</a></p>
						<p class="logs"><span class="text-danger">[8-22-17]</span> John Added new computer <a href="#">HPE ProLiant DL38</a></p>
						<p class="logs"><span class="text-danger">[8-22-17]</span> John Added new computer <a href="#">HPE ProLiant DL380 Gen9 Server OID7271241 | HPE</a></p>

					</section>
				</article>
			`
			document.querySelector(this.target).innerHTML=logs
			resolve(this)
		});
	}

}
