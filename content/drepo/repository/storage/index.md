---
title: "Storage"
description:
  "Resources in the decentralized software repository should be hosted on
  centralized and decentralized storage solutions. The rule of thumb is: the
  more, the merrier. This gives users a wide range of choices where to obtain
  the artifacts safely and securely."
tags:
  - "p2p"
  - "http"
  - "storage"
  - "index"
  - "links"
  - "IPFS"
  - "BitTorrent"
  - "checksums"
  - "signatures"
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
Creating a new system that fulfills ubiquity and high availability requirements
would be enormous in building a new protocol or setting up global
infrastructure. However, some existing and upcoming systems are well-established
and provide outstanding services in their respective niches.

Thus, the repository leverages various existing infrastructure systems to
provide artifacts to clients in as many environments as possible. Currently, we
distinguish centralized from decentralized sources.

### Centralized

Centralized sources are hosted on centralized services controlled by a company
or another institution. For example, centralized services are your typical
[AWS S3 Bucket](https://aws.amazon.com/s3/ "AWS S3") or
[Cloudflare CDN](https://www.cloudflare.com/cdn/ "Cloudflare CDN") you access
via [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS"). The data might be
distributed and replicated to various data centers worldwide, but an
administrator can still delete or change the stored files.

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "HTTP") is a
cornerstone of the internet and, in general, is usable in almost any
situation.[^http] Fast internet connections via fiber, 5G, or even better
technologies in combination with world-spanning
[CDN](https://en.wikipedia.org/wiki/Content_delivery_network "Content Delivery
Network")s
allow users to download files extremely fast. Consequently, websites and most
other traditional data transfers run on this HTTP-driven stack. In fact, most
current, popular software repositories use HTTP and centralized services to
distribute artifacts. This makes them available not only on the public internet
but also in closed company intranets or even in more secure environments.
Furthermore, as HTTP traffic is ubiquitous, there is a lot of security-related
technology around it such as
[WAF](https://en.wikipedia.org/wiki/Web_application_firewall "Web Application
Firewall")s
and other firewalls, which reduce risks in handling and using it.

[^http]:
    This is especially true for HTTP2/3 as they are more optimized to handle
    unstable mobile connections.

These properties make HTTP versatile, relatively safe, and easy to use.
Furthermore, the existing, broad infrastructure around HTTP-based sources allows
users to download artifacts with little effort. This ease of use, which evolved
over the years, cannot be ignored. Thus, centralized sources like existing
repos, websites, and such will continue to be the predominant sources for
artifacts in the foreseeable future. However, due to their centralized nature,
trust issues arise, which the dRepo addresses.

References to centralized sources in the dRepo must be accompanied by various
checksums. They can be used to verify the obtained artifacts. As the references
and checksums are published by the owner of a package, a more trusted
relationship between artifacts and checksums is created. This is similar to
using digital signatures in existing repositories, as both pieces of data need
to be cryptographically signed by the account owner to publish them in a
blockchain transaction.

### Decentralized

Decentralized systems like
[IPFS](https://ipfs.tech/ "InterPlanetary File System") and BitTorrent have been
around for decades. In the early 2000s, they played a crucial role in the
'illegal' distribution of copyrighted content, consequently threatening the
music and film industry. Even when pressure was applied to ISPs and legal
pressure on individuals, these systems proved _resilient_ and _scalable_ enough
to share a large amount of data with millions of users. Only introducing
extremely convenient, centralized streaming services could reduce their
long-term dominance. But besides the WAREZ file-sharing community, p2p systems
also found their way into commercial systems due to their unique distribution
capabilities.

In recent years their _community-based approach_ and _censorship resistance_
were the dominant factors for their usage in web3 dApps. As a result, IPFS has
become the de facto standard system for hosting web3 frontends and off-chain
data, most prominently
[NFT](https://en.wikipedia.org/wiki/Non-fungible_token "Non-fungible Token")-Pictures.
Furthermore, initiatives like
[Z-Library](https://annas-blog.org/help-seed-zlibrary-on-ipfs.html "Z-Library")
try to use the network to store and distribute large amounts of knowledge data
while fighting censorship.

Therefore, IPFS is also the preferred storage solution for the dRepo due to its
flexibility and ability to host applications in the file system. Its current
rising popularity also brings a lot of integrations in existing systems like
browsers making usage almost as effortless as an HTTP-based stack. In addition,
its file-system-like character streamlines the data distribution as users can
request and subsequently share individual files from the file tree without
downloading it entirely.

Apart from IPFS, it is recommended to publish artifacts on multiple
decentralized networks like BitTorrent or
[Arweave](https://www.arweave.org/ "Arweave"). Users can then choose a system
that fits their demands regarding security, availability, accessibility, etc.

As most p2p systems incorporate
[content addressing](https://en.wikipedia.org/wiki/Content-addressable_storage "Content-addressable Storage"),
the need for accompanying checksums is diminished, and the correct transmission
of artifacts is guaranteed. Furthermore, users can start sharing or _seeding_
files independently from one another. This means a file does not have to
originate from a single source within the network. Instead, users can acquire
binary-equivalent files from other sources, like centralized servers, or create
them, leveraging reproducible builds, and seed them to the network. From the
network and other participants' points of view, they share the same file. This
dynamic and the ability to share partial chunks of data allows such networks to
scale incredibly fast while maintaining security.

P2p systems require direct connections between peers. This is a significant
difference from traditional client-server architectures, as in the latter, only
the server needs to be exposed and known on the internet. This is a problem when
used in secured environments such as corporate networks. They are typically very
restrictive, only allowing certain types of traffic, monitoring the
communication on firewalls, and trying to hide the internals of their networks.
Their goal is to minimize the risk of malicious traffic and possible
cyberattacks. P2p systems bring a dynamic that might be harder to handle, as
clients in such networks communicate directly. This kind of traffic is currently
prohibited within such networks.

Proxy solutions that translate p2p and centralized traffic might be a solution.
For instance, as IPFS clients are still not widely used, gateways offer a way to
access decentralized resources through a centralized server. The gateway server
accepts HTTP requests and searches for the resources on the IPFS network. When
found, the desired files are delivered to the requesting client.

<!-- TODO: illustration corporate networks -->

## Types of References

The primary type of reference the index contains is links to build artifacts.
Here, each release should publish multiple links to centralized and
decentralized sources. For instance, links to various software repositories, the
same files hosted on a project's website, and addresses of the artifacts in
question in numerous p2p networks like IPFS and BitTorrent. Other forms of URIs
and coordinates are worth considering, anything that helps users find the
correct files.

Additionally, links to the source code and documentation resources should be
provided as they supply further information on the given software. The source
code, however, plays a crucial role. It is required in the verification of build
artifacts leveraging reproducible builds.

The publication of checksums of built artifacts in the index is recommended, but
it is insufficient as proof of the authenticity of artifacts. However, much like
GPG signatures, this scheme only verifies the relationship between checksums and
the build artifacts published by the software author. It does not provide any
further information about their authenticity in relation to the source code, as
the owner could have manipulated the artifacts before publication. The [Build
Verification Network]({{< ref "/drepo/expanded/build-verification" >}} "Build
Verification Network") will address this critical issue.

Even more information might prove helpful depending on the type of software
being released: links to deployed software instances, demo systems, results
from professional audits, or donation systems that support the developers.

Each published resource should follow defined patterns that help users and
client software to determine what kind of resource is referenced.

<!-- TODO illustration -->

The system does not enforce rules or set any limits on the amount and the type
of references. These are recommendations that we believe to be reasonable
and that improve the current situation by supplying more data points for
security and diversity. The prototypes define the release content as bare
strings not validated for specific patterns. Additionally, this leaves
the door open for future improvements. Ecosystems in which a dRepo is deployed
must define their own standards and recommendations to live by.