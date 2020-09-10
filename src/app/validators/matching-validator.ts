import { AbstractControl } from '@angular/forms';

export function minlengthValidationMessages(err, field) {
  return `musí mít ${field.templateOptions.minLength} znaků`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Hesla se neshodují' } };
}
