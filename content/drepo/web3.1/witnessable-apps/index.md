---
title: "Witnessable Apps"
description:
  "Witnessable applications are a type of application that is fully transparent
  and verifiable. This includes its source code, data, and runtime. As a result,
  its users can determine if it is actually safe to use."
tags:
  - "witnessable"
  - "witnessable apps"
  - "witnessable app"
  - "witnessable applications"
  - "witnessable application"
  - "verifyable"
  - "verification"
  - "architecture"
  - "encryption"
  - "trust"
  - "trustless"
date: 2023-01-24T11:46:31+01:00
draft: false
weight: 6010
menu:
  main:
    parent: web31
    weight: 6010
---

## Safe Software

What is safe software?

> Software is _safe_ if it is **correct**, **bug-free**, and exclusively
> fulfills its intended **purpose**. Consequently, an arbitrary user can assume
> it is **safe to use** for a fitting task.[^purpose] Its proper execution does
> not create unexpected results.

[^purpose]:
    If the software is used outside its intended purpose, it might not output
    correct results, if any at all. For example, it might not execute on an
    unsupported operating system or creates inaccurate results when used for too
    complex inputs.

Such a piece of software does not perform tasks that lie outside of its scope.
For example, a simple calculator application does not use your webcam to take
photos. Likewise, a website does not track a user's behavior without explicitly
notifying them about the mechanism. It generally does not act maliciously or
explicitly contrary to a user's interests. Viruses or spyware are examples of
such behavior from a victim's point of view.

But how does a user know whether an application is actually safe to use?

## Verification Above All

### The Current State

Most software comes either pre-compiled or runs on some servers in the cloud.
Aside from the presented user interface, it is invisible to most users how an
application works.

If users input their data into a typical social media application, they do not
know how the data is transformed, where it is stored, who has access to it, or
what will happen to it in the future. In truth, not even the developers know for
sure if the application running in _the cloud_ was possibly modified by the
cloud provider.

The developers of an application or an auditor might disclose answers to those
questions in reports, FAQs, privacy statements, or the terms of use. However,
this requires that a user _trusts_ the word of a _'random'_ person on the
internet. This is generally not a good idea, even if the information is provided
by a reputable company or institution. Nothing actually prevents them from
lying.

As in the real world, _verification is better than trust_. Thus, if a user wants
to ensure that an application does not act maliciously, they have to be able to
verify that.

### Openness Required

The concept of _Witnessable Applications_ is based on the principle of
verifiability. For an application to be witnessable, a user must be able to
verify it from top to bottom. This includes everything from the source code and
the stored data to the runtime and execution. Therefore, such an application
must be _open source_, must hold all of its _data either publicly or visible_ to
the respective user, and the code must be _executed in public_ or on a user's
local machine in a way for them to inspect the execution.

These properties allow users to validate that their inputs will have the
intended effects by, for example, simulating or dry-running the program
execution beforehand using productive data. Furthermore, this requires
applications to always act predictably and to incorporate general
_reproducibility_. Users can then always recreate the application from the
verifiable source code and its stored state. Given the same input values and
application state, an app will always return the same results.[^predictably]

[^predictably]:
    This behavior is similar to
    [pure functions](https://en.wikipedia.org/wiki/Pure_function "Pure Function")
    in functional programming, assuming the application state is also an input
    and output value.

> Only a _Witnessable App_ has the chance of being a safe application.

However, it neither guarantees nor directly demands that an application is
correct or does not behave maliciously. But due to its _total and provable
transparency_, the public will scrutinize a witnessable app defying user
expectations.

{{< image-svg
  src="witnessable-app.excalidraw.svg"
  alt="Witnessable Application"
  caption="Witnessable Application: The users of a witnessable app can verify every aspect of it. They can review the source code and verify the built application executable, they can verify the correct encryption of data, and how it is stored. Futhermore, they can see what data the application shares with thrid-party services and verify the correctness of the application's computations." >}}

### Does Every App have to be Witnessable?

No, applications that do not contain or process important information most
likely do not have to be witnessable and, consequently, safe to use. Examples
are personal websites, marketing websites, and companies' apps, games, or
utility applications like calculators or drawing tools. Basically, everything
that probably will not handle any personal information and does not provide an
'important' service.

Conversely, applications that process personal information or data critical to a
user should be witnessable. Banking and payment applications, apps that work
with a user's medical data, dating apps, social media, data storage apps, and
operating systems fall into this category. They hold a user's valuable
information, which they do not want to lose or leak to others. Also, the
integrity and the correct processing of the data a user entrusts them has to be
guaranteed. _Trust in the word of others_ does not suffice anymore in a digital
world where invalid or corrupt data might be catastrophic.

As everyday users become increasingly aware of the risks in the digital world,
they will demand more safety from the applications and devices they rely on.
Companies and governments must adapt their IT strategies to comply with this
demand. They are already in the process of strengthening their IT security due
to imminent dangers. But they mostly do not directly improve their users'
security through provable transparency.

### New System and Project Architectures

_Witnessable Apps_ require a change in the way most business applications are
structured. Today, end-user applications are typically closed-source. In the
case of web applications, they are most likely hosted with some cloud services
provider like [AWS](https://aws.amazon.com/ "AWS") or
[Azure](https://azure.microsoft.com/en-us "Microsoft Azure"). While stored data
is hopefully encrypted, the encryption keys are held in the cloud provider's key
management system like [AWS KMS](https://aws.amazon.com/kms/ "AWS KMS") or by
the operating company.

End-users cannot view the source code, do not know how an application is
operated and executed, and cannot directly access their data or the information
the system collected about them. This makes such systems reasonably _dangerous_
to use, even if the operating company or institution is respected or promises to
be one of the 'good guys'.

For a system to be trustworthy, the source code must be published open
source[^license], at least the code corresponding to a released version of the
application. This is, from a technical point of view, easy to accomplish.
However, legal questions and the fear of losing the competitive edge might arise
if a company's precious source code is available to everybody.

[^license]:
    The code just has to be publicly viewable. It does not have to have an
    open-source license which might allow others to re-use or modify the code.
    However, licensed or not, this cannot and honestly should not be prevented.

Verifiable code executions and data storage require drastic architectural
changes to applications. Input and output values that change the global state of
an app must be stored publicly and immutable, so every user can trace the
changes. If data must be encrypted, it should be in a way that the corresponding
user can decrypt it while other users and third parties cannot.[^crypto] At the
same time, the integrity of all data, historical, encrypted, from various users,
etc., must be guaranteed.

[^crypto]:
    [Zero-Knowledge Proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof "Zero-Knowledge Proof")
    and
    [Homomorphic Encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption "Homomorphic Encryption")
    are exciting technologies that can help keeping users' personal information
    safe by not exposing it.

Running microservices on traditional cloud infrastructure may not suffice
anymore. Current dApps adhere to those rules by leveraging programmable, public
blockchains, and advanced cryptographic schemes. They often minimize the amount
of information needed for operations and give users control and ownership of
data and, to some extent, code.

{{< image-svg
  src="traditional-app.excalidraw.svg"
  alt="Traditional App"
  caption="Traditional App: Users are represented with a fancy interface, but they do not know how an application works. Does it store users' personal data encrypted? Who are they sharing this data with? Who has access to the data? Does the application have any severe bugs? What is the result of a user's input?" >}}

As this kind of visibility is hard to achieve throughout an entire application,
splitting it into parts with different levels of transparency might reduce the
difficulty. While sensitive parts of, for example, a social media app are
processed in public, the work-intensive conversion of images and videos might be
handled behind closed doors. Only the core service of an application might be
constructed in a witnessable style, while convenience features like search are
managed traditionally. This could reduce costs and affect an application's
safety only marginally, possibly a good trade-off.

We will see in the future how these new architectures will evolve.

## Community verification

We know from [previous
chapters]({{< relref "/drepo/existing-repos/verification" >}} "Verification") that
user can only 'trust' an application they verified themselves. However,
reviewing modern, complex applications is a tremendous task, even for the most
capable software developers. Unfortunately, the average Joe is not experienced
enough and does not have the resources for such a task, especially when using a
multitude of diverse applications every day.

The community can help the cause by working together in a trustless way. For
example, like peer reviews in the scientific community, multiple skilled
software and security engineers should publicly, under community oversight,
examine applications.

The proposed decentralized software repository and accompanying services can
provide this work for the community. It publishes the source code, application
binaries, and diverse peer reviews in a provable way. With these tools, everyday
users can decide on the safety of an application and the risks they might take
when using them.