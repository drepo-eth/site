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
In combination with the trend to _DevSecOps_ this shows the growing importance
of this topic as well as the attention it is receiving.

<!-- SLSA -->
## Legacy Security

Coming back to the topic of software repositories, [SLSA](https://slsa.dev/) is
another initiative that focuses on tracking software artifacts along the
software supply chain.
Generally it provides significant improvements to the various steps in the
processes of creating, distributing and receiving artifacts that are used in
software projects.

But like other security solutions[^secSol] it is built upon trust models that
do not scale to the global level and the evolving world we live in.
SLSA Level 3 addresses _source and build platforms_ and defines that they have
to _meet specific standards_ so the _integrity_ of _provenance_ and other
artifacts is guaranteed.
This is basically a great idea.
However, the question is how _compliance_ with these standards is achieved.

[^secSol]: For example signing container images using Docker Content Trust and
  the certificate chains we use to secure the web are all good ideas that are
  fundamentally flawed.

This is where the authors of SLSA point to the ususal __[Compliance
Buzzwords](https://slsa.dev/spec/v0.1/levels#detailed-explanation)__,
_auditing_, _certifications_, and _ISO something_, to verify that repositories
and other infrastructure are safe to use.
Again, in a perfect world this would work fine.
But does a centralized trust model suffice?

Does an audit of a public software repository like the NPM Registry which is
operated by a privately held company guarantee that neither the repository nor
the people involved act maliciously?
What does such an audit actually mean as it is just a snapshot in time?
Who is this auditor and why should we trust them?
Why should you believe the word of _whoever_ on something that is happening
behind closed doors?

These are just some of the questions you should ask when you read such a
proposal.


## No Trust is Better Trust

It is the author's opinion that open source software development and the
software supply chain have reached a level of global, vital significance.
Hence, entrusting the management and ownership of essential elements to few entities

But having a driver's license does not stop anyone from driving too fast or
drunk.
