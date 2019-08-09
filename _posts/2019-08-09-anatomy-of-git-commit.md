---
title: "Anatomy of a git commit"
classes: wide
excerpt_separator: "<!--more-->"
categories:
  - discussion
tags:
  - week-1
  - basic
---

Hi, I'm not Bob Ross and for the next 13 minutes, I'll be your host as we experience the joy of writing proper `git` commits.
I think each of us, sometime during our life, has wanted to write a [proper commit](https://www.youtube.com/watch?v=oh5p5f5_-7A).

<!--more-->

# A model example

Let's start by looking a single commit pulled at random.

```
$ git show <commit-hash> 

commit <commit-hash-omitted>
Author: Privacy <is@very.important>
Date:   5 weeks ago

    template header: replace AB-3's nav item with AB-3.5

    As AB-3.5 was derived from the AB-4 codebase, it is currently occupying
    AB-4's position in the site navigation bar.

    However, AB-3.5 is not meant to replace AB-4, but to replace AB-3 in the
    future.

    As such, let's modify the site navigation bar such that AB-3.5 replaces
    AB-3, and restore AB-4's navigation item. This sets up the site
    navigation bar nicely for AB-3.5 to take over AB-3 in the future.

diff --git a/docs/templates/_header.html.slim b/docs/templates/_header.html.slim
index 2a05dc7..5ed749a 100644
--- a/docs/templates/_header.html.slim
+++ b/docs/templates/_header.html.slim
@@ -10,10 +10,10 @@
             a.nav-link href='https://se-edu.github.io/addressbook-level1' AB-1
           li.nav-item
             a.nav-link href='https://se-edu.github.io/addressbook-level2' AB-2
-          li.nav-item
-            a.nav-link href='https://se-edu.github.io/addressbook-level3' AB-3
           li.nav-item
             a.nav-link.active href=(site_url 'index.html') AB-3.5
+          li.nav-item
+            a.nav-link href='https://se-edu.github.io/addressbook-level4' AB-4
           li.nav-item
             a.nav-link href='https://se-edu.github.io/collate' Collate
           li.nav-item
```

Thank you Kanye, very cool!
Now let's break it down to find out what makes this a proper commit.

## Dissecting the commit message
    
Remember the 5 Ws? This git commit answers it all.

### Who? 

The author is right there.

### When?

Again, in the front matter.

### What?
    
The title line of the commit tells you what this commit achieves.
In general, the title should start with a *transitive verb* in *present tense*.
The title should not end with any punctuation.

A litmus test is to check if your commit's title line can complete the following sentence:

    When merged this commit will (your title line here).

Most tools treat the title line as a subject header.
As such, your title line should not be longer than 50 characters.
If you need to describe the commit further, leave it to the message body.
 

Verb | Example of title | Acceptability
---|---|--- 
Change | Change flux capacitor | Yes
Fix | Fix pipes to prevent leakage | Yes
Discombobulate | Discombobulate rude opponent | Yes
 | | 
Edit | Edited Developer Guide to remove typo | No, wrong tense
Remove | Removing dependencies on is_object, isobject, is.object, @unction/isobject, type-is-object, jsmicro-is-object | No, too long. Also, [hahahahahahaha](https://www.npmjs.com/search?q=isobject).

For larger projects with well-defined components, you can prepend the title with the name of the component. 

### Why?

If the impetus behind the change is not immediately obvious, provide the reason in the message body.

The message body is separated from the title by one empty newline and should be hard-wrapped at 72 characters.
The only exception to this rule is _for quoted material that has a specific line format_.

### Where?

The diff shows the changes line by line in each changed file. 
This is one of the reasons why we moved away from using PowerPoint for UML diagrams. 
`.pptx` files don't really show up nicely in git diffs so it is troublesome to verify changes.

## Further examination 

The commit purports to make a focused change (`replace AB-3's nav item with AB-3.5`), and the diffs corroborate its claims.
Every change is made solely to achieve the goal described in the commit message.

It is important that each commit be entirely self-contained. 
The last thing you want is to squeeze minor fixes in a commit and have the entire codebase break when someone reverts your commit.

Also note how small the commit is.
Codebases are subjected to rapid change, especially a product that's meant to be completed in less than a semester and your commits must be [agile](https://www.atlassian.com/agile) enough to match.
Treat commits like lego bricks: small, composable units that can be repurposed at anytime. 

# Practical applications

tl;dr:

## Template for a git commit message

```
Title: Starts with active verb & < 50 columns
(new line)
Body that describes the reasoning behind the commit. Wrap this at 72
columns. Remember that the title should not end with punctuation.

You can have more than one paragraph. Github allows formatting to link
to pull requests and issues but it's platform specific annoying to
people not reading from github.

Keep your commits small. 
```
