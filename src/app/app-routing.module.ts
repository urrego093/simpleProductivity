import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/tasks'},
  {path: '**', pathMatch: 'full', redirectTo: '/tasks'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule {
}
