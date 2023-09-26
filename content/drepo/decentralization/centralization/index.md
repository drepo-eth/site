---
title: "Centralization"
description:
  "Centralized systems pose a risk as they are controlled by a single party.
  This party could pursue its own agenda or be compromised and endanger the
  entire system."
tags:
  - "centralization"
  - "control"
  - "total control"
  - "monopoly"
  - "architecture"
  - "trust"
date: 2022-12-30T00:28:07+01:00
draft: false
weight: 2010
menu:
  main:
    parent: decentralization
    weight: 10
---

## What is a Centralized System?

A system is centralized if _all ruling power_ lies with _one or a few entities_.
Participants in this organizational structure must adhere to these rulings and
cannot disobey them or make decisions themselves.

The simplest example of a centralized systems is an
[absolute monarchy](https://en.wikipedia.org/wiki/Absolute_monarchy). The king
or queen is the sole decision maker and does not have to answer to any other
authority when making good or bad decisions. Thus, horrible rulers, like in
[Game of Thrones](https://gameofthrones.fandom.com/wiki/Joffrey_Baratheon), may
exist who abuse their power for their own twisted agenda.

Another example is [oligopolies](https://en.wikipedia.org/wiki/Oligopoly). In
this case, a small group of players in a market hold the vast majority of power
and may collude to retain this power and consequently maximize profits. This
market dominance allows them to dictate prices and eliminate competition. Again,
[OPEC](https://en.wikipedia.org/wiki/OPEC) is a famous example.

A more down-to-earth example is your typical classroom. The teacher gives their
students assignments. If they fail to do them correctly, they fail the class and
cannot continue their studies. This system is often not objective; everybody
knows the teacher's favorite and least favorite students. The latter ones are
pretty much screwed. They get worse grades even if they are objectively on par
with other students. The teacher is the centralized power who can abuse this
position and make decisions based on feelings and other unfair measurements.

## Centralized Software Systems

Most applications we use every day are also centralized. This centralization is
twofold:

- Services are run by a company that holds total control over a system.
- A given software system is built on a centralized architecture.

### Owned Systems

Services like Twitter, Facebook, YouTube, Wikipedia, and your online tax office
are applications owned and operated by single companies, institutions, or
persons. They retain complete control over these services while you are using
them. If one of them decides to ban your account from their platform, you can do
nothing about this. If they choose to shut down their service from one day to
the next, their service just does not exist anymore, and all the data you stored
with them for free is also just gone.

You are out of luck as long as they are not forced by laws or contracts to
provide their service to you. However, even if they are obliged to serve you,
there are still ways to deny you, as they often act as black boxes.

### Architecture

Aside from humans controlling software systems, centralized architectures are
the predominant style for most applications. A single controlling entity often
defines a system's entire state; all other components must adhere to these
decisions. A _single point of truth_ is created.

In a typical client-server architecture, the server component is this
controlling entity. It holds and controls the application's state while clients
can read data and might be able to contribute data to the state if allowed to.
For example, imagine a PHP web forum that runs on a server. Web browsers, the
clients in this case, can read the posts in the forum and add posts if the user
has permission.

Another prominent example is distributed database setups with a single writing
instance and many read-only replicas. Data changes can only be executed on the
writing instance, which acts as the single point of truth in the system. If
these changes are accepted, the data is subsequently copied to the read-only
replicas. Writing changes to the slave instances is not allowed from external
clients but only from the _primary_ node.

{{< image-svg src="database-replication.excalidraw.svg" alt="Database Replication" caption="Database Replication: Data generally flows from the primary through the replicas to the users. The primary instance is the central control instance governing the content in the database system." >}}

Other large cloud systems like
[Kubernetes](https://en.wikipedia.org/wiki/Kubernetes) clusters are centralized
despite being _distributed_. The network is controlled by a _control plane_ that
sets the state for the entire system and thus assigns workloads to the worker
nodes. If the control plane fails, the whole cluster becomes inoperable.

As state handling generally becomes complex and annoying relatively fast, state
handling in large distributed systems is even worse. Thus, managing the state in
a centralized manner reduces the complexity tremendously.

## Risks

The two biggest concerns with centralization are the _abuse of power_ and the
_susceptibility to failure_.

As the examples above describe, a single or few ruling instances have total
control over a system. This holds the risk that they act maliciously without any
further oversight. They might abuse their power for their own gain, or another
party could force them to operate in their interest. Threats of violence, orders
from their boss, or law enforcement might pressure the humans in control to
change a system.

Bugs, hacks, or viruses can compromise a software component. As controlling
instances are effectively the single point of truth of systems, they are
simultaneously the _single point of failure_. In the best case, the system comes
to a halt; in the worst case, your application misbehaves, creates incorrect
outputs, or actively inflicts harm. In either case, human lives are in danger if
the given system is used to provide vital services, like emergency services,
traffic control, or weapon systems.

{{< image-svg src="single-point-of-failure.excalidraw.svg" alt="Single Point of Failure in a Centralized System" caption="Single Point of Failure in a Centralized System: The worker nodes in a centralized instance are unable to perform work, if the controlling instance is compromised." >}}

Backups, redundancies, and further oversight mitigate these risks to some extent
but cannot eliminate them entirely. Centralized systems remain centralized and
would otherwise lose the properties the owners and operators wish for.

Users of or participants in such systems must _trust_ the controlling parties as
they can do whatever they want: ban you, change your data, and much more.

## Are Centralized Systems Always Bad?

No.

It all depends on the environment and the purpose of a system it is supposed to
fulfill. For example, if you host your personal website, you probably want to
determine what content you are publishing. Likewise, you most likely want the
pilot of your airplane to be in complete control as you trust in their
capabilities and training while you have no clue about how to fly a plane.

Centralized systems are, in general, easy to set up and understand. They enable
fast decision-making and quick action without cumbersome processes. These
properties might be essential in certain situations, like for soldiers in the
heat of battle or for football players who listen to their coach. But, again, in
these cases, we _trust_ in the abilities and the experience of 'superiors' or
leaders.

For many of us, a centralized system is just natural: Having a leader in your
team, having a king, having a boss, and following the instructions of the police
or other experts in their field. It is also much easier to trust another entity
and offload specific responsibilities on them: The government will take care of
X, and your boss will make the right decision for the company. Sometimes those
decisions are hard, like the CEO letting people go to save the company. In a
more democratic system, such choices might not be possible as nobody wants to
lose their job.

But what about a service like Twitter or Instagram? For some people, they are
vital infrastructure for communication. However, they are owned and operated by
companies for profit. Thus, they want to be in total control of these
applications. Users, on the other hand, could not care less about those
companies' profits as the services are free to use for the most part. Due to the
enormous amount of users, the applications have become ubiquitous in all aspects
of life: communicating with loved ones, reading the news, and getting important
information from your government. And now, we trust those companies to handle
all our personal data and integrate them as essential parts of our lives. But
what happens if they cannot make enough money off of you? Are you willing to pay
them for their previously free services? What if you become a liability for
them, and they block your access? Imagine sitting on the bus and being unable to
browse Instagram; _scary_.

This shows the conflict of interest we are facing. Should essential systems and
services be centralized without the users or participants having any say? Or
should certain services simply _exist_ for everyone to use and partake in as a
collective undertaking no single entity controls?