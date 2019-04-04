import { Component, OnInit } from '@angular/core';
import { fas, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	routerLinks: object[] = [
		{
			link: '/home',
			name: 'Home'
		},
		{
			link: '/projects',
			name: 'Projects'
		},
		{
			link: '/contact',
			name: 'Contact'
		}
	];

	socials = [
		{
			icon_url: './images/socials/twitter.svg',
			handle: '@TheCrether',
			url: 'http://twitter.com/thecrether',
			alt: 'Twitter - TheCrether'
		},
		{
			icon_url: './images/socials/github.png',
			handle: '@thecrether',
			url: 'http://github.com/thecrether',
			alt: 'Github - TheCrether'
		},
		{
			icon_url: './images/socials/youtube.png',
			handle: 'TheCrether',
			url: 'http://thecrether.net/yt',
			alt: 'Youtube - TheCrether'
		},
		{
			icon_url: './images/socials/discord.svg',
			handle: 'Discord',
			url: 'https://discord.gg/XwD6wqP',
			alt: 'Discord - TheCrether'
		}
	];

	faCompass = faCompass;
	navBtn;
	sidelinks;
	clicked: boolean;

	constructor(private meta: Meta) {}

	ngOnInit(): void {
		const header = document.getElementsByTagName('header')[0];
		window.addEventListener('scroll', () => {
			if (window.scrollY > 230) {
				header.style.background = 'white';
				header.style.boxShadow = '0 3px 10px black';
			} else {
				header.style.background = 'none';
				header.style.boxShadow = 'none';
			}
		});
		document.addEventListener('ready', () => {
			if (window.scrollY > 230) {
				header.style.background = 'white';
				header.style.boxShadow = '0 3px 10px black';
			} else {
				header.style.background = 'none';
				header.style.boxShadow = 'none';
			}
		});
		this.navBtn = document.getElementsByClassName('navBtn')[0];
		this.sidelinks = document.getElementById('sideLinks');
		this.navBtn.addEventListener('click', () => {
			this.clicked = !this.clicked;
			if (this.clicked) {
				this.navBtn.id = 'clicked';
				this.sidelinks.style.height = '300px';
				this.sidelinks.style.opacity = '1';
			} else {
				this.navBtn.id = '';
				this.sidelinks.style.height = '0';
				this.sidelinks.style.opacity = '0';
			}
		});
		this.meta.updateTag({ name: 'robots', content: 'follow' });
	}
}
