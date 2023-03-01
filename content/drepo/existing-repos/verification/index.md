---
title: "Verification"
# description: 'TODO'
# tags:
#   - 'TODO'
date: 2022-09-12T00:33:29+02:00
draft: false
weight: 3080
menu:
  main:
    parent: repositories
    weight: 80
---

## Why verify?

As we all know, downloading random files from the internet is not safe. Files
could potentially be harmful when they contain any sort of malware or they are
simply not what you expected them to be. Renaming a file from `libA` to `libB`
is fairly easy, as is creating a software library that provides a function
`doesCoolThing()` but actually it does something completely different.

When is it safe to download a program from some website and execute it?

- Does the website look legit?
- Does it have some fancy animations?
- Does the website say it is created by some company in the US?
- Is the website's SSL certificate valid?

Applying common sense is probably a good idea. But since elaborate (technical)
schemes might be used to trick you, you are never 100% safe. In the end it is up
to **you** to define what and when you **trust**, or, in other words, you are
sufficiently convinced that something is legit.

In terms of software repositories, downloading an artifact from a popular
repository is not enough verification for the validity of the artifact. As we
all know, various factors can change an aftifact without you realizing either by
accident or on puprose. Some examples:

- Your download can fail midway and you end up with a broken file on you disk.
- Your desired file is actually broken in the repository due to internal
  replication problems.
- The library author uploaded the wrong file by accident.
- Some admin of the repository switched out the file.
- The repository was compromised and all artifacts now contain malware.

Consequently, using 'wrong' software is not just annoying but might be dangerous
if you use it to provide services for millions of users. Thus, you need to make
sure that you actually acquire the artifacts you are looking for. But how do you
accomplish that?

## Checksums

Checksums have been around for a fairly long time to validate downloaded
artifacts. A hash function is applied to the content of a given file. This
produces a unique[^unique] hash value, the **checksum**, which is used for
verification.

[^unique]: TODO problem with unique

The used hash function should be a pure function that will produce the same hash
result when presented with the same input values. This means that if applied to
files with the exactly same content the same hash result is computed. This is
also known as **Content Hashing**. Even a change of a single bit in the input
values results in a completely different hash value.

{{< image-svg src="checksums.excalidraw.svg"
alt="Alice and Bob compare checksums of a given file"
caption="Checksum comparison" >}}

If Alice and Bob download the same file from a repository, they hopefully
compute the same checksum. Software repositories often publish various checksums
based on multiple hash functions along the desired artifacts for users to verfiy
the download. If your computed checksum matches the one published by the
repository your download is verified.

This suffices as proof of validity presuming you actually trust the source you
downloaded your file from, as the file and checksum are provided by the same
entity. A better approach is to acquire the checksum from another source,
preferably the original author of the file. In terms of software libraries, you
download the artifacts from a software repository and might get the checksums
from the project website.

This is, however, often a manual task and thus extremely cumbersome if you think
of all the dependencies you include in your typical software project.
Furthermore, using a secondary source still holds a risk that this one might be
compromised as well.

Consequently, the usage of checksums is effectively **limited to the
verification of correct transmission** from a repository.

The comparison of checksums with the information acquired from software
repositories is indeed built into most dependency managing tools.

## Digital Signatures

<!-- TODO: term 'code signing' e.g. apple -->

Digital signatures expand the concept of checksums by including the author in
the mix. Leveraging asymmetric encryption schemes, the author of a software
library uses their private key to sign the software artifacts. This creates a
signature which includes information about both the content, similar to
checksums, and the author. Using the author's public key a user can verify the
signature and thus verify the content of a file and the fact that it
originated[^signed] from the author.

[^signed]:
    It actually 'just' proofs that someone with the corresponding private key to
    a known public key signed an identical file.

<!-- TODO: diagram -->

[GPG](https://gnupg.org/) is the defacto standard tool for this purpose. It is
used in multiple open source software repositories, e.g. the Ubuntu and Arch
Linux repositories as well as Maven Central, the NPM Registry, and others.

The digital signature files are typically published along side the files that
need verification. This is similar to checksums which might be distributed by a
given software repository. However, the key difference is that the artifacts and
their signatures are tamperproof as they depend on an external dependency: the
autor's public and private keys. As long as the signature creation, meaning the
author's keys, are seperated from the repository, a valid signature of a
modified file cannot be reproduced.

However, one question comes to mind:

> How do you get the author's public key in a trusted manner?

Generally, when using GPG a user publishes their public keys on known, public
key servers. These servers contain a multitude of keys which were uploaded by
users without any further verification. Thus, many keys are outdated, obsolete
and questionable in origin as anyone could upload a key with any name and email.
Services like [keybase.io](https://keybase.io) try to mitigate these risks by
creating a profile that is tied to and verified with other online **identities**
(Twitter, Facebook, etc.).[^keybase] Hosting the keys on the developer's private
website or the project website is another alternative. And there is also the
possibility of building a
[web of trust](https://www.gnupg.org/gph/en/manual/x547.html) which we won't
cover here.

[^keybase]:
    Users link other online accounts with keybase and post special messages,
    verifying that they are actually in control of these accounts. At the same
    time they can upload public keys to the service and thus proof that they
    control the keys and the accounts creating trust betweens those.

Each of these methods has their pro's and con's. In the end it is up to the each
user to decide when they trust the source of a key as there is no **single,
trusted, globally accepted** way of distribution.

Hosting the public key along the artifacts in a repository and not verifying the
key from another source boils this scheme down to a more complex type of
checksums. In this case, a given software repository could sign artifacts
themselves and thus distribute modified versions of a software.

Consequently, the separation of the signing keys and the repository is essential
for the security of this scheme. However, the uncertainty that is found in
obtaining a legit public key and the amount of effort that is required makes
this scheme sometimes impractical.

## Reproducible Builds

[Reproducible Builds](https://reproducible-builds.org/) can be used to mitigate
the shortfalls of checksums and digital signatures.

Most software is distributed in some sort of pre-compiled format, e.g binary
executables, minified and uglified, or otherwise optimized. This makes the code
that is executed unreadable to the average human being and thus the perfect
target for manipulation.

If a software project incorporates a reproducible build, building or compiling a
given version of the source code will always produce exaclty the same build
artifact. The produced files are bitwise identical. The build is independent of
the machine that it is exceuted on as long as the same configuration and
environment is applied to the build.

These properties allow for a software to be **restored** from the source at any
time in the future.[^future] Further more, this allows the **independent
verification** of compiled artifacts.

[^future]:
    Assuming that in the future the necessary tools and dependencies are still
    available.

Instead of relying on the verification data that is provided by the author or a
software repository, checksums or signatures, users can themselves verify the
validity of a build artifact by executing the reproducible build and comparing
the resulting artifacts.

This removes the risk that a given artifact was modified by the repository or
along the chain of distribution. Furthermore, a reproducible build eliminates
the risk of manipulation by the author when they create the initial artifact. An
author could change the source code and publish a build artifact without
publishing the changed source code, effectively hiding the changes. Building the
software from source would reveal such modifications.

[Multiple projects](https://reproducible-builds.org/who/projects/ "Reproducible Build Projects")
are commited to reproducible builds. To name one example, Arch Linux is actively
[tracking](https://reproducible.archlinux.org/ "Reproducible Status") their
progress in having all software packages in their repositories being
reproducible.

### Problems

Two important questions now arise:

- If you need to build the source code to verify an artifact, why do you want to
  download a pre-compiled artifact from a software repsitory?
- Where and how do you get the source code if the same problems exist for source
  code repositories?

The depicted decentralized software repository fundamentally requires the usage
of reproducible builds. Thus, both of these questions are addressed in more
detail [here](TODO). But in short, the drepo takes advantage of the following
properties:

<!-- TODO add proper links -->

#### Third Party Verification

As the build artifacts are now independently verifyable a large number of third
parties can build the software and publish their results. These results do not
have to be the actual build artifacts but should be in the form of checksums or
signatures. If a sufficiently large number of indedendent results is published
and a consensus of the **'correct'** result is found, users can compare these
findings with the artifacts they obtained from a software repository. Due to
decentralization and a consensus the third party results can be viewed as an
external, **'trusted'** source for verification data.

#### Source Code Auditing

The same problems apply to the source code when it has to be obtained from a
source code repository. However, unlike compiled build artifacts the source code
is human readable. This allows users in theory to review the code and to decide
whether or not the code is legit or at least what they are looking for. Of
course, this is easier said than done especially with large code basis or if a
user cannot understand the code. Furthermore, reviewing every piece of code
before using or executing it is in practice impossible for any single person.

However, decentralization comes to the rescue, yet again. _Distributed Version
Control Systems_ like [Git](https://git-scm.com/) and the sheer amount of
software developers all over the world make it possible to find malicious code
changes as said developers update their local code repositories and inspect
incoming upstream changes. Today, this approach is 'barely' organized,
especially for smaller open source software projects which makes it fairly easy
to introduce changes without proper review. Larger, popular projects on the
other hand are being watched by a fairly large community which increases the
chance of eventually finding peculiar changes.

This allows the community as a whole to agree on the 'correct' source code of a
project.

A decentralized repository has to make use of this mechanism and incorporate it
in the daily development process.

### Verification instead of Auditing and Certifying

In general, this text tries to avoid the terms 'auditing' and 'certifying' as
they imply a false sense of truth and finality. Furthermore, in common
understanding they are based on centralized entities that leverage built up
trust in their respective reputations as a source of truth and validity.

For example, one might hire a reputable auditing firm to audit a given source
code or software system. As a result a report is created which might show flaws
in the system that need fixing. This process is generally fine. However, most of
the time only a single audit is conducted. This is especially the case, when the
auditor is some sort of official institution under state control or is allowed
to issue well-known certifications like
[ISO](https://www.iso.org/certification.html "ISO Certificates")-certificates.

In truth, a single audit only bears a limited amount of value as audits are
never a 100% certainty for the correctness, security, and state of a system.
Even audits performed by experts in their field sometimes miss critical flaws.
Additionally, as audit companies are established in the real world they are
subject to various forms of pressure, economic pressure to make profits, social
pressure, and pressure from governments. Consequently, corruption, blackmail and
other misconduct are not unheard of.

We believe that a multitude of concurrent, independent, and repeated audits or
**verifications** of systems are needed to create a high probability for the
completeness of the aggregated results. In simple terms, more audits are better
than one. This allows auditors to find flaws other have missed and to use the
latest state of the art tools and knowledge to find types of flaws that were
unknown in pervious audits.

Therefore, we prefer the term 'verification' as it is not biased in the same way
and does not result in any kind of 'official' certification.

<!-- TODO: “Never trust, always verify.” At the end of the day, who watches the watchmen? -->