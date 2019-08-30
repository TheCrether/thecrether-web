import { Component, OnInit } from '@angular/core';
import { fas, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@angular/platform-browser';
import {
  faTwitter,
  faGithub,
  faInstagram,
  faYoutube,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { RouterOutlet } from '@angular/router';

import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
  // animations: [
  //   trigger('routeAnimation', [
  //     transition('* => 3', [
  //       style({ height: '!', width: '100%' }),
  //       query(':enter', style({ transform: 'translateX(100%)' })),
  //       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0 })),
  //       group([
  //         query(':leave', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(-100%)' })
  //           )
  //         ]),
  //         query(':enter', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(100%)' })
  //           )
  //         ])
  //       ])
  //     ]),
  //     transition('1 => 2', [
  //       style({ height: '!', width: '100%' }),
  //       query(':enter', style({ transform: 'translateX(100%)' })),
  //       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0 })),
  //       group([
  //         query(':leave', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(-100%)' })
  //           )
  //         ]),
  //         query(':enter', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(100%)' })
  //           )
  //         ])
  //       ])
  //     ]),
  //     transition('* => 1', [
  //       style({ height: '!', width: '100%' }),
  //       query(':enter', style({ transform: 'translateX(-100%)' })),
  //       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0 })),
  //       group([
  //         query(':leave', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(100%)' })
  //           )
  //         ]),
  //         query(':enter', [
  //           animate(
  //             '0.6s cubic-bezier(.63,.07,.27,.98)',
  //             style({ transform: 'translateX(-100%)' })
  //           )
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class AppComponent implements OnInit {
  faCompass = faCompass;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faGithub = faGithub;
  faYoutube = faYoutube;
  navBtn;
  sidelinks;
  clicked: boolean;

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    const header = document.getElementsByTagName('header')[0];
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        header.style.background = 'white';
        header.style.boxShadow = '0 3px 10px black';
      }
      else {
        header.style.background = 'none';
        header.style.boxShadow = 'none';
      }
    });
    document.addEventListener('ready', () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        header.style.background = 'white';
        header.style.boxShadow = '0 3px 10px black';
      }
      else {
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
      }
      else {
        this.navBtn.id = '';
        this.sidelinks.style.height = '0';
        this.sidelinks.style.opacity = '0';
      }
    });
    this.meta.updateTag({ name: 'robots', content: 'follow' });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['position'];
  }
}
