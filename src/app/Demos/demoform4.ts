import { FormlyFieldConfig } from '@ngx-formly/core';

export const demoform4: FormlyFieldConfig[] = [
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
    hideExpression: '!model.name',
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
    hideExpression: '!model.Email',
    wrappers: ['form-field-horizontal'],
    templateOptions: {
      label: 'password',
      type: 'password',
      placeholder: 'heslo dlouhe alespon 5 znaku',
      required: true,
      minLenght: 5,
    },
  },
  {
    key: 'passwordConfirm',
    type: 'input',
    hideExpression: '!model.password',
    wrappers: ['form-field-horizontal'],
    templateOptions: {
      type: 'password',
      label: 'potvrd heslo',
      placeholder: 'znovu vypln heslo',
      required: true,
      minLenght: 5,
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


