import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.html',
  styleUrls: ['./payment.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule] // standalone imports
})
export class PaymentComponent {

  message: string = '';

  constructor(private http: HttpClient) {}

  pay() {
    this.http.post('/payment', {}, { withCredentials: true })
      .subscribe({
        next: res => this.message = 'Payment Successful (Mock)',
        error: err => this.message = 'Payment Failed: ' + err.message
      });
  }
}