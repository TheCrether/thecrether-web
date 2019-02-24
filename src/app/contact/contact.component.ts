import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {
	faAngleDoubleDown = faAngleDoubleDown;
	constructor(private titleService: Title) {}

	ngOnInit() {
		this.titleService.setTitle('Contact');
	}
}
