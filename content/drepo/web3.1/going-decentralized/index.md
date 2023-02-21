---
title: "Going Decentralized"
# description: 'TODO'
# tags:
#   - 'TODO'
date: 2023-01-25T14:13:35+01:00
draft: false
weight: 6030
menu:
  main:
    parent: web31
    weight: 6030
---

## Hosted in the Decentralized Repository

Based on the concept of _Witnessable Apps_ any reputable application should
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

As the vast majority of web traffic is based on HTTP, accessing p2p networks has
become a rarity. However, modern crypto browsers like
[Opera](https://www.opera.com/ "Opera Web Browser") and
[Brave](https://brave.com/ "Brave Browser") as well as the
[IPFS extension](https://docs.ipfs.tech/install/ipfs-companion/ "IPFS Companion")
enable novice users to use such systems with ease. Further integrations in
popular applications will (re-)increase the adoption of p2p networks.

If a _Witnessable WebApp_ is published in the dRepo, all the code and assets,
which are needed to render and execute a given website, are outlined there.
Users can basically decide if they want to access the webapp in the traditional
way via HTTP from the developer's servers or if they want to use the entries in
the dRepo to acquire all the necessary code from somewhere else and execute the
app.[^simplified]

[^simplified]:
    We simplify by ignoring issues with DNS, CORS, etc. However, running valid
    code within different environments is a typical case during development.

This 'somewhere else' might be another centralized server or a decentralized
network like IPFS. The application should work in any case as long as the user
obtains the correct artifacts which is guaranteed by the dRepo. Consequently,
any such witnessable app in the dRepo becomes censorship resistant and highly
available due to the multitude of available sources.

We should note that an application does not have to be fully witnessable to
leverage the aforementioned distribution scheme. The diverse distribution of an
application's frontend alone is probably worthwhile.

<!-- drepo enables verifyable software artifacts that are best stored in a decentralized storage system -->
<!-- as apps should strive to be published in the drepo, from top to bottom, all code and even assets should be generally available to everybody -->
<!-- decentralized storage lives from participation, thus one wants as many ppl as possible to participate in storing and sharing artifacts -->
<!-- current web3 dapps are already typically stored on ipfs, thus code that does not run in the backend is publicly available -->
<!-- they are (partially) actually safe apps -->
<!-- users, who access such apps, re-share the data via ipfs -->
<!-- currently, accessing such resources is hard, as browsers, apps and devices typically do not support those protocolls -->
<!-- crypto browers like brave bring built-in solutions, and plugins are available for plattforms like firefox and chrome -->

## Network Effects

Today's web applications use cloud services, edge computing, and CDNs around the
world to bring data and execution as close as possible to their users. They
reduce latency, improve availability, and might reduce costs as resources in
other regions of the world are cheaper.

Nonetheless, using the dRepo for the distribution of applications can reduce the
costs and the complexity of infrastructure setups. Storage and compute power are
diverted into p2p networks and on user's devices.

As described before, if a user wants to access a certain application resource,
for example a JavaScript file, they can choose from a range of sources. If the
first user (A) obtains the file from the centralized server of the application
developer, they can immediately start sharing this resource on p2p networks.
This user acts as a bridge for everybody else. Another user might choose to
download the same file directly from user (A) as they are located in the same
city, and thus might encounter lower latency. This effect cascades as more
people share the resource and reduces the amount of requests to the original
centralized source.

A centralized server might only be needed in the beginning of an application
lifecycle for the initial seed of files. Afterwards the application's users
continue to host the resources until no one wants to use it anymore.

Expanding on this example, edge computing, CDNs, and caching servers within ISP
networks like they are used by Netflix and YouTube might be rendered obsolete.
If users constantly share content and application code between each other, their
capacity could easily surpass the one of dedicated systems. Typically, each
person in a household owns multiple devices, a smartphone, a computer, a tablet,
a TV, a router, and with each new generation these devices grow more powerful in
terms of compute power, storage capacity, and network bandwidth. If people want
to use an application on their devices, they obtain it from their peers and
implicitly start to host and share it. They essentially operate the application
for free, while the original developer might not have to invest in any hosting
at all. A network of billions of devices is created, which share verified
applications and data on the selfish bases that they want to use an application
and view some information.

One could imagine this effect as a BitTorrent network on steroids. If a user
wants to use an application, they download it and have to share it for as long
as they are using it. Infrastructure like routers or general caching servers
could be used to facilitate this effect.

The security of such systems would be grounded in the decentralized software
repository. It guarantees the authenticity and safety of witnessable apps. At
the same time the repository grows stronger as the amount of users would rapidly
grow. Combined with anonymity, obfuscation, and strong encryption the dRepo and
such applications would become censorship resistant and essentially unstoppable
as programs and data could be shared safely in various ways directly between
users.

<!-- forcing and enabling more devices and apps to decentralized storage can create great network effects -->
<!-- not only are apps safer, as the code cannot be manipulated by eg. man in the middle attacks -->
<!-- artifacts could be used directly from the drepo -->
<!-- if app code is in drepo and dependencies are used as they are (not extra compiled, treeshake etc), all code can be downloaded from the drepo -->
<!-- example web apps -->
<!-- sbom as the list of all files/dependencies that need to be downloaded from the drepo -->
<!-- some might already be cached from other app, download from decentralized storage or from centralized server -->

<!-- home router is on 24/7, can act as a "proxy" and seed files all the time -->
<!-- your devices might connect to other local or nearby devices to request and share files -->
<!-- isps can create "webcaches" which share common data within their own/local networks, much like caching servers for yt and netflix etc. -->
<!-- this gives users more speed, censorship resistance, less costs for isps(?), less costs for app builders as they don't have to host on global cdns and such -->
<!-- shared files are safe as they are addressed via content hashing and secured by the drepo index -->

<!-- this allows everybody to participate in hosting data for the drepo, making it more secure and highly available -->

<!-- need for more privacy as typical, current systems like ipf2 and bt do not hide your pseudonym 'identity' (ip) when you share data -->
<!-- obfustcation needed, i2p?, decentralized vpns? -->