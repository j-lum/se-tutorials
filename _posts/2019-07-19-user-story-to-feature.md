---
title: "From user story to game plan"
classes: wide
excerpt_separator: "<!--more-->"
categories:
  - tutorials
tags:
  - rejected
  - out-of-syllabus
---

In this tutorial, we are going to follow the process of implementing a feature from a user story to production-ready code.
<!--more-->
## Introduction 

Presenting the user story:

> ### User story: 
> As a forgetful user, I can add a long description of a person to their entry in the address book.
Conditions:
> * The description should be visible to the user at all times.
> * The description should be able to contain spaces and punctuation
> * The user should be able to edit or remove the description.
> * The user should be able to create a person without any description.

### Fishing for ideas
Let’s brainstorm for the various ways we can implement this feature.
Remember to consider the different aspects of a feature!
Keep an open mind - there are no bad ideas during brainstorming! 

#### User interface:
* Add a new line to each existing person to show the description.
* Have two columns and show the person and their description side by side.
* Show the description as a tag.

#### User experience: 
* Extend the existing add and edit commands to accommodate a new field.
* Have a new command to handle descriptions.

#### Implementation:
* Extend the existing `tag` to accept longer sentences.
* Make the description a new field in person.
* Create a separate model to keep track of descriptions. 

## Narrowing down
Now that you have a list of possible choices, list down all the pros and cons each approach.
In a team setting, your team members can come up with solutions or workarounds some caveats that might make some approaches more viable.
This is also a good time to offer your expertise or to admit to lack thereof.
Lack of knowledge or expertise within the team is a valid criticism of a choice! 

> ### A short aside on analysis paralysis:
> “Perfect” solutions don’t exist! 
> Don’t worry about finding the best solution or get stuck on some minor detail.
> Adopt an incremental and iterative approach by committing to delivering code and improving upon existing code every release!

An example of a breakdown from the brainstorming session above:

* Add a new line to each existing person to show the description:
    * Pros: Easy to implement. Does not drastically change the existing UI/UX
    * Cons: Description might be lost in the visual noise 
* Have two columns and show the person and their description side by side.
    * Pros: Visually distinct. Easy to format long descriptions 
    * Cons: Don’t know how to implement. Description is optional so there might be blanks spaces.
* Show the description as a tag.
    * Pros: Trivial to implement.
    * Cons: Breaks existing tag logic. 

## Finalizing on a game plan

Let's say that you have decided to implement a new command that edits a new field in a `Person`.
Now it's time to decide how to break down the work.
From the official tutorials on tracing code and available documentation, you should have a rough idea of components you will have to add or modify to implement your feature.

It is usually a good idea (and sometimes the only idea) to start working from the model.

In the case of our example, we would:

1. Add a new class for a description.
1. Modify the existing `Person` class to accept the description
1. Modify the logic component to handle CRUD for the description
1. Modify the storage component to account for the description
1. Add UI related code to allow the user to interact with the logic

---

### P.S 

This was originally meant to be the introduction of the `Remark` tutorial. 
Wildly out of syllabus, this is more of a bastardisation of SCRUM.
It's not the worst way to go about managing this project though. 
  

