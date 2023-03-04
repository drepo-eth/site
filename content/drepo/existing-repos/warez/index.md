---
title: "Warez"
description:
  "File-sharing systems from the WAREZ scene have proven their resilience in
  spreading copyrighted content for decades. A censorship-resistant repository
  has to note the properties that make those networks so successful."
tags:
  - "BitTorrent"
  - "Usenet"
  - "torrent"
  - "nzb"
  - "indexer"
  - "tracker"
  - "p2p"
  - "content addressing"
  - "resilience"
  - "obfuscation"
  - "newsgroups"
date: 2022-09-12T00:32:28+02:00
draft: false
weight: 3050
menu:
  main:
    parent: repositories
    weight: 50
---

## Lose Systems

This section does not actually address software repositories but rather content
repositories that are mostly known for distributing copyrighted content.
However, due to their proven resilience, a decentralized repository should adopt
some of their features. We also ignore group sites and the release system in
this description.

[BitTorrent](https://en.wikipedia.org/wiki/BitTorrent "BitTorrent") has existed
for almost two decades and is still widely used, even in corporate settings. It
is a peer-to-peer file-sharing network that allows users to share arbitrary
files identified using
[Content Addressing](https://en.wikipedia.org/wiki/Content-addressable_storage "Content Addressing").
Applying a hashing function to the content of a file creates a rather unique
value used to identify files. This _content address_ is subsequently used in
`.torrent` files and
[magnet links](https://en.wikipedia.org/wiki/Magnet_URI_scheme "Magnet URI Scheme")
to share pointers to files.

Another popular distribution system is the
[Usenet](https://en.wikipedia.org/wiki/Usenet "Usenet"), which holds various
newsgroups. It was initially used to post text content and is the spiritual
predecessor of online forums or, for example,
[Reddit](https://www.reddit.com/ "Reddit"). Arbitrary files are published in the
form of encoded text, which is similar to the mechanism used for email file
attachments. A file is usually split into multiple text messages identified by
server-generated ids. Then, similar to `.torrent` files, `.nzb` files address
these individual messages and describe the reconstruction of the original files.

The Usenet itself is hosted using various service providers holding a copy of
the entire system and synchronizing the data among each other.[^entire] While
the BitTorrent network is publicly and free-of-charge accessible, accessing the
Usenet usually requires a paid account with an Usenet provider.

[^entire]:
    Not every provider holds the entire Usenet. Depending on their service, only
    specific parts are synchronized and served.

Trackers and indexers are used to find and share content stored in these
unstructured systems. They are separate, usually centralized systems that are
often represented as websites. They allow users to search for content and obtain
the respective magnet links, `.torrent`, or `.nzb` files.

Even though the community is somewhat organized, no central authority declares
an indexer as the standard or a piece of content as the valid one. This means
that multiple indexers and trackers trace and reference several versions of the
same content in, for example, different formats or qualities. Consequently,
there is a many-to-many relationship between indexers and content. Indexers
might reference the same files or different ones, still representing the same
content.[^format]

[^format]:
    A movie might be available as a Blu-ray file or a rip of a digital release.
    They are very different files that represent the same content.

{{< image-svg
  src="many-to-many-indexer.excalidraw.svg"
  alt="Many-to-Many Relationship"
  caption="Many-to-Many Relationship: Multiple independent indexers reference various versions of the same content. If one of the indexers or one of the referenced files becomes unavailable, other versions of the content remain available." >}}

## Resilience

### BitTorrent

Due to copyright laws, law enforcement is interested in taking down both the
content and the indexers, even though the latter does not hold any copyrighted
content.

As trackers and indexers are, for the most part, centralized services, they are
reasonably easy to identify. Consequently, as long as legal grounds and measures
exist, taking them down is straightforward. However, this measure only removes a
single tracker instance. Its data is mostly publicly available and, more
importantly, separated from the actual content. Another instance can easily
replace it without disturbing the overall system.

Files in the BitTorrent network can essentially never be removed as there is no
central, addressable point of failure to exploit.[^removal] Thus, peers that
share files containing copyrighted material are being targeted and taken down in
an attempt to remove the files from the network. Since the p2p network
communicates openly, one can identify the IP addresses of peers sharing specific
data. From here, law enforcement can find the real identities of participating
peers.

[^removal]:
    The only way to permanently remove a file from a content addressable p2p
    network is to delete all instances of the file globally and permanently.
    This would entail that the file is deleted on any computer that ever shared
    the file and that the file cannot be reproduced, an almost impossible task.

Another possibility is to block the BitTorrent network traffic altogether
through ISPs. Such a measure, however, is extensive and would prevent using the
system for other legal purposes. Additionally, circumventing this blockade is
relatively trivial.

VPNs and other privacy-preserving technologies can not only evade the
restrictions above but also hide the real identity of peers within the open
network. This makes it impossible to track down all peers sharing a specific
file.

{{< image-svg
  src="content-hashed-sharing.excalidraw.svg"
  alt="Content Addressable Sharing"
  caption="Content Addressable Sharing: Files within the network are addressed via their content hashes. Different peers can introduce identical files into the system and publish them to other participants. This mechanism allows the unique identification of files in the network and the later reintroduction of content in case all seeds become unavailable." >}}

### Usenet

Take-downs of copyrighted material are handled differently on the Usenet.
Take-down notices are issued to the Usenet providers legally bound to comply.
They consequently delete the messages in question from their servers.

To fight this removal, the community takes multiple measures to keep content
available. As the files or messages in question are often not completely removed
from all the existing providers but only in part, chances are that a large chunk
of the files is still available. Combining the files from different providers
might result in a complete file. Additionally, since the synchronization between
providers is sometimes imperfect or the upload process partially fails,
providing parity data for files is common. This allows the recovery of
incomplete files, which might also do the trick in this case.

If a file is unrecoverable, it is often simply re-uploaded, making the content
available again. Nevertheless, the content is actually uploaded to a new
location. Subsequently, it is necessary to create new references in the form of
`.nzb` files. They, again, must be shared across indexers, so users can
eventually find the new content.

The third measure is the _obfuscation_ of uploaded content. This includes using
random names for files and possibly uploading across various newsgroups. Thus,
it is harder to identify the content and all of its parts. An indexer or a
`.nzb` file is necessary to find the desired content without analyzing the data
on the Usenet. As this scheme requires indexers to find content, still valid
content might get 'lost' if an indexer becomes unavailable and the content is
not referenced elsewhere.