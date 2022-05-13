---
title: "TermFTP"
date: "2021-09-10"
language: "TypeScript"
github: "https://github.com/TermFTP"
desc: "A modern and intuitive FTP + SSH client"
imgPath: "projects/termftp/termftp.png"
---

<div class="image image-logo">
<img src="/_next/image?url=%2Fimages%2Fprojects%2Ftermftp%2Ftermftp_logo.png&w=128&q=100" alt="TermFTP logo" />
</div>

TermFTP is primarily a FTP client with a full SSH client included. We started it as a school project for our project management class. Since you might wonder who "we" is, the project team consists of [@0Adiber][1], [@eliaswil][2] and [@3keeksi][3] and myself.

The application is split up into frontend and backend. [@0Adiber][1] and me created the [client][4] itself, and [@eliaswil][2] and [@3keeksi][3] developed the [API][5] for it.

The main reason we came up with this idea because we do not like the design of current FTP clients. Of course, we also wanted to stand out, which is why we included a SSH client out of the box.

## Project Management

We are required to use the [SCRUM](https://en.wikipedia.org/wiki/Scrum_(software_development)) framework for project management, since this project was done for our project management class. We were able to choose the length of our sprint cycles, and settled on four weeks.

<div class="image">
<img src="/images/projects/termftp/termftp_trello.png" alt="TermFTP Trello" />
</div>

In order to apply the SCRUM techniques we learned in school, we used [Trello](https://trello.com). We did not use a template, but we used automation for applying labels and adding due dates on cards ([Butler](https://trello.com/en/butler-automation)).

## Functionalities

The two main problems TermFTP solves is:

* having a modern FTP client
* being able to combine SSH and FTP

Of course, that is not all, since you can securely sync passwords/server information between devices, have a mouse-free poweruser experience and customise the user interface (the last two still being WIP as of 27th October 2021 ^^). That also makes us stand out, since almost none of the popular FTP clients have this kind of feature set.

## What we accomplished

We were able to finish most of the functionalities we wanted to achieve, but we decided to continue the project in our next school year (2021/22), where we want to implement:

* customisability of the user interface
* more keyboard shortcuts

For the second schoolyear, only [@0Adiber][1] and I will continue working on the project.

[1]: https://github.com/0Adiber
[2]: https://github.com/eliaswil
[3]: https://github.com/3keeksi
[4]: https://github.com/TermFTP/TermFTP-Client
[5]: https://github.com/TermFTP/TermFTP-API
