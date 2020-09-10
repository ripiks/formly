import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export const demoform1: FormlyFieldConfig[] = [{
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
