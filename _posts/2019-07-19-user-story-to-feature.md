---
title: "From user story to game plan"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - Rejected
  - Tutorial
  - SE
---

## Introduction 

In this tutorial, we are going to follow the process of implementing a feature from a user story to production-ready code.

Presenting the user story
User story: As a forgetful user, I can add a long description of a person to their entry in the address book.
Conditions:
[] The description should be visible to the user at all times.
[] The description should be able to contain spaces and punctuation
[] The user should be able to edit or remove the description.
[] The user should be able to create a person without any description.

### Fishing for ideas
Let’s brainstorm for the various ways we can implement this feature.
Remember to consider the different aspects of a feature!
TIP: Remember that there are no bad ideas during brainstorming! 

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

> #### A short aside on analysis paralysis:
> “Perfect” solutions don’t exist! 
> Don’t worry about finding the best solution or get stuck on some minor detail.
> Adopt an incremental and iterative approach by committing to delivering code and improving upon existing code every release!

An example of a breakdown from the brainstorming session above:

. Add a new line to each existing person to show the description:
    . Pros: Easy to implement. Does not drastically change the existing UI/UX
    . Cons: Description might be lost in the visual noise 
. Have two columns and show the person and their description side by side.
    . Pros: Visually distinct. Easy to format long descriptions 
. Cons: Don’t know how to implement. Description is optional so there might be blanks spaces.
. Show the description as a tag.
    . Pros: Trivial to implement.
    . Cons: Breaks existing tag logic. 
