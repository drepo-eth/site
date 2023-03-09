---
title: "Going Decentralized"
description:
  "Hosting a witnessable app using the dRepo and all its ways of distribution
  can make applications censorship-resistant, highly scalable, and secure. All
  the while, hosting and operating such an application reduces costs drastically
  compared to traditional applications."
tags:
  - "sharing"
  - "p2p"
  - "witnessable apps"
  - "censorship-resistant"
  - "scalability"
  - "cdn"
  - "ipfs"
  - "bittorrent"
date: 2023-01-25T14:13:35+01:00
draft: false
weight: 6030
menu:
  main:
    parent: web31
    weight: 6030
---

## Hosted in the Decentralized Repository

Based on the concept of _Witnessable Apps_, any reputable application should
strive to be published and verified in the proposed decentralized software
repository. This incorporates that the source code, the compiled code, and
possibly any assets needed by a given application are generally available to
everybody.

Furthermore, decentralized storage networks like _BitTorrent_ and _IPFS_ are the
preferred distribution channels within the dRepo. Such systems become more
robust, faster, and safer when as many people as possible participate in storing
and sharing artifacts. Current web3 dApps use IPFS to store assets and
decentralized frontend applications. This makes them censorship resistant.
Anyone who accesses such an application via IPFS instantly starts to participate
in its distribution.

Most web traffic is based on HTTP, so accessing p2p networks has become a
rarity. However, modern crypto browsers like
[Opera](https://www.opera.com/ "Opera Web Browser") and
[Brave](https://brave.com/ "Brave Browser") and the
[IPFS extension](https://docs.ipfs.tech/install/ipfs-companion/ "IPFS Companion")
enable novice users to easily use such systems. Moreover, further integrations
in popular applications will (re-)increase the adoption of p2p networks.

If a _Witnessable WebApp_ is published in the dRepo, all the code and assets
needed to render and execute a given website are outlined there. Users can
basically decide if they want to access the web app traditionally via HTTP from
the developer's servers or if they want to use the entries in the dRepo to
acquire all the necessary code from somewhere else and execute the
app.[^simplified]

[^simplified]:
    We simplify by ignoring issues with DNS, CORS, etc. However, running valid
    code within different environments is a typical use case during development.

This 'somewhere else' might be another centralized server or a decentralized
network like IPFS. The application works as long as the user obtains the correct
artifacts as guaranteed by the dRepo. Consequently, any such witnessable app in
the dRepo becomes censorship-resistant and highly available due to the multitude
of available sources.

We should note that an application must not to be fully witnessable to leverage
the distribution scheme mentioned above. The diverse distribution of an
application's frontend alone is worthwhile.

## Network Effects

Today's web applications use cloud services, edge computing, and CDNs worldwide
to bring data and execution as close as possible to their users. As a result,
they reduce latency, improve availability, and might reduce costs as resources
in other regions of the world are cheaper.

Nonetheless, using the dRepo to distribute applications can further reduce
infrastructure setup costs and complexity. This is because storage and computing
power are diverted into p2p networks and on users' devices.

As described before, if a user wants to access a specific application resource,
for example, a JavaScript file, they can choose from various sources. If the
first user A obtains the file from the centralized server of the application
developer, they can immediately start sharing this resource on p2p networks.
This user acts as a bridge for everybody else. Another user might choose to
download the same file directly from user A as they are located in the same city
and thus might encounter lower latency. This effect cascades as more people
share the resource and reduces the number of requests to the original
centralized source.

<!-- TODO illustration -->

A centralized server is only needed at the beginning of an application lifecycle
for the initial seed of files. Afterward, the application's users continue to
host the resources until no one wants to use them anymore.

Expanding on this example, edge computing, CDNs, and caching servers within ISP
networks like they are used by Netflix and YouTube might be rendered obsolete.
If users constantly share content and application code with each other, their
capacity could easily surpass dedicated systems. Typically, each person in a
household owns multiple devices, a smartphone, a computer, a tablet, a TV, and a
router. With each new generation these devices grow more potent in computing
power, storage capacity, and network bandwidth. People who want to use an
application on their devices obtain it from their peers and implicitly start to
host and share it. They operate the application for free, while the original
developer may not have to invest in any hosting at all. A network of billions of
devices is created, which share verified applications and data on the selfish
bases that they want to use an application and view some information.

One could imagine this effect as a BitTorrent network on steroids. If a user
wants to use an application, they download it and have to share it for as long
as they are using it. Infrastructure like routers or general caching servers
could facilitate this effect.

<!-- TODO illustrate routers and caching -->

The security of such systems would be grounded in the decentralized software
repository. It guarantees the authenticity and safety of witnessable apps. At
the same time, the repository grows stronger as the number of users multiplies.
Combined with anonymity, obfuscation, and strong encryption, the dRepo and such
applications would become censorship-resistant and essentially unstoppable as
programs and data could be shared safely in various ways directly between users.