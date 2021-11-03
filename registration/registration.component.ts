import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../login/login.component';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registration : UserDetails;
  public userDetails: UserDetails;

  public showError:boolean=false;
  public rePassword:string='';

  constructor(private reService:RegistrationService,private httpClient: HttpClient) { 
    this.registration = new UserDetails();
    this.userDetails = new UserDetails();
  }

  ngOnInit(): void {

  // this.reService.data().subscribe(data=>{
  //   console.log(data);
    
  // });
  }

  validDetails(u:UserDetails) {
  
    console.log(this.registration);
    
    this.userDetails.username = this.registration.username ;
    this.userDetails.password = this.registration.password ;
    this.userDetails.role = this.registration.role ;


    this.reService.addPerson(this.registration).subscribe((data: any) => {
      this.userDetails = data;
      // if()
      // {

      // }

      console.log(this.userDetails);
      
    });

    
    // this.reService.addLoginData(this.userDetails).subscribe((data: any) => {
    //   this.userDetails = data;

    //   console.log(this.userDetails);
      
    // });

    // this.httpClient.post("assets/Json/registration_data.json" ,this.registration).subscribe((data: any) => {
    //   this.userDetails = data.userDetails;
    //   console.log(data);
    // });
    // this.httpClient.post("assets/Json/logindata.json" ,this.userDetails).subscribe((data: any) => {
    //   console.log(data);
      
    // });

  }

}


