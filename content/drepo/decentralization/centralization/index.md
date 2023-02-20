---
title: "Centralization"
date: 2022-12-30T00:28:07+01:00
draft: true
weight: 2010
menu:
  main:
    parent: decentralization
    weight: 10
---

## What is a Centralized System?

A system is centralized if __all ruling power__ lies with __one__ or __few
entities__.
Participants in this organizational structure have to adhere to these rulings
and cannot disobey them or make decisions for themselves.

The simplest example for centralized systems are [absolute
monarchies](https://en.wikipedia.org/wiki/Absolute_monarchy).
The king or queen is the sole decision maker and does not have to answer to any
other authority when making good or bad decisions.
Thus, horrible rulers, like in [Game of
Thrones](https://gameofthrones.fandom.com/wiki/Joffrey_Baratheon), may exist
who abuse their prower for their own twisted agenda.

Another example are [oligopolies](https://en.wikipedia.org/wiki/Oligopoly).
In this case, a small group of players in a market hold the vast majority of
power and may collude to retain this power and consequently maximize profits.
This market dominance allows them for example to dictate prices and to
eliminate competition.
[OPEC](https://en.wikipedia.org/wiki/OPEC) is a popular example.

A more down to earth example is your typical classroom.
The teacher gives their students assignments.
If they fail to do them correctly or at all, they fail the class and cannot
continue with their studies.
More often this systems is not objective and everybody knows the teacher's
favourite and least favourite students.
The latter ones are pretty much screwed.
They get worse grades even if they are objectively on par with other students.
The teacher is the centralized power who can abuse this position and make
desicisions based on fellings and other unfair measurements.

## Centralized Software Systems

Most applications we use everyday are also centralized.
This centralization is twofold:

* Services are run by a company which hold total control over a system.
* A given software system is built on a centralized architecture.


### Owned Systems

Services like Twitter, Facebook, YouTube, Wikipedia, and IRS are applications
which are owned and operated by single companies, institutions, or persons.
They retain full control over these services while you are using them.
If one of them decides to ban your account from their platform, there is pretty
much nothing you can actually do about this.
If they decide to shutdown their service from one day to the next, their
service just does not exist anymore and all your data you stored with them for
free is also just gone.

As long as they are not forced by laws or contracts to provide their service to
you, you are out of luck.
Even if they are obliged to do so, there are still ways to deny you as they
most often act as black boxes.

### Architecture

Aside from humans controlling software systems, centralized architectures are
the predominant style for most applications we use.
A single controlling entity often defines a system's entire state and all other
components have to adhere to these decisions.
A __single point of truth__ is created.

In a typical client-server architecture the server component is this
controlling entity.
It holds and controls the applications state while clients can read data and
might be able to contribute data to the state if allowed to.
Imagine a PHP web forum which runs on a server.
Web browsers, clients, can read the posts in the forum and can add posts if the
user has the permission to do so.

Another obvious example are distributed database setups in which there is a
single writing instance and a multitude of read-only replicas.
Data changes can only be executed on the writing instance which acts as the
single point of truth in the system.
If these changes were accepted, the data is afterwards replicated to the
read-only replicas.
Writing changes to the replicas are not allowed from external clients, but only
on the _primary_ node.

Other distributed systems like
[kubernetes](https://en.wikipedia.org/wiki/Kubernetes) clusters are centralized
even if they are _distributed_.
The clusters are still controlled by a _control plane_ which sets the state for
the entire cluster and thus assigns workloads to the worker nodes.
If the control plane fails, the cluster becomes inoperable.

As state handling generally becomes complex and annoying very fast, state
handling in large distributed systems is even worse.
Thus handling state in a centralized manner reduces the complexity
tremendously.

## Risks

The two biggest concerns with centralization are the _abuse of power_ and
the _susceptibility to failure_.

As described in the examples above, a single or few ruling instances have total
control over a system.
This holds the risk that they act maliciously without any further oversight.
They might either abuse their power for their own gain or are forced by another
party to act in their interest.
Threats of violence, orders from their boss, or law enforcement might pressure
the humans in control to change a system.

Bugs, hacks, or viruses can compromise a software component.
As controlling instances are effectively the single point of truth of a
systems, they are simultaneously the _single point of failure_.
In the best case, this brings the system to a halt; in the worst case, your
application misbehaves, creates incorrect outputs, or actively inflicts harm.
In either case, if the given system is used to provide vital services, like
emergency services, traffic control, weapon systems, human lifes are
in danger.

Backups, redundancies, and further oversight might mitigate these risks to some
extend but cannot eliminate them entirely.
Centralized systems remain centralized and would otherwise lose the properties
the owners and operators wish for.

Users of or participants in such systems have to _trust_ the controlling
parties as they essentially can do whatever they want: ban you, change your
data, and much more.

## Are Centralized Systems Always Bad?

No.

It all depends on the environment and the purpose a system is supposed to
fullfill.
If you host your personal website, you probably want to determine what content
you are publishing.
Likewise you most likely want the pilot of your airplane to be in full control
as you trust in their capabilities and training while you have no clue on how
to fly a plane.

Centralized systems are in general easy to setup and to understand.
They enable fast decision making and quick action without cumbersome processes.
These are properties that might be essential in certain situations, like for
soldiers in the heat of the battle, or for football players who listen to their
coach.
Again, in these cases we _trust_ in the abilities and the experience of
'supperiors' or leaders.

For many of us a centralized system is just natural: Having a leader in your
team, having a king, having a boss, following the instructions of the police or
other experts in their field.
It is also much easier to trust another entity and offload certain
responsibilities on them: The government will take care of X, your boss makes
the right decision for the company.
Sometimes those decisions are hard, like the CEO having to let people go to
save the company.
In a more democratic system, such choices might not be possible as nobody wants
to lose their job.

But what about a service like Twitter or Instagram?
One could argue that they are vital infrastructure for communication.
However, they are owned and operated by companies for profit.
Thus, they want to be in total control of these applications.
Users on the other hand could not care less about those companies' profits as
the services are free to use for the most part.
Due to the large number of users the services become ubiquitous in all parts of
life: communicating with loved ones, reading the news, getting important
information from your government.
And now, we trust those companies to handle all of our information and
integrate them as essential parts of out lifes.
But what happens if they cannot make enough money off of you?
Are you willing to pay them for their previously free services?
What if you become a liability of some sort for them and they block your
access?
Imagine sitting on the bus and not being able to browse Instagram; _scary_.

This shows the conflict of interest we are facing.
Should important systems and services really be centralized without the users
or participants having any say in it?
Or should certain services just _exist_ for everyone to use and partake as a
collective undertaking no single entity controls?
