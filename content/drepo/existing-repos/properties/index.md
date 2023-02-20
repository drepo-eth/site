---
title: "Properties"
date: 2022-09-12T00:31:26+02:00
draft: false
weight: 3010
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
  coordinate system often comprised of a combination of _Group_ - _Package_ -
  _Version_.

* __Build Artifacts__: Depending on the type of repository and its ecosystem
  the systems primarily hold built or compiled artifacts which are _ready to
  use_.

* __Source Code and Documentation__: If not the primary artifacts, the
  corresponding source code and documentation of a software release package are
  typically published along with built artifacts.

* __Metadata__: Licenses, dependencies, name of the authors, links to the
  project website and development repository are usually added to each release
  package.

* __Verification Data__: Checksums and digital signatures can be found next to
  the built artifacts to verify the authenticity of downloaded files.

* __Historization__: Most of the analyzed repositories store artifacts and old
  software versions in perpetuity even if newer versions are available.

* __Compatibility__: HTTP and other common web technologies, among others, are
  used to access most repositories, making them available even in restrictive
  corporate environments.

* __Content Moderation__: Administrators and platform owners have eventual
  control over all content that is published within a given repository and can
  remove unwanted artifacts.

* __Reliability__: The analyzed software repositories are highly available by
  leveraging content delivery networks, globally distributed mirrors and
  others.


[^cent]: Central does not necessarily mean centralized.
