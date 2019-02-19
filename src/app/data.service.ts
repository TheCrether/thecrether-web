import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './interfaces/project';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private githubURL = 'http://localhost:8000/api/github';

	constructor(private http: HttpClient) {}

	getRepos(): Observable<Project[]> {
		return this.http.get<Project[]>(this.githubURL);
	}
}
