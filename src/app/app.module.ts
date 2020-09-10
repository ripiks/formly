import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CommonModule } from '@angular/common';
import { FormlyHorizontalWrapper } from './horizontal-wrapper';

export function minlengthValidationMessages(err, field) {
  return `Musí mít ${field.templateOptions.minLength} znaků`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'hesla se neshodují' } };
}

@NgModule({
  declarations: [
    AppComponent,
    FormlyHorizontalWrapper,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
      validators: [ { name: 'fieldMatch', validation: fieldMatchValidator }, ],
      validationMessages: [
        { name: 'required', message: 'Toto pole je nutne vyplnit!' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
