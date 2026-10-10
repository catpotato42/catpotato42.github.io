---
title: Valorant Overlay
summary: "Borderless always-on-top overlay that detects kills and weapon swaps by sampling screen pixels twice a second."
start: "2026-01"
end: "2026-02"
status: shipped
team: solo
stack: [C#, .NET]
repo: https://github.com/Catpotato42/valorant-cosmetic-overlay
video: https://youtu.be/ESXkvh8fS-U
cover: ./valorant-overlay-main.png
coverAlt: "Valorant shooting range with the overlay on top: outlined regions labeled Kill Banners, Animation and Weapon Icons, and a small blue character sitting on the gun."
order: 4
---

From January to February 2026, I worked on an overlay program in C# for Valorant that responds to in game events.

Using the basic functions of C# .NET, I created a borderless window that sits on top of Valorant, checking every half second for a line of pixels matching colors that show up in a specific region 
when the user gets a kill or switches weapons.

[youtube video showcase](https://www.youtube.com/watch?v=ESXkvh8fS-U)
