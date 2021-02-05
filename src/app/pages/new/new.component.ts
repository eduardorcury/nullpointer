import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  form = this.formBuilder.group({
    title: ['', Validators.required, Validators.minLength(5)],
    description: ['', Validators.required, Validators.minLength(5)],
    solution: ['', Validators.required, Validators.minLength(5)]
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.form.value);
  }

}
