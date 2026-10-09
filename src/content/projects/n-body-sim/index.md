---
title: N-Body Simulation
summary: "Gravitational n-body simulator with a from-scratch initial-value-problem solver, fully accurate physical constants, using Win32/GDI+ rendering."
start: "2025-10"
end: "2025-11"
status: shipped
team: 2
role: UI and visual layer (including settings, modifying solver to take in the settings, etc.), pair-programmed the solver
stack: [C++, Win32, GDI+]
repo: https://github.com/Catpotato42/N-Body-Problem-2D-Collab
clips:
  - name: NBody-main2
    alt: TODO
  - name: NBody-main3
    alt: TODO
thumb: ./NBody-thumbnail.png
thumbAlt: "Three bodies, blue, green and red, on black, each trailing a looping curve that crosses the others."
cover: ./NBody-main1.png
coverAlt: "Simulation window with three bodies, blue, green and red, tracing orbit trails on a black background at frame 994 of 2000."
order: 1
---

From October to November 2025, I worked on a project with one other person that takes in various initial states of the N-Body problem and uses an
initial value problem solver created from scratch as well as the Win32 API library to return a visual simulation.

I created the UI and visual aspect and pair programmed on the algorithm, additionally tweaking it throughout my UI and user input process to do things like take in a relative speed. 
The simulation takes in real-world accurate values for mass, velocity,
and distances and uses an accurate gravitational constant. This means that simulations like the real behavior of earth and the moon (assuming a closed system) are possible.

The main limitation of this project is the speed that the output runs at, as I used built-in GDI+ graphics which use the CPU, not GPU to display frames. Note that the
GIFs below are sped up, with both being at around 2x speed. [github](https://github.com/Catpotato42/N-Body-Problem-2D-Collab)
