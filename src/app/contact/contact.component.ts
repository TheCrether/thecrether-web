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
		const more = document.getElementsByClassName('more')[0];
		more.addEventListener('click', (e) => {
			document.getElementById('scrollTo').scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	}
}
