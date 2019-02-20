import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './interfaces/project';
import { Contact } from './interfaces/contact';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	// TODO maybe move to Environment
	private githubURL = 'http://localhost:8000/api/github'; // TODO change when deploying
	private contactURL = 'http://localhost:8000/api/contact';

	constructor(private http: HttpClient) {}

	getRepos(): Observable<Project[]> {
		return this.http.get<Project[]>(this.githubURL);
	}

	pushMessage(message: Contact): void {
		this.http.post(this.contactURL, message);
	}
}
