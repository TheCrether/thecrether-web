---
title: "Vortex"
date: "2020-07-08"
language: "TypeScript"
website: "https://github.com/SYP-DHIF17/ProjectManager"
desc: "A project management tool"
imgPath: "projects/vortex.png"
---

This post is about a project-management tool we built as a school project in our project management class.

## Why

The idea first came up when Martin ([@realSuffix][1]) and I talked about making an advanced todo list tool. We had a lot of ideas for it, but never actually realised them. Then, after entering third grade, we were confronted with finding a project that we could do as a team. This was for our project management class and because of that we had the idea to actually make something that we could use in practice and not only learn the theoritcal bits of working as a team etc.o

After agreeing to realise this, we got to work and took some ideas from the "advanced todo tool". We, of course, also wanted to have the features that actually have something to do with the topic project management.

## How

<div class="image">
<img src="/images/projects/vortex-figma.png" alt="Vortex Figma">
</div>

The frontend team consisted of [@elitru][5] & I. We started with a basic design in [Figma][2] with how we wanted the fundamental UI to look. You can see how that looked like in the screenshot above. We then decided on [Angular][3] because we had a lot of experience with it and also because the use of services for sharing data between components would be very fitting for this case.

At first, we wanted to do a lot more, but then we just removed a lot of functions to get the project ready in time for presenting it. [@elitru][5] built most of the "actual frontend" and I built most of the structure like models, the data & login service, etc.

<div class="image">
	<img src="/images/projects/vortex-erd.png" alt="Vortex ERD">
</div>

The backend team consisted of [@realSuffix][1] & [@eliaswil][6]. After some talking, they agreed on using the [actix][4] framework (Rust). The ERD for the database can be found in screenshot above. We, as a team, decided on the structure together since designing stuff like this is very hard as one or two persons and more input is always good to have. We also talked about what we all thought was needed in the models/tables, and agreed on it, but of course changed it during the course of the project multiple times.

The ERD for the database ended up being very much simplified because we did not have as much time as we anticipated because of corona and just did not put as much work into it as we wanted at the beginning. They split up their work pretty good.

We all did our part as a team and pretty much all talked about every decision together. I was the project lead and handled all the organisational stuff, like updating & sending our project manual to our professor and I also kept our professor updated through monthly project status reports.

## Conclusion

All in all, it was a very rewarding experience because we got to actually pick out a project for ourselves and create it in a professional way. However, the fact that we had to reduce our features by a far amount, made me a bit sad, but in the end it worked out. I don't think that we will be continuing this project, as we want to work on other stuff. You can find the source code on [Github][7] if you are interested. Thank you for reading!

[1]: https://github.com/realSuffix
[2]: https://figma.com
[3]: https://angular.io
[4]: https://github.com/actix
[5]: https://github.com/elitru
[6]: https://github.com/eliaswil
[7]: https://github.com/SYP-DHIF17/ProjectManager
