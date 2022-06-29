import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import{HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'projects', component:ProjectsComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
