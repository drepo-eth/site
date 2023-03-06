---
title: "Architecture"
description:
  "The decentralized repository is separated into an index and a storage
  component. Both exist independently from each other, allowing flexibility in
  the future. The index stores metadata about software releases and points to
  various storage solutions holding the actual artifacts."
tags:
  - "index"
  - "storage"
  - "ethPM"
  - "warez"
  - "separation"
  - "resilience"
  - "scalability"
date: 2023-01-06T17:03:14+01:00
draft: false
weight: 4010
menu:
  main:
    parent: drepo
    weight: 10
---

## Inspiration

The decentralized repository is heavily inspired by
[ethPM](https://www.ethpm.com/ "ethPM") and the infrastructure in the _WAREZ_
community. The latter has been proven resilient and efficient[^music] over the
past decades.

[^music]: File sharing and such brought the music industry almost to its knees.

Looking at the WAREZ Scene on BitTorrent or Usenet, there is always a separation
between the actual files and a search index. While the files live on the
BitTorrent network or in newsgroups, respectively, the search index is typically
a website or another separate application. The other one still exists if the
files or the index becomes unavailable. Given the [many-to-many relationship](
{{< ref
"/drepo/existing-repos/warez" >}} "WAREZ") between content and indices, the system
can scale and is resilient at the same time.

This is particularly true for partially centralized systems like the Usenet and
the usage of public file hosters. Due to DMCA take-downs and similar processes,
content must be reposted either in original or obfuscated form.

_ethPM_ proposed the creation of _federated smart contracts_ on _Ethereum_,
which act as on-chain registries. Each project is supposed to create and
maintain its own registry. They contain a minimal amount of data points: package
name, version, and a link to more metadata. The metadata is stored off-chain and
should be referenced via a content-addressed URI. It points to a _JSON_ file
that contains more information on a given smart contract software package: Link
to the source code, version, deployments, etc.

Users of ethPM need to compile a set of trusted registries themselves. There is
no single entry point for the system defined. Each registry must implement the
[ERC-1319](https://eips.ethereum.org/EIPS/eip-1319 "ERC-1319") interface, but
the concrete implementation is up to the maintainer. This means that admins
could potentially change the current state of the registry and, for example,
remove invalid or flawed releases after publication. However, previous states
can be recovered due to the nature of the blockchain.

As the initial metadata is stored on-chain, the system can become
censorship-resistant as the information cannot be removed. Furthermore, if the
metadata and subsequent payloads are stored decentralized, they cannot be
deleted as well.

Apart from the [standard repository features]({{< ref
"/drepo/existing-repos/properties" >}} "Repository Features"), the _dRepo_ uses _separation_
defined in these two repository systems. Additionally, leveraging a permissionless
blockchain, like ethPM proposes, adds convenience and security to the system.

## Separation

The decentralized repository's core is separated in an _Index_ and a _Storage_
component. This separation allows the usage of fitting technologies for each of
these concerns while also propagating spatial partitioning and, thus,
decentralization. Simply, a software package's metadata is stored
differently and on other systems from the actual packages.

Furthermore, the core is defined as a minimal protocol open to extension. This
allows software ecosystems to add rules and conventions to fit their needs. This
openness makes it also usable in the future as long as the software development
fundamentals do not change.

Generally, the index component is a package registry on a permissionless smart
contract blockchain that only holds metadata and location information on
software packages. It allows a basic search within a tree structure of entries
and gives authors a minimal set of functions to manage publications. In
addition, the index is append-only, so neither authors nor any other party can
remove or overwrite information after it is published.

A unified index allows users to quickly find packages without searching various
sources, which entails verifying each given source. Each ecosystem, e.g., Maven
Packages, Docker Images, etc., should host their own index with preferred
customizations and conventions. Besides the unified approach, proxies and
federated setups are also possible if they fit the needs of an ecosystem or
users better.

The storage component is not an actual software component like the index.
Instead, it is a collection of various data sources spread across multiple
networks and systems. This might include decentralized storage solutions like
_BitTorrent_ or _IPFS_ or centralized storage like _AWS S3_, _GitHub_, or
existing repositories. This allows authors and users to pick their favorite or
best-fitting source. Furthermore, distributing files and thus creating
redundancy offers higher availability. Finally, as with the index, not
committing to a single distribution system allows the repository to adopt new
technologies in the future without fundamentally changing the base protocol.

{{< image-svg
  src="architecture.excalidraw.svg"
  alt="dRepo Architecture"
  caption="dRepo Architecture: The system is separated into an index and a storage component. The index is a smart contract on a permissionless blockchain holding software package metadata and managing publications. Each package points to multiple resources across various storage solutions." >}}

Separating index and storage into open, almost self-sufficient units creates a
highly flexible system. For instance, each component could be switched out for another
implementation or protocol while the other can continue to work without significant
interruption: moving the index from a blockchain to a new safe system does not
impact stored files on, IPFS and adding a new storage system does not invalidate
existing entries within the index.