---
title: "Index"
description:
  "The index is an immutable smart contract on a permissionless public
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

## A permissionless Tree

<!-- A trustless source of verifyable information -->

The index is a _smart contract_ on a _permissionless blockchain_. It manages the
relationships between _authors_, _groups_, _packages_, and _releases_.

The repository manages groups as top-level entries. Each group contains
packages, and each software package holds releases identified by a version
string. This is the content structure that is typical for software repositories.

A group, and thus, all packages within it are owned by a single owner.
Therefore, they are the only ones who can create new packages and releases
within their own group. Furthermore, a release contains a list of _content
strings_, which point to files and other information belonging to the release.

{{< image-svg
  src="owner-packages.excalidraw.svg"
  alt="Tree Structure"
  caption="Tree Structure: The index follows the typical tree structure. A user can own multiple groups. However, each group can have only one owner. Each group contains various packages and they contain many versions that mark a release." >}}

The package name and version strings should follow general naming patterns,
e.g., [SemVer](https://semver.org/ "SemVer"). The index should implement basic
rules to enforce proper names but should avoid complex patterns as this might
conflict with future changes. Likewise, the content strings in each release
should be unrestricted, as upcoming link or data formats might incorporate
peculiar standards. Using raw bytes might be worth considering.

## Simple, Trustless, Immutable

### Trustless

The index must be _public_ and _immutable_ for the system to be truly
_trustless_. Published data cannot be changed or removed, and the actual
repository code cannot be modified after deployment. In addition, no third party
or overseeing institution can be involved in publishing or retrieving release
information.

Permissionless blockchains are currently the only type of large-scale system
that can fulfill these requirements. Due to their pseudo-anonymous nature,
anyone can interact with public blockchains like
[Ethereum](https://ethereum.org/ "Ethereum") without disclosing further
information and without censorship. All writing changes are logged in the
chain's history and can be recovered anytime. In addition, the smart contract
code is by nature immutable and public.

Users can view, verify, and run the code of the index smart contract. This
allows them to evaluate the security of the source code for themselves. The
contract code will forever[^forever] execute in the same, predictable way. It is
a trustworthy source of information in a trustless manner built upon
_cryptographic truth_.

[^forever]:
    As long as the blockchain and software development exists and the blockchain
    does not fundamentally changes how code works within their execution layer.

### Simplicity

Smart contract code is generally immutable.[^selfdestruct] The implementation of
the index smart contract must thus stay _simple_, only offering a _minimal
feature_ set to prevent bugs and other possible exploits. At the same time, it
must be future-proof, compatible with new technologies, and allow integration
with external, existing tooling.

[^selfdestruct]: We ignore `selfdestruct` here for simplicity.

Non-basic features like advanced data validation or user and role management
should be externalized from the base implementation. On-chain proxy contract
setups could provide more elaborate functionalities while leaving the original
implementation untouched. Furthermore, this allows users to opt out of these
features and interact with the original index directly.[^optout] It is up to
each community member to decide how to interact with the system.

[^optout]:
    A proxy implementation might be controlled by a centralized entity or put up
    barriers not all community members agree with. Instead of being locked out
    of the ecosystem, they can still participate directly at the root.

### Limited Upgradability

Using an upgradable proxy to allow code changes to the index should be avoided.
Such a mechanism might be exploited to introduce malicious changes by applying
pressure to admins or overtaking a potential
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization "Decentralized Autonomous Organization").
However, in an early introduction phase, such a setup might help to fix bugs in
the new system, mainly if not enough audits were conducted. Eventually, the
upgrade feature should be permanently disabled. This removes the human factor as
a security risk from the system. Additionally, it removes liability concerns, as
nation-states might hold human administrators or DAO members responsible for the
system's content or processes if they can influence it.

## Ownership

### Groups

While the data in the index is readable by anyone, users retain ownership and
thus control over their submitted content.

Users can claim any available group by its name. The system employs a "first
come, first served" approach. After a successful claim, they become the owners
of the respective group. However, only one user account can be the owner, and
there are no other roles besides the owner role. This is due to the simplicity
concerns mentioned earlier. More elaborate schemes can be employed through
external components.

The ownership and all writing permissions are bound to the single owner account.
However, the ownership is transferable to other accounts. If access to the owner
account is lost or the ownership is transferred to an inaccessible account, the
group becomes effectively locked and thus immutable. The core system does
explicitly not include any sort of recovery mechanism.

As the claiming process is public and trustless, users may register group names
to flip them on secondary markets. Thus, introducing of a registration fee might
be worth considering to prevent spamming.

### Release Creation

The owner of a group can create new releases of a given package. The package is
not created explicitly but implicitly by creating a first-release version. Each
release contains a version string and a set of content references. These
references point to artifacts belonging to the release: build artifacts, source
code, documentation, website, etc. Furthermore, each artifact must have at least
one checksum or digital signature to verify the validity of a downloaded
artifact.

Once a content string is added to a release, it cannot be removed or changed.
However, the owner can add additional content references at any time. This
allows them to invalidate previous references if such a convention is
established in connected clients. It is the client's responsibility to filter
the information in the index for data they can process or prefer: trying to
download artifacts from decentralized sources before using a centralized one or
downloading only from centralized sources and comparing checksums.

### Release Nuking

As release information is immutable, but software and releases are still made by
humans, there has to be a way to flag invalid or broken releases. In the WAREZ
scene, there is a mechanism called _Nuking_; in Python's PyPi and Rust's Cargo,
a similar concept is called _Yank_. They all describe a feature which flags a
release as invalid. However, the original data is not deleted from the
repository. Thus, the artifacts are still available if someone wants to download
these files explicitly. Clients like Cargo will not propose a flagged release
when adding a new dependency to your project and most likely warn you if you are
already using one.

The decentralized repository uses the name _nuke_ due to its affiliation with
the WAREZ scene. The owner can flag each release as nuked at any time after its
publication. Further references can be added to the content to describe the
reasoning for pulling a given release. Once a release is marked as nuked, this
state **cannot be reverted**. The index does not provide any further information
or features besides the flag. From an API point of view, there is no filtering
of nuked releases. Release information stays available independent of its state.
It is up to clients to provide filtering and further processing of invalidated
release packages.

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

<!-- TODO: Why Blockchain? -->
<!-- TODO: secured by the blockchains ecosystem, mutual destruction -->
<!-- TODO: illustration -->