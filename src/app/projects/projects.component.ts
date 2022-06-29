import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import{Project} from '../interfaces/interface'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project:any[]=[];
  host = "http://localhost:1337";
  

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getProjects().subscribe(projects=>{
      console.log(projects.data);
      this.project = projects.data;
    })
  }

}
