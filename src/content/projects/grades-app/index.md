---
title: Grades App
summary: "Mobile grade tracker with what-if grades, Dashboard, weighted grade calculation, GPA, reminders and notifications."
start: "2026-03"
end: "2026-05"
status: shelved
team: solo
stack: [TypeScript, React Native, Expo, Canvas REST API]
repo: https://github.com/catpotato42/grades-app
cover: ./dashboard.png
coverAlt: "Grades App dashboard for Spring 2026: six course cards colour-coded by grade, from a green A- down to a red F and a grey course with no grade posted."
shots:
  - src: ./dashboard.png
    alt: "Dashboard for Spring 2026: six course cards colour-coded by grade, from a green A- down to a red F and a grey course with no grade posted."
  - src: ./what-if.png
    alt: "A course page with a what-if assignment added, showing the projected grade change."
  - src: ./assignments.png
    alt: "Assignment list for a course, each row showing score out of total points and its category."
  - src: ./gpa.png
    alt: "GPA calculator with per-course inclusion toggles and a weighted and unweighted switch."
  - src: ./reminders.png
    alt: "Reminders tab listing upcoming assignments by due date with per-assignment lead times."
  - src: ./notification.png
    alt: "Lock screen banner over the dashboard reading Assignment Due, Final Practical is due in 60 minutes."
  - src: ./archive.png
    alt: "Archive tab grouping past courses by term, each row colour-coded with its final letter grade."
  - src: ./settings.png
    alt: "Settings tab with accessibility, reminder and customization toggles, including a default reminder warning of 60 minutes."
order: 2
draft: false
---

I wrote this grades app as a more user-friendly layer on top of any existing grading system, because as a student there were some features the canvas mobile app lacked that I liked. It includes what-if grades, what-if gpa, reminders for assignments due in x minutes, user customization of those features, and more.

However, I was unfortunately unable to get a developer key from canvas, skyward or any other platform or school district I reached out to, which killed it. In the future I might try scraping the data, as many learning management systems have poorly reviewed apps, but for now it's shelved to focus on other projects.
