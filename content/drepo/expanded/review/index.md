---
title: "Review Network"
date: 2023-01-23T13:12:56+01:00
draft: false
weight: 5030
menu:
  main:
    parent: expanded
    weight: 5030
---

## Wanted: Reviewed Source Code

<!-- TODO what is a review in the current context?-->

As discussed in the [previous
chapter]({{< ref "/drepo/expanded/build-verification" >}} "Build Verification"),
the source code of a project is the _single point of truth_. _Reproducible
Builds_ definitively connect the source code to a build artifact. This allows
users to verify and review the code of a given artifact. Based on this
information users can determine whether or not a software is safe to use. The
reputation of the author and the project consequently becomes less significant
in this decision.

<!-- reproducible builds are center stage -->
<!-- the source code becomes the single point of truth -->
<!-- the represents the software people are looking for -->
<!-- authors and the publication of build artifacts becomes less significant -->

However, reviewing each piece of software is an even more tedious and resource
intensive task than verifying each build. While builds can be automatically
verified, reviewing code is for the most part still a task which requires human
work. Tools that incorporate static analysis or even AI might support users in
this endeavour, but they provide incomplete results if used by themselves. This
holds especially true when analyzing the logic or the larger context of a
software as its intent is often not obvious to such tools. The problem becomes
exponentially harder when transitive software dependencies have to be reviewed
as well.

## Current Review Ecosystem

Professional review and auditing of source code is currently a growing industry
as security becomes an ever more important topic. The rising number of
ransomware and phishing attacks force non-IT companies and even individuals to
ramp up their security game.

Within the open source software community large projects like
[react](https://github.com/facebook/react "react") or the
[Linux Kernel](https://kernel.org/ "Linux Kernel") are implicitly reviewed by
their users and contributors. A large number of people 'monitor' all changes to
the code base. This is not a proper, complete review compared to a paid audit.
However, due to the committed and engaged user base errors and especially
malicious code have a high chance of being detected early. Smaller open source
projects and closed source projects with a few or even only a single contributor
do not enjoy this kind of community overview. Thus, the chance of rolling out
flawed or even malicious changes increases. This problem becomes significant if
a large amount of users and other software depend on this given project. History
has shown that some of the most used software packages are maintained by one a
single person.[^heartbleed]

[^heartbleed]:
    The OpenSSL library was a good case,
    [read more](https://it.slashdot.org/story/14/05/03/0129250/free-can-make-you-bleed-the-underresourced-open-source).

Besides paid and voluntary audits
[bug bounties](https://en.wikipedia.org/wiki/Bug_bounty_program "Bug Bounty Program")
have become increasingly popular over the last years. They offer
[white hat hackers](<https://en.wikipedia.org/wiki/White_hat_(computer_security)> "White Hat")
the opportunity to find vulnerabilities and to get paid for reporting them. This
concept incentivizes a constant stream of code and penetration testing which
helps to secure applications against new attack vectors and might discover flaws
that were simply overlooked before.

<!-- unlike build verification, source code still needs human reviews to catch bugs, especially at larger scopes and contexts -->
<!-- static analysis and other automated tools, even with ai are not sufficient -->
<!-- thus (professional) reviews are needed especially for critical applications -->
<!-- and again, transitive dependencies are essential elements on which larger projects are built on -->

<!-- code of large projects is under 'implicit' review by all of their users, they vet commits, contribute code etc. -->
<!-- smaller projects are sometimes only maintained by just a couple of people max, they don't receive these kind of reviews and attention but are used in some major projects -->

<!-- as security becomes ever more important, bug bounties and security engineers become a valid 'thing' -->
<!-- bug boundty programs by companies or projects like immunify or code4arena become popular. -->

<!-- all projects that are actually in use by a lot of people need (constant) reviews -->
<!-- current programs are voluntary or somehow organized by the authors, also the efforts that are invested in reviews do not mirror the importance of a given project within a ecosystem -->

## Community Reviews

### Fundamentals

Similar to the _Build Verification Network_ a system is needed which coordinates
and manages code reviews throughout the software ecosystem. It has to aggregate
reviews and present them to users so they can make a decision on whether or not
a piece of software might be dangerous. As code reviews are tasks which have to
be performed by humans, possible automation is only limited. Consequently, the
system has to incentivize and oversee the work that has to be done.

Furthermore, transitive dependencies must be accounted for as the goal is to
eventually only use fully reviewed applications. This transitive relationship
means that a review of a top-level application requires reviews of all of its
dependencies. Software packages which are used by a lot of other libraries or
applications consequently call for more attention as flaws could potentially
harm a larger set of the ecosystem.

### Encouragement

In general, reviews of or individual issues for a piece of software are either
provided by volunteers, who basically encounter a problem by chance, or by
reviewers and auditors, who were instructed or encouraged to analyze the code.
The latter ones are most likely specifically paid or otherwise incentivized to
do this work. We will address them as _voluntary reviews_ and _assigned reviews_
further on.

Within a new _Review Network_ both of these types of reviews essentially need to
be incentivized in order to encourage people to examine projects. This increases
the chances of finding all valid issues. The concept of bug bounties should be a
driving factor. The question, where these incentives should come from, will be
addressed in a [later chapter](TODO).

As stated before, the amount of attention a project receives by community
members varies. At the same, this attention might diverge from its utilization
within the community. Therefore, these kind of projects are especially in need
of more and constant review.

One of the missions of the new system is to delegate code reviews towards
critical software which is not sufficiently verified. This could be achieved by
introducing or increasing bug bounties, which drives volunteers towards a
project, and by automatically contracting suitable reviewers to analyze the code
in an assigned review.

As the network should consist of independent and anonymous participants, a trust
relationship, like it is found in traditional auditing, cannot be established.
Furthermore, the work of reviewing software is hard to verify and quantify,
especially in the aforementioned environment. Thus, only the review results a
participant submits can be used to measure their work. This is a problem as the
absence of issues is also a valid work result which should be rewarded.

In order to somewhat check the results of reviewers, multiple additional reviews
have to be conducted. Reported issues have to be verified by multiple other
community members and possibly the authors. Multiple assigned reviews must be
conducted in parallel. This reduces the risk of copying the results and keeps
participants honest as a stark difference in valid findings might suggest some
sort of manipulation or insufficient work engagement. In general, any found
issues and created reports have to be reviewed by a random set of other
participants before a decision can be made to accept them. On top of this, even
these reviews of reviews have to be reexamined. This creates a layered web of
verification and community oversight which is eventually able to find all valid
flaws in a given project.

A concrete system must be defined and tested by the community. As such a system
tries to delegate human work, a 100% certainty can never be achieved. It is the
goal to steer attention to where it is needed and to represent the findings in
the open for all to see.

## Expanded Focus

Initiatives like the
[CVE Program](https://cve.mitre.org/ "Common Vulnerabilities and Exposures") and
the
[GitHub Advisory Database](https://github.com/advisories "GitHub Advisory Database")
are great systems that should be incorporated in a new _Review Network_. Even
though they are public databases which are tracked, viewed and mirrored by
millions of users, they are still somehow centralized hosted and managed.
Especially the CVE might be under pressure in certain circumstances as the
non-profit behind it is at least partially state-sponsored by the US government.
Automating and decentralizing this information in a trustless way is an
important part of the new system.

Furthermore, the aforementioned initiatives concentrate on the propagation of
security issues within software packages. The new _Review Network_ however has
an expanded focus. Besides pressing security issues, also potential non-code
issues, malicious and non-community friendly behaviour, and general correctness
are in the spotlight of reviews. For example, storing more personal information
than absolutely necessary for an application, storing data insufficiently
encrypted or viewable by third parties, gathering additional data without
consent or opt-out feature, or prohibiting interoperability are issues that
should be flagged.

The severity of issues should play a factor in the denomination of incentives to
be paid out.

<!-- creation of a system or network which allows everyone to contribute to the security of software while sharing the efforts with dependencies -->
<!-- inventivization of finding errors and bugs not only in top level projects but also their transitive dependencies -->
<!-- shared dependencies will receive higher amount of attention than before -->

<!-- reviews from volunteers (free?/bounty?) and 'contracted' peers (incentivized) are aggregated -->
<!-- multiple contracted peers are selected randomly to review a piece of code/new release -->
<!-- they need to be qualified, e.g. know the language or/and know project, topic/industry -->
<!-- must submit report containing bugs,flaws,security issues, etc if any found and work done: scans + reports -->

<!-- the results of reviews: flaws, bugs, errors, security issues, must (eventually) be shared in public and attached to releases -->
<!-- CVE and similar initiatives already do this, but it is still somewhat centralized and only focused on security issues -->

<!-- it is up to the community to find or build a system that works -->
