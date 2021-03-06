---
title: "A brief history of JavaFX"
classes: wide
excerpt_separator: "<!--more-->"
categories:
  - discussion
tags:
  - javafx
---

Before diving into the meat of JavaFX, it is important to understand its place in the history of Java's many GUI
toolkits.

<!--more-->

# A brief history of JavaFX

## AWT (Abstract Window Toolkit)

AWT provides a set of _native_ user interface components through a common API introduced in 1995.
In AWT, each GUI component had a _peer_ -- the native component specific to a given OS.
For example, a `java.awt.Button` creates an OS-specific `java.awt.peer.ButtonPeer` under the hood and the
`ButtonPeer` relays interactions from the user to the `Button`.

The look and feel of an application built with AWT will vary wildly across platforms.
It is not uncommon to see UIs break because of these inconsistencies.
Naturally, this violated Java's guarantee (and major selling point at that time) of _write once, run anywhere_.
Despite these issues, there are still some benefits to using AWT.
For starters, end-users appreciated GUIs that appeared to be native to them.

Also, some GUI components like tray icons can only be implemented in AWT even today.

## Swing

Swing is Java's response to the criticism of AWT.
Built on top of AWT, GUI components are divorced from the OS and written in native Java.
This mitigated the issues arising from platform-specific idiosyncrasies.

The default look and feel for modern Swing applications: Ocean
![Ocean Look and Feel](/assets/images/2019-07-24-a-brief-history-of-javafx/OceanLookAndFeel.png)

In addition, the _look and feel_ of each component can be programmatically changed.
Notably, IntelliJ IDEA is built on Swing!

Swing imports are under the `javax` package mainly due to historical reasons.
At that time, eXtensions to `java` were incubated under the `javax` to be promoted to the main package when mature.
However, Swing caught on quickly and people balked at the thought of having to change all the imports in all of their code.
As such, Swing was stuck in the `javax` package, never to graduate. 

## JavaFX

Created as a successor to Swing, JavaFX was created to compete with Adobe Flex and Microsoft Silverlight.
Programmers used a scripting language (superficially similar to JSON) to describe a UI.

A sample JavaFX script demonstrating bindings between a model and a view:

```javascript
class HelloWorldModel {
    attribute saying: String;
}

var model = HelloWorldModel {
    saying: "Hello World"
};

var win = Frame {
    title: bind "{model.saying} JavaFX"
    width: 200
    content: TextField {
        value: bind model.saying
    }
    visible: true
};
```

The JavaFX scripting language was dropped in less than 3 years in favor of a new set of Java APIs.

Since Java 11, development of JavaFX has been migrated to OpenJFX under the OpenJDK project and is no longer distributed together with the JDK.
JavaFX is distributed under its own package `javafx` which is pretty sane, all things considered.
