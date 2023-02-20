---
title: "Decentralization"
date: 2022-12-30T00:28:12+01:00
draft: true
weight: 2020
menu:
  main:
    parent: decentralization
    weight: 20
---

## What is a Decentralized System?

As one might guess, decentralized systems are the opposite of centralized
systems.
The ruling power that is concentrated in a centralized system is instead split
and _distributed_ to a large number if not all participants of a system.
For each decision that has to be made all participants have to be included.
They have to come to a _consensus_ which then holds true for all members.
All of participants are viewed as equals and have to abide by the rules of the
system.

The consensus models can vary between systems.
Simple _majority_ or 2/3 majority votes are fairly simple examples.
More complex schemes with various layers can be applied when needed for a given
environment or situation.

Democratic systems are generally viewed as decentralized.
Voting among your friends, which movie to watch at the cinema is good example.
Everybody in your group is involved in the decision making process and the
protocoll is known and accepted by all, raise your hand and the majority vote
wins.
If the cool kid in your group is sick that day, the system still works and the
rest of you can enjoy a movie while not being forced to follow the preferences
of a single ruler.
The group also works if multiple people do not show up or your friends bring
some more friends along.
If someone really does not want to watch that horror movie, you could also
switch the consensus model to vote for a movie that is acceptable to all and
thus reduce friction within the group.

Modern western democracies are also considered decentralized, as leaders, e.g.
the president, the parliament, and others, are elected by all eligable
citizens.
However, the citizens of a given country are not directly included in each
decision the government makes.
They have to trust their representitives to honor their campaign pledges and
vote in their interest in parliament.
But from all the political dramas on TV, fiction or not, we know that this
trust is often misplaced.

Thus, __democracies are fairly centralized__, as the elected officials are in
power and can use this power in a centralized way to either make good on their
promises or solely act in their own interests.
The _separation of powers_, oversight, and federated systems can mitigate these
risks but cannot eliminate them entirely.

Consequently, there are various _levels of decentralization_ ranging from
rather centralized to very decentralized.
A system in which each and every decision is put to a vote for everyone to
participate holds a higher _degree of decentralization_ than electing a ruler
who is going to make the 'right' choices.

However, holding a vote on practially everything _does not scale_.
If the number of participants or the number of decisions grows ever larger,
it becomes extremely cumbersome to conduct votes.
This holds especially true in the real world where every vote takes quite some
time: people need to understand their choices, sending messages takes time,
counting the votes, campaigning, etc.
Centralization on the other hand reduces these effects at a __cost__.
By centralizing to a certain degree every participant loses part of their
influence as this power is given to some centralized entity.
Nevertheless, this entity is able to make and execute decisions faster as the
process is more streamlined.

When setting up a new system, one must find a fitting balance between
scalability and security:

* Who should be in control?
* Is centralization a problem?
* What are the consequences if someone abuses their powers?
* How many and how often does the system have to make decisions?
<!-- TODO -->

<!-- TODO owned by nobody but the participants -->


## Decentralized Software Systems

Decentralized software systems have been around for very long time.
Peer-to-peer file sharing systems are probably the most prominent examples.
[BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) became very popular in
the mid 2000s and still remains one of the top file sharing protocolls.

Each node in the network can share files at their free will and can ask their
peers for files they are looking for.
Files are identified via content hashing making the system resistent against
manipulation.
While downloading a file the downloader can already start sharing completed
chunks of the given file.
This allows the system to scale fairly well if enough nodes participate in
distributing data.
Lists of peers and content are exchanged and propagated throughout the network.
There is no global, shared state of the network as it is in constant flow due
to clients leaving and joining the system and contributing different sets of
data.

While file transfers are conducted between peers directly the system is
somewhat centralized when using centralized trackers.
These trackers are used for the initial seeding of files and for bootstrapping
of peers leaving the system with a point of weakness.

Another popular example are
[blockchains](https://en.wikipedia.org/wiki/Blockchain).
They differ from p2p file sharing networks as they have to maintain a global
state all paricipants agree on.
In order to achieve this they leverage consensus models like [Proof of
Work](https://en.wikipedia.org/wiki/Proof_of_work) or [Proof of
Stake](https://en.wikipedia.org/wiki/Proof_of_stake) to eventually find the
'correct' state.
Once agreed on, this state holds true forever as later state changes are only
appended to the blockchain.
This fact makes blockchains in theory the perfect system to store valid
information indefinitely.
Furthermore, the agreed state is shared throughout the network.
This creates severalfold redundancy which allows the blockchain to stay
available even if a large number of nodes fails.

However, as previously stated finding a consensus among a large set
participants does not scale well.
Blockchains are generally bound by the [Blockchain
Trilemma](https://vitalik.ca/general/2021/04/07/sharding.html), thus having to
sacrifice either scalability, security, or decentralization in favor of the
other two.

In a decentralized system protocols and system rules are defined which
participants must adhere to.
Whithin these given parameters users are able to use their own implementations
of the protocol.
This allows them to customize the system to their needs and preferences.
For example, they could use an implementation using another programming
language which performs better in a given environment.
They could choose not to interact with or favor certain peers over others.
Such 'optimizations' might improve their use case for participating in a
system, like getting better transfer speeds on BitTorrent or not share
'illegal' content publicly.
<!-- TODO protocoll and system rules, own implementation within the protocol -->
<!-- TODO no single point of truth, state is distributed throughout the network -->

## Risks

A decentralized system cannot be controlled by a single party or node.
This fact creates two system risks: hostile takeovers and potential misuse of
the system.

If some party gains control over a large enough number of participants, they
are able to block decisions and could bring the system to a halt depending on
the consensus model.
Furthermore, a malicious entity with a controlling majority can control the
entire system and effectively make decisions on their own disregarding any
other participants.
This might even allow them to create invalid states by accepting and
distributing false computations and data.
The remaining, independent nodes in the network would reject this corrupt data
as it violates the system rules.
However, the ruling majority propagating false information wins and effectively
breaks the system.

Thus, it is essential that a decentralized system tries to avoid the
concentration of power among nodes by for example tweaking the consensus model
or the incentive system for participation.
Discussions on Proof of Work (PoW) vs. Proof of Stake (PoS) within the crypto
ecosystem address this issue.

PoW networks like [Bitcoin](https://bitcoin.org/) are secured by _compute
power_.
The more computing power someone holds the more influence they have on the
network.
As there is a large number of _Bitcoin miners_, who contribute their compute
power, a potential attacker needs to invest heavily in specialized computer
hardware to gain significant influence.
At the same time anyone can start contributing their computer power to the
network without permission or any other larger obsticles.
And with growing interest in the system more entities are willing to join the
network not just to earn from mining but also to secure the system.
This means that hurdle to control the majority of compute power in the network
becomes ever higher, essentially an arms race with millions of competitors and
no end.

PoS systems like [Ethereum](https://ethereum.org/) as of 2022 are controlled by
nodes who hold _Ether_.
The more Ether some entity owns the more likely they are to be selected to
write new blocks to the blockchain.[^ethmining]
As Ether can be bought on the open market and with fiat currency on _CEXes_,
malicious entities with enough capital can buy their controlling majority.
This is especially dangerous as entities like banks or governments probably
have an interest in controlling systems like Ethereum.[^ethmoney]

[^ethmining]: This is oversimplified but the essential gist.
[^ethmoney]: Banks, governments and even companies can create fiat currency at
    their will without anyone actually holding them back. Imagine a company
    like Paypal just 'accidentally' creating a lot of USD and buying Ether.
    People trust Paypal to honor those payments but they might just get screwed
    over while Paypal holds actual Ether on the blockchain.

BitTorrent is more or less resistent against such attacks as there is no such
thing as a controlling majority due to the absence of a global state.
The network is however known for the distribution of _pirated content_.
Technically there is no way to prevent the sharing of such content on the
protocol level.
However, it is up to each node in the network to decide which content they want
to share or not.
This might reduce the scaling abilities for that given content but as long as
there are participants who want to share that content it cannot be stopped.

Likewise, if data is written to public permissionless blockchain, it can never
be removed as there is no administrator with such powers.
Even court orders or other measures that would work in the real world cannot be
applied without fatally disrupting the system.

But due to the open nature of such decentralized systems, real world entities
like law enforcement are probably able to find the people who run the nodes in
a system to apply pressure.

## Benefits

The core benefit of a decentralized system which is run and owned by the
community lies in the ability to resist manipulation.
It strictly follows the rules which are defined in its protocol and cannot
break these or make exceptions to them if they result in a 'better' outcome.
The community as whole might decide to make corresponding changes, but no
participant on their own can make these alterations.

Due to its distributed nature it can continue to work and serve its purpose
even if large parts of the system fail.
This might be caused by technical problems like network failures or due to
attacks on individual nodes.
There is no single point of failure which can bring the system to a halt.
However, degraded service or performance might be possible.

<!-- TODO cannot be shut down -->

<!-- TODO -->
