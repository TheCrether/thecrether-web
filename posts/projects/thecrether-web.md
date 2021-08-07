---
title: "TheCrether Web"
date: "2020-07-07"
language: "TypeScript"
website: "https://thecrether.at"
desc: "The website you are on right now :)"
imgPath: "projects/thecrether-web.png"
---

This is the story of how I got into the idea of making a personal website.

## Why

After making my first few websites, I wanted something to show off my "skills". I then proceeded to make my now ["old" website][1] and learned [Angular][2] through that.
Then at the beginning of this year, I decided that I want to/at least try to redesign my personal website every year.

## How

<div class="image">
<img src="/images/projects/thecrether-web-figma.png" alt="Figma Design">
</div>

For this year's website (2020), I started with a simple Figma sketch and figuring out the fonts to use. In the end I did not use the fonts that I selected because I found the fonts that were used in the [Next.js tutorial][3]. That brings me to the technologies used. This project is pretty much only Next.js with a modified config for optimizing images, using autoprefixer and using ts-paths (stuff like `@components` when importing).

I first did all of the [Next.js tutorial][3] and then thought about the structure of how I wanted to build the components/pages etc. At first I only thought about three pages, Homepage, Projects and About. After some thinking, I added the contact page a bit later.

In terms of keeping track of my ideas and issues that had to be fixed, I used Trello because I want to use it more to better organize my projects and always know if there is something to do. I just used basic labels for "TODO", "In Progress" and "Done" and also used the free Butler automation stuff.

Then it just came to thinking of ideas and implementing them. This happened in the span of around 3 weeks, I think. Most of the work at the beginning was foundational stuff and not really much content. One design feature that I found pretty cool, is on the [Projects page][4], and its a so-called "marquee" effect. Credit goes to [this article][5] written by Mary Lou on tympnanus.net.

One design aspect which was very important for me, was that there were not too many animations, but still some fancy animations. The last thing I want to talk about, is optimisation for the phone, which is just a must in my opinion. Websites that don't understand the importance of mobile layouts or the concept using space well (e.x sites that use only fixed values). That's why I used a lot of flexbox and relative values/flex-grow to make it as responsive as possible.

## Conclusion

This was another project which was very fun for me, especially because I just like designing in general. I had not designed on my own for a little more than half a year at that point and I liked it very much because I could incorporate everything that I wanted to. Hopefully I can keep up with redesigning my website every year because I already have a lot of ideas for the next one after seeing some very nice portfolios from other developers. Stay tuned!

[1]: https://github.com/TheCrether/thecrether-web/tree/2019
[2]: https://angular.io
[3]: https://nextjs.org/learn/basics/create-nextjs-app
[4]: /projects
[5]: https://tympanus.net/codrops/2020/03/31/css-only-marquee-effect/
