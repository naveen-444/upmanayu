import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private apiUrl = 'https://rental.onavinfosolutions.com/send-mail.php';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
