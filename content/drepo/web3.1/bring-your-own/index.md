---
title: "Bring Your Own Software"
description:
  "If an application leverages the dRepo and witnessable apps, users are given
  the tools to modify every aspect of an application. Besides forking, SBOMs
  enable on-the-fly modification. Furthermore, using a modular distribution of
  components and libraries as they are published in the dRepo can improve the
  user experience as fewer data must be explicitly obtained for a given
  application."
tags:
  - "modification"
  - "sharing"
  - "personalization"
  - "modularity"
  - "source code"
  - "distribution"
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
that an application is open-source. Consequently, anyone can read an app's code
and all its dependencies. Knowing exactly how an application works, users can
leverage edge cases or otherwise hidden information to their advantage. More
importantly, they can now change the source code of an application in any way
they want.[^license]

[^license]:
    We ignore licensing issues, which prohibit changing and distributing the
    code, simply because nobody can truly prevent that.

Anyone can fork such an application, change its behavior, remove annoyances, and
add new features. Within the open-source world, such modifications are very
welcome, especially if they are contributed to the upstream project eventually.
In contrast, commercial applications like Twitter and Instagram generate revenue
from ads and paid features. Forks without those ads or paywalls would jeopardize
the livelihood of these developers. However, this type of economy is currently
not sustainable and will probably collapse in favor of more modern schemes in
the future.

With little human intervention, automatic merges and modern CI systems allow
forks to instantly adopt upstream changes and publish modified applications.
People will opt to use a version of an application that fits their needs. This
means the original developers will lose any control over their applications if
they want them to be witnessable and run on a user's device.[^control]

[^control]:
    This is essentially the case today. Any code running on a user's device is
    out of the developer's reach. Users can modify it, and the developer can do
    nothing about it.

## Modularity

Looking at current web applications, users are already partially in control. The
code of web frontends, HTML, CSS, and JavaScript, has always been somewhat
human-readable. In addition, ad blockers and other modification schemes enable
users to adapt websites automatically and on-the-fly to their needs. Removing
ads, changing color schemes, adding convenience features, and removing user
tracking software are just a few examples.

If such a frontend were published as a witnessable app in the dRepo, these
automatic tools could be given superpowers. An accompanying _SBOM_ discloses all
software components of an application in a concise and processable document. A
user can quickly identify unwanted application parts by combining this data with
the information propagated by the dRepo on each software library. Instead of
downloading a tracking library, a user's browser could automatically switch out
the implementation with a dummy library, which does not break the application
but does not execute any tracking code. In the same way, an older component,
which contains security issues, could be upgraded on-the-fly in the browser.

{{< image-svg
  src="user-modification.excalidraw.svg"
  alt="User Modifications"
  caption="User Modification: Apart from forking, when downloading a modular web interface, the user's browser can analyze the SBOM linked in the dRepo to receive a list of all components. It is configured to remove any tracking modules, so it replaces the tracking library in the SBOM with a dummy implementation. Furthermore, it switches another library to a more advanced alternative compatible with the requested lib. The application is assembled in the user's browser with fitting, filtered components. It uses the same backend as the original app. However, it is adapted to the user's preferences." >}}

Current web apps and others are often compiled into a single binary or fewer
compressed files. The code within these is usually optimized. Web applications
often tune their distribution files to be as small as possible to reduce latency
from downloading large files. This makes changing software on a user's device
very difficult. If developers instead choose to distribute their applications in
an open, modular form, users not only gain more access to the application, but
both users and developers can leverage the previously discussed network effects
of the dRepo distribution.

Rather than compiling all code into a single binary, dependencies could be left
as is and be consumed using _dynamic linking_.[^linking] For most applications,
the performance gain from tree shaking and other optimizations is minimal if all
code resources are already available on a machine.

[^linking]:
    You most likely know the term 'dynamic linking' from C programs. Instead of
    compiling the code of a library into an executable, the library is loaded at
    runtime and has to be present on the system beforehand.

The SBOM of a desired application lists all the dependencies needed for its
execution. The user, more likely the browser or a package manager, would
download all dependencies using the dRepo. Some of these libraries might already
be present, as other applications could have also demanded them. Consequently,
the amount of additional data to be obtained might be minimal.

{{< image-svg
  src="modular-download.excalidraw.svg"
  alt="Modular Download"
  caption="Modular Download: When opening a new app, the user's browser compares the components requested in the SBOM to the local cache. The cache contains modules already downloaded as part of other applications. Subsequently, the browser must only download the missing few components unique to the new application." >}}

In such a scenario, developers of an application would only have to distribute
their own software components while all dependencies could be sourced from
somewhere else. Likewise, said app users only have to obtain these
application-specific components as everything else might already exist on a
user's device. This scheme reduces the infrastructure developers have to provide
especially when users share the downloaded components. The users are
consequently in control over all dependencies and can change and switch them out
as they please.

<!-- ## Bring Your Own Storage, Data, Compute, ... -->
<!-- this belongs to witnessable.app -->

<!-- bring own storage, data -->
<!-- as actually safe apps promote and demand openness and interoperability, users want to bring their own infrastructure -->