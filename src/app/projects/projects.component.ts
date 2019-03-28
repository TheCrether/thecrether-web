import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';
import { faAngleDoubleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit {
	faAngleDoubleDown = faAngleDoubleDown;
	faArrowRight = faArrowRight;
	projects: Project[];
	constructor(private data: DataService, private title: Title, private meta: Meta) {}

	ngOnInit() {
		this.getRepos();
		const more = document.getElementsByClassName('more')[0];
		more.addEventListener('click', (e) => {
			document.getElementById('scrollTo').scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
		this.title.setTitle('Projects');
		this.meta.updateTag({ name: 'og:url', content: 'http://thecrether.net' });
		this.meta.updateTag({ name: 'description', content: 'Page for the projects of @TheCrether' });
	}

	getRepos(): void {
		this.data.getRepos().subscribe((repos) => {
			this.projects = repos;
		});
	}
}
