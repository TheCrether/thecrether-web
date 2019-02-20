import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';
import { faAngleDoubleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit {
	faAngleDoubleDown = faAngleDoubleDown;
	faArrowRight = faArrowRight;
	projects: Project[];
	constructor(private data: DataService, private titleService: Title) {}

	ngOnInit() {
		this.getRepos();
		this.titleService.setTitle('Projects');
		const more = document.getElementsByClassName('more')[0];
		more.addEventListener('click', (e) => {
			document.getElementById('scrollTo').scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	}

	getRepos(): void {
		this.data.getRepos().subscribe((repos) => {
			this.projects = repos;
		});
	}
}
