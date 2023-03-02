---
title: "Securing The Supply Chain"
description:
  "Many parts of the software ecosystem are based on legacy trust models. They
  are built on centralized, trusted parties that control critical systems.
  Decentralization and a trustless model could make these parts
  censorship-resistant, safe, and reliable for everyone"
tags:
  - "trust"
  - "trustless"
  - "certification"
  - "audit"
  - "censorship"
  - "censorship resistance"
  - "truth"
  - "cryptographic truth"
  - "safety"
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

In general, any manipulation of any element of the software supply chain puts
the whole software ecosystem in danger and can cause severe damage. This is not
limited to other software projects but also affects the real world as basically
everything and everyone is dependent on software in our modern world. This can
range from the inconvenience of being unable to pay with your phone to the
catastrophic failure of essential infrastructure, causing countless deaths.

Besides you and me, big tech and governments worldwide also realized that
software is essential and that the software supply chain is fragile. Thus,
initiatives and programs like the [CVE](https://www.cve.org/) and the
[GitHub Advisory Database](https://github.com/advisories) were introduced to
coordinate and communicate security issues in libraries and applications.
Furthermore, the U.S. President also issued an
[executive order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/)
to improve cybersecurity to counter recent hacks and ransomware attacks.
Combined with the trend towards _DevSecOps_, it shows the growing importance of
this topic and the attention it is receiving.

<!-- SLSA -->

## Legacy Security

Regarding software repositories, [SLSA](https://slsa.dev/) is another initiative
that focuses on tracking software artifacts along the software supply chain.
Generally, it provides significant improvements to the various steps of the
processes of creating, distributing, and obtaining artifacts that are used in
software projects.

But like other security solutions[^secSol], it is built upon trust models that
do not scale to the global level and our evolving world. SLSA Level 3 addresses
_source and build platforms_ and defines that they must _meet specific
standards_, guaranteeing the _integrity_ of _provenance_ and other artifacts.
This is basically a great idea. However, the question is how _compliance_ with
these standards is achieved.

[^secSol]:
    For example, signing container images using Docker Content Trust and the
    certificate chains we use to secure the web are all good ideas that are
    fundamentally flawed.

This is where the authors of SLSA point to the usual
**[Compliance Buzzwords](https://slsa.dev/spec/v0.1/levels#detailed-explanation)**,
_auditing_, _certifications_, and _ISO-Something_, to verify that repositories
and other infrastructure are safe to use. Again, in a perfect world, this would
work fine. But does a centralized trust model suffice?

Does an audit of a public software repository like the NPM Registry, a system
operated by a privately held company, guarantee that neither the repository nor
the people involved act maliciously? What does such an audit signify, as it is
just a snapshot in time? Who is this auditor, and why should we trust them? Why
should you believe the word of _whoever_ on something happening behind closed
doors?

These are just some of the questions you should ask when you read such a
proposal.

{{< image-svg src="chain-of-trust.excalidraw.svg" alt="The chain of trust model" caption="The chain of trust model. But who are these guys? Your browser trusts the root, so they must be good guys." >}}

## No Trust is Better Trust

### Trust in Few

The authors believe open-source software development and the software supply
chain have reached _global and vital significance_. Hence, entrusting the
management and ownership of essential elements to a few entities is inherently
risky. Individuals, companies, and governments will eventually pursue their
interests and take advantage of their positions, leaving the community with a
broken or compromised system.

> The proper, uninterrupted operation of all software supply chain elements
> supersedes all other interests[^interests] and must be guaranteed under all
> circumstances.

[^interests]:
    This does not necessarily include human rights violations or the direct
    endangerment of individuals. However, corporate greed, political
    suppression, limiting the freedom of speech, and the like cannot be allowed.

Removing the component of trusting in people and institutions to prevent the
misuse of power is imperative. It provides the bases of a system that cannot be
compromised by some party to enforce their agenda on everyone.

### Trust Reduction

_Democratic systems_ try to remove the power from the hands of the few and give
every participant a voice in the decision-making process. Real-world
adaptations, however, still centralize power and are, as we all know, flawed.
Moreover, corruption and manipulation in politics are not just the stuff that
makes incredible books and movies but is very real and even partially legalized
through, for example, lobbying.

<!-- TODO remove or revise? -->

{{< image-svg src="modern-democracy.excalidraw.svg" alt="Modern democracy" caption="In a democracy, the elected officials do not always act in the people's interest but are under constant influence from other parties." >}}

The trust models we commonly use were created when there was no internet.
However, instant global communication and modern cryptography allow the creation
of new models suitable for the current state of the world.

We envision a _trustless_ system built upon basic rules we all can agree on. It
fulfills its functionality, nothing more and nothing less. By being _axiomatic_,
simple, and versatile, it is a building block for larger systems.

A modern software repository must be just that, a software repository. It holds
and serves software artifacts to anyone worldwide, with no exceptions. Likewise,
anyone can add new software without the approval of an administrator. It is a
system that is reliable in terms of its service. Individuals, companies, or
governments cannot censor or modified it.

Decentralized systems can provide these properties. We propose a software
repository built upon modern decentralized technologies and mindsets. It is
driven and secured by its user community and cannot be compromised.
_Cryptographic truth_ and _immutable code_ replace the need for trusted parties
to uphold the systems' rules. A decentralized repository (**dRepo**) provides
security along the whole supply chain, from software development over software
distribution to software execution.