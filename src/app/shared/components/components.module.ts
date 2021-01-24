import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionComponent } from './exception/exception.component';



@NgModule({
  declarations: [ExceptionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExceptionComponent,
  ]
})
export class ComponentsModule { }
