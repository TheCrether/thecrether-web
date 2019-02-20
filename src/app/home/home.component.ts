import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fas, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	fas = fas;
	faAngleDoubleDown = faAngleDoubleDown;
	constructor(private titleService: Title) {}

	ngOnInit() {
		this.titleService.setTitle('Homepage');
		const more = document.getElementsByClassName('more')[0];
		more.addEventListener('click', (e) => {
			document.getElementById('scrollTo').scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	}
}
