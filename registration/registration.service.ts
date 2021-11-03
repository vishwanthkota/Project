import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginModel, UserDetails } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  addPerson(person:UserDetails): Observable<any> {
    const headers = { 'Content-Type': 'application/json'}  
    const body=JSON.stringify(person);
    // console.log(body)
    return this.http.post('http://localhost:3000/registrationDetails/register', body,{'headers':headers});
  }

  getData(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('http://localhost:3000/registrationDetails')
  }
  getLoginData()
  {
    return this.http.get<UserDetails[]>('http://localhost:3000/users');
  }
  addLoginData(u:UserDetails): Observable<any>
  {
  
    const headers = { 'Content-Type': 'application/json'}  
    const body=JSON.stringify(u);
    // console.log(body)
    return this.http.post('http://localhost:3000/users/register', body,{'headers':headers})
  }
   

  // data(): Observable<any>
  // {
  
  //   const headers = { 'Content-Type': 'application/json'}  
  //   const body={
  //     "email": "olivier@mail.com",
  //     "password": "bestPassw0rd"
  //   }  
  //   return this.http.post('http://localhost:3000/users/register', body,{'headers':headers})
  // }
}
