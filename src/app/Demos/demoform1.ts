import { FormGroup } from '@angular/forms';

export const demoform1 = [{
  key: 'Email',
  type: 'input',
  wrappers: ['form-field-horizontal'],
  templateOptions: {
    label: 'email',
    type: 'email',
    placeholder: 'zde zadej email',
    required: true,
  }
}];
