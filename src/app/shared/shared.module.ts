import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesFormatPipe } from './minutes-format.pipe';



@NgModule({
  declarations: [MinutesFormatPipe],
  exports: [
    MinutesFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
