---
title: "Index"
# description: 'TODO'
# tags:
#   - 'TODO'
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

The index is a _smart contract_ on a _permissionless blockchain_.
It manages the relationships between _authors_, _groups_, _packages_ and
_releases_.
Figure X shows said relationship.
<!-- TODO Figure -->

Within the repository, groups are the top-level entities.
Each of them is identified by a unique name and contains a collection of
packages.
These packages are themselves also labeled with a unique name within the given
group.
Releases within each package are again identified by a version string which is
unique to the package.
This is the content structure that is typical for software repositories.

A group and thus all packages within it are owned by a single owner.
They are the only ones who can create new packages and releases within their
owned group.
Furthermore, a release contains a list of _content strings_ which point to
files and other information belonging to the release.

The name and version strings should follow generall naming patterns, e.g.
[SemVer](https://semver.org/ "SemVer").
The index could implement basic rules to enforce proper names but should not go
into too much detail as this might prevent future changes.
Likewise, the content strings in each release should not be restricted at all
as upcoming link or data formats might incorporate peculiar standards.


## Simple, Trustless, Immutable

For the system to be truely _trustless_, the contract must be _public_ and
_immutable_.
Published data cannot be changed or removed and the actual repository code
cannot be modfied after its deployment.
There is no third party or overseeing institution involved to publish or
retrieve release information.
Due to the permissionless and pseudo-anonymous nature of current public
blockchains like [Ethereum](https://ethereum.org/ "Ethereum") anyone can
interact with such an index contract without disclosing further information and
without censorship.

Users can view and verify the code of the index.
This allows them to evaluate the security of the source code for themselves.
The contract code will forever[^forever] execute in the same, predictable way.
It is a 'trusted' source of information in a trustless manner built upon
_cryptographic truth_.

[^forever]: As long a the blockchain and software development exists and the
    blockchain does not fundamentally changes how code works within their
    execution layer.

Smart contract code is generally immutable.[^selfdestruct]
The implementation of the index smart contract must thus stay _simple_ only
offering a _minimal feature_ set to prevent bugs and other possible exploits.
At the same time, it must be future proof, compatible with new technologies,
and allow integration with external, exisiting tooling.

[^selfdestruct]: We ignore `selfdestruct` here for simplicity.

Non-basic features like advanced data validation or user and role management
should be externalized from the base implementation.
On-chain proxy contract setups could be used to provide more elaborate
functionalities while leaving the original implementation untouched.
Furthermore, this allows users to opt out of these features and interact with
the orginal index directly.[^optout]
It is up to each community member to decide for themselves how to interact with
the system.

[^optout]: A proxy implementation might be controlled by a centralized entity
    or put up barriers not all community members agree with. Instead of being
    locked out of the ecosystem they can still participate directly at the
    root.

Using an upgradable proxy to allow code changes to the index should be avoided.
Such a mechanism might be exploited to introduce malicious changes either by
applying pressure to admins or by over taking a potential
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization
"Decentralized Autonomous Organization").
However, in an early introduction phase such a setup might help to fix bugs in
the new system, especially if not enough audits were conducted.
Eventually, the upgrade feature should be permanently disabled.
This removes the human factor as a security risk from the system.
Additionally, it removes liability concernes as human administrators or DAO
members might be held responsible by nation states for the content or the
processes of the system if they can have any influence on it.

## Interaction

### Claim a Group

Users can claim any available group by its name.
The system employs a "first come, first served" approach.
After a successful claim they become the owners of the respective group.
However, only one user account can be the owner and there are no other roles
besides the owner role.
This is due to the aforementioned simplicity concernes and more elaborate
schemes can be employed through external components.

The ownership and all writing permissions are bound to the single owner
account.
However, the ownership is transfereble to other accounts.
If access to the owner account is lost or the ownership was transfered to an
inaccessible account, the group becomes effectively locked and thus immutable.
The core system does explicitly not include any sort of recovery mechanism.

As the claiming process is public and trustless, it is possible that users will
register group names with the intention to flip them on secondary markets.
Thus the introduction of a registration fee might be worth considering to
prevent spamming behaviour.

### Create a Release

The owner of a group can create new releases of a given package.
The package itself is not created explicitly but implicity by creating a first
release version.
Each release contains a version string and a set of content references.
These references point to artifacts belonging to the release: build artifacts,
source code, documentation, website, etc.
Furthermore, each artifact must have at least one checksum or digital signature
to verify the validity of a downloaded artifact.

Once a content string is added to a release it cannot be removed or changed.
However, additional content references can be added by the owner at any time.
This allows them to invalidate previous references if such a convention is
established in connected clients.
It is the clients responsibility to filter the information in the index for
data they can process or prefer: trying to download artifacts from
decentralized sources before using a centralized one or download only from
centralized sources and compare checksums.

### Nuke a Release

As release information is immutable but software and releases are still made by
humans, there has to be a way to flag invalid or broken releases.
In the WAREZ scene there is mechanism called _Nuke_, in Python's PyPi and
Rust's Cargo a similar concept is called _Yank_.
All of them describe a feature which flags a release as 'invalid'.
However, the original data is not deleted from the repository.
Thus, the artifacts are still available if someone wants to download exactly
these files.
Clients like Cargo will not propose a flagged release when adding a new
dependency to your project and most likely warn you if you are already using
one.

The decentralized repository uses the name _nuke_ due to its affiliation with
the WAREZ scene.
Each release can be flagged by the owner as nuked at any time after its
publication.
Additionally, futher references can be added to the content to describe the
reasoning for pulling a given release.
Once a release is marked as nuked this state __cannot be reverted__.
The index itself does not provide any further information or features besides
the flag.
From an API point, there is no filtering of nuked releases.
Release information stays available despite of its state.
It is up to clients to provide filtering and further processing of invalidated
release packages.

## Migration

The introduction of a new index must be carefully prepared.
Extensive audits of the code must be conducted before a final index registry
can be deployed.
This process might be eased by introducing upgradability to the code base while
the system is still in its early days.
However, such upgradability must the carefully and responsibly governed and
finally be removed.
As mentioned before, a governance board or a DAO would be suited in this
transitional phase.

Apart from the runtime code safety, proper data migration from existing
repositories is of the upmost importance.
Errors could lead to security issues throughout the ecosystem if groups and
packages are not mapped to the correct owners.


<!-- TODO: Why not a federated system but a single repo? -> all or nothing approach -->

<!-- why blockchain? -->
<!-- smart contract blockchains and similar tech are currently the only 'larger scale' systems that work in a trustless, permissionless and verifyable way -->
<!-- if new technology with similar properties come around a migration should be considered as blockchains currently do not scale well if security and decentralization are prioritized -->