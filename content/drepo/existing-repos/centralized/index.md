---
title: "Centralized"
description:
  "Centralized software repositories are owned and operated by centralized
  entities. Moreover, they are built using centralized architecture and run on
  traditional cloud platforms."
tags:
  - "centralized"
  - "funding"
  - "foundation"
  - "for-profit"
  - "control"
  - "cloud"
date: 2022-09-12T00:32:15+02:00
draft: false
weight: 3020
menu:
  main:
    parent: repositories
    weight: 20
---

## Differentiating

Centralized software repositories are the most common type we encounter as
software developers. The [NPM Registry](https://www.npmjs.com/ "NPM Registry"),
[Maven Central](https://search.maven.org/ "Maven Central"),
[PyPi](https://pypi.org/ "Python Package Index"),
[Docker Hub](https://hub.docker.com/ "Docker Hub"), and
[GitHub](https://github.com/ "GitHub") are famous examples. They are typically
closed source-systems that are owned and operated by single entities. These are
often community-funded foundations that act in the interests of the respective
community. Or they are for-profit corporations.

Today, centralized repositories are usually hosted in cloud infrastructure as
they have to scale to potentially millions of developers worldwide. Furthermore,
they are constantly bombarded by various CI systems downloading the same
artifacts over and over again.[^again] Global cloud deployments and the usage of
CDNs provide the storage, bandwidth, and low latency required by these systems.
This makes them complex applications which hold and synchronize large amounts of
data. One might think they are just simple file servers, but they are not
anymore.

[^again]:
    Even if IT departments and CI platforms like GitLab CI or GitHub Actions use
    caching mechanisms to reduce load and resources on both sides, numerous
    download requests hit repositories daily.

## Funding

While non-profit repositories like Maven Central and PyPI rely on sponsors to
keep the lights on, systems, which are operated by for-profit organizations,
often use the repository to generate revenue. Paid features are the primary
drivers. More storage space, private groups, security models which integrate
with enterprise environments, and security features like code scanning are
typical additional features. While these offers mainly target business users,
the extra feature set sometimes cuts down on the free-of-charge offerings
towards free open-source software development.[^foss] They either retain useful
security features or limit the usage of the system drastically. Introducing
[rate limits](https://www.docker.com/blog/what-you-need-to-know-about-upcoming-docker-hub-rate-limiting/ "Rate Limit Introduction")
on Docker Hub is one example of such limitations. While such constraints are
annoying, one can more than survive with the generous free offerings.[^support]

[^foss]:
    Larger or important open-source projects that require paid features like
    additional storage space usually receive these features for free from the
    repository. Thank you, repository owners!

[^support]:
    Supporting software repositories and gaining more features is not a bad
    deal. It also helps keep platforms free for anyone less fortunate who cannot
    afford a subscription.

## Centralized Control

The actual danger of centralized repositories lies in their operators' absolute
control. The owners and administrators can remove and add any content they like.
In the worst cases, they can even change or modify the content. For example, a
software release might be removed without any warning. If the operator acts
maliciously, they could create new software packages containing malware or
change existing packages. The community will likely discover such actions that
could consequently destroy a repository's reputation.

A more realistic scenario is the removal of content due to external pressure. As
the institutions behind the repositories are incorporated in the real world,
they must abide by local laws. For example, if a software package is designated
as illegal in their jurisdiction, law forces the administrators to remove it.
Likewise, access to the entire repository might be blocked from certain regions
if a country is sanctioned or becomes a wartime enemy.

{{< image-svg
  src="centralized-not-welcome.excalidraw.svg"
  alt="Blocking Access"
  caption="Blocking Access: The owners of a centralized software repository or an influential party could block access to the repository for a specific group of users while others can continue using it freely. The system is the only source for packages in the ecosystem. The blocked users cannot continue with their work. Also, we do not want to offend anyone; we are just messing around." >}}

Besides legal reasons, economic issues are even more likely. For example,
cutting down on the global infrastructure might render a repository almost
unusable from certain 'unimportant' regions if latency is drastically increased
and bandwidth is insufficient.

All of these scenarios are very real. Even if a repository's operator acts in
the community's best interest, the determining issues might lie outside their
control. In the end, any interference with the content and the accessibility of
a public software repository can devastate the global development of open-source
software and its distribution. Subsequently, any system built on top of that
might be endangered.