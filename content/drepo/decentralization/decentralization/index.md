---
title: "Decentralization"
description:
  "Decentralized systems are driven by participants. They cannot be stopped or
  manipulated as long as no entity gains control most of the system's members."
tags:
  - "voting"
  - "resilience"
  - "participation"
  - "censorship-resistant"
  - "democracy"
  - "p2p"
  - "peer-to-peer"
  - "blockchain"
  - "bitcoin"
  - "ethereum"
  - "bittorrent"
date: 2022-12-30T00:28:12+01:00
draft: true
weight: 2020
menu:
  main:
    parent: decentralization
    weight: 20
---

## What is a Decentralized System?

Decentralized systems are the opposite of centralized systems. The ruling power
concentrated in a centralized system is split and _distributed_ to a large
number, if not all, participants of a system. For each decision that must be
made, all participants must be included. They have to come to a _consensus_ that
holds true for all members. All participants are considered equals and must
abide by the system's rules.

The consensus models can vary between systems. Simple _majority_ or 2/3 majority
votes are relatively simple examples. More complex schemes with various layers
can be applied if a given environment or situation demands it.

Democratic systems are generally viewed as decentralized. A good example is
voting among your friends about which movie to watch at the cinema. Everybody in
your group is involved in the decision-making process, and everyone knows and
accepts the protocol; raise your hand, and the majority vote wins. If the cool
kid in your group is sick that day, the system still works, and the rest of you
can enjoy a movie without being forced to follow the preferences of a single
ruler. The group also works if multiple people do not show up or your friends
bring some more friends along. If someone categorically does not want to watch
that horror movie, you could also switch the consensus model to vote for a film
acceptable to all and thus reduce friction within the group.

Modern western democracies are also considered decentralized, as leaders, e.g.,
the president, the parliament, and others, are elected by all eligible citizens.
However, the citizens of a given country are not directly included in each
decision the government makes. They must trust their representatives to honor
their campaign pledges and vote in their interest in parliament. But from all
the political dramas on TV, fiction or not, we know this trust is often
misplaced.

{{< image-svg
  src="modern-democracy.excalidraw.svg"
  alt="Modern Democracy"
  caption="Modern Democracy: The people vote for their representatives in parliament. Afterwards, these elected officials vote for bills to pass. But do these representatives vote in the interests of their constituents? The system is centralized as the elected officials retain significant power." >}}

Thus, _democracies are relatively centralized_, as the elected officials are in
power and can use this power in a centralized way to either make good on their
promises or solely act in their own interests. The _separation of powers_,
oversight, and federated systems can mitigate these risks but cannot eliminate
them entirely.

Consequently, there are various _levels of decentralization_ ranging from rather
centralized to very decentralized. For example, a system in which each and every
decision is put to the vote for everyone to participate holds a higher _degree
of decentralization_ than electing a ruler who will make the 'right' choices.

{{< image-svg
  src="levels-of-centralization.excalidraw.svg"
  alt="Levels of Decentralization"
  caption="Levels of Decentralization: Most systems are not 100% centralized or decentralized. To accomplish their goals they have to find the right balance." >}}

However, holding a vote on practically everything _does not scale_. If the
number of participants or decisions grows substantially, it becomes extremely
cumbersome to conduct polls. This holds especially true in the real world, where
every vote takes quite some time: people need to understand their choices,
sending messages takes time, counting the ballots, campaigning, etc.
Centralization, on the other, hand reduces these effects at a _cost_. By
centralizing to a certain degree, every participant loses part of their
influence as this power is given to some centralized entity. Nevertheless, this
entity can make and execute decisions faster as the process is more streamlined.

{{< image-svg
  src="direct-democracy.excalidraw.svg"
  alt="Direct Democracy"
  caption="Direct Democracy: In a direct democracy the people vote directly on all relevant decisions. As we can see, this does not scale well in the real world." >}}

When setting up a new system, one must find an appropriate balance between
scalability and security:

- Who should be in control?
- Is centralization a problem?
- What are the consequences if someone abuses their powers?
- How many, and how often does the system have to make decisions?

## Decentralized Software Systems

Decentralized software systems have been around for a very long time.
Peer-to-peer file-sharing systems are the most notable instances. For example,
[BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) became very popular in
the mid-2000s and remains one of the top file-sharing protocols.

Each node in the network can share files at their free will and ask their peers
for the files they are looking for. Files are identified via content hashing,
making the system resistant to manipulation. While downloading a file, the
downloader can already start sharing completed chunks of the given file. This
allows the system to scale reasonably well if enough nodes participate in
distributing data. Lists of peers and content are exchanged and propagated
throughout the network. There is no global, shared state of the network as it is
in constant flow due to clients leaving and joining the system and contributing
different sets of data.

While file transfers are conducted between peers directly, the system is
somewhat centralized when using centralized trackers. These trackers are used
for the initial seeding of files and for bootstrapping of peers, leaving the
system with a point of weakness.

Another famous example is
[blockchains](https://en.wikipedia.org/wiki/Blockchain). They differ from p2p
file sharing networks as they must maintain a global state all participants
agree on. To achieve this, they leverage consensus models like
[Proof of Work](https://en.wikipedia.org/wiki/Proof_of_work) or
[Proof of Stake](https://en.wikipedia.org/wiki/Proof_of_stake) to eventually
find the 'correct' state. Once agreed on, this state holds true forever as later
changes are only appended to the blockchain. This fact makes blockchains the
perfect system to store valid information indefinitely. Furthermore, the agreed
state is shared throughout the network. This creates severalfold redundancy,
allowing the blockchain to stay available even if numerous nodes fails.

However, as previously stated, finding a consensus among a large set of
participants scales poorly. Moreover, since Blockchains are generally bound by
the [Blockchain Trilemma](https://vitalik.ca/general/2021/04/07/sharding.html),
they must sacrifice scalability, security, or decentralization in favor of the
other two.

{{< image-svg
  src="blockchain-trilemma.excalidraw.svg"
  alt="Blockchain Trilemma"
  caption="Blockchain Trilemma: Current blockchain systems cannot reach the goals of decentralization, security, and scalability at the same time. They have to sacrifice at least one of these on favor of the other two." >}}

Protocols and system rules are defined in a decentralized system, which
participants must adhere to. Within these given parameters, users can use their
own protocol implementations. This allows them to customize the system to their
needs and preferences. For example, they could use an implementation in another
programming language that performs better in a given environment. In addition,
they could choose not to interact with or favor certain peers over others. Such
'optimizations' might improve their use case for participating in a system, like
getting better transfer speeds on BitTorrent or not sharing 'illegal' content
publicly.

## Risks

A decentralized system cannot be controlled by a single party or node. This fact
creates two system risks: hostile takeovers and potential system misuse.

If some party gains control over a large enough number of participants, they can
block decisions and bring the system to a halt depending on the consensus model.
Furthermore, a malicious entity with a controlling majority can control the
entire system and effectively make decisions independently, disregarding any
other participants. This might allow them to create invalid states by accepting
and distributing false computations and data. The remaining independent nodes
would reject this corrupt data as it violates the system rules. However, the
ruling majority propagating incorrect information wins and effectively breaks
the system.

Thus, a decentralized system must try to avoid the concentration of power among
nodes by, for example, tweaking the consensus model or the incentive system for
participation. Discussions on Proof of Work (PoW) vs. Proof of Stake (PoS)
within the crypto ecosystem address this issue.

PoW networks like [Bitcoin](https://bitcoin.org/) are secured by _computing
power_. The more computing power someone holds, the more influence they have on
the system. As numerous _Bitcoin miners_ who contribute their computing power, a
potential attacker must invest heavily in specialized computer hardware to have
a significant impact. At the same, time anyone can start contributing their
computer power to the network without permission or any other significant
obstacles. And with growing interest in the system, more entities are willing to
join the network not solely to earn from mining but to secure the system. This
means that hurdle to control the majority of computing power in the network
becomes ever higher, essentially an arms race with millions of competitors and
no end.

PoS systems like [Ethereum](https://ethereum.org/), as of 2022, are controlled
by nodes that hold _Ether_. The more Ether some entity owns, the more likely
they will be selected to write new blocks to the blockchain.[^ethmining] As
Ether can be bought on the open market and with fiat currency[^fiat] on
_CEXes_[^CEX], malicious entities with enough capital can purchase a controlling
majority. This is especially dangerous as entities like banks or governments
probably have an interest in controlling systems like Ethereum.[^ethmoney]

[^fiat]:
    Government-issued, non-digital currencies like the US Dollar and the Euro
    are generally described as fiat currencies.

[^CEX]: Centralized Exchange
[^ethmining]: This is oversimplified but the essential gist.
[^ethmoney]:
    Banks, governments, and even companies can create fiat currency at their
    will without anyone actually holding them back. Imagine a company like
    Paypal just 'accidentally' creating a lot of USD and buying Ether. People
    trust Paypal to honor those payments, but they might get screwed over while
    Paypal holds actual Ether on the blockchain.

{{< image-svg
  src="decentralized-majority.excalidraw.svg"
  alt="Majority Attack"
  caption="Majority Attack: If an entity controls the majority of participants, it can control the entire network" >}}

BitTorrent is more or less resistant to such attacks as there is no such thing
as a controlling majority due to the absence of a global state. The network is,
however, known for the distribution of _pirated content_. Technically there is
no way to prevent the sharing of such content on the protocol level. However, it
is up to each node in the network to decide which content they want to share.
This might reduce the scaling abilities for that given content, but it cannot be
stopped as long as there are participants left wishing to share that content.

Likewise, data written to a public permissionless blockchain can never be
removed. There are no administrators. Nobody holds with such powers within the
system. Even court orders or other measures that would work in the real world
cannot be applied without fatally disrupting the system.

But due to the open nature of such decentralized systems, real-world entities
like law enforcement can probably find the people who run the nodes in a network
to apply pressure.

## Benefits

The core benefit of a decentralized system run and owned by the community lies
in the capability to resist manipulation. It strictly follows the rules defined
in its protocol and cannot break these or make exceptions if they result in a
'better' outcome. Of course, the community as might decide to make corresponding
changes, but no sole participant can make these alterations. If only a minority
adopts the modifications, the non-adopting majority will disregard conflicting
decisions. The system will continue to work in its previously established form.
Changes that only benefit a minority will not be adopted.

Due to its distributed nature, it can continue to work and serve its purpose
even if large parts of the system fail. This might be caused by technical
problems like network failures or attacks on individual nodes. There is no
single point of failure that can bring the system to a halt. However, degraded
service or performance might be possible.

{{< image-svg
  src="decentralized-resilience.excalidraw.svg"
  alt="Resilience"
  caption="Resilience: Even if large parts of a decentralized system become unavailable, the given system can continue to work without major interruptions." >}}

Consequently, a truly decentralized system cannot be shut down as long as nodes
want to continue participating in the network, at least from a technical point
of view. The effectiveness and efficiency of a system with meager participation
might come into question leaving the system effectively for dead. This
emphasizes that such a network lives and flourishes with participation.