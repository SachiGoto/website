import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Project} from '../interfaces/interface'



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private projectsurl= "http://localhost:1337/api/projects?populate=*";

  private contacturl="http://localhost:1337/api/contacts";




  constructor(private http:HttpClient) { }

getProjects(){
  return this.http.get<Project>(this.projectsurl);

}

postContact(name:string, email:string, message:string){
  let body=
  {
     "data":{
      "name":name,
      "email":email,
       "message":message
     }
  }

  return this.http.post(this.contacturl, body);
}



}
