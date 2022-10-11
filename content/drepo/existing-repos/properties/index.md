---
title: "Properties"
date: 2022-09-12T00:31:26+02:00
draft: false
weight: 2010
menu:
  main:
    parent: repositories
    weight: 10
---

## Commonalities

The original author of the master thesis, Fan Xu, analyzed a wide range of
existing software repositories.
This included language specific repositories like Java's Maven Central, the NPM
Registry, and Python's PyPI as well as the Debian repositories and the Arch
User Repository.

It was her goal to find a minimal set of properties which define a software
repository.
These feature definitions could be used as building blocks of a new system if
they were compatible with the goals of decentralization and enhanced security.
Otherwise, alternatives had to be found to replace or enhance a given function.

<!-- TODO: Open Source -->

Traditional software repositories share a common set of properties.
The following are the essential traits that make up a software repository:

* __Ease of access__: There is a single, central[^cent], and commonly known
  point of access to the repository for its users.

* __Coordinates__: Software packages within a repository are addressed via a
  coordinate system often comprised of combination a _Group_ - _Package_ -
  _Version_.

* __Build Artifacts__: Depending on the type of repository and its ecosystem
  the systems primarily hold built or compiled artifacts which are ready to
  use.

* __Source Code and Documentation__: If not the primary artifacts, the
  corresponding source code and documentation of a software release package are
  typically published along with built artifacts.

* __Metadata__:

* __Verification Data__:

* __Historization__:

* __Compatibility__:

* __Content Moderation__:

* __Reliability__:


[^cent]: Central does not necessarily mean centralized.
