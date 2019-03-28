import { Component, OnInit } from '@angular/core';
import { fas, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	fas = fas;
	faAngleDoubleDown = faAngleDoubleDown;
	constructor(private title: Title, private meta: Meta) {}

	ngOnInit() {
		const more = document.getElementsByClassName('more')[0];
		more.addEventListener('click', (e) => {
			document.getElementById('scrollTo').scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
		this.title.setTitle('Home');
		this.meta.updateTag({ name: 'og:url', content: 'http://thecrether.net' });
		this.meta.updateTag({ name: 'description', content: 'Homepage of @TheCrether' });
	}
}
