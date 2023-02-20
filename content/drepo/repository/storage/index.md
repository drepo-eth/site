---
title: "Storage"
date: 2023-01-06T17:03:28+01:00
draft: true
weight: 4030
menu:
  main:
    parent: drepo
    weight: 30
---

## All Storage Systems Welcome

The decentralized repository **does not maintain a dedicated storage system**.
The creation of a new system which fulfills the requirements of ubiquity and
high availability would be enormous, either in building a new protocol or in
setting up global infrastructure. However, there are existing and upcoming
systems that are well established and provide great services in their respective
niches.

Thus, the repository leverages various existing infrastructure systems to
provide data to as many clients in as many environments as possible. Currently,
we distinguish centralized from decentralized sources.

### Centralized

Centralized sources are hosted on centralized services which are controlled by a
company or another institution. Your typical
[AWS S3 Bucket](https://aws.amazon.com/s3/ "AWS S3") or
[Cloudflare CDN](https://www.cloudflare.com/cdn/ "Cloudflare CDN") you access
via [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS") are such centralized
services. The data might be distributed and replicated to various data centers
around the world, but there is still an administrator who can delete or change
the stored files.

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "HTTP") is a
corner stone of the internet and in general usable in almost any
situation.[^http] Fast internet connections via fibre, 5G, or even better
technologies in combination with world-spanning
[CDN](https://en.wikipedia.org/wiki/Content_delivery_network "Content Delivery
Network")s
allow users to download files extremely fast. Consequently websites and most
other traditional data transfers run on this HTTP-driven stack. In fact, most of
the current, popular software repositories use HTTP and centralized services to
distribute artifacts. This makes them available not only on the public internet
but also in closed company intranets or even in more secure environments. HTTP
traffic is extremely common and thus there is a lot of security related
technology around it such as
[WAF](https://en.wikipedia.org/wiki/Web_application_firewall "Web Application
Firewall")s
and other firewalls which reduce risks in handling and using it.

[^http]:
    This is especially true for HTTP2/3 as they are more optimized to handle
    unstable mobile connections.

All of these properties make HTTP versatile and relatively safe and easy to use.
Furthermore, the existing, broad infrastructure around HTTP-based sources allows
users to download artifacts with very little effort. This ease of use, which
evolved over the years, cannot be ignored. Thus centralized source like existing
repos, websites and such will continue to be the predominant sources for
artifacts for the near future. However, due to their centralized nature trust
issues arise which the dRepo addresses.

References to centralized sources in the dRepo must be accompanied by various
checksums. They can be used to verify the obtained artifacts. As the references
and the checksums both are published by the owner of a package, a more trusted
relationship between artifacts and checksums is created. This is similar to
using digital signatures in existing repositories as both pieces of data need to
be cryptographically signed by the owner of the account in order to publish them
in a blockchain transaction.

### Decentralized

Decentralized systems like
[IPFS](https://ipfs.tech/ "InterPlanetary File System") and BitTorrent have been
around for decades. In the early 2000s they played a crucial role in the
'illegal' distribution of copyrighted content and consequently threatened
especially the music and film industry. Even when pressure was applied on ISPs
and legal pressure on individuals, these kinds of systems proofed **resilient**
and **scalable** enough to share a large amount data to millions of users. Only
the introduction of extremely convenient, centralized streaming services could
reduce their dominance long term. But beside the WAREZ file sharing community,
p2p systems also found their way in commercial systems due to the unique
distribution capabilities.

In recent years their **community based approach** and **censorship resistence**
were the dominant factors for their usage in web3 Dapps. IPFS has become the de
facto standard system for hosting web3 frontends and off-chain data, most
prominently
[NFT](https://en.wikipedia.org/wiki/Non-fungible_token "Non-fungible Token")-Pictures.
Furthermore, initiatives like
[Z-Library](https://annas-blog.org/help-seed-zlibrary-on-ipfs.html "Z-Library")
try to use the network to store and distribute large amounts of knowledge data
while fighting censorship.

Therefore, IPFS is also the preferred storage solution for the drepo due to its
flexibility and ability to host applications in the file system. Its current,
rising popularity also brings a lot of integrations in existing systems like
browsers which makes usage almost as effortless as an HTTP-based stack. The file
system character streamlines the distribution of data as users can request and
subsequently share individual files from the file tree without having to
download it entirely.

Apart from IPFS, its recommended to publish artifacts on multiple decentralized
networks like BitTorrent or [Arweave](https://www.arweave.org/ "Arweave"). Users
can then choose a system that fits their demands in terms of security,
availability, accessability, etc.

As most p2p systems encorporate
[content addressing](https://en.wikipedia.org/wiki/Content-addressable_storage "Content-addressable Storage")
the need for accompanying checksums is diminished and the correct transmission
of artifacts is guaranteed. Furthermore, users can start sharing or _seeding_
files independent from one another. This means that a file does not have to
originate from a single source within the network. Instead, users can acquire
binary equivalent files from other sources, centralized servers or create them
themselves leveraging reproducible builds, and seed them to the network. From
the point of view of the network and other participants, they are sharing the
same file. This dynamic and the ability to share partial chunks of data allows
such networks to scale incredibly fast while maintaining security.

<!-- ipfs, bt, etc -->
<!-- content addressing combines checksums -->
<!-- TODO -->

P2p systems require direct connections between peers. This is a significant
difference to traditional client-server architectures as in the latter only the
server needs to be exposed and known on the internet.

<!-- TODO -->

<!-- access problems due to p2p / ports/firewalls -->
<!-- currently "low" usage needs more built-in systems => ipfs in brave -->
<!-- censorship resistence as anyone can host anything without much extra effort (content addressing) -->
<!-- network effects due to sharing while downloading and further seedings -->

## Types of References

The primary type of references the index contains are links to build artifacts.
Additionally, links to the source code and to documentation resources should be
provided as they supply further information on the given software.  
The source code, however, plays a crucial role. It is needed to verify the

The publication of checksums for build artifacts in the index is not suffcient
to provide actual proof on the authenticity of artifacts. However, much like GPG
signatures this scheme only verifies the relationship between checksums and the
build artifacts which were published by the author of a software. It does not
provide any further information about their authenticity in relation to the
source code as the owner could have manipulated the artifacts before
publication. The [Build Verfification Network](TODO) will address this critical
issue.

<!-- checksum and link from owner => verifyable due to index on blockchain -->
<!-- only verifies that owner created checksum and artifact (like sig) -->
<!-- still not linking source and artifacts => see extended repo system -->

<!-- centralized, decentralized file pointers, checksums, source, docs, website, etc -->
<!-- SBOM should be included which lists all dependencies and information about the build -->

<!-- files in storage are fungible, checksums must apply to all "equivalent" artifacts -> centralized, decentralized, different sources -->
