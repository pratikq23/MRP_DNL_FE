import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }  from '@angular/router';
import { SharedService } from "../shared.service";
import { CompanyService } from "../company.service";

@Component({

  templateUrl: './addcompany.component.html',
  providers:[CompanyService]
})
export class AddCompanyComponent {
  public companyname: string;
  public logInObj:any;

  constructor(private sharedService:SharedService,
  	private companyService:CompanyService,
  	public router:Router){
  	this.logInObj = this.sharedService.getLoginObj();
  }

  onSubmit() {
		let companyObj = {
    	company_name:this.companyname,
    	created_by : this.logInObj.user_id,
      updated_by : this.logInObj.user_id
    }
    this.companyService.addCompany(companyObj).subscribe(res => {
    	if(res.response.statusResponse == 1) {
    		this.router.navigate(['/adminview'])
    	}else {
    		console.log("Somthing went wrong");
    	}
    },err => console.log(err));
  }


  valuechange(event:any){
   
  }
  
}
