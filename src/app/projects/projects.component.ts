import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';
import { faAngleDoubleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit {
	faAngleDoubleDown = faAngleDoubleDown;
	faArrowRight = faArrowRight;
	projects: Project[];
	constructor(private data: DataService) {}

	ngOnInit() {
		this.getRepos();
	}

	getRepos(): void {
		this.data.getRepos().subscribe((repos) => {
			this.projects = repos;
		});
	}
}
