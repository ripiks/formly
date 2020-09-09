import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'Name',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'UserName',
        type: 'name',
        placeholder: 'Zadej prosim jmeno',
        required: true,
      },
    },
    {
      key: 'Email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: 'Zde prosim vypis email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Password',
        type: 'password',
        placeholder: 'heslo',
        required: true,
      },
    },
    {
      type: 'checkbox',
      key: 'GDPR',
      templateOptions: {
        label: 'Souhlasim s GDPR....',
      },
    },
  ];
  submit() {
    alert(JSON.stringify(this.model));
  }
}
