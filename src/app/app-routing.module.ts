import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGEAComponent } from './page-a/page-a.component';
import { PAGEBComponent } from './page-b/page-b.component';
import { PAGECComponent } from './page-c/page-c.component';
import { PageDComponent } from './page-d/page-d.component';
import { PageEComponent } from './page-e/page-e.component';
import { PageFComponent } from './page-f/page-f.component';




const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/app-page-a',
    pathMatch: 'full'
  },  
  {
    path: 'app-page-a',
    component: PAGEAComponent
  },
  {
    path: 'app-page-b',
    component: PAGEBComponent
  },
  {
    path:'app-page-c',
    component : PAGECComponent
  }, 
  {
    path: 'app-page-d',
    component: PageDComponent
  },
  {
    path: 'app-page-e',
    component: PageEComponent
  },
  {
    path: 'app-page-f',
    component: PageFComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes ,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
