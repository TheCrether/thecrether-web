import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			position: 1
		}
	},
	{
		path: 'projects',
		component: ProjectsComponent,
		data: {
			position: 2
		}
	},
	{
		path: 'contact',
		component: ContactComponent,
		data: {
			position: 3
		}
	},
	{
		path: 'yt',
		component: PageNotFoundComponent,
		resolve: {
			url: 'externalUrlRedirectResolver'
		},
		data: {
			externalUrl: 'https://www.youtube.com/channel/UCO8u1-JMExWmgz2hPgWSdGw'
		}
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [
		{
			provide: 'externalUrlRedirectResolver',
			useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
				window.location.href = (route.data as any).externalUrl;
			}
		}
	]
})
export class AppRoutingModule {}
