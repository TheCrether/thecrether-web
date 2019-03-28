import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {
	faAngleDoubleDown = faAngleDoubleDown;
	constructor(private title: Title, private meta: Meta) {}

	ngOnInit() {
		this.title.setTitle('Contact');
		this.meta.updateTag({ name: 'og:url', content: 'http://thecrether.net' });
		this.meta.updateTag({ name: 'description', content: 'Send a message at @TheCrether!' });
	}
}
