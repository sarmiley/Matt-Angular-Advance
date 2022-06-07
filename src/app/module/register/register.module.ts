import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegFormGroupComponent } from './reg-form-group/reg-form-group.component';

@NgModule({
  declarations: [RegisterComponent, RegFormComponent, RegFormGroupComponent],
  imports: [CommonModule, RegisterRoutingModule, FormsModule, ReactiveFormsModule],
})
export class RegisterModule {}
