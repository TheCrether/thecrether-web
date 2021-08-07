---
title: "Cross Search"
date: "2020-06-17"
language: "Go"
website: "https://github.com/TheCrether/cross-search"
desc: "A cross-platform tool for searching desktop apps and more"
imgPath: "projects/cross-search.png"
---

This is my _temporarily_ failed attempt at making something like Finder/Spotlight from MacOS or [Ulauncher][1], but actually cross platform.

The screenshot you see above is one of the first designs that I had in mind for the launcher.

[Github Repo][1]

## Why did I want that

I wanted to make this because at the time, there was no cross platform solution for such application launcher (as far as I know there still isn't to this day).

## Why did I not make it until now

It's a petty excuse to procrastinate, but while programming it I got really mad. One day when I tried to run the app, I would just get Segmentation Faults for no reason.
I am pretty sure that you can guess when I got heated in the commit history haha.
After that I just was not motivated and even tried to fix it once but gave up really quickly.

In the end, I now use [Ulauncher][2] on Linux and the new [PowerToys Run][3] from Microsoft on Windows.

## How

At first I wanted to make it with Electron/React and TypeScript, but after I realized that I did not like how I had to get GTK icons in TypeScript, I switched to Golang.
The switch to Go had two reasons. Firstly, I wanted to learn Go and secondly, I really wanted to try out GTK.

Learning Go was a really pleasant experience and I really love the language now, but sadly I don't have that many use cases at the moment for it.<br />
GTK on the other hand, was a bit of a roller coaster for me. At first did not really understand how to read the documentation of GTK because it was really confusing for me, but after a while everything kinda fell into place and I knew my way around.

## Conclusion

I really want to continure this project, but at the moment I just have some higher priority stuff to work on.
It was a really fun experience learning Go and getting to know GTK a little bit.
I really liked the combination of both, since I liked how Go was structured and how GTK worked.

[1]: https://github.com/TheCrether/cross-search
[2]: https://ulauncher.io
[3]: https://github.com/microsoft/PowerToys
