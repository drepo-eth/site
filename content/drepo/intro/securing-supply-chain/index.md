---
title: "Securing The Supply Chain"
date: 2022-08-22T19:38:57+02:00
draft: true
weight: 1020
menu:
  main:
    parent: intro
    weight: 20
---

<!-- broken supply chain -> chaos -->
## Clear and Present Danger to the Software Supply Chain

In general, any manipulation to any element of the software supply chain puts
the whole software ecosystem in danger and can cause serious damage.
This is not just limited to other software projects but also affects the real
world as basically everything and everyone is somewhat dependent of software in
our modern world.
This can range from the inconvenience of not being able to pay with your phone
to the catastrophic failure of essential infrastructure causing countless
deaths.

Besides you and me, big tech and governments around the world also realized
that software is important and that the software supply chain is fragile.
Thus, initiatives and programs, such as the [CVE](https://www.cve.org/) and the
[GitHub Advisory Database](https://github.com/advisories), were introduced to
coordinate and communicate security issues in libraries and applications.
To counter recent hacks and ransomware attacks the U.S. President also issued
an [executive
order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/)
to improve cybersecurity.
In combination with the trend to _DevSecOps_ this shows the growing  importance
of this topic as well as the attention it is receiving.

<!-- SLSA -->
## Example: SLSA

Coming back to the topic of software repositories, [SLSA](https://slsa.dev/) is
another initiative that focuses on tracking software artifacts along the
software supply chain.
Generally it provides significant improvements to the various steps in the
processes of creating, distributing and receiving artifacts that are used in
software projects.

But like other security solutions[^secSol] it is built upon trust models that
do not scale to the global level and the evolving world we live in.
