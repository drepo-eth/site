---
title: "Centralized"
# description: 'TODO'
# tags:
#   - 'TODO'
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
software developers. Popular examples are the
[NPM Registry](https://www.npmjs.com/ "NPM Registry"),
[Maven Central](https://search.maven.org/ "Maven Central"),
[PyPi](https://pypi.org/ "Python Package Index"),
[Docker Hub](https://hub.docker.com/ "Docker Hub"), and
[GitHub](https://github.com/ "GitHub"). They are typically closed source systems
that are owned and operated by single entities. These are often community-funded
foundations, which act in the interests of the respective community, or
for-profit corporations.

Today, these kinds of repositories are usually hosted in cloud infrastructure as
they have to scale to potentially millions of developers around the world.
Furthermore, they are constantly bombarded by various CI systems downloading the
same artifacts over and over again.[^again] Global cloud deployments and the
usage of CDNs provide the storage, bandwidth, and low latency required by these
systems. This makes them fairly complex applications, which hold and synchronize
large amounts of data. One might think they are just simple file servers, but
they are not anymore.

[^again]:
    Even if IT departments and CI platforms like GitLab CI or GitHub Actions use
    caching mechanisms to reduce load and resources on both sides, a large
    amount of download requests hit repositories every day.

## Funding

While non-profit repositories like Maven Central and PyPI are relying on
sponsoring to keep the lights on, systems, which are operated by for-profit
organizations, often use the repository to generate revenue. Paid features are
the primary drivers. More storage space, private groups and security models
which integrate with enterprise environments, and security features like code
scanning are common additional features. While these offers are mostly targeting
business users, the additional feature set sometimes cuts down on the
free-of-charge offerings towards free open source software development.[^foss]
They either withhold useful security features or limit the usage of the system
drastically. The introduction of
[rate limits](https://www.docker.com/blog/what-you-need-to-know-about-upcoming-docker-hub-rate-limiting/ "Rate Limit Introduction")
on Docker Hub is one example of such limitations. While such constraints are
annoying, one can more than survive with the generous free offerings.[^support]

[^foss]:
    Larger or important open source projects that require paid features like
    additional storage space usually receive these features for free from the
    repository. Thank you, repository owners!

[^support]:
    Supporting software repositories and gaining more features is not a bad
    deal. It also helps keep platforms free for anybody else who is less
    fortunate and cannot afford a subscription.

<!-- npm, maven, pypi -->
<!-- central repository system that can be seen as a closed system -->
<!-- owned and run by a single entity, often community funded foundation or for-profit corporation -->
<!-- often scaling using cdns and other cloud systems -->
<!-- examples: -->
<!-- maven, pypi -> community foundation + sponsoring -->
<!-- docker, npm -> for profit -->

<!-- especially systems run by companies add additional, paid features to the repository -->
<!-- mostly around company needs, working in teams, space, 'privacy' etc. -->

## Centralized Control

The actual danger that comes with centralized repositories lies in the absolute
control their operators possess. The owners and administrators can remove and
add any content they like. In the worst cases, they are even able to change or
modify the content. A software release might be removed without any warning. If
the operator truly acts maliciously, they could create new software packages
that contain malware or similarly change existing packages. Such actions are
likely to be discovered by the community and could destroy a repository's
reputation.

A more realistic scenario is the removal of content due to external pressure. As
the institutions behind the repositories are incorporated in the real world,
they have to abide by local laws. If a software package would be designated as
illegal in their jurisdiction, the administrators are forced by law to remove
it. Likewise, access to the entire repository might be blocked from certain
regions if the country in question is sanctioned or a wartime enemy.

Besides legal reasons, economic issues are even more likely. Cutting down on the
global infrastructure might render a repository almost unusable from certain,
'unimportant' regions if latency is drastically increased and bandwidth very
limited.

All of these scenarios are very real. Even if a repository's operator acts in
the community's best interest, the determining issues might lie outside their
control. In the end, any interference with the content and the accessibility of
a public software repository can have devastating effects on the global
development of open source software and its distribution. Subsequently, any
system that is built on top of that might be endangered.

<!-- administrators and owners have total control over the system -->
<!-- ability to add, remove, change content -->
<!-- could block access for specific users or by country, etc -->
<!-- could also shutdown system completely at any time -->