---
title: "Architecture"
# description: 'TODO'
# tags:
#   - 'TODO'
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
[ethPM](https://www.ethpm.com/ "ethPM") and the infrastructure in the __WAREZ__
community.
The latter one has been proven resilient and efficient[^music] over the past
decades.

[^music]: File sharing and such brought the music industry almost to its knees.

Looking at WAREZ Scene on BitTorrent or Usenet, there is always a separation
between the actual files and a search index.
While the files live on the BitTorrent network or in Usenet groups
respectively, the search index is typically a website or another separate
application.
If either the files or the index gets taken down, the other one still exists.
Given that there is a [many-to-many relationship]( {{< ref
"/drepo/existing-repos/warez" >}} "WAREZ") between file content and indices the
system can scale and is resilient at the same time.

This is particularly true for partially centralized systems like the Usenet and
the usage of public file hosters.
Due to DMCA takedowns and similar processes content needs to be reposted
either in its original or in obfuscated form.

_ethPM_ proposed the creation of _federated smart contracts_ on _Ethereum_
which act as on-chain registries.
Each project is supposed to create and maintain their own registry.
The registries contain a minimal set of data points, package name, version, and
a link to more metadata.
The metadata is stored off-chain and should be stored as a content addressed
URI.
It is represented as a _JSON_ file which contains more information on a given
smart contract software package: link to the source code, verion, deployments,
etc.

Users of ethPM need to compile a set of trusted registries themselves.
There is no single entry point for the system defined.
Each registry must implement the
[ERC-1319](https://eips.ethereum.org/EIPS/eip-1319 "ERC-1319") interface but
concrete implementation is up to the maintainer.
This means that admins can potentially change the current state of the registry
and for example remove invalid or flawed releases afterwards.
However, previous states can be recovered due to the nature of the blockchain.

As the initial data is stored on-chain the system can become censorship
resistent as the information cannot be removed.
Futhermore, if the metadata and the subsequent payloads are stored in a
decentralized way, they can also not be removed.

Apart from the ['standard' repository features]({{< ref
"/drepo/existing-repos/properties" >}} "Repository Features") the _dRepo_ makes
use of the _separation_ that is defined in these two repository systems.
Additionally, leveraging a permissionless blockchain like ethPM proposes adds
convenience and security to the system.

## Separation

The _core_ of the decentralized repository is separated in an _Index_ and a
_Storage_ component.
This separation allows the usage of fitting technologies for each of these
concerns while also propagating spatial partitioning and thus decentraliation.
In simple terms, metadata of a software package is stored in a different way
and on different systems from the actual packages.

Furthermore, the core is defined as a minimal protocol which is open to
extension.
This allows software ecosystems to add their own rules and conventions to fit
their needs.
This openness makes it also usable in the future as long as the software
development fundamentals do not change.

Generally, the index component is a package registry on a permissionless smart
contract blockchain which only holds metadata and location information on
software packages.
It allows a basic search within a tree structure of entries and gives authors a
minimal set of functions to manage publications.
The index is append only, so neither authors nor any other party can remove or
change information after it is published.

A unified index allows users to quickly find packages without searching various
sources and additionally verifying a given source.
Each ecosystem, e.g. Maven Packages, Docker Images, etc, should host their own
index with preferred customizations and conventions.
Besides the unified approach, proxies and federated setups are also possible if
that fits the needs of an ecosystem or users better.

<!-- index must be available from a 'unified' access point, storage must be ubiquitous -->
<!-- each ecosystem has their own repo, federated or proxies might be possible -->

The storage component is not an actual software component like the index.
Instead, it is a collection of different sources of data spread across various
networks and systems.
This might include decentralized storage solutions like _BitTorrent_ or _IPFS_
or centralized storage like _AWS S3_, _GitHub_, or existing repositories.
This allows authors and users to pick their favorite or best fitting source.
Furthermore, distributing files and thus creating redundancy causes higher
availablility.
As with the index, not commiting to a single distribution system allows the
repository to adopt new technologies in the future without fundamentally
changing the base protocol.

<!-- TODO overview image -->

Separating index and storage into open, almost self-sufficient units creates a
extremely flexible system.
Each component could be switched out for another implementation or protocol
while the other can continue work without major interruption: moving the
index from a blockchain to a new safe system does not impact stored files
on IPFS and adding a new storage system does not invalidate existing entries
within the index.