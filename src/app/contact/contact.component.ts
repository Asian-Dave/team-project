import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  msg?: string;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) {}
  onSubmit() {
    if (this.contactForm.valid) {
      this.http
        .post('https://formspree.io/f/mqazkprp', this.contactForm.value)
        .subscribe((response) => (this.msg = 'Thanks for your message!'));
    }
    this.contactForm.reset();
  }
}
