---
title: "Verification"
description:
  "The validity and authenticity of artifacts in current software repositories
  are proven by checksums and digital signatures. However, this type of
  verification is insufficient and based on a flawed trust model. Reproducible
  builds verify the authenticity of a software artifact. The source code proves
  an artifact's validity  and is at the same time human-readable, allowing users
  to check its correctness."
tags:
  - "hashing"
  - "content hash"
  - "checksum"
  - "digital signature"
  - "asymmetric encryption"
  - "reproducible builds"
  - "source code"
  - "verification"
  - "audit"
  - "certification"
date: 2022-09-12T00:33:29+02:00
draft: false
weight: 3080
menu:
  main:
    parent: repositories
    weight: 80
---

## Why verify?

As we all know, downloading random files from the internet is unsafe. They could
be harmful, contain malware or are simply not what you expected them to be.
Renaming a file from `libA` to `libB` is pretty easy, as is creating a software
library that provides a function `doesCoolThing()`, but actually, it does
something completely different.

When is it safe to download a program from some website and execute it?

- Does the website look legit?
- Does it have some fancy animations?
- Does the website say it is created by some company in the US?
- Is the website's SSL certificate valid?

Applying common sense is a good idea. But since elaborate (technical) schemes
might be used to trick you, you are never 100% safe. So, in the end, it is up to
**you** to define what and when you _trust_, or, in other words, you are
sufficiently convinced that something is legitimate.

In terms of software repositories, downloading an artifact from a well-known
repository is not enough verification for the validity of the artifact. As we
all know, various factors can change an artifact without you realizing it,
either by accident or on purpose. Some examples:

- Your download can fail midway, and you end up with a broken file on your disk.
- Your desired file is broken in the repository due to internal replication
  problems.
- The library author uploaded the wrong file by accident.
- Some admin of the repository switched out the file.
- The repository was compromised, and all artifacts now contain malware.

Consequently, using 'wrong' software is not just annoying but might be dangerous
if you use it to provide services for millions of users. Thus, you must ensure
you acquire the artifacts you seek. But how do you accomplish that?

## Checksums

Checksums have been around for a reasonably long time to validate downloaded
artifacts. First, a hash function is applied to the content of a given file.
This produces a unique[^unique] hash value, the _checksum_. It is subsequently
used for comparison with a reference value. A positive match verifies its
validity.

[^unique]:
    The computed value is actually not unique as the hash function maps a much
    larger domain into a smaller codomain. For instance, files of arbitrary size
    are hashed into a fixed-sized byte array. This means there is a multitude of
    input values producing the same output value, a hash collision. Strong
    hashing functions are necessary to make inverting the computation infeasible
    and render hash collisions extremely improbable.

The used hash function should be a pure function that will produce the same hash
result when presented with the same input values. This means that if applied to
files with precisely the same content, the same hash result is computed. This is
also known as _Content Hashing_. Even changing a single bit in the input values
results in a completely different hash value.

{{< image-svg src="checksums.excalidraw.svg"
alt="Alice and Bob compare checksums of a given file"
caption="Checksum comparison" >}}

If Alice and Bob download the same file from a repository, they hopefully
compute the same checksum. Software repositories often publish various checksums
based on multiple hash functions along the desired artifacts for users to verify
the download. If your calculated checksum matches the one published by the
repository, your download is verified.

This is proof of validity, presuming you trust the source you downloaded your
file from, as the file and checksum are provided by the same entity. A better
approach is to acquire the checksum from another source, preferably the original
author of the file. In terms of software libraries, you download the artifacts
from a software repository and might get the checksums from the project website.

This is, however, often a manual task and thus extremely cumbersome if you think
of all the dependencies you include in your typical software project.
Furthermore, using a secondary source still holds a risk that this one might
also be compromised.

Consequently, the usage of checksums is effectively limited to the verification
of correct transmission from a repository.

Comparing checksums with the information acquired from software repositories is
currently built into most dependency-managing tools.

## Digital Signatures

### Code Signing

Digital signatures expand the concept of checksums by including the author in
the mix. Leveraging asymmetric encryption schemes, the author of a software
library uses their private key to sign the software artifacts. This creates a
signature that includes information about both the content, similar to
checksums, and the author. Using the author's public key, a user can verify the
signature and thus ascertain the content of a file and the fact that it
originated[^signed] from the author.

[^signed]:
    It merely proves that someone with the corresponding private key to a known
    public key signed an identical file.

[GPG](https://gnupg.org/) is the de facto standard tool for this purpose. It is
used in multiple open-source software repositories, e.g., the Ubuntu and Arch
Linux repositories, Maven Central, and the NPM Registry.

The digital signature files are typically published alongside the files that
need verification. This is similar to checksums which might be distributed by a
given software repository. However, the critical difference is that the
artifacts and their signatures are tamperproof as they depend on an external
dependency: the author's public and private keys. As long as the signature
creation, meaning the author's keys, is separated from the repository, a valid
signature of a modified file cannot be reproduced.

{{< image-svg
  src="digital-signature.excalidraw.svg"
  alt="Digital Signatures"
  caption="Digital Signatures: A software's author signs the application with the private key and publishes the application file and the signature to the software repository. At the same time, they publish the corresponding public key on a key server. Subsequently, a user can download the signature and application from the repository and the required public key from the key server. Given these, they can verify the authenticity of the application files without relying on the security of the repository." >}}

### Public Key Discovery

However, one question comes to mind:

> How do you get the author's public key in a trusted manner?

Generally, when using GPG, users publish their public keys on known public key
servers. Unfortunately, these servers contain a multitude of keys that were
uploaded by users without any further verification. Thus, many keys are
outdated, obsolete, and questionable in origin, as anyone could upload a key
with any name and email. Services like [keybase.io](https://keybase.io) try to
mitigate these risks by creating a profile tied to and verified with other
online _identities_ (Twitter, Facebook, etc.).[^keybase] Hosting the keys on the
developer's private website or the project website is another alternative. And
there is also the possibility of building a
[web of trust](https://www.gnupg.org/gph/en/manual/x547.html) which we won't
cover here.

[^keybase]:
    Users link other online accounts with Keybase and post special messages,
    verifying that they control of these accounts. At the same time, they can
    upload public keys to the service and thus provide proof that they control
    the keys and the accounts, creating trust between those.

Each of these methods has its pros and cons. Ultimately, it is up to each user
to decide when they trust the source of a key, as there is **no single, trusted,
globally accepted** way of distribution.

Hosting the public key along with the artifacts in a repository and not
verifying the key from another source boils this scheme down to a more complex
type of checksum. In this case, a given software repository could sign artifacts
themselves and thus distribute modified software versions.

Consequently, the separation of the signing keys and the repository is essential
for the security of this scheme. However, the uncertainty in obtaining a
legitimate public key and the amount of effort required makes this scheme
sometimes impractical.

### Root of Trust

Nevertheless, within a _closed ecosystem_, a _trusted root_ can be established.
This scheme removes the problem of finding a trustworthy public key. The trusted
key is integrated into the system; all clients rely on it to verify artifacts.

For example, web browsers come equipped with several pre-installed root
certificates that allow you to verify the validity of SSL certificates for
websites. For those who remember it, these are the green locks in your address
bar. Without these root certificates, one would have to add each website's
certificate to one's set of trusted resources. Essentially, the same problem was
discussed above. Additionally,
[S/MIME](https://en.wikipedia.org/wiki/S%2FMIME "S/MIME") is an email encryption
standard based on the same principle. It is an alternative to GPG mostly used
within corporate environments.

Furthermore,
[Apple](https://developer.apple.com/support/code-signing/ "Code Signing") allows
trusted developers to sign their applications with Apple's root key.
Consequently, all Apple devices run such signed software without voicing
security concerns.

However, the internet is generally not such a closed and trusted ecosystem.
Thus, building large systems on trusting a few key players is highly
questionable.

## Reproducible Builds

[Reproducible Builds](https://reproducible-builds.org/) can be used to mitigate
the shortfalls of checksums and digital signatures.

Most software is distributed in pre-compiled format, e.g., binary executables,
minified and uglified, or otherwise optimized. This makes the code executed
unreadable to the average human being and, thus, the perfect target for
manipulation.

Building or compiling a given source code version will always produce precisely
the same build artifact, if a software project incorporates a reproducible
build. The created files are bitwise identical. The build is independent of the
machine it executes on as long as the same configuration and environment are
applied.

These properties allow the software to be restored from the source at any time
in the future.[^future] Furthermore, this allows the _independent verification_
of compiled artifacts.

[^future]:
    Assuming that the necessary tools and dependencies are still available in
    the future.

Instead of relying on the verification data provided by the author or a software
repository, meaning checksums or signatures, users can verify the validity of a
build artifact by executing the reproducible build and comparing the resulting
artifacts.

This removes the risk that a given artifact was modified by the repository or
along the distribution chain. Furthermore, a reproducible build eliminates the
risk of manipulation by the author when they create the initial artifact. For
example, an author could change the source code and publish a build artifact
without publishing the modified source code, effectively hiding the changes.
However, building the software from the source would reveal such modifications.

[Multiple projects](https://reproducible-builds.org/who/projects/ "Reproducible Build Projects")
are committed to reproducible builds. For instance, Arch Linux is actively
[tracking](https://reproducible.archlinux.org/ "Reproducible Status") its
progress in updating all software packages in its repositories to be
reproducible.

{{< image-svg
  src="reproducible-build.excalidraw.svg"
  alt="Reproducible Builds"
  caption="Reproducible Builds: Each build of the source code version will produce the same application artifact. Their checksums match every time. Reproducible builds are independent of the system they are executed on. Two different people will produce the same artifacts given the same source code version." >}}

### Problems

Two crucial questions now arise:

- If you need to build the source code to verify an artifact, why do you want to
  download a pre-compiled artifact from a software repository?
- Where and how do you get the source code if the same problems exist for source
  code repositories?

The depicted decentralized software repository fundamentally requires the usage
of reproducible builds. Thus, both of these questions are addressed in more
detail [here]({{< relref "/drepo/expanded/build-verification" >}} "Build
Verification"). But in short, the dRepo takes advantage of the following
properties:

#### Third-Party Verification

As the build artifacts are independently verifiable, numerous third parties can
build the software and publish their results. These results do not have to be
the actual build artifacts but should be in the form of checksums or signatures.
Suppose a sufficiently large number of independent results is published, and a
consensus of the 'correct' result is found. In that case, users can compare
these findings with the artifacts they obtained from a software repository. Due
to decentralization and consensus, the third-party results can be viewed as an
external, _trustworthy_ source for verification data.

#### Source Code Auditing

The same problems apply to the source code when it has to be obtained from a
source code repository. However, unlike compiled build artifacts, the source
code is human-readable. This allows users, in theory, to review the code and
decide whether it is legitimate or at least what they are looking for. Of
course, this is easier said than done, especially with a large code base or if a
user cannot understand the code. Furthermore, reviewing every piece of code
before using or executing it is, in practice, impossible for any single person.

However, decentralization comes to the rescue yet again. _Distributed Version
Control Systems_ like [Git](https://git-scm.com/) and the sheer amount of
software developers worldwide make it possible to find malicious code changes as
said developers update their local code repositories and inspect incoming
upstream changes. Today, this approach is 'barely' organized, especially for
smaller open-source software projects, which makes it relatively easy to
introduce modifications without proper review. On the other hand, prominent
projects are being watched by a reasonably large community which increases the
chance of eventually finding peculiar changes.

This allows the community as a whole to agree on the 'correct' source code of a
project.

A decentralized repository must use this mechanism and incorporate it into the
daily development process.

### Verification instead of Auditing and Certifying

This text generally avoids the terms 'auditing' and 'certifying' as they imply a
false sense of truth and finality. Furthermore, in common understanding, they
are based on centralized entities that leverage built-up trust in their
respective reputations as a source of truth and validity.

For example, one might hire a reputable auditing firm to audit source code or a
software system. As a result, a report is created which might show flaws in the
system that need fixing. This process is generally fine. However, most of the
time, only a single audit is conducted. This is especially true when the auditor
is some official institution under state control or can issue well-known
certifications like
[ISO](https://www.iso.org/certification.html "ISO Certificates") certificates.

In truth, a single audit only bears a limited amount of value as audits are
never an absolute certainty of a system's correctness, security, and state. Even
audits performed by experts in their field sometimes miss critical flaws.
Additionally, as audit companies are established in the real world, they are
subject to various forms of pressure, economic pressure to make profits, social
pressure, and pressure from governments. Consequently, corruption, blackmail,
and other misconduct are not unheard of.

Multiple concurrent, independent, and repeated audits or _verifications_ of
systems are needed to create a high probability of the completeness of the
aggregated results. In simple terms, more audits are better than one. This
allows auditors to find flaws others have missed and use the latest
state-of-the-art tools and knowledge to find flaws unknown in previous audits.

Therefore, we prefer the term 'verification' as it is not biased in the same way
and does not result in any kind of 'official' certification.

<!-- TODO: “Never trust, always verify.” At the end of the day, who watches the watchmen? -->