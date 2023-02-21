---
title: "Witnessable Apps"
# description: 'TODO'
# tags:
#   - 'TODO'
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

A **safe software** is a piece of software that is **correct**, **bug free**,
and exclusively fulfills its intended **purpose**. Consequently, an arbitrary
user can assume that it is **safe to use** for a fitting task.[^purpose] Its
proper execution does not create unexpected results.

[^purpose]:
    If a software is used outside its intended purpose it might not output
    correct results, if any at all. For example, it might not execute on an
    unsupported operating system or creates inaccurate results when used for too
    complex inputs.

Such a piece of software does not perform tasks that outside of its scope. For
example, a simple calculator application does not use your webcam to make
photos. Likewise, a website does not track a user's behavior without explicitly
telling them in detail about the mechanism. In general, it does not act
maliciously or explicitly contrary to a user's interests. Viruses or spyware are
examples for such behavior.

But how does a user know whether an application is actually safe to use?

<!-- what is (actually) safe software? -->
<!-- software that is correct and bug free: it does its job correctly -->
<!-- How do you know that it works correctly? -->

## Verification Above All

### The Current State

Most software comes either pre-compiled or runs on some servers in the cloud. It
is invisible to most users how an application actually works aside the presented
user interface.

If a user inputs their data into a common social media application, they do not
know how the data is transformed, where it is stored, who has access to it, or
what is going to happen to it in the future. In truth, not even the developers
know for sure if the application running in 'the cloud' was possibly modified by
the cloud provider.

The developers of an application or an auditor might disclose answers to those
questions in reports, FAQs, privacy statements, or the terms of use. However,
this requires that a user **trusts** the word of a 'random' person on the
internet. This is generally not a good idea, even if the information is provided
by a company or a reputable institution. Nothing actually prevents them from
lying.

As in the real world, **verification is better than trust**. Thus, if a user
wants to make sure, that an application does not act maliciously, they have to
be able to verify that.

### Openness Required

The concept of _Witnessable Apps_ is based on the principle of verifiablity. For
an application to be witnessable, a user must be able to verify it from top to
bottom. This includes everything from the source code and the stored data to the
runtime and execution. Therefore, such an application must be **open source**,
must store all of its **data either publicly or visible** to the respective
user, and the code must be **executed in public** or on a user's local machine
in a way for them to inspect the execution.

These properties give users the opportunity to validate that their inputs will
have the intended effects by, for example, simulating or dry-running the program
execution beforehand using productive data. Furthermore, this requires
applications to always act predictably and to incorporate _reproducible builds_.
Users can then always recreate the application from the verifiable source code
and its stored state. Given the same input values and application state an app
will always return the same results.[^predictably]

[^predictably]:
    This behavior is similar to
    [pure functions](https://en.wikipedia.org/wiki/Pure_function "Pure Function")
    in functional programming assuming the application state is also an input
    and output value.

> Only a _Witnessable App_ has the chance of being a safe application.

It does neither guarantee nor directly demand that an application is correct or
does not behave maliciously. But due to its **total and provable transparency**,
a witnessable app that defies user's expectations will come under public
scrutiny.

<!-- software is often closed source and precompiled, runs on some servers in the cloud. How do you know that the 'correct' version runs there? maybe the cloud provider does inject some code? -->
<!-- YOU (the user) need to verify, audits from some random person you do not trust/know are not enough -->
<!-- for a software to be used safely the users need to have the ability to verify it -->
<!-- verify the code, runtime, data, basically everything, so they know that their input made the correct changes to the data, make simulations/dry-run -->
<!-- builds must be reproducible -->
<!-- example: banking software that should be safe, is not actually safe, because you do not know what it does. does it actually transfer money to the correct account? -->
<!-- your bank is regulated by the government and probably audited. But what does that actually mean? -->
<!-- example: your phone (not company managed) is actually managed by google or apple. they can delete apps from it. You are not the admin on your phone. Is it safe to put your secrets in there? -->
<!-- From what we hear in the media, encrypted data on your phone is probably safe, but can you verfiy that? -->

<!-- This verification is hard to do for everyone by themselves. The community can help by working together in a trustless way. -->
<!-- like peer reviews in the scientific community you want people to test your software and know it in and out -->
<!-- detailed in chapter TODO, users must be incentivized to 'test' your software. -->
<!-- there is a multitude of ways to accomplish this: monetary incentives, they use the software for their own projects and don't want bugs, they want to integrate, they want to adapt things to their own liking, want to fix bug -->
<!-- the open nature allows for all of this -->

### Does Every App have to be Witnessable?

No, applications that do not contain or process important information most
likely do not have to be witnessable and consequently safe to use. Examples for
that are personal websites, marketing websites and apps of companies, games, or
utility applications like a calculator or a drawing tool. Basically everything
that probably will not handle any personal information.

On the other side, applications which process personal information or data which
is somewhat important to a user should be witnessable. Banking and payment
applications, apps which work with a user's medical data, dating apps, social
media and data storage apps, and operating systems most likely fall in this
category. They hold a user's important information which they do not want to
lose or leaked to others. Also, the integrity and the correct processing of the
data a user entrusts them has to be guaranteed. **Trust in the word of others**
does not suffice anymore in a digital world where invalid or corrupt data might
be catastrophic.

As everyday users become more and more aware of the risks in the digital world,
they will demand more safety from the applications and devices they rely on.
Companies and governments will have to adapt their IT strategies to comply with
this demand. They themselves are already in the process of strengthening their
IT security due to imminent dangers. But they mostly do not directly improve
their users' security through provable transparency.

<!-- does every app have to be safe? -->
<!-- no -> some company website or personal website is probably not relevant enough -->
<!-- should your banking app or bank as a whole be safe? yes, because you would hate your bank to 'lose' your money ... -->
<!-- more examples: ps5, computer/phone -->
<!-- very much like the 'green lock' we had in the past when ssl became a thing, you want your important apps and devices to be safe -->

<!-- users, companies, govt become more aware of security issues due to the interconnectivity of everything -->
<!-- failure of vital infrastrucutre does way more damage than before. -->
<!-- outtage of google search or aws is devestating as numerous other services fail too -->
<!-- this is not just a centralization issue but also of closed systems -->
<!-- thus important apps and systems must strive to be actually safe to give users the security they demand -->
<!-- security is here manifold as this includes correctness, high availability, (censorship) resistance, etc -->
<!-- users, companies, govt must decide which kind of apps they want to use and offer -->

### New System and Project Architectures

_Witnessable Apps_ require a change in the way most business applications are
structured. Today, end-user applications are typically closed source. In the
case of web applications they are most likely hosted with some cloud service
provider like [AWS](https://aws.amazon.com/ "AWS") or
[Azure](https://azure.microsoft.com/en-us "Microsoft Azure"). And while stored
data is hopefully encrypted, the encryption keys are either held in the cloud
provider's key management system like
[AWS KMS](https://aws.amazon.com/kms/ "AWS KMS") or by the operating company.

End-users cannot view the source code, do not know how an application is
operated and executed, and they cannot directly access their data or the
information the system collected about them. This makes such systems fairly
dangerous to use, even if the operating company or institution is reputable or
promises to be one of the 'good guys'.

For a system to be trustworthy, the source code must be published open
source[^license], at least the code that corresponds to a released version of
the application. This is, from a technical point of view, easy to accomplish.
However, legal questions and the fear of losing the competitive edge might
arise, if a company's precious source code is available to everybody.

[^license]:
    The code just has to be publicly viewable. It does not have to have an open
    source license which might allow others to re-use or modify the code.
    However, licensed or not this cannot and should not be prevented.

Verifiable code executions and data storage might require drastic architectural
changes to applications. Input and output values which change the global state
of an app must be stored publicly and immutable, so every user can trace the
changes. If data must be encrypted, it should be in a way that the corresponding
user is able to decrypt it while other users and third parties cannot. At the
same time, the integrity of all data, historical, encrypted, from various users,
etc., must be guaranteed.

Running microservices on traditional cloud infrastructure probably does not
suffice anymore. Current dApps adhere to those rules by leveraging programmable,
public blockchains and advanced cryptographic schemes. They often minimize the
amount of information that is needed for operations and give users control and
ownership of data and to some extent code.

As this kind of visibility is hard to achieve throughout an entire application,
splitting it into parts with different levels of transparency might reduce the
difficulty. While sensitive parts of, for example, a social media app are
processed in public, the work intensive conversion of images and videos might be
handled behind closed doors. Only the core service of an application might be
handled in a witnessable style while convenience features like search are
managed traditionally. This could reduce costs and affects the safety of an
application only marginally, possibly a good trade off.

We will see in the future how these new architectures will evolve.

<!-- building such open apps changes the way how systems are designed -->
<!-- data needs to be partially public or fully encrypted but still verifyable -->
<!-- this is very different from current apps which hold data in 'secure' storage and try to gather as much data as possible for other purposes -->
<!-- also, code must be very carefully written and released to avoid exploits -->
<!-- might trigger new trends like 'bring your own everything', data, storage, compute, etc -->

<!-- SBOM -->
<!-- each app and dependencies must publish a software bill of matierals -->
<!-- it lists all the software components that are used for a software (package) -->
<!-- allows exact verification of all dependencies and the reproduction of the software -->

<!-- Conclusion: what exactly are actually safe apps? -->
<!-- must work correctly, this is achieved by verifying -->
<!-- must be verifyable -> open source, open runtime, open data -->

## Community verification

We know from [previous chapters](TODO verification) that a user can only 'trust'
an application which they verified themselves. However, reviewing modern,
complex applications is a tremendous task even for the most capable software
developers. The average Joe is not experienced enough and does not have the
resources for such a task, especially when using a multitude of diverse
applications every day.

The community can help the cause by working together in a trustless way. Like
peer reviews in the scientific community multiple skilled software and security
engineers should publicly, under community oversight, examine applications.

The proposed decentralized software repository and its accompanying services can
provide this work for the community. It publishes the source code, application
binaries and diverse peer reviews in a provable way. With these tools everyday
users can decide on the safeness of an application and the risks they might take
when using them.