import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';



@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NewModule { }
