---
title: "Mirrored"
description:
  "Mirrors are copies of software repositories. Local mirrors serve the same
  content within an organization, providing additional value. Public mirrors
  offer alternative sources for the same content to users. This creates a more
  resilient service while delivering higher quality."
tags:
  - "mirrors"
  - "copy"
  - "master-slave"
  - "replication"
  - "synchronization"
  - "digital signature"
date: 2022-09-12T00:32:21+02:00
draft: false
weight: 3030
menu:
  main:
    parent: repositories
    weight: 30
---

## Alternative Hosts

_Mirrors_ usually describe some 'place' where a copy of some information is
stored and accessible. In contrast, a proper backup intended for longtime
archiving and recovery purposes would not be included in this category as they
are typically not accessible in the same way as the master copy.

Mirrors of software repositories are often found within organizational networks,
for example, corporate intranets. For instance, products like
[Nexus](https://www.sonatype.com/products/nexus-repository "Nexus Repository")
and [Artifactory](https://jfrog.com/artifactory/ "Artifactory") allow the
creation of self-hosted repositories. Besides hosting custom software packages,
a mirror or proxy feature enables the integration of upstream repositories, for
example, public systems like the NPM Registry. They seamlessly combine custom
and upstream artifacts into a single repo, typically consumed within a given
organization. One has to mention that the mirror feature does not initially copy
all content from an upstream system but downloads artifacts on demand and stores
them for re-distribution. Also, it is possible to make such a system publicly
available to potential customers, rendering it a one-stop shop for all their
software needs.

Typical use cases for such local mirrors include:

- Reducing network load on the upstream repository and the local internet
  connection. An artifact is downloaded from the internet once and subsequently
  only transferred within the local network.
- A central, localized copy of artifacts reduces latency and increases transfer
  speeds, as internal networks are usually faster.
- A central copy that is quickly and easily accessible removes the need for
  other sophisticated caching mechanisms.
- A local mirror might have a higher availability or, at least, is unaffected by
  an upstream repository's downtime.
- Additional security scans can be performed on the synchronized data.
- An organization can detect and prevent upstream content manipulation in the
  local copy.

Generally, a mirror system does not have to copy all the content from an
upstream repository. Instead, the operator actively excludes certain artifacts
or includes additional content to fulfill the system's purpose.

## Mirror Networks

### Architecture

Large-scale networks of repository mirrors are an alternative setup to the
centralized, cloud-based approach discussed in the [previous
chapter]({{< ref "/drepo/existing-repos/centralized" >}} "Centralized
Repositories"). Notable examples are the
[Arch Linux Repositories](https://wiki.archlinux.org/title/Official_repositories "Arch Linux Repositories")
and the
[Debian Repositories](https://wiki.debian.org/DebianRepository "Debian Repository").

Such systems are based on a
[Master-Slave-Design](<https://en.wikipedia.org/wiki/Master/slave_(technology)> "Master/Slave")
similar to
[Database Replication](<https://en.wikipedia.org/wiki/Replication_(computing)#DATABASE> "Database Replication").
Here, a single _master_ repository is owned and operated by the core teams.
Their members and selected volunteers can contribute new content to the
repository. The master generally allows read-and-write operations.

Mirror repositories, however, are _read-only replicas_ or slaves. This means
that the content from the master repository is synchronized to each mirror in
defined intervals. This is a one-way operation. The mirror operators are
generally not able to modify the content. Users are only able to obtain
artifacts from the mirror repositories. If they want to contribute artifacts,
they must upload them to the master and await the eventual synchronization to
all mirrors.

{{< image-svg
  src="mirror-network.excalidraw.svg"
  alt="Mirror Network"
  caption="Mirror Network: Mirrors worldwide synchronize the content from the master repository and serve the data to users in their vicinity." >}}

A multitude of these mirrors is hosted by volunteers around the world. These are
often corporations, ISPs, and universities that possess many unutilized
resources like, for instance, bandwidth and storage space. Therefore, a regular
user should prefer a mirror to the master repository to download artifacts, as
the master might be overloaded with numerous requests. Furthermore, a mirror is
most likely located closer, enabling lower latency and possibly higher transfer
speeds, notably if the mirror is situated within the same network segment, e.g.,
within the ISP's network.

The traffic load is spread around the network. This reduces the costs for the
master as it does not have to scale up to meet the entire community's needs. As
a result, a highly productive network is created as a community effort, which
induces little cost to individual parties. Additionally, the performance and
overall experience for users are improved.

### A Bit Less Centralized

Involving independent volunteers to host mirrors creates a less centralized
network. The mirrors themselves operate autonomously. If the master is
unavailable, the mirrors continue to serve data based on the last
synchronization.

However, the master is still in absolute control. They could block users and
mirrors from downloading artifacts, and they could modify the content at their
will, which is subsequently synchronized throughout the network. Nevertheless,
mirror operators are in control of their respective systems. They could
similarly block users and stop synchronizing with the upstream system if they
disagree with the content.

From a user's perspective, this sounds bad at first. But due to the sheer amount
of mirror operators, chances are that there are at least a few who will serve
you up-to-date content even if you are the worst supervillain.

However, one problem persists. The master controls the content of the entire
network as they are the only ones with write permission.[^copy] In theory,
mirror operators could change the content. But due to checksums and digital
signatures effectively spanning the entirety of the content[^signed], changing
the content without the master's private keys would result in an invalid state.
Clients check for the validity of the content using these known keys and decline
packages that fail this verification. The only measures a mirror operator can
resort to are stopping synchronizing or effectively forking the content.

[^copy]:
    In truth, it is actually not much of a permission but the system design that
    every mirror copies the data from the master. This makes it effectively the
    only writing instance in the network.

[^signed]:
    Artifacts in the repository are digitally signed by the core teams, who
    upload data into the master repository. The indices, basically the file tree
    structure, are signed similarly. Consequently, the state of the entire
    content is digitally signed, which makes manipulating it practically
    impossible.