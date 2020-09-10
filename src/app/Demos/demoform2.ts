import { FormGroup } from '@angular/forms';

export const demoform2 = [
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
      label: 'password',
      type: 'password',
      placeholder: 'heslo dlouhe alespon 5 znaku',
      required: true,
      minLenght: 5,
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } },
      ],
    },
  },
  {
    key: 'passwordConfirm',
    type: 'input',
    wrappers: ['form-field-horizontal'],
    templateOptions: {
      type: 'password',
      label: 'potvrd heslo',
      placeholder: 'znovu vypln heslo',
      required: true,
      minLenght: 5,
    },
    validation: [
      {name: 'fieldMatch', options: { errorPath: 'passwordConfirm' }}
    ]
  },
  {
    type: 'checkbox',
    key: 'GDPR',
    templateOptions: {
      label: 'Souhlasim s GDPR....',
    },
  },
];


