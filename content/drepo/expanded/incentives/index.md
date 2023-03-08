---
title: "Incentives"
description:
  "While the core of the decentralized repository is community-driven, the
  review and build verification networks require funding to entice people to
  participate. Driven by witnessable apps, a top-down approach will distribute
  funding for verification and review of business applications towards open
  source projects."
tags:
  - "incentives"
  - "attention"
  - "money"
  - "funding"
  - "distribution"
  - "opnness"
  - "open source"
  - "witnessable apps"
date: 2022-08-24T17:33:48+02:00
draft: false
weight: 5070
menu:
  main:
    parent: expanded
    weight: 5070
---

## The Core is Free

The _core_ of the decentralized repository operates for free or at a minimal
cost compared to current systems. This is based on the approach of voluntary
participation and the general incentives that come from contributing. For
instance, hosting a blockchain node creates incentives in the form of
cryptocurrencies, while sharing data on p2p networks allows users access other
data faster and more resiliently. In addition, hosting artifacts on centralized
infrastructure like a project's website only calls for a limited amount of
resources using today's hosting services.

On the other hand, sizable centralized software repositories often require the
usage of paid cloud services, server hosting, or dedicated hardware. This
creates high costs for the operator of a given repository which they have to
cover either by asking for donations, much like Wikipedia does, or by selling
services and products complementing the repository.

## Work Costs Money

The _expanded repository's_ ecosystem elements however are dependent on
participants to invest computing power and their work. Both are not free on the
open market, and not everybody wants to commit too much energy without
compensation, not even for a good cause. On top of that, money and other means
of payment are great ways to attract attention.

However, the question is where these incentives should come from. Currently, the
open source community, apart from volunteers, is mainly sponsored by (tech)
companies and even governments as of late in an effort to secure the software
supply chain. Tech companies and others rely heavily on free, open-source
software and thus are interested in its maintenance and continued development.
Consequently, they either support projects via donations or allow their
employees to contribute. Multiple other constellations are also possible.
Another possibility is creating paid services around a given open-source
project. [MySQL](https://www.mysql.com/ "MySQL") and
[MongoDB](https://www.mongodb.com/ "MongoDB") are examples of this approach.

It is currently a hot topic that companies use free, open-source software
extensively but do not contribute to these projects.[^funding] The efforts made
in the expanded repository ecosystem might help the discussion if incentives are
eventually distributed to the developers.

[^funding]:
    See
    [here](https://stackoverflow.blog/2021/01/07/open-source-has-a-funding-problem/ "Open source has a funding problem")

<!-- https://stackoverflow.blog/2021/01/07/open-source-has-a-funding-problem/ -->
<!-- https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/ -->

## Top-Down Approach

Our general belief is that top-level projects and applications should support
their dependencies. A business application using open-source software should
help maintain, secure, and develop the given projects.

Furthermore, we believe [Witnessable
Apps]({{< ref "/drepo/web3.1/witnessable-apps" >}} "Witnessable Apps"), which
require continuous review and verification throughout their life cycle, will
become ever more important. This means that projects and businesses that want to
adhere to this principle must verify their software and their dependencies.

The _Build Verification Network_ and the _Review Network_ offer exactly the
infrastructure and services needed to prove and publish the validity and
security of a given software. They consider transitive dependencies and verify a
software package as a whole. Funding verifying a top-level application is
automatically and partially distributed to its dependencies. As a result,
underfunded, essential projects receive more attention to emphasize the security
of core projects within the community.

A company that offers its users a critical application, for example, an online
banking app or a data storage service, has to create 'trust' in said
application. As we are shifting into a zero-trust or trustless world, this can
only be achieved through public verification. One way to accomplish this is to
publish a _witnessable app_ within the _dRepo_. Consequently, these companies
have to invest in the security of their software. The verification in the
dRepo's expanded ecosystem does not come for free, as large amounts of work have
to be done by participants. Thus, they must contribute incentives to the
networks for workers to verify their published applications from top to bottom.

{{< image-svg
src="incentives-distribution.excalidraw.svg"
alt="Incentives Distribution"
caption="Incentives Distribution: All of an application's dependencies must be reviewed and verified for the top-level application to be verified as well. The application owner must invest in this process. Incentives get distributed to all dependencies for their verification." >}}

As ransomware and phishing attacks become prevalent in mainstream media,
consumers, companies, and governments become more aware of security issues. As a
result, consumers demand secure applications, while companies and governments
become more willing to invest in security. SLSA and other initiatives are
evidence of that.

The rising public security awareness will force a shift in society towards more
openness, as it is given through _witnessable apps_. Not issuing public,
trustless verification will become a sign of potentially malicious behavior and
generally deny their users self-governance. Furthermore, new architectures and
user experience patterns will evolve from _witnessable apps_ which closed
systems cannot comply with.