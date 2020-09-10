import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ALL_FORMS } from './Demos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = ALL_FORMS[0];

  submit() {
    alert(JSON.stringify(this.model));
  }

  Demo1(){
    this.fields = ALL_FORMS [0];

  }

  Demo2(){
    this.fields = ALL_FORMS [1];

  }
}
