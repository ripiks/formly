import { FormGroup } from '@angular/forms';

export const demoform2 = [
  {
    Demo2() {
      this.form = new FormGroup({});
      this.model = {};
      this.options = {};
      this.fields = [
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
    },
  },
];
