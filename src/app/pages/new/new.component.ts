import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var require: any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  markdown: any;
  solutionHtml: string;

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    solution: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private formBuilder: FormBuilder) {

    this.markdown = require('markdown-it')({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && require('highlight.js').getLanguage(lang)) {
          try {
            return require('highlight.js').highlight(lang, str).value;
          } catch (__) {}
        }
        return '';
      }
    });
    this.onChanges();

  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onChanges(): void {
    this.form.get('solution').valueChanges.subscribe(value => {
      this.solutionHtml = this.markdown.render(value);
    })
  }

}
