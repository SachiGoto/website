import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http:CommonService) { }

  // post:Contact[]=[];

  contactName:string='';
  email:string='';
  message:string='';


  submit(){
    console.log("Name is " + this.contactName);
    console.log("Email is " + this.email);
    console.log("Message is " + this.message);

  this.http.postContact(this.contactName, this.email, this.message).subscribe(contactInfo=>{
     console.log(contactInfo);
  })

  }

  ngOnInit(): void {











  }

}
