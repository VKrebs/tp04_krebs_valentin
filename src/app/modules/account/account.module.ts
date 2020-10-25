import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AccountRoutingModule } from './account-routing.module';
import { AccountCreationFormComponent } from './components/account-creation-form/account-creation-form.component';
import { AccountCreationSummaryComponent } from './components/account-creation-summary/account-creation-summary.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';


@NgModule({
  declarations: [AccountCreationFormComponent, AccountCreationSummaryComponent, PhoneNumberPipe],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
