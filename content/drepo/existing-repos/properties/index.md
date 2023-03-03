---
title: "Common Properties"
description:
  "Multiple existing repositories were analyzed and their common properties
  identified. They are the building blocks for a new repository"
tags:
  - "source code"
  - "coordinates"
  - "common properties"
  - "metadata"
  - "compatibility"
date: 2022-09-12T00:31:26+02:00
draft: false
weight: 3010
menu:
  main:
    parent: repositories
    weight: 10
---

## The Goal

The original author of the master thesis, Fan Xu, analyzed a wide range of
existing software repositories. This included language-specific repositories
like Java's Maven Central, the NPM Registry, Python's PyPI, and the Debian
repositories and the Arch User Repository. However, only repositories that host
open-source software were inspected.

Her goal was to find a minimal set of properties defining a software repository.
These feature definitions could be used as building blocks of a new system if
they were compatible with the goals of decentralization and enhanced security.
Otherwise, alternatives had to be found to replace or enhance a given function.

## Identified Properties

Traditional software repositories share a common set of properties. The
following are the essential traits that make up a software repository:

- **Ease of access**: There is a single, central[^cent], and commonly known
  access point to the repository for its users.

- **Coordinates**: Software packages within a repository are addressed via a
  coordinate system often comprised of a combination of _Group_ - _Package_ -
  _Version_.

- **Build Artifacts**: Depending on the type of repository and its ecosystem the
  systems primarily hold built or compiled artifacts _ready to use_.

- **Source Code and Documentation**: If not the primary artifacts, a software
  release package's corresponding source code and documentation are typically
  published along with built artifacts.

- **Metadata**: Licenses, dependencies, name of the authors, links to the
  project website and development repository are usually added to each release
  package.

- **Verification Data**: Checksums and digital signatures can be found next to
  the built artifacts to verify the authenticity of downloaded files.

- **Historization**: Most analyzed repositories store artifacts and old software
  versions in perpetuity even if newer versions are available.

- **Compatibility**: HTTP and other common web technologies, among others, are
  used to access most repositories, making them available even in restrictive
  corporate environments.

- **Content Moderation**: Administrators and platform owners have eventual
  control over all content published within a given repository and can remove
  unwanted artifacts.

- **Reliability**: The analyzed software repositories are highly available by
  leveraging content delivery networks, globally distributed mirrors and others.

[^cent]:
    Central does not necessarily mean centralized but rather points to a
    well-known entry point.