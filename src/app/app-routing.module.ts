import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [ {path:'', component:HomeComponent,title:"Acceuil"},
{path:'apropos', component:AproposComponent,title:"A propos"}, 
{path:'projects', component:ProjectsComponent,title:"Projects"},
{path:'contact', component:ContactMeComponent,title:"Contact"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
