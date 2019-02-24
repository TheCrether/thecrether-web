import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Project } from './interfaces/project';
import { Contact } from './interfaces/contact';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class DataService {
	// TODO maybe move to Environment
	private githubURL = 'http://localhost:8000/api/github'; // TODO change when deploying
	private contactURL = 'http://localhost:8000/api/contact';

	constructor(private http: HttpClient) {}

	getRepos(): Observable<Project[]> {
		return this.http.get<Project[]>(this.githubURL, httpOptions).pipe(catchError(this.handleError));
	}

	pushMessage(message: Contact): Observable<Contact> {
		console.log(message);
		return this.http.post<Contact>(this.contactURL, message, httpOptions).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	}
}
