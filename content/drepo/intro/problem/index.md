---
title: "The Problem"
date: 2022-07-26T16:18:02+02:00
draft: true
weight: 1010
menu:
  main:
    parent: problem
    weight: 10
---

## Repositories are great

Public software repositories like the [NPM Registry](https://www.npmjs.com/),
[Maven Central](https://search.maven.org/), [GitHub](https://github.com/) and
[Docker Hub](https://hub.docker.com/) are great.
They offer developers a place to find awesome libraries and applications ready
to use and most of the time free of charge.
Generally, this makes developing software a lot safer, faster, and easier, a
big win for everyone.

## Incidents
<!-- incident -->
<!-- youtube-dl https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md -->
<!-- faker.js https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected -->
However, there have been multiple incidents in the past involving software
repositories which are cause for concern.
Most notably:

 * __youtube-dl DMCA Takedown on GitHub__
   ([Claim](https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md)):
   The RIAA issued a DMCA takedown notice due to copyright claims to GitHub
   forcing them to block youtube-dl and its forks on the platform. GitHub and
   its owner Microsoft later reinstated the Git repositories
   [Article](https://www.theverge.com/2020/11/17/21571473/github-youtube-dl-downloader-riaa-copyright-1201-takedown-reinstated)
   and promised to defend open source software in the future.
 * __faker.js and color.js rollback__ ([The Verge
   Article](https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected)):
   The author of these two libraries actively sabotaged them and released new
   versions which were partially added to software projects due to not pinning
   and blind automation. This caused a lot of chaos and confusion. Consequently
   the NPM registry reverted the malicious versions while GitHub apparently
   also blocked the author's account.

Such incidents at this magnitude are very rare but they show the importance of
repositories in software development as well as the power that lies with those
who manage them.

## Threats

It does not matter whether or not you agree with the actions that were taken.
The fact of the matter is that the popular software repositories we use
day-to-day are not just centralized software applications but are also owned
and managed by centralized entities that are incorporated in the offline world.
Hence, they are bound to local and national laws while also pursuing commercial
interests.
Even if they would pledge to uphold the interests of the global software
development community, their own interests will always come first.

This leaves software repositories and the software they host vulnerable to not
just cyber-attacks, but also to threats due to legal, political, and economic
pressure.
Handling DDoS attacks and hacks is a developers daily business, but fending off
law suits and blackmail is definitely not.
And if you are anything like us, you would very much like to stay as far away
as possible from such topics.

### Censorship

Imagine you are an awesome software developers who created an app, that is used
and loved by millions.
At the same time, your software is also by people for activities which are
illegal in some countries.
The administrators of some software repositories could be compelled by law
enforcement to block access to your software either in those countries or even
globally.
The latter is especially dangerous as a single government could cripple the
global software supply chain.

### Manipulation

Even more dangerous is the possibility of manipulation.
Few developers actually verify downloaded artifacts by for example comparing
the checksum with the value provided directly by the developer.[^sig]
Some dependency tools perform these checks based on data provided by the
repository and this is actually a problem.
If the repository acts malicious, it could change the artifact and checksum to
introduce arbitrary code into dependent projects without many people noticing.

[^sig]: Yes, signatures could avoid this but they have other risks we address
  later.



<!-- broken supply chain -> chaos -->

<!-- SLSA -->
