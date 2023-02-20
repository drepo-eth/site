---
title: "Build Verification Network"
date: 2023-01-23T13:12:50+01:00
draft: false
weight: 5010
menu:
  main:
    parent: expanded
    weight: 5010
---

## Source Code is the Single Point of Truth

The source code of a project is the **single point of truth**. It describes the
software as whole, what it does, how it works, how to build it, and its flaws.
It is the description of the piece of software users are looking for.

The drepo requires projects to implement
[Reproducible Builds](https://reproducible-builds.org/ "Reproducible Builds").
Thus, if someone holds a specific version of the source code, they are able to
create the same build artifact over and over again. This also applies to other
people. Anyone with this specific version of the source code will build exactly
the same artifact.

This property makes builds of such projects comparable. If the author publishes
the version of the source code and the compiled artifact to the drepo, anyone
can verify whether or not the artifact is derived from the given source. Hence,
the source code and the resulting artifacts are **verifiably connected** to each
other. This connection removes the component of _trust in the author_ from
equation. Users do not have to blindly trust that build artifacts originate from
the source code and do not have to rely on the author's word when they digitally
sign an artifact. Hence, a _trustless_ relationship is formed.

Any change in the source code would result in a different artifact.
Consequently, any manipulation would stand out immediately. This, however,
implies that a user compiles or builds the software in order to compare it with
the published artifacts to eliminate any suspision of tampering.

For every user to build each software dependency from source defeats the purpose
of precompiled artifacts in repositories. Furthermore, these compilation
processes might take a huge amount of time. Such an investment might be
justified when building software systems that have extremely high demands on
security, leaving no room for error or blind trust.

In day-to-day use cases and especially for novice users, who just want to use a
downloaded software, this amount preliminary work might be less than ideal. A
middle ground might be a preferential solution offering both a high level of
security while maintaining comfortability.

<!-- based on reproducible builds -->
<!-- explicitly connecting source code and build artifacts -->
<!-- the actual author becomes less relevant -> no need to trust checksum/signatures -->
<!-- verifyiable source code creates always the same build artifacts -->

<!-- in theory: everybody has to verify and build each artifacts, but that is way too much -->

## Verifying for the Community

### The Basics

Instead of every user verifying each piece of software they want to use by
themselves this work could be outsourced to a trustless _Build Verification
Network_.

Such a system consists of a large number of nodes which will do the gruntwork of
verifying each software artifact and subsequently publish their findings.
Generally, if a large number of the nodes, which verified a software release,
arrives at the same results as the original author, the provided information is
most likely valid. However, if a significant protion of said verifiers reaches
diverging results, the software package might be invalid. This might only point
to a bug in the build but could also uncover malicious behaviour.

Other users of the drepo can evaluate these results of the verifying
participants. Subequently, they have to decide for themselves whether or not an
artifact is valid. We imagine the community would provide guidelines on specific
thresholds as such an evaluation might be difficult for novice users.

### Nodes

These aforementioned nodes should be owned and operated by independent,
anonymous parties. The entry barrier for participation should be kept at a
minimum in order to facilitate voluntary contribution to the system. For
example, hardware requirements should remain low so practically anybody could
offer their compute power. But as energy prices are rising and build tasks being
quite energy intensive, not everybody want to give away their money to a good
cause. Hence, completing verification tasks must be incentivized in order to
encourage participation besides people volunteering. We will discuss this topic
in a [later chapter](TODO).

Furthermore, the system should not require a cumbersome registration process for
nodes to participate, which might involve manual screening of applications. Such
whitelisting does not fit into the concept of a trustless system as this kind of
process would create a trust relationship to these nodes. Instead, statistical
improbabilities should reduce risks due to malicious nodes to a minimum or
identify potential manipulation publicly. Meaning, if an automated probable
solution to the verification task could not be found, it should be marked as
such.

### Unified Build Configuration

Another problem are the build processes themselves. Even though many projects
employ automated build systems or CI to test and build their software, these
systems are very different.
[GitHub Actions](https://github.com/features/actions "GitHub Actions"),
[GitLab CI/CD](https://docs.gitlab.com/ee/ci/ "GitLab CI/CD"), or
[Travis CI](https://www.travis-ci.com/ "Tracis CI") are similar in terms of
configuration of build steps in _yaml_ files within a project. But how they are
executed and how the build environments behave is vastly diverse. Participants
in the build network would have to execute build tasks in these respective,
proprietary systems in order to re-use these build configurations. This would
defeat the demand for independence when verifying a piece of software.

There are tools like [act](https://github.com/nektos/act "act") which allow
executing pipelines outside the cloud based environment, for example locally.
But they are still bound to the given platform and certain features might not be
portable.

To guarantee independence from proprietary platforms a **Unified Build
Configuration** is needed. As with current systems, it should express the
necessary steps to build a software and the minimal environment this build task
has to run in. It should be portable so it can be used in existing systems as
well. Containerizing the build process itself in Dockerfiles or the usage of
abstractions like [Nix](https://nixos.org/ "Nix") or
[WASM](https://webassembly.org/ "WASM") might be good starting points for this
endeavor.

### SBOM and Provenance

A _Software Bill of Materials_ and build provenance information[^slsaInfo]
should be published by the author of a software. They provide easily consumable
information outside of the source code and more data on the actual build process
which lead to published build artifacts.

[^slsaInfo]: Similar as defined in [SLSA](https://slsa.dev/ "SLSA")

Especially the SBOM provides critical insights into a piece of software. For
example, it is possible to list and check all used software licenses or detect
problematic software dependencies without analyzing the source code itself.

Both reports should also be produced by participants when they verify a build.
This allows users to check the validity of the provided additional information
as well.

Futhermore, this information from a set of diverse nodes might prove useful if
inconsistencies in specific environments are detected. Builds might not work on
Windows or produce different artifacts on newer hard- or software. However, this
kind of diverging behaviour needs to be accounted for when verifying a piece of
software. A tool might only be targeted for specific environments, thus
unsupported ones need to be excluded in the verification process.

<!-- create a network of ppl/nodes/companies who verify builds and publish their results -->
<!-- nodes operated either voluntary or more likely needs to be incentivized -->
<!-- users can collect results and if there are enough results from independent workers the results are valid  with high probablitly -->
<!-- if results diverge too much, there is most likely a problem -->
<!-- this might find problems that would not occur on local machine -->

<!-- needed: a general CI/Build framework in the likes of Gitlab CI or Github Actions etc -->

<!-- SBOM must be created from the build -->
<!-- eg package.lock before actual build, but build information (versions of: os, build tools, etc) must be included -->
<!-- see SLSA, but this information must be published in decentralized way and be used for verification (in part) -->

## Manipulation

A problem that needs to be solved is cheating or any other manipulation of
results. Much like on a test in school, the goal is for all verifying
participants to reach the same results if a build is legitimate. As the
potential result is known beforehand due to the author publishing it, verifiers
could easily copy the exisitng result and republish it as their own verification
solution.

If a software release is broken, tampered with or otherwise invalid, reenforcing
the authors malicious data by simply republishing the existing result might
change the overall probabilistic verification. Chances are that a large number
of nodes would just try to farm potential incentives putting in a minimal amount
of work, if any. Another risk are targeted attacks to forcibly portait an
invalid release as valid if a single malicious party submits a large amount of
false claims. This kind of attack could also be inverted by presenting a lot of
diverging verifications for a viable release and thus painting it invalid.

In school the teacher would monitor the students to behave and separate them so
they cannot communicate and use any material to cheat. However, this is
unfeasable in an anonymous system with an unknown, varying number of independent
participants.

Such a system would have to rely on strong statistical models backed by
cryptography. To contain the amount and the impact of misbehaving participants
various additional efforts could be applied.

Instead of the system being completely voluntary, e.g. participants could
themselves pick a project to contribute to and submit results at their leisure,
the network should select a certain amount of random nodes for a verification
task. This measure reduces the ability to mount coordinated spamming attacks.
Futhermore, a collateral mechanism for participation like it is often found in
Proof-of-Stake systems can encourage users to behave. In case a node is found to
have acted maliciously their security deposit might be liquidated.

Additionally, a Proof-of-Work could be introduced which must be calculated
during the verification process. This would force nodes to actually do the
computational work. Such a mechanism could be based on intermediate build
results and the existence of all needed dependencies. Unique variables like a
node's private key or a random additional task provided by the network could act
as salt values as all created data from the build process should be identical
among all nodes due to the usage of reproducible builds. Furthermore,
intermediate work results should explicitly not be published to reduce the
potential of copying. Instead,
[Zero-Knowledge Proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof "Zero-Knowledge Proofs")
might be used to provide evidence for the work being done honestly.

From a statistics point of view methods like
[Bootstrapping](<https://en.wikipedia.org/wiki/Bootstrapping_(statistics)> "Bootstrapping")
might reduce the significance of bad actors by adding further randomization. By
including more variables into the statistical model it is possible to highlight
correlations that might be important. These could include information about past
verifications a participant executed, data on the execution runtime a node uses
for builds or other data on the node and its potential owner. A user can view
the data as a whole or pick out information they deem relevant to come to a
conclusion on the validity of a build.

<!-- TODO example -->
<!-- TODO: describe system in full, https://github.com/kpcyrd/rebuilderd is a starting point -->
<!-- initiative: publishing verified source code to etherscan -->
