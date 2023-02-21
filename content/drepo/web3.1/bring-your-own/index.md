---
title: "Bring Your Own Software"
# description: 'TODO'
# tags:
#   - 'TODO'
date: 2023-01-25T17:23:56+01:00
draft: false
weight: 6060
menu:
  main:
    parent: web31
    weight: 6060
---

## From the Source

The dRepo promotes the usage of witnessable apps. Among others, they require
that an application is open source. Consequently, anyone can read the code of an
app and all of its dependencies. Knowing exactly how an application works, users
might be able to leverage edge cases or otherwise hidden information to their
advantage. More importantly, they can now change the source code of an
application in any way they want.[^license]

[^license]:
    We ignore licensing issues, which prohibit changing and subsequently
    distributing of the code, simply because nobody can actually prevent that.

Anyone can fork such an application, change its behavior, remove annoyances, and
add new features. Within the open source world, such modifications are very
welcome, especially if they are contributed to the upstream project eventually.
In contrast, commercial applications, like Twitter and Instagram, generate their
revenue from ads and paid features. Forks without those ads or paywalls would
jeopardize the livelihood of these developers. However, this type of economy is
currently not sustainable and will probably collapse in favor of more modern
schemes in the future.

Automatic merges and modern CI systems allow forks to instantly, with very
little human intervention, adopt upstream changes and publish modified
applications. People will opt to use a version of an application that fits their
needs. This means the original developers will lose any control over their
applications if they want them to be witnessable and run on a user's device.

## Modularity

Looking at current web applications, users are already at least partially in
control. The code of web frontends, HTML, CSS, and JavaScript, has always been
somewhat human-readable. AdBlockers and other modification schemes enable users
to adapt websites automatically and on-the-fly to their needs. Removing ads,
changing color schemes, adding convenience features, and removing user tracking
software are just a few examples.

If such a frontend would be published as a witnessable app in the dRepo, these
automatic tools could be given superpowers. An accompanying _SBOM_ discloses all
software components of an application in a concise and processable document.
Combining this data with the information propagated by the dRepo on each
software library a user can quickly identify unwanted components. Instead of
downloading a tracking library a user's browser could automatically switch out
the implementation with a dummy library, which does not break the application
but also does not execute any tracking code. In the same way, an older
component, which contains security issues, could be upgraded on-the-fly in the
browser.

Current web apps and others are often compiled into a single binary or fewer
compressed files. The code within these is usually optimized. Web applications
often tune their distribution files to be as small as possible in order to
reduce latency from downloading large files. This makes changing a software on a
user's device very difficult. If developers instead choose to distribute their
applications in an open, modular form, users not only gain more access to the
application but both, users and developers, can leverage the previously
discussed network effects of the dRepo distribution.

Rather than compiling all code into a single binary, dependencies could be left
as is and be consumed using _dynamic linking_.[^linking] For most applications,
the performance gain from treeshaking and other optimizations is minimal, if all
code resources are already available on a machine.

[^linking]:
    You most likely know the term 'dynamic linking' from C programs. Instead of
    compiling the code of a library into an executable the library is loaded at
    runtime and has to be present on the system beforehand.

The SBOM of a desired application lists all the dependencies needed for its
execution. The user, more likely the browser or a package manager, would
download all dependencies using the dRepo. Some of these library might already
be present as other applications could have demanded them as well. Consequently,
the amount of extra data to be obtained might be minimal.

In such a scenario the developers of an application would only have to
distribute their own software components while all dependencies could be sourced
from somewhere else. Likewise, users of said app might only have to obtain these
application specific components as everything else might already be present.
This scheme reduces the amount of infrastructure developers have to provide
especially when users share the downloaded components. The users are
consequently on control over all dependencies and can change and switch them out
as they please.

<!-- TODO image -->

<!-- the drepo promotes actually safe apps, but at least demands (partially) open source apps. -->
<!-- this makes especially client-side apps completely open, allowing users to read the code and all of its dependencies -->
<!-- with this information, users can modify software easily -->
<!-- either by getting source code and make changes, typical fork of git repo etc -->
<!-- or on the fly by switching dependencies etc, similar to current ad blockers and other modification tools -->

<!-- even today, any client app is not under the control of the developers as users can do whatever they want -->
<!-- change to dark mode, block scripts, modify network traffic, decompile the code -->
<!-- only the server was/is a "safe" space -->
<!-- user create alternative apps for twitter and instagram for better user experiences, no ads, etc -->
<!-- this is something one should embrace, because it cannot be stopped -->
<!-- allow users to make whatever changes, integrate good changes in the main line -->

<!-- example: using the published sbom, users/adblockers could identify 'bad' dependencies -->
<!-- either they are out of date and unsecure or they spy on users etc. -->
<!-- users can switch those bad dependencies with better ones, stubs, improved implementations, remove add and tracking, add new features -->
<!-- users can shares these on the fly changes -->

<!-- ## Bring Your Own Storage, Data, Compute, ... -->
<!-- this belongs to witnessable.app -->

<!-- bring own storage, data -->
<!-- as actually safe apps promote and demand openness and interoperability, users want to bring their own infrastructure -->

<!-- TODO: malware phishing in google search results -->