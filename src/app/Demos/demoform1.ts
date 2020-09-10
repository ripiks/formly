import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const demoform1: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    wrappers: ['form-field-horizontal'],
    templateOptions: {
      label: 'username',
      type: 'name',
      placeholder: 'zadej prosim jmeno',
      required: true,
    },
  },
  {
    key: 'Email',
    type: 'input',
    wrappers: ['form-field-horizontal'],
    templateOptions: {
      label: 'Email',
      type: 'Email',
      placeholder: 'zde zadej prosim email',
      required: false,
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
