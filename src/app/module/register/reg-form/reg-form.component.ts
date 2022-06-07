import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  account: string = '';
  password: string = '';
  email: string = '';
  phone: string = '';

  constructor() {}

  ngOnInit(): void {}

  formSubmitted: boolean = false;

  submitForm(form: NgForm): void {
    console.log(form);
    console.log(form.valid);

    console.log('form submit');
  }
}
