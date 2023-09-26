---
title: "The Index"
description:
  "The Index is an immutable smart contract on a permissionless public
  blockchain. Users own groups and can publish new software releases without
  prior approval."
tags:
  - "index"
  - "storage"
  - "nuking"
  - "trustless"
  - "permissionless"
  - "censorship"
  - "groups"
  - "releases"
  - "software release"
  - "ownership"
  - "blockchain"
  - "smart contract"
date: 2023-01-06T17:03:20+01:00
draft: false
weight: 4020
menu:
  main:
    parent: drepo
    weight: 20
---

## The Basics

The _Index Component_ of the decentralized software repository is a registry for
software releases on a _Permissionless Smart Contract Blockchain_. Its goal is
to manage _Groups_, _Packages_, and individual _Releases_ and to store and
provide the information safely, censorship-resistantly, and permanently to the
public. The data stored only contains metadata and references pointing to the
actual payloads of releases, e.g., build artifacts, source code, documentation,
etc.

The system saves data in an _append-only_ fashion. As a result, users can only
add new data to the index but cannot change or remove existing information.
Furthermore, the platform logs all changing interactions indefinitely to provide
traceability.

Software authors who want to publish their work are not required to supply any
information about their identity. The system does not restrict access in any
way. The only requirement is registering a group handle as a namespace for
software packages. Then, within this namespace, authors can post any information
they desire.

Similarly, users are not limited when reading the index data; neither rate
limits nor private packages exist. All information is public and does not
require creating a user account; such a feature does not exist.

{{< image-svg
  src="owner-packages.excalidraw.svg"
  alt="Tree Structure"
  caption="Tree Structure: The index follows the typical tree structure. A user can own multiple groups. However, each group can have only one owner. Each group contains various packages and they contain many versions that mark a release." >}}

## Why Blockchain?

A public permissionless smart contract blockchain offers the perfect platform
for the registry index. Data and contract code are _immutable_, _transparent_,
and _public_. Anyone can contribute to the network. Participants host, share,
and validate the data, creating a resilient and scalable system.

It minimizes the dependency on cloud providers and the influence of third
parties on the system's integrity. A deployed index component purely exists on
the blockchain and is not explicitly hosted in a dedicated system. As a result,
there are no ongoing costs for hosting that would require funding. Instead,
authors finance the index's operation by paying transaction fees on the
blockchain.

Furthermore, the underlying blockchain guarantees the correct computation and
data storage in a _trustless environment_ secured by _verifiable cryptographic_
schemes. Manipulation attempts require substantial influence on the
decentralized network, lowering such attacks' feasibility.

In addition, prominent public blockchains like
[Ethereum](https://ethereum.org/ "Ethereum") reliably facilitate the exchange of
digital assets worth billions of dollars daily. Therefore, a decentralized
repository would benefit and contribute to the security of the chain's entire
ecosystem. Stakeholders (Miners) ensure the correct execution of transactions
for all applications hosted on a given blockchain. Consequently, compromising
one app would affect all, including the dRepo index. This dependency creates an
interconnected system that grows stronger and more valuable with each
application as the number of stakeholders increases.

## Simplicity

Code on a _Smart Contract Blockchain_ is _immutable_; changes after deployment
are impossible. That includes bug fixes and the introduction of new features.
Therefore, the index's feature set requires careful planning, and the code must
be free of bugs and errors. In a nutshell, the system must be safe and
future-proof. An overly complex system trying to handle all possibilities poses
a risk to these requirements. Hence, simplicity and moving advanced logic out of
the index contract into connecting systems aids in creating a system that is
less prone to errors and is open to future use cases. For example, the index
does not include a feature of an elaborate role and permissions system. Instead,
there is only a single owner of a group who possesses the right to add data and
software releases. Separate contracts or applications should handle roles and
user recovery.

Proxy patterns allow the creation of _Upgradable Smart Contracts_. By switching
the implementation contract fixing bugs and adding new features is possible.
However, upgrades are risky from a technical point of view as they might
introduce security issues and could destroy stored data. More importantly, they
open the door for liability issues, censorship, and possible extortion. For
instance, potential admins may add features that prevent users from adding
certain information or block them from participating. Introducing a
decentralized autonomous organization
([DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization "Decentralized Autonomous Organization"))
might decrease the number of attack vectors. But a majority attack could even
compromise the DAO. Consequently, a trustless environment based on immutable
code must be preserved to eliminate such risks.

## Witnessable

The index is a _[Witnessable
Application]({{< relref "/drepo/web3.1/witnessable-apps">}} "Witnessable
Applications")_, offering _full transparency_ and _traceability_ while
preserving _pseudo-anonymity_. All data is stored publicly and thus viewable by
anyone. For instance, users can run their own blockchain node to help secure the
system or fork the chain to test transactions before submitting them to the live
system. Hence, they can verify the system in its entirety.

Furthermore, the system relies on the anonymous accounts of the underlying
blockchain. There is no verification process for software authors defined.
Despite their anonymity, they are responsible for inspiring users' confidence in
their work by proving their identity or, preferably, the authenticity and
validity of their published software releases. As a _Witnessable Application_,
the decentralized repository index represents a verifiable source of information
on software artifacts.

## Interactions

As described before, to reduce the risk of introducing bugs and errors into the
immutable system, features are kept simple and to a necessary minimum. A
first-come-first-served principle applies to group management. Anonymous users
can register any group they desire. Within this group, they can create software
packages and consequently publish software releases. A single user account owns
a group, and ownership is transferable. However, there are no elaborate role and
user management schemes. Also, ownership recovery does explicitly not exist, as
losing access and thus making a group effectively immutable is a feature.

Furthermore, the index does not enforce restrictive naming schemes or patterns
when creating groups, packages, and releases.[^restrictive] For example, the
prototype implementation only allows using
[ASCII](https://en.wikipedia.org/wiki/ASCII "ASCII") and numeric characters to
prevent encoding problems in identifiers. However, content strings are
explicitly exempted from this requirement as future payloads might employ more
complex encodings. Using raw byte arrays is worth considering.

[^restrictive]:
    However, the community should establishes standards for naming and
    versioning, for example, [SemVer](https://semver.org/ "SemVer"), and enforce
    these in client applications.

Release information in the index is generally _append-only_. An owner can add
further content information to a release at any time. For instance, they might
add download links to a new p2p network. However, as releases cannot be removed,
it is necessary to mark them as invalid. Similar features exist in repositories
like PyPI and Rust's Crates.io. Inspired by the WAREZ community, the dRepo uses
the term _Nuke_ to describe a withdrawn release that should not be used. The
group owner can flag an existing release as nuked and add additional content to
provide further information. This process is irreversible; once a release is
_nuked_, it stays this way.

Logic and features surpassing the index's basic needs are outsourced to clients
and intermediary services. For instance, third-party services could provide
pretty user interfaces, advanced search functions, statistics, and more, based
on the information stored in the decentralized repository. However, great
responsibility lies with client applications developers and users directly
employ. Ultimately, it is their duty to evaluate and validate the data retrieved
from the index and potential third-party services and act in the user's best
interest. They must filter nuked releases, check data integrity, and obtain the
information needed in the user's preferred and trusted way by leveraging strong
encryption, obfuscation, and trusted intermediaries[^intermediaries].

[^intermediaries]:
    For example, trusted blockchain RPC providers or centralized storage
    systems.

## Migration

The introduction of a new index must be carefully prepared. Extensive code
reviews must be conducted before deploying a final index registry. This process
might be eased by introducing upgradability to the code base while the system is
still in its early days. However, such upgradability must be carefully and
responsibly governed and finally be removed. As mentioned, a governance board or
a DAO would be suited for this transitional phase.

Apart from the runtime code safety, proper data migration from existing
repositories is most important. Errors could lead to security issues throughout
the ecosystem if groups and packages are not mapped to the correct owners.