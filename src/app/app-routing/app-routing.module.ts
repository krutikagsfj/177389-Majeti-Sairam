// Routing module for declaring path and the imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { PlayComponent } from '../play/play.component';
import { SuccessComponent } from '../success/success.component';

const routes: Routes = [
  {path:'', component: PlayComponent},
  {path:'play', component: PlayComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
