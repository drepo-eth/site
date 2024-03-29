---
title: "Build Verification Network"
description:
  "Reproducible builds are a requirement in the decentralized repository to
  enable users to verify software artifacts. But building every dependency in a
  software project is work-intensive and, in most cases, unreasonable. A
  decentralized, anonymous network could provide this verification work for the
  community."
tags:
  - "build"
  - "reproducible build"
  - "verification"
  - "automation"
  - "work"
  - "incentives"
  - "anonymous"
  - "third-party"
date: 2023-01-23T13:12:50+01:00
draft: false
weight: 5010
menu:
  main:
    parent: expanded
    weight: 5010
---

## Source Code is the Single Point of Truth

The source code of a project is the _single point of truth_. It describes the
software as a whole, what it does, how it works, how to build it, and its flaws.
Finally, it describes the piece of software its users are looking for.

The dRepo requires projects to implement
[Reproducible Builds](https://reproducible-builds.org/ "Reproducible Builds").
Thus, if someone holds a specific source code version, they can create the same
build artifact repeatedly. This also applies to other people. Anyone with this
particular source code version will build exactly the same artifact.

This property makes builds of such projects comparable. If the author publishes
the version of the source code and the compiled artifact to the dRepo, anyone
can verify whether the artifact is derived from the given source. Hence, the
source code and the resulting artifacts are _verifiably connected_. This
connection removes the component of _trust in the author_ from the equation.
Users do not have to blindly trust that build artifacts originate from the
source code and do not have to rely on the author's word when they digitally
sign an artifact. Hence, a _trustless_ relationship is formed.

Any change in the source code would result in a different artifact.
Consequently, any manipulation would stand out immediately. This, however,
implies that a user compiles or builds the software to compare it with the
published artifacts to eliminate any suspicion of tampering.

For every user to build each software dependency from source defeats the purpose
of pre-compiled artifacts in repositories. Furthermore, these compilation
processes might take a considerable amount of time. On the other hand, such an
investment might be justified when building software systems with extremely high
demands on security, leaving no room for error or blind trust.

This preliminary work might be less than ideal in day-to-day use cases,
especially for novice users who just want to use downloaded software. A middle
ground might be a preferential solution offering a high level of security while
maintaining comfort.

{{< image-svg
src="dependency-tree.excalidraw.svg"
alt="Dependency Tree"
caption="Dependency Tree: An application typically contains numerous dependencies to other software libraries. The application can only be verified if all of its dependencies are verified. This is an especially hard task in polyglot applications which use pre-compiled artifacts." >}}

## Verifying for the Community

### The Basics

Instead of every user verifying each piece of software they want to use by
themselves, this work could be outsourced to a trustless _Build Verification
Network_.

Such a system consists of numerous nodes which will do the gruntwork of
verifying each software artifact and subsequently publish their findings.
Generally, if many nodes verifying a software release arrive at the same results
as the original author, the provided information is most likely valid. However,
the software package might be invalid if a significant portion of said verifiers
reach diverging results. This might only point to a bug in the build but could
also uncover malicious behavior.

Other users of the dRepo can evaluate the results of the verifying participants.
Subsequently, they have to decide for themselves whether an artifact is valid.
The community would provide guidelines on specific thresholds as such an
evaluation might be difficult for novice users.

Due to the lack of an ultimate authority that is able to irrefutably prove the
correctness of a build, a pessimistic approach based on statistical
improbabilities can soften the need for self-verification in day-to-day use
cases.

{{< image-svg
src="verification-network.excalidraw.svg"
alt="Verification Network"
caption="Verification Network: The software author publishes the build artifacts and numerous nodes in the verification network verify the reproducible build. The result is valid if only an insignificant number of nodes reports an invalid build." >}}

### Nodes

These nodes mentioned above should be owned and operated by independent,
anonymous parties. Furthermore, the entry barrier for participation should be
kept at a minimum to facilitate a voluntary contribution to the system. For
example, hardware requirements should remain low so that practically anybody can
offer computing power. But since energy prices are rising and build tasks are
pretty energy-intensive, not everybody wants to give away their money to a good
cause Hence, completing verification tasks must be incentivized to encourage
participation besides people volunteering. We will discuss this topic in a
[later chapter]({{< relref "/drepo/expanded/incentives" >}} "Incentives").

Furthermore, the system should not require a cumbersome registration process for
nodes to participate, which might involve the manual screening of applications.
Such whitelisting does not fit into the concept of a trustless system as this
kind of process would create a trust relationship with these nodes. Instead,
statistical improbabilities should reduce risks due to malicious nodes to a
minimum or identify potential manipulation publicly. If a probable automated
solution to the verification task could not be found, it should be marked as
such. Additionally, a proof-of-stake-like mechanism could reduce the amount of
spam typically created from anonymous systems.

### Unified Build Configuration

Another area of improvement is the build processes themselves. Even though many
projects employ automated build systems or CI to test and build their software,
these systems are very different.
[GitHub Actions](https://github.com/features/actions "GitHub Actions"),
[GitLab CI/CD](https://docs.gitlab.com/ee/ci/ "GitLab CI/CD"), or
[Travis CI](https://www.travis-ci.com/ "Tracis CI") are similar in the
configuration of build steps in _yaml_ files within a project. But how they are
executed and how the build environments behave are vastly diverse. Participants
in the build network would have to perform build tasks in these respective
proprietary systems to re-use these configurations. This would defeat the demand
for independence when verifying a piece of software.

Some tools like [act](https://github.com/nektos/act "act") allow executing
pipelines outside their native cloud-based environment, for example, locally.
But they are still bound to the given platform, and certain features might not
be portable.

To guarantee independence from proprietary platforms, a _Unified Build
Configuration_ is needed. As with current systems, it should express the
necessary steps to build software and the minimal environment in which this
build task has to run. In addition, it should be portable so it can be used in
existing systems as well. Containerizing the build process in Dockerfiles or
using abstractions like [Nix](https://nixos.org/ "Nix") or
[WASM](https://webassembly.org/ "WASM") might be good starting points for this
endeavor.

### SBOM and Provenance

A _Software Bill of Materials_ and build provenance information[^slsaInfo]
should be published by a software author. They provide easily consumable
information outside the source code and more data on the actual build process
leading to published build artifacts.

[^slsaInfo]: Similar as defined in [SLSA](https://slsa.dev/ "SLSA")

Especially the SBOM provides critical insights into a piece of software. For
example, it is possible to list and check all used software licenses or detect
problematic software dependencies without analyzing the source code.

Both reports should also be produced by participants when they verify a build.
This also allows users to check the validity of the provided additional
information.

Furthermore, this information from various nodes might be helpful if specific
environment inconsistencies are detected. For instance, builds might not work on
Windows or produce different artifacts on newer hard- or software. However, this
kind of diverging behavior needs to be accounted for when verifying a piece of
software. A tool might only target specific environments; thus, unsupported ones
need to be excluded from the verification process.

## Manipulation

A problem that needs to be solved is cheating or any other manipulation of
results. Much like on a school test, the goal is for all verifying participants
to reach the same results if a build is legitimate. As the potential outcome is
known beforehand due to the author publishing it, verifiers could easily copy
the existing result and republish it as their own verification solution.

If a software release is broken, tampered with, or otherwise invalid,
reinforcing the author's malicious data by republishing the existing reference
result might change the overall probabilistic verification. Chances are that
many nodes would just try to farm potential incentives putting in a minimal
amount of work if any. Another risk is targeted attacks to forcibly portray an
invalid release as valid if a single malicious party submits a large number of
false claims. This type of attack could also be inverted by presenting a lot of
diverging verifications for a viable release, thus painting it invalid.

In school, the teacher would monitor the students' behavior and separate them,
so they cannot communicate and use any material to cheat. However, this is
unfeasible in an anonymous system with an unknown, varying number of independent
participants.

Such a system would have to rely on solid statistical models backed by
cryptography. Then, additional efforts could be applied to contain misbehaving
participants' amount and impact.

Instead of the system being entirely voluntary, e.g., participants can pick a
project to contribute to and submit results at their leisure, the network should
select a certain amount of random nodes for a verification task. This measure
reduces the ability to mount coordinated spamming attacks. Furthermore, a
collateral mechanism for participation, like it is often found in Proof-of-Stake
systems, can encourage users to behave. For example, if a node is found to have
acted maliciously, its security deposit might be liquidated.

A Proof-of-Work could be introduced, which must be calculated during
verification. This would force nodes to actually do the computational work. Such
a mechanism could be based on intermediate build results and the presence of all
required dependencies. For instance, unique variables like a node's private key
or a random additional task provided by the network could act as salt values,
even though all data created from the build process should be identical among
all nodes due to the usage of reproducible builds. Furthermore, intermediate
work results should explicitly not be published to reduce the potential of
copying. Instead,
[Zero-Knowledge Proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof "Zero-Knowledge Proofs")
can provide evidence for the work being done honestly.

From a statistics point of view, methods like
[Bootstrapping](<https://en.wikipedia.org/wiki/Bootstrapping_(statistics)> "Bootstrapping")
might reduce the significance of bad actors by adding further randomization. By
including more variables in the statistical model, it is possible to highlight
correlations that might be important. These could consist of information about
past verifications a participant executed, data on the execution runtime a node
uses for builds, or other data on the node and its potential owner. A user can
view the data as a whole or pick out the information they deem relevant to come
to conclude the validity of a build.

## A Zero-Knowledge Ultimate Authority

Recent advancements in the field of _Zero-Knowledge Proofs_ allow the generation
of proofs for general purpose computations within certain environments[^zkenv].
If this technology continues to mature, it might be possible to execute software
builds within such provable settings. Consequently, a cryptographic proof can be
generated, which attests the correct execution of a build transforming source
code into a given build artifact.

[^zkenv]: These are, for example, specialized Zero-Knowledge-Virtual-Machines.

Such a proof could be generated by independent provers or by the software
authors themselves.

As the name suggests, the verification of a statement secured by a ZKP is
possible without exposing any information on the subject that is being
investigated.[^zkexample] This means that a build artifact can be verified using
the supplied proof without re-executing the build process. In an optimal
scenario, a user who wants to validate the proof does not even have to download
the source code or the build artifact to evaluate its correctness.

[^zkexample]:
    A common example is proving to a color-blind person that two balls have
    different colors without revealing their colors.

{{< image-svg
src="build-zkp.excalidraw.svg"
alt="Zero-Knowledge Build Verification"
caption="Zero-Knowledge Build Verification: The build of a software is executed within a Zero-Knowledge Virtual Machine that is able to generate a cryptographic proof of the execution. This proof is published and can be used to verify that a build was executed correctly without having to re-execute it. This is a very high-level simplification of the process." >}}

The generation of a Zero-Knowledge Proof is extremely computation intensive and
creates a burden on the prover. A build process generating a ZK Proof could
become exponentially more resource and time consuming to execute. Its
verification on the other side is very fast and resource inexpensive. This
allows even weaker systems to quickly validate a proof.

Based on these facts, Ethereum's
[Validium](https://ethereum.org/en/developers/docs/scaling/validium/ "Validium")
Scaling Solution likewise uses off-chain data availability and computation to
achieve high throughput. Transaction proofs are, however, still validated on the
Ethereum blockchain securing the state of the validium system. In this scenario,
the blockchain acts as an _Ultimate Authority_ when it confirms the validity of
a given proof. Users do not have to re-evaluate the proof as the Ethereum
blockchain already did this in a verifiable and reproducible way. Here, every
computation is re-executed by hundreds of thousands of independent participants
that consent on the result.

A build verification system that incorporates Zero-Knowledge Proofs could
publicly and _definitively_ verify a build artifact. Software authors have to
publish proofs along with the source code and build artifacts. The index of the
dRepo could validate the proof on-chain publishing the result to all users
leaving no doubt about the correctness of the artifacts. Evaluating statistical
probabilities becomes unnecessary.