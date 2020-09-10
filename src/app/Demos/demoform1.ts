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
];
