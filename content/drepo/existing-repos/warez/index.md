---
title: "Warez"
# description: 'TODO'
# tags:
#   - 'TODO'
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
However, due to their resilience a decentralized repository should adopt some of
their features. We also ignore group sites and the release system in this
description.

<!-- not a software repository but a content respository so to say -->

[BitTorrent](https://en.wikipedia.org/wiki/BitTorrent "BitTorrent") has been
around for almost two decades and is still widely used, even in corporate
settings. It is a peer-to-peer file-sharing network, which allows users to share
arbitrary files that are identified using
[Content Addressing](https://en.wikipedia.org/wiki/Content-addressable_storage "Content Addressing").
Applying a hashing function to the content of a file creates a rather unique
value that is used to identify files. This _content address_ is subsequently
used in `.torrent` files and
[magnet links](https://en.wikipedia.org/wiki/Magnet_URI_scheme "Magnet URI Scheme")
to share pointers to files.

Another popular distribution system is the
[Usenet](https://en.wikipedia.org/wiki/Usenet "Usenet"), which holds various
newsgroups. It was originally used to post text content and is the spiritual
predecessor of online forums or, for example,
[Reddit](https://www.reddit.com/ "Reddit"). Arbitrary files are posted in the
form of encoded text, which is similar to the mechanism used for email file
attachments. A file is usually split into multiple text messages which are
identified by server-generated ids. Similar to `.torrent` files, `.nzb` files
are used to address these individual messages.

The Usenet itself is hosted using various service providers that each hold a
copy of the entire system and synchronize the data among each other.[^entire]
While the BitTorrent network is publicly and free-of-charge accessible,
accessing the Usenet usually requires a paid account with an Usenet provider.

[^entire]:
    Not every provider holds the entire Usenet. Depending on their service only
    specific parts are synchronized and served.

<!-- showcase usenet and bittorrent -->
<!-- bt: content is hosted p2p, users can add arbitraty content. -->
<!-- content is addressed using content addressing -->
<!-- torrent files and magnet links -->

<!-- usenet: content is posted as encoded text to usenet and spread to various usenet providers -->
<!-- content is address as articles and nzb files are used to identify the articles -->
<!-- finding articles by raw search -->

Trackers and indexers are used to find and share content stored in these
unstructured systems. They are separate, centralized systems that are often
represented as websites. They allow users to search for content and obtain the
respective magnet links, `.torrent`, or `.nzb` files.

Even though the community is somewhat organized, there is no central authority
that declares an indexer as the standard or a piece of content as the valid one.
This means that there exist multiple indexers and trackers and also multiple
versions of the same content in, for example, different formats or qualities.
Consequently, there is a many-to-many relationship between indexers and content.
Indexers might reference the same files or different ones, still representing
the same content.[^format]

[^format]:
    A movie might be available as a Blu-ray file or a rip of a digital release.
    They are very different files that contain the same content.

## Resilience

Due to copyright laws, law enforcement is interested in taking down both the
content and the indexers, even though the latter does not hold any copyrighted
content.

As trackers and indexers are for the most part centralized services, they are
fairly easy to identify. Consequently, taking them down, as long as legal
grounds and measures exist, is also straightforward. However, this measure only
removes a single tracker instance. Its data is mostly publicly available and
more importantly, separated from the actual content. Another instance can easily
replace it without any actual disturbance to the overall system.

<!-- indexers and trackers are used to help users find content -->
<!-- they act as as searchable address book / index to map names to content -->
<!-- index and content are separated -->
<!-- independent many-to-many relationship between files and tracker/index -->

<!-- content and indexers are subject to take downs due to the 'illegal' distribution of content -->

Files in the BitTorrent network can essentially never be removed as there is no
central, addressable point of failure to exploit.[^removal] Thus, peers that
share files containing copyrighted material are being targeted and taken down in
an attempt to remove the files from the network. Since the p2p network
communicates openly, one can identify the IP addresses of peers sharing specific
data. From here, law enforcement can find the real identities of participating
peers.

[^removal]:
    The only way to remove a file from a content addressable p2p network forever
    is to delete all instances of the file globally and permanently. This would
    entail that the file is deleted on any computer that ever shared the file
    and that the file cannot be reproduced, an almost impossible task.

Another possibility is to block the BitTorrent network traffic altogether
through ISPs. Such a measure, however, is fairly broad and would prevent using
the system for other legal purposes. Additionally, circumventing this blockade
is rather trivial.

The usage of VPNs and other privacy-preserving technologies can not only evade
the aforementioned network blockage but also hide the real identity of peers
within the open network. This makes it impossible to track down all peers
sharing a specific file.

<!-- in bt: content cannot be removed as data is content addressed, only peers can be removed by either somehow blocking the peer from accessing the internet or offline actions -->
<!-- peers need to use privacy technologies like vpns to hide their online identity (ip) -->
<!-- tracker can be removed as it is a centralized system, takedown of server -->
<!-- other trackers can take their place and continue to share the same content as content is not owned by tracker -->

Takedowns of copyrighted material are handled differently on the Usenet.
Take-down notices are issued to the Usenet providers that are legally bound to
comply. They consequently delete the messages in question from their servers.

To fight this removal, the community takes multiple measures to keep content
available. As the files or messages in question are often not completely removed
from all the existing providers but only in part, chances are that a large chunk
of the files is still available. Combining the files from different providers
might result in a complete file. Additionally, since the synchronization between
providers is sometimes not perfect or the upload process partially fails, it is
common to provide parity data for files. This allows the recovery of partially
incomplete files, which might also do the trick in this case.

If a file is unrecoverable, it is often simply re-uploaded, making the content
available yet again. Nevertheless, this entails that the content is actually new
and references must be shared across indexers.

The third measure is the obfuscation of uploaded content. This might include
using random names for files and possibly uploading across various newsgroups.
Thus, it is harder to identify the content and all of its parts. An indexer or a
`.nzb` file is necessary to find the desired content without having to analyze
the data on the Usenet. As this scheme requires indexers to find content, still
valid content might get 'lost' if an indexer becomes unavailable and the content
is not referenced anywhere else.

<!-- in usenet: content is stored on multiple centralized networks owned by companies, usenet providers -->
<!-- as they are real world comapnies, they need to abide by their respectives countries laws and remove 'illegal' content -->
<!-- multiple ways to fight this: -->
<!-- usage of repair files, that recover partially broken / taken down files -->
<!-- reposting of content -->
<!-- using obfuscation to mask content, which is then only findable using (specific) indexers -->