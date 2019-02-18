import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  routerLinks: object[] = [{
    link: "/home",
    name: "Home"
  },
  {
    link: "/projects",
    name: "Projects"
  },
  {
    link: "/contact",
    name: "Contact"
  }
  ];

  title = '';

  ngOnInit(): void {
    const header = document.getElementsByTagName("header")[0];
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {

      }
    })
  }
}
