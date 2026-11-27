---
# HOW TO ADD AN EVENT
# 1. Copy this folder and rename it, e.g. src/content/events/devfest-dhaka-2026/
#    (folders starting with "_" are ignored, so remove the underscore)
# 2. Put the photos in the new folder (jpg, png or webp; any size, they are optimised automatically)
# 3. Fill in the fields below and list each photo
# 4. Commit and push to main. The site rebuilds and the event appears on /gallery.html
title: "DevFest Dhaka 2026"
date: 2026-12-05                 # YYYY-MM-DD; events are sorted newest first
location: "Dhaka, Bangladesh"
description: "One or two sentences about the event and your role (speaker, attendee, organiser...)."
photos:
  - src: ./01.jpg
    alt: "Moon speaking on stage about CI/CD pipelines"   # describe the photo (used by Google and screen readers)
    caption: "Talk: Zero-downtime deploys with Docker"     # optional, shown in the lightbox
  - src: ./02.jpg
    alt: "Group photo with the organising team"
draft: false                     # set true to hide the event without deleting it
---
