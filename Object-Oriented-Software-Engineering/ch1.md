# CH 1 - Introduction to Software Engineering

## What is the purpose of modeling?

The purpose of modeling is to make an abstract representation of a system that enables us to answer questions about the system. Modeling are useful when dealing with systems that are too large, too small, too complicated, or too expensive to experience firsthand. Modeling also allow us to visualize and understand systems that either no longer exist or that are only claimed to exist.

## A programming language is a notation for representing algorithms and data structures. List two advantages and two disadvantages of using a programming language as the sole notation throughout the development process.

### Advantages:
1. Developers need to learn only one notation for all development activities.
2. Traceability among models and between models since they are written in the same notation.
3. Code in made easier since they are written in same notation as model.
4. Easier to train staff - only one notation to learn.
### Disadvantages:
1. A programming language is a low level notation that is difficult to use for representing user requirements.
2. A programming language enables and encourages developers to represent implementation details too early.

## Consider a task you are not familiar with, such as designing a zero-emission car. How would you attack the problem?

First step, knowledge acquisition, collect the knowledge about a zero-emission car.<br/>
Second Step, Rationale, check the knowldge that we collect is capable to represent in software engineering.

## What is meant by "knowledge acquision is not sequential"? Provide a concrete example of knowledge acquisition that illustrates this.

Knowledge acquisition is nonlinear in the sense that the acquisition of a new piece of knowledge may invalidate prior knowledge. In other terms, knowing one more piece of information may lead you to realize that what you thought you knew is invalid. For example, Galileo Galilei invalidated the earth centric model of the universe by observing the moons of Jupiter and the phases of Venus.

## Hypothesize a rationale for the following design decisions:
### "The TicketDistributor will be at most one and a half meters tall."
any rationale is ok as long as it make sense, such as to accommodate shorter people or children, designed for possible earthquake.
### "The TicketDistributer will include two redundant computer systems."
This is for the system's reliability to make sure the system will be running all or most of times. When one computer fails, the other can pick it up.
### "The TicketDistributor interface will consist of a touch screen for displaying instructions and accessing commands and a single button for aborting transactions."
This is for easy of use designed for ordinary people who cannot handle more complex user interface.

## Specify which of these statements are functional requirements and which are nonfunctional requirements:
### "The TicketDistributor must enable a traveler to buy weekly passes."
This is a functional requirement, since it is one use case that the system provides to the user.
### "The TicketDistributor must be written in Java."
This is a nonfunctional requirement, since it is not related to how users use the system.
### "The TicketDistributor must be easy to use."
This is a nonfunctional requirement, since a system's functions or use cases are independent of how easy a user can use the functions. The system can implement the functions correctly but difficult for users to use.
### "The TicketDistributor must always be available."
### "The TicketDistributor must provide a phone number to call when it fails."

## Specify which of these decision were made during requirements or system design:
### "The TicketDistributor is composed of a user interface subsystem, a subsystem for computing tariff, and a network subsystem for managing communication with the central computer."
This decision is made during system design, since only during system design a software system is partitioned into sub-systems for further development.
### "The TicketDistributor hardware uses PowerPC processor chips."
This decision can be made either during requirements by the client or during system design by the developer. In the former case, as a non-functional requirement, the client can request to use PowerPC processor for the hardware platform on which the system to run based on some technical, business, or political consideration. In the latter case, the developer may conclude that running on a computer with PowerPC processor the software system can achieve the required functions and better quality.
### "The TicketDistributor provides the traveler with online help."
This decision is made during requirements because this is part of client's functional requirements.

## In the following description, explain when the term account is used as an application domain concept and when as a solution domain concept:
### "Assume you are developing an online system for managing bank accounts for mobile customers. A major design issue is how to provide access to the accounts when the customer cannot establish an online connection. One proposal is that accounts are made available on the mobile computer, even if the server is not up. In this case, the accounts show the amounts from the last connected session."

## What is the difference between a task and an activity?

## A passenger aircraft is composed of several millions of parts and requires thousands of persons to assemble. A four-lane highway bridge is another example of complexity. The first version of Word for Windows, a word processor released by Microsoft in 1989, required 55 person-years, resulted into 249,000 lines of source code, and was delivered 4 years late. Aircraft and highway bridges are usually delivered on time and within budget, whereas software is often not. Discuss what are, in your opinin, the difference between developing an aircraft, a bridge, and a word processor that would cause this situation.

To estimate the budget and schedule for a new bridge or aircraft, engineers use actual data from previous bridges and aircraft. Word for Windows was an innovative piece of software with few or no precedents.<br/>
Many bridges and aircraft are simply refinements of other existing artifacts. This reduces the proportion of the overall effort that is dedicated to design (which is the most difficult to estimate).<br/>
Bridges and aircraft are often associated with severe financial penalties when late or over budget.<br/>
Bridges and aircraft have safety requirements associated with them. This leads to a conservative approach to development including the use of mature technologies and well defined processes.<br/>
Bridges and aircraft are sometimes delivered late too.
