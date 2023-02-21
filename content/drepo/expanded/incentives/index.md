---
title: "Incentives"
# description: 'TODO'
# tags:
#   - 'TODO'
date: 2022-08-24T17:33:48+02:00
draft: false
weight: 5070
menu:
  main:
    parent: expanded
    weight: 5070
---

## The Core Comes Free

The _core_ of the decentralized repository operates essentially for free or at
very little cost compared to current systems. This is based on the approach of
voluntary participation and the general incentives that come from contributions.
Hosting a blockchain node creates incentives in the form of cryptocurrencies
while sharing data on p2p networks allows users to gain access to other data
faster and more resilient. Hosting artifacts on centralized infrastructure like
a project's website only calls for a limited amount of resources using today's
hosting services.

Large centralized software repositories on the other hand often require the
usage of paid cloud services, server hosting, or dedicated hardware. This
creates high costs for the operator of a given repository which they have to
cover either by asking for donations, much like Wikipedia does, or by selling
services and products complementing the repository.

<!-- the core repository operates essentially for free or at very little cost compared to current systems, as anyone can and should participate in hosting artifacts -->
<!-- at the same time current systems can and will continue to work, thus the drepo creates an additional control structure for safety -->

## Work Costs Money

The elements of the _expanded repository_ ecosystem however are dependent on
participants to invest computing power and their work. Both of these are not
free on the open market and not everybody wants to commit too much energy
without some sort of compensation, not even for a good cause. On top of that,
money and other means of compensation are a great way to attract attention.

However, the question is, where these incentives should come from. Currently,
the open source community, apart from volunteers, is mostly sponsored by (tech)
companies and even governments as of late in an effort to secure the software
supply chain. Tech companies and others rely heavily on free open source
software and thus have an interest in their maintenance and continued
development. Consequently, they either support them via donations or allow their
employees to contribute to the projects. Multiple other constellations are also
possible. Another possibility is the creation of paid services around a given
open source project. [MySQL](https://www.mysql.com/ "MySQL") and
[MongoDB](https://www.mongodb.com/ "MongoDB") are examples of using this
approach.

It is currently a hot topic that companies make extensive use of free open
source software, but do not contribute to these projects. The efforts made in
the expanded repository ecosystem might help in the discussion if incentives are
eventually also distributed to the developers.

<!-- TODO link some articles -->
<!-- https://stackoverflow.blog/2021/01/07/open-source-has-a-funding-problem/ -->
<!-- https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/ -->

<!-- expanded repo components do cost money, as compute power and human power are needed -->
<!-- Why would any company or government sponsor such a system? -->
<!-- generally large companies and governments invest in securing infrastructure and code  -->
<!-- open source projects receive contributions via money or workers whose job it is to work on OSS projects or companies contribute code -->

<!-- within the OSS community, this is a hot topic as many companies do not give back (enough) while their business depends on (heavily) FOSS -->
<!-- it is a larger topic we cannot solve here -->

## Top-Down Approach

Our general belief is that top-level projects and applications should support
their dependencies. Meaning a business application, which makes use of a certain
open source software, should help maintain, secure and develop the given
project.

Furthermore, we believe that [Witnessable Apps](TODO "Witnessable Apps"), which
require continuous review and verification throughout their life cycle, to
become ever more important. This means that projects and businesses that want to
adhere to this principle have to verify their own software as well as their
dependencies.

The _Build Verification Network_ and the _Review Network_ offer exactly the
infrastructure and services needed to prove and publish the validity and
security of a given software. They take transitive dependencies into account and
verify a software package as a whole. Funding for the verification of a
top-level application is automatically and partially distributed to its
dependencies. Underfunded, important projects receive more attention to
emphasize the security of core projects within the community.

A company that offers a critical application to its users, for example, an
online banking app or a data storage service, has to create 'trust' in said
application. As we are shifting into a zero-trust or trustless world, this can
only be achieved through public verification. The publication of a _witnessable
app_ within the _dRepo_ is one way to accomplish this. Consequently, these
companies have to invest in the security of their software. The verification in
the dRepo's expanded ecosystem does not come for free, as large amounts of work
have to be done by participants. Thus, they have to contribute incentives to the
networks for workers to verify their published applications from top to bottom.

As ransomware and phishing attacks become popular topics in mainstream media,
consumers, companies and governments become more aware of security issues.
Consumers demand secure applications while companies and governments become more
willing to invest in security. SLSA and other initiatives are evidence of that.

We believe that the rising, public security awareness will force a shift in
society towards more openness like it is given through _witnessable apps_. Not
issuing public, trustless verification will become a sign of potentially
malicious behavior and generally deny their users self-governance. Furthermore,
new architectures and user experience patterns will evolve from _witnessable
apps_ which closed systems cannot comply with.

<!-- general approach: -->
<!-- witnessable apps! we believe -->
<!-- to incentivice the work that is needed in build verification and review and even development in general, top level projects and software have to sponsor/support their transivite dependencies -->
<!-- a dependency that is used by many other projects will receive funding etc from their users/dependents?. -->
<!-- In order to verify the validity of a software all of its dependencies have to be valid too, thus everything has to be validated from top to bottom. -->
<!-- this approach needs to be built in to review and verification networks -->

<!-- who or why would a project want to have all these 'costly' checks in place? -->

<!-- as security topics like zero trust, trustless and ransomeware attacks become 'mainstream', consumers and companies + governments become more security aware and are willing to get more security -->
<!-- security for the supply chain is already on its way with SLSA etc -->
<!-- The next thing might be actually safe apps (link) which allow all parties to monitor while reducing risk of hacks and fraud -->
<!-- a safe app needs to be public and to be secured by the public -->
<!-- thus such an app wants to be part of the verification and review system that the drepo offers -->

<!-- companies, ppl, governments who want a system to be safe, have to contribute to its security, either by actively helping or by sending funds to allow others to contribute  -->

<!-- an actually safe app must be published in the drepo in order for it to be properly reviewed and verified and runnable -->
<!-- subsequently such an app needs to be open source and even better hosted in a safe way -->

<!-- very different from current practices, because businesses have to expose their inner workings -->

<!-- while companies and ppl demand more security, security is hard and counter productive to business at first -->
<!-- see regulations and security cost money -->
<!-- at the same time, ppl do not want to think about hard stuff like security and especially do not want to pay for it. -->
<!-- however, publishing software open source might and in the drepo might allow users to take things in their own hands. few ppl will help the many? might expose more ppl to thinking about security in their apps -->