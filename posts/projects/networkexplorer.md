---
title: "NetworkExplorer"
date: "2021-08-06"
language: "TypeScript"
github: "https://github.com/NetworkExplorer"
desc: "A project for my 4th grade programming class"
imgPath: "projects/networkexplorer.png"
---

[NetworkExplorer][1] is a tool made to be used in the home network. It is like a NAS interface but open-source and can be run on basically any computer. It was done within the scope of my programming class in my 4th year at HTBLA Kaindorf, but I also spent a lot of time on it outside of school.

The web interface and design is my work, but every amazing user interface needs a well-designed backend. Since this was a team project, my great friend and school colleague Adrian ([@0Adiber][2]) created the server behind it. I will focus on the frontend of the application, since I almost exclusively worked on it.

The project is split up into two repositories, one for the [frontend][1] and one for the [backend][3]. This made it far easier to manage the code and track which person made what changes.

## Project Management

One of the important parts of the project was project management. We were required to use the [SCRUM](https://en.wikipedia.org/wiki/Scrum_(software_development)) framework for organising all tasks that had to be done and were free to choose how long our sprint cycles were.

<div class="image">
<img src="/images/projects/networkexplorer_trello.png" alt="NetworkExplorer Trello board">
</div>

In order to apply the SCRUM techniques we learned in school, we used [Trello](https://trello.com/). We started off with a [Kanban template](https://trello.com/templates/engineering/kanban-template-LGHXvZNL) which did not really fit for SCRUM, but we kept the idea for the card covers (Git, Design etc.) because we thought that it added a nice flair. Above, you are able to see how our board looks after we "completed" our project and presented it to our class.

## Functionalities & Design

After settling on the project idea, we were tasked to make a list of functionalities, which consisted of

- typical file operations (move, delete, upload etc.),
- navigation through folders,
- editing of text files,
- dragging and dropping of files/folders,
- executing commands in a (SSH) terminal and
- user management (admin, non-admin etc.)

We accomplished all the tasks listed above and even added some extra features like a "search box" for folder paths. One of the first tasks I did was, of course, setting up the frontend and creating some basic mockups of how I wanted things to look. For this, I used my favourite design tool, [Figma](https://figma.com).

<div class="image">
<img src="/images/projects/networkexplorer_figma.png" alt="NetworkExplorer Figma Design">
</div>

## Technologies

At first, I was keen on trying out a new web framework, but I did not find any interesting framework, so I chose my (at the time of writing) favorite combo, [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org). I chose [Redux](https://redux.js.org/) for state management because I already used it for one of my other school projects, [TermFTP][4]. Here, I made it my goal to have correct type definitions for good TypeScript support, which actually took around two hours to setup (with tutorials ^^). This was made a bit harder because I use [Redux Thunk](https://github.com/reduxjs/redux-thunk) for asynchronous requests (i.e. API calls).

Since at least one part of the project had to be written in Java, [Adrian][2] decided to use [Spring Boot](https://spring.io/projects/spring-boot) to build the API. He also implented testing for most of the available endpoints with [JUnit](https://junit.org/junit5/).

## What we accomplished

We basically accomplished all the functionalities detailed before, except for one. This one is the "executing commands in a terminal", at least not fully because we were not able to spawn interactive shells in Java, which meant that we were only able to mimic SSH functionality by sending a command and receiving the response line by line (still asynchronous though). Some of the other features were easy to implement, since I already had a strong foundation for displaying files and implementing navigation between folders from [TermFTP][4].

Still, I was able to also learn alot, especially when creating more accessible web applications.

## Screenshots

I also took additional screenshots of the interface, highlighting the file list itself and the searchbox at the top.

<div class="image">
<img src="/images/projects/networkexplorer_file-list.png" alt="NetworkExplorer File List">
</div>

<div class="image">
<img src="/images/projects/networkexplorer_search-box.png" alt="NetworkExplorer Search Box">
</div>

[1]: https://github.com/NetworkExplorer/frontend
[2]: https://github.com/0Adiber
[3]: https://github.com/NetworkExplorer/backend
[4]: /projects/termftp
