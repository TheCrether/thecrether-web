---
title: "Clockly"
date: "2020-07-03"
language: "TypeScript"
desc: "A time management tool"
imgPath: "projects/clockly.png"
---

# Clockly

This project rose in the adventures of "corona-time" where we had to track how much work we put in during a week of school.
The screenshot you see above is the design of the dashboard at the time of writing this. This project is not online at the moment and we do not plan on putting it online.

There were 3 contributors to this project (including me): [@realSuffix][1] (backend), [@elitru][2] (frontend) and I (also frontend).
The backend was made with [actix][3] (Rust) and the frontend was made with [Angular][4].

## Why did we make Clockly

At the time, we had to write down the time we worked on school stuff. That made us think and we had the idea of building a time-management tool. We designed our desired database structure and after we were happy with it, we started developing. We were so motivated that we were "finished" in about five days. After that we asked for feedback in our school discord and started fixing some bugs.

## How

![Clockly ERD](/images/projects/clockly-erd.png)

Normally this is the final version of the ERD diagram for the database structure, but I'm not so sure about the properties for the different tables.
During the development of this project, we had the fun of working with time zones and had to think about how to send & receive dates. I learnt about a new way of managing data in an Angular application.

The frontend was pretty straight forward most of the time. After putting a lot of effort into parsing the data in the right way and thereby getting the chart to work (in screenshot), I had the fun of optimising all the CSS [@elitru][2] had written because he used fixed values (I'm still triggered about it to this day).

In the backend, [@elitru][2] and I helped [@realSuffix][1] with the SQL scripts and sometimes with the thought process in the backend.

## Conclusion

For me, this project was a lot of fun because I got to work "side by side" with my friends and school colleagues. Other than that, it was a really rewarding experience in terms of learning a new way of how to share data between components/routes and also sparking my interest for Rust.

Sadly, we do not plan on continuing any work on this project, but I will look into making the repository public.

[1]: https://github.com/realSuffix
[2]: https://github.com/elitru
[3]: https://github.com/actix
[4]: https://angular.io
