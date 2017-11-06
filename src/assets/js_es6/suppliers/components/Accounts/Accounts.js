//import XHR  from '../../../mixins/XHR/XHR'

export default class{
	constructor(){
		this.url='pages/suppliers/accounts/accounts.html'
		this.target='.profile-tabs-about'
	}

	loadPage(){
		var xhr=new window.bms.exports.XHR();
		return xhr.request({url:this.url}).then((res)=>{	
			document.querySelector(this.target).innerHTML=res
		}).catch((err)=>{ console.log(err) })
	}

	loadAccounts(id){
		return new Promise((resolve,reject)=>{
			let accounts=`		
				<article class=" col col-md-12 col-lg-12 profile-section" style="margin-top: 0px;"
					<section class="col col-md-12">
						<h3>Account</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<div class="col xs-12 col-md-4 row">
							<button class="btn btn-block btn-primary">New<i class="material-icons md-18">add</i></button>
						</div>
					</section>

					<section class="col col-md-12">
						<p>
							<table class="table">
								<thead>
									<th>Username</th>
									<th>Password</th>
									<th></th>
								</thead>
								<tbody>
									<tr>
										<td>jkga</td>
										<td>**************</td>
										<td class="text-right">
											<button class="btn btn-default btn-xs">Reset</button>
											<button class="btn btn-danger btn-xs">Remove</button>

										</td>
									</tr>
									<tr>
										<td>jkga</td>
										<td>**************</td>
										<td class="text-right">
											<button class="btn btn-default btn-xs">Reset</button>
											<button class="btn btn-danger btn-xs">Remove</button>

										</td>
									</tr>
									<tr>
										<td>jkga</td>
										<td>**************</td>
										<td class="text-right">
											<button class="btn btn-default btn-xs">Reset</button>
											<button class="btn btn-danger btn-xs">Remove</button>

										</td>
									</tr>
									<tr>
										<td>jkga</td>
										<td>**************</td>
										<td class="text-right">
											<button class="btn btn-default btn-xs">Reset</button>
											<button class="btn btn-danger btn-xs">Remove</button>
										</td>
									</tr>
								</tbody>
							</table>
						</p>
					</section>
				</article>
			`
			document.querySelector(this.target).innerHTML=accounts
			resolve(this)
		});
	}

}
