import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProjectsComponent,
		PageNotFoundComponent,
		ContactComponent,
		ContactFormComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule, ReactiveFormsModule ],
	providers: [ Title ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
