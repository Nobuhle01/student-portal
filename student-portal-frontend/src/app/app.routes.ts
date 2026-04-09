import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import { PaymentComponent } from './payment/payment';

export const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'payment', component: PaymentComponent }
];
