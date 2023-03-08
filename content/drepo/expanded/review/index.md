---
title: "Review Network"
description:
  "Software reviews are required to determine if it is safe to use them.
  However, this is immensely work-intensive as all transitive dependencies must
  also be reviewed. A decentralized, anonymous review network can help steer
  community attention to essential projects. It creates community oversight and
  automatically assigns paid reviews to underappreciated projects."
tags:
  - "review"
  - "audit"
  - "verify"
  - "incentives"
  - "CVE"
  - "security"
  - "attention"
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
users to verify and review the code of a given artifact. This information lets
users determine whether a software package is safe to use. The author's and the
project's reputation consequently becomes less significant in this decision.

However, reviewing each piece of software is even more tedious and
resource-intensive than verifying each build. While builds can be automatically
verified, reviewing code is, for the most part, still a task that requires human
work. Tools incorporating static analysis or even AI might support users in this
endeavor but provide incomplete results if used alone. This holds especially
true when analyzing a software's logic or larger context, as its intent is often
not apparent to such tools. The problem becomes exponentially more complex when
transitive software dependencies must also be reviewed.

## Current Review Ecosystem

Professional review and source code auditing is currently a growing industry as
security becomes an ever more important topic. In addition, the rising number of
ransomware and phishing attacks force non-IT companies and even individuals to
ramp up their security game.

Within the open-source software community, users and contributors implicitly
review large projects like [react](https://github.com/facebook/react "react") or
the [Linux Kernel](https://kernel.org/ "Linux Kernel"). Many people monitor all
changes to these code bases. This is not a proper, complete review compared to a
paid audit. However, due to the committed and engaged user base, errors and
especially malicious code have a high chance of being detected early. Smaller
open-source projects and closed-source projects with a few or even only a single
contributor do not enjoy this kind of community oversight. Thus, the chance of
rolling out flawed or even malicious changes increases. This problem becomes
significant if many users and other software depend on this given project.
History has shown that some of the most used software packages are maintained by
one a single person.[^heartbleed]

[^heartbleed]:
    The OpenSSL library was a good example;
    [read more](https://it.slashdot.org/story/14/05/03/0129250/free-can-make-you-bleed-the-underresourced-open-source).

Besides paid and voluntary audits,
[bug bounties](https://en.wikipedia.org/wiki/Bug_bounty_program "Bug Bounty Program")
have become increasingly popular over the past years. They offer
[white hat hackers](<https://en.wikipedia.org/wiki/White_hat_(computer_security)> "White Hat")
the opportunity to find vulnerabilities and to get paid for reporting them.
Furthermore, this concept incentivizes a constant stream of code and penetration
testing which helps secure applications against new attack vectors and might
discover flaws that were simply overlooked previously.

## Community Reviews

### Fundamentals

Like the _Build Verification Network_, a system is needed to coordinate and
manage code reviews throughout the software ecosystem. It has to aggregate
reviews and present them to users, so they can decide whether or not a piece of
software might be dangerous. As code reviews are tasks that have to be performed
by humans, possible automation is only limited. Consequently, the system has to
incentivize and oversee the work that has to be done.

Furthermore, transitive dependencies must be accounted for as the goal is to
eventually only use fully reviewed applications. This transitive relationship
means that a review of a top-level application requires reviews of all of its
dependencies. Software packages used by many other libraries or applications
consequently call for more attention as flaws could potentially harm a more
extensive set of the ecosystem.

<!-- TODO move illustration from build verification? -->

### Encouragement

Generally, reviews of or issue reports concerning a piece of software are either
provided by volunteers who encounter a problem by chance or by reviewers and
auditors who were instructed or encouraged to analyze the code. The latter ones
are most likely specifically paid or otherwise incentivized to do this work.
Therefore, we will further address them as _voluntary reviews_ and _assigned
reviews_.

Within a new _Review Network_, both of these types of reviews essentially need
to be incentivized to encourage people to examine projects. This increases the
chances of finding all valid issues. Specifically, the concept of bug bounties
should be a driving factor. The [next
chapter]({{< ref "/drepo/expanded/incentives" >}} "Incentives") will address the
question of where these incentives should come from.

As stated before, the amount of attention a project receives from community
members varies. At the same time, this attention might diverge from its
utilization within the community. Therefore, this kind project is especially
needs more and constant reviews.

{{< image-svg
src="project-attention.excalidraw.svg"
alt="Project Attention"
caption="Project Attention: Popular top-level projects are used directly by many developers. They track the latest changes and contribute bug fixes and new features. Smaller projects that are often dependencies of other systems often have a lower number of contributors. The software community as a whole pays less attention to them even though many projects are built on top of them." >}}

One of the missions of the new system is to delegate code reviews towards
critical software which is not sufficiently verified. This could be achieved by
introducing or increasing bug bounties, which drive volunteers towards a
project, and by automatically contracting suitable reviewers to analyze the code
in an assigned review.

As the network should consist of independent and anonymous participants, a trust
relationship cannot be established, as found in traditional auditing.
Furthermore, the work put into reviewing software is hard to verify and
quantify, especially in the described environment. Thus, only submitted review
results can be considered to measure a participant's work. This is a problem as
the absence of issues is also a valid work result that should be rewarded.

Multiple additional reviews have to be conducted to check the reviewers'
results. Reported issues must be verified by various other community members and
possibly the authors. Several assigned reviews must be completed in parallel.
This reduces the risk of copying the results and keeps participants honest, as a
stark difference in valid findings might suggest some sort of manipulation or
lacking work engagement. In general, any found issues and created reports must
be reviewed by a random set of other participants before a decision can be made
to accept them. On top of this, even these reviews of reviews have to be
re-examined. This creates a layered web of verification and community oversight
which eventually finds all valid flaws in a given project, reducing the number
of issues with each iteration.

{{< image-svg
src="layered-reviews.excalidraw.svg"
alt="Layered Reviews"
caption="Layered Reviews: Several reviews are conducted in parallel to reduce the amount of cheating. The results must again be reviewed to verify the detected flaws and to find issues that were missed in previous iterations. This process has mutliple iterations and must be regularly repeated to ensure high quality results. All valid results are eventually aggregated and presented to the users for them to decide if a software is safe." >}}

A concrete system must be defined and tested by the community. As such a system
tries to delegate human work, a 100% certainty can never be achieved. The goal
is to steer attention to where it is needed and represent the findings in the
open for all to see.

## Expanded Focus

Initiatives like the
[CVE Program](https://cve.mitre.org/ "Common Vulnerabilities and Exposures") and
the
[GitHub Advisory Database](https://github.com/advisories "GitHub Advisory Database")
are great systems that should be incorporated into a new _Review Network_. Even
though they are public databases, tracked, viewed, and mirrored by
millions of users, they are still centralized-hosted and managed.
Especially the CVE might be under pressure in certain circumstances as the
non-profit behind it is at least partially state-sponsored by the US government.
Automating and decentralizing this information in a trustless way is an
integral part of the new system.

Furthermore, the abovementioned initiatives concentrate on propagating
security issues within software packages. The new _Review Network_, however, has
an expanded focus. Besides pressing security issues, potential non-code
issues, malicious and non-community-friendly behavior, and general correctness
are in the spotlight of reviews. For example, storing more personal information
than absolutely necessary for an application, storing data that is insufficiently
encrypted or viewable by third parties, gathering additional data without
consent or an opt-out feature, or prohibiting interoperability are issues that
should be flagged.

The severity of issues should play a factor in the denomination of incentives to
be paid out.