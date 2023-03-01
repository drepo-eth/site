---
title: "The Problem"
description:
  "Software repositories have become an essential pillar in the software world.
  But due to their centralization, they are now the prime target to disrupt the
  distribution and development of open-source software"
tags:
  - "essential"
  - "target"
  - "threat"
  - "centralization"
  - "issues"
  - "examples"
date: 2022-07-26T16:18:02+02:00
draft: false
weight: 1010
menu:
  main:
    parent: intro
    weight: 10
---

## Repositories are great

Public software repositories like the [NPM Registry](https://www.npmjs.com/),
[Maven Central](https://search.maven.org/), [GitHub](https://github.com/), and
[Docker Hub](https://hub.docker.com/) are great. They offer developers a place
to find awesome libraries and applications ready to use and, most of the time,
free of charge. This makes developing software safer, faster, and more
manageable, a big win for everyone.

## Incidents

<!-- incident -->
<!-- youtube-dl https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md -->
<!-- faker.js https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected -->
<!-- https://cryptobriefing.com/circle-github-comply-with-tornado-cash-sanctions/ -->
<!-- https://www.theverge.com/2022/8/8/23296778/us-treasury-tornado-cash-crypto-mixer-sanctions-ethereum-north-korea -->
<!-- https://techcrunch.com/2022/08/08/treasury-tornado-cash-laundering-stolen-crypto/ -->
<!-- https://techcrunch.com/2022/08/12/suspected-tornado-cash-developer-arrested-in-amsterdam/ -->
<!-- https://www.theverge.com/2022/8/12/23298217/tornado-cash-crypto-mixer-crackdown-authorities-arrest-suspected-developer-amsterdam -->
<!-- https://news.ycombinator.com/item?id=33576369 -->

<!-- generally centralization -->
<!-- https://edition.cnn.com/2020/12/14/business/mastercard-visa-discover-pornhub/index.html -->

However, there have been multiple incidents in the past involving software
repositories which are cause for concern. Most notably:

- **youtube-dl DMCA Takedown on GitHub**
  ([Claim](https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md)):
  The RIAA issued a DMCA takedown notice due to copyright claims to GitHub,
  forcing them to block youtube-dl and its forks on the platform. Later, GitHub
  and its owner Microsoft reinstated the Git repositories
  ([Article](https://www.theverge.com/2020/11/17/21571473/github-youtube-dl-downloader-riaa-copyright-1201-takedown-reinstated))
  and promised to defend open-source software in the future.
- **faker.js and color.js rollback**
  ([The Verge Article](https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected)):
  The author of these two libraries actively sabotaged them and released new
  versions. They were imported into software projects due to not pinning and
  blind automation. This caused a lot of chaos and confusion. As a result, the
  NPM registry reverted the malicious versions, while GitHub supposedly blocked
  the author's account.
- **Tornado Cash sanctioned by U.S. Treasury**
  ([Article 1](https://cryptobriefing.com/circle-github-comply-with-tornado-cash-sanctions/),
  [Article 2](https://techcrunch.com/2022/08/08/treasury-tornado-cash-laundering-stolen-crypto/),
  [Article 3](https://www.theverge.com/2022/8/12/23298217/tornado-cash-crypto-mixer-crackdown-authorities-arrest-suspected-developer-amsterdam)):
  Popular on-chain privacy-preserving mixer-protocol Tornado Cash was sanctioned
  by the U.S. Treasury due to money laundering concerns. These sanctions
  prohibit U.S. citizens and companies from interacting with the Tornado Cash
  entity and with the on-chain smart contracts, the first time blockchain
  addresses are sanctioned. This triggered GitHub to suspend the public
  open-source repositories of Tornado Cash and the user accounts of any user who
  contributed to the repositories. Furthermore, the centralized domain of the
  protocol was suspended while the decentralized ENS domain continued to
  function by serving the frontend via IPFS. Centralized stablecoin provider
  [Circle](https://www.circle.com/) (USDC) froze all user funds within the
  protocol, and node access providers [Infura](https://infura.io/) and
  [Alchemy](https://www.alchemy.com/) blocked access to the smart contracts
  through their services. Other decentralized applications like
  [Aave](https://aave.com/) started to abide by the sanctions voluntarily,
  preventing wallet addresses that used Tornado Cash in the past from accessing
  their services. In the following days, one of the developers was arrested in
  the Netherlands on money laundering charges.

Such incidents[^more_incidents] of this magnitude are very rare. Still, they
show the importance of repositories and other centralized infrastructure in
software development and the power that lies with those who manage them.

[^more_incidents]:
    More incidents:
    [GitHub Account banned](https://news.ycombinator.com/item?id=33576369)

## Threats

It does not matter whether or not you agree with the actions that were taken.
The fact of the matter is that the popular software repositories we use daily
are not just centralized software applications but also owned and managed by
centralized entities incorporated in the offline world. Hence, they are bound to
local and national laws while pursuing commercial interests. Even if they would
pledge to uphold the interests of the global software development community,
their own interests will always come first.

This leaves software repositories and the software they host vulnerable to
cyber-attacks and threats due to legal, political, and economic pressure.
Handling DDoS attacks and hacks is a developer's daily business, but fending off
lawsuits and blackmail is definitely not. And if you are anything like us, you
would like to stay as far away as possible from such topics.

### Censorship

Imagine you are an excellent software developer who created an app that millions
use and love. At the same time, your software might be utilized by people for
activities that are illegal in some countries. The administrators of some
software repositories could be compelled by law enforcement to block access to
your software in certain countries or even globally. The latter is especially
dangerous as a single government could cripple the global software supply chain.

### Manipulation

Even more dangerous is the possibility of manipulation. Only some developers
verify downloaded artifacts by for example comparing the checksum with the value
provided directly by the developer.[^sig] Some dependency tools perform these
checks based on data provided by the repository, which is a problem. If the
repository acts maliciously, it could change the artifact and checksum to
introduce arbitrary code into dependent projects without many people noticing.

[^sig]:
    Yes, signatures could avoid this, but there are other risks we will address
    later.

## Centralized Power

As we all know: _With great power comes great responsibility_. Millions of
people depending on a centralized system controlled by a single centralized
entity is fine as long as everybody is happy and we love and respect one
another.

This means that we are in for a disaster sooner or later.

<!-- TODO other centralized systems -->