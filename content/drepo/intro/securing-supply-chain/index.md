---
title: "Securing The Supply Chain"
date: 2022-08-22T19:38:57+02:00
draft: false
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

### Trust in Few

It is the authors' opinion that open source software development and the
software supply chain have reached a level of _global, vital significance_.
Hence, entrusting the management and ownership of essential elements to few
entities is inherently risky.
Individuals, companies, and governments will eventually pursue their own
interests and take advantage of their positions leaving the community with a
broken or compromised system.

> The proper, uninterrupted operation of all software supply chain elements
> supersedes all other interests[^interests] and must be guaranteed under all
> circumstances.

[^interests]: This does not necessarily include human rights violations or the
  direct endangerment of individuals. However, corporate greed, political
  suppression, the limitation of the freedom of speech and the likes cannot be
  allowed.

Removing the component of trusting in people and institutions to prevent the
misuse of power is a necessary action.
It provides the bases of a system that cannot be compromised by some party to
enforce an agenda on everyone.

### Trust Reduction

_Democratic systems_ try to remove the power from the hands of the few and give
every participant a voice in the decision making process.
Real world adaptations, however, still centralize power and are, as we all
know, not flawless.
Corruption and manipulation of politics are not just the stuff that makes great
books and movies but are very real and even partially legalized through for
example lobbying.

The trust models we commonly use were created when there was no internet.
Instant global communication and modern cryptography allow the creation of new
models that are suitable for the current state of the world.

We envision a _trustless_ system built upon basic rules we all can agree on.
It fulfills its functionality, nothing more and nothing less.
By being _axiomatic_, simple, and versatile it is a building block for larger
systems.

A modern software repository must be just that, a software repository.
It holds and serves software artifacts to anyone in the world, no exceptions.
Likewise, anyone can add new software without approval of an administrator.
It is a system that is reliable in terms of the service it provides.
It cannot be censored or modified by individuals, companies, or governments.

Decentralized systems can provides these properties.
We propose a software repository that is built upon modern decentralized
technologies and mindsets.
It is driven and secured by its user community and cannot be compromised.
_Cryptographic truth_ and _immutable code_ replace the need for trusted parties
who have to uphold the rules of the system.
A dezentralized repository (__dRepo__) provides security along the whole supply
chain, from software development over software distribution to software
execution.
