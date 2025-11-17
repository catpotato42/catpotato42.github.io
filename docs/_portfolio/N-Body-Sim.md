---
layout: post
title:  "N-Body Simulation - Third Project"
thumbnail: /assets/img/NBody-thumbnail.png
---

From October to November 2025, I worked on a project with one other person that takes in various initial states of the N-Body problem and uses an
initial value problem solver created from scratch as well as the win32 API library to return a visual simulation.

I created the UI and visual aspect and tweaked the algorithm throughout to do things like take in a relative speed. 
The simulation is as realistic as possible, and takes in real-world accurate values for mass, velocity,
and distances and uses an accurate gravitational constant. This means that simulations like the real behavior of earth and the moon (assuming a closed system) are possible.

The main limitation of this project is the speed that the output runs at, as I used built-in GDIplus graphics which use the CPU, not GPU to display frames. Note that the
GIFs below are sped up, with both being at around 2x speed. [github](https://github.com/Catpotato42/Three-Body-Problem-2D-Collab)

<div class="gif-row">
  <img src="/assets/img/NBody-main1.png" alt="">
  <img src="/assets/img/NBody-main2.gif" alt="">
  <img src="/assets/img/NBody-main3.gif" alt="">
</div>
