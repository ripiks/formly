import { FormGroup } from '@angular/forms';

export const demoform2 = [
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
];
