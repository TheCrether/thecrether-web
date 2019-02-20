import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../interfaces/contact';
import { DataService } from '../data.service';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: [ './contact-form.component.scss' ]
})
export class ContactFormComponent {
	contactForm = this.fb.group({
		name: [ '', Validators.required ],
		email: [ '', Validators.required ],
		message: [ '', Validators.required ]
	});
	constructor(private data: DataService, private fb: FormBuilder) {}

	onSubmit(): void {
		const message: Contact = this.contactForm.value;
		this.data.pushMessage(message);
	}
}
