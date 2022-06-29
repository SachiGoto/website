import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Welcome{
  data:{
    if:number;
    attributes:{
      Name:string;
      title:string;
      bannerimage:{
        data:{
          id:number;
          attributes:{
            url:string;

          }
        }
      }
    }
  }
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = '';
  name = '';
  bannerimg = '';
  host = "http://localhost:1337";
  constructor(private http:HttpClient){}



  ngOnInit(): void{
    this.http.get<Welcome>('http://localhost:1337/api/homepage?populate=*').subscribe( welcomedata=>{
      console.log(welcomedata);
      this.title = welcomedata.data.attributes.title;
      this.name = welcomedata.data.attributes.Name;
      this.bannerimg = this.host + welcomedata.data.attributes.bannerimage.data.attributes.url;
      console.log(this.bannerimg);
    })


}

}
