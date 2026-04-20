---
title: "Chapter 12: •"
type: "book"
book: "The Policy Playbook"
tag: "policy-playbook"
status: "draft"
---
•
1-2x Service Designer
•
1-2x Business Rules Specialist
The team will need a few props and supports to work well, and should
spend the first day or two simply learning about “the domain” that the
group will be focusing on:
•
Comfortably sized room or virtual space to work in
•
Ideation tools (physical or virtual) including whiteboards
•
A coding environment for the rules-as-code developer
•
Collaboration and co-drafting tools.
Each team member should prepare the following to bring to the process.
•
Subject Matter Expert—Prepare an initial presentation on the domain
for the team with the goal of giving the other team members a broad
understanding of the history and challenges in the space.
•
Policy Advisor—Ensure a good understanding of the current and
historic policy positions as they relate to the domain is on-hand for
them to supply the team
•
Legal Advisor—Ensure a good understanding of the current and
historic legal context to the subject matter are available to the team.
•
Rules-as-code developer—Have previous to the project ensured they
have a suitable coding environment (with test suite) setup ready to go
and an understanding/experience in the process of coding rules. They
will also need to have a methodology that non coders can utilise to
create and store the tests.
•
Service Designer—Establish a good understanding of the design
implications currently faced in the domain and prepare a simple
analysis of what works and doesn’t work.
•
Business Rules Specialist—Bring existing knowledge of business
processes and rules and be prepared to present this perspective
to the workshop.
109

Ensure each member of the group needs to be comfortable in sharing
their perspective and confident in disagreeing/questioning the rest of the
group; this team dynamic is important for ensuring success. If the team are
new to each other it’s advisable to set aside time to foster a sense of trust
and undertake some team-building/ice-breaking activities. Once this has
been achieved the team is ready to start.
Getting started
The Concept Model is initially a messy process and one should keep in
mind its purpose. The overriding role of the concept model is to provide a
focal point that allows the group to form a shared consistent view of the
domain.
Expect it to be redrawn multiple times and plan accordingly. Post-it notes
directly to a whiteboard is not a bad starting approach for this reason.
Utilise the whiteboard to draw connections. Connections can be labelled.
Do not get distracted by logic flows, that comes later. As the above
example shows: beard and “beard tax” are identified as concepts—they
are then linked with the concept “person”—the word used in the current
rule set. Age is also identified and posted close to “claimant” as it applies
to that concept.
Expect a sense of agreement to develop within the group and for that
to be suddenly interrupted by disagreement, repeatedly. The concept
model provides a focal point to work out disagreements in how the model
is perceived and will be modified often as part of this process. This is the
concept model fulfilling its purpose.
Creating an “out of scope” section can help keep the group in agreement
on the scope of the project and remind people of what has been previously
discussed and ruled “out of scope”.
Once the concept model is underway and team members believe it’s
reached a level of maturity and clarity which they’re comfortable with
- a number of other activities which contribute to the output of the
workshop (described below) can be added to the group’s work flow.
110

Focus the individual team members as outlined below on their appropriate
tasks but to try and work through the process as a collective, sharing into
the wider group the questions inspired by their respective tasks. Each of
the tasks is likely to throw up new insights and changes to the concept
model—and these will need to be absorbed and discussed by the whole
team. Iterate over each of the rules individually so each task has an
opportunity to interrupt and inform the other parts of the team while they
are looking at the same components. While this feels somewhat slower, it
allows the group to be giving full consideration to each point as they move
through the processing of the tests, rules and service modelling impacts
which will often result in a more thorough and ultimately more efficient
process.
It’s essential that the group keeps checking in as a whole to discuss
findings as is appropriate to the process.
Developing better rules
Note this activity can differ a little depending if existing rules are being
unpacked or new rules being written or both. Regardless, it’s important
to keep the rules tied directly to the concept model which is the group’s
shared understanding of the domain. This is best done by ensuring the
terminology used is kept consistent.
The process for new rules starts with the Policy Advisor giving an outline
of the proposed new rules from their research in the domain. Each of the
team will likely have perspectives to share on what’s proposed.
Each of the outputs of the workshop are designed to highlight gaps and
inconsistencies in the rules. It’s often helpful in analysis of the rules to
play with “what-if” statements that focus on changing variables that
are often assumed.
For example, what if there is X, does our ruleset account for that? The
personas and user/life journeys should help to flush out these assumptions
and create a holistic approach, but stakeholders and users should be
regularly engaged to test ideas throughout the process.
111

A decision tree is created by taking the elements of the concept model and
organising them in an order that represents the sequence (if there is one)
that people and systems would use to navigate the process. They provide
the opportunity to look at the logic dependencies that exist in the domain.
It provides another way to describe the domain and will often highlight
inefficiencies in the approach and inaccuracies in the concept model.
The business rules specialist, while keeping the concept model in mind,
starts the process of crafting the statements that make up the individual
components of logic within the domain. Keep in mind the order of these is
often related to the decision trees. It’s important to try and keep each line
or statement precise and describing a single point.
While coding the rules, it’s expected that the rules-as-code specialist
keeps an eye on the underlying concept model and any assumptions they
may find themselves making while developing the code should be raised.
The art of coding rules is to be very careful to not include any assumptions
or extensions of logic accidentally into the code but faithfully mirror the
rules in an isomorphic fashion.
The rules-as-code specialist will need to advise on the format for the tests
(a spreadsheet can be a low tech solution) so they can later be converted
into code and run against the rules-as-code output. They should also
be relied upon to give an introduction to test writing, documentation
requirements and good practice.
Writing tests is initially an exercise in expressing the policy intent but then
switches to an exhaustive analysis of possible scenarios. If the rules-as-
code specialist is not yet sure of the format of the tests, the scenarios can
be described in spreadsheets ready for importing alongside the code.
Broader testing and consultation
Most legislations/regulations include a consultation phase, and it is
recommended that the reference implementation be included in public
consultation for independent testing, and where possible to also share
the other outputs above for context and feedback.
112

Parliamentary process
Of course, all of the above has only led to a draft submission that can
be taken to the parliament, which then follows parliamentary processes
including debate and ultimately (if successful) ratification in multiple
houses. But by maintaining the digital policy twin, amendments
throughout the parliamentary process can be quickly tested and
modelled in closer to real time, to inform and hopefully help ensure
the ratification of a final draft that is tested and well evidenced.
Process outputs
Several outputs are produced using this approach, each offering an
opportunity that can be fed back into that iterative process and re-used
to solve other issues including:
•
user research
•
concept models
•
decision trees
•
rule statements
•
rules-as-code
•
test suites.
Outputs are marked as either base requirements or optional outputs.
Choosing which outputs are focused on will be dependent on the context
and purpose of the workshop. The outputs could be incorporated into
the enveloping institution’s documentation and kept as foundational
reference material for the rules that have been brought into effect.
User Research
As a follow-on from the Phase 1 Policy Preparation work, it is useful
to engage with users (those who will need to implement the rules and
those who would be affected) throughout this process, to ensure rules
are applicable, understandable, equitable and relevant. Service designers
can also provide analysis of the rules and model the impact they might
have on services and people’s access to them.
113

Concept models (required)
Concept models form a working map of the concepts that make up
the policy domain the team is focusing on and are an essential central
component to the better rules process, providing an accessible and
inclusive method for all participants to contribute and come to an
agreement on how the legislation/regulation should theoretically work.
They allow the team to create a visual shared understanding of the domain
and its scope, and it becomes a reference point that allows all the other
expected outputs to achieve a high level of consistency. It is also the central
mechanism for quantifying and resolving disagreements and differences
in perspective and as such is constantly evolving and improving over the
lifetime of the workshop.
To date, the practice of developing concept models within Better Rules
has proved simple. It involves the team identifying the concepts they are
attempting to create rules for. We’ve used post-it notes or Google Draw
so far—laying out the concepts and drawing lines between them
to indicate how the concepts relate.
This first step, often initially feels elementary, but has proved crucial for
the team to be able to define the scope of what is being tackled and allows
the development of a shared model of understanding. It draws out the
different understandings in the team. It also provides an opportunity to
raise novel ideas from different disciplines that may not otherwise have
been considered by traditional policy professionals or legislative drafters.
Decision trees or logic maps (required)
The decision trees or logic map for the policy helps the team to map out the
order in which the concepts need to be addressed when considering rules
that will work. Both of these outputs may have long term value if digitised
and stored somewhere central, capturing institutional knowledge for
future reference or re-use. It may be useful to draw upon the personas and
user/life journeys defined in policy preparation to identify how the rules
might be triggered, and to identify parallel policy areas that need to be part
of the mapping and analysis in designing new rules.
114

Decision trees map the logic and ways people and systems practically
navigate the concept models. Experience suggests these maps can take
anywhere from a few minutes to several days depending on the complexity
of the concept model and the more complex ones will be revisited often
in the same manner as the concept model. Their development will often
result in changes to the concept model.
Logic maps (also known as process flows) are detailed flow charts of the
process(es) that rules would ideally follow. They are especially useful
in questioning how implementable a ruleset is, at what point in time,
with what trigger, and can provide insight into potential bottle necks or
inconsistencies that the rules might introduce. Keep in mind there are
often multiple process flows for a set of rules depending on the perspective
and roles of the people the rules affect, which is why the personas and
user/life journeys can be useful as mechanisms to flush out policies that
would likely intersect in real life.
Rule statements (optional)
These are short plain language statements which describe each of the
proposed rules. They are not always required, as it is possible to only
produce a human and machine readable version of the legislation, but
rule statements can help the team to work through any ambiguities. The
iterative practice of describing them in plain language for humans while
simultaneously describing them in code for machines provides valuable
insights into previously unidentified issues. These rule statements can
be useful for legislative drafters.
Business rule statements are precisely written statements of logic
describing each rule in a set of rules succinctly. An example might look like:
“A person is eligible to vote if: their age
is 18 years or more, and they have lived
in the district for 6 months”
Business rule statements are useful for both drafters and coders in
establishing statements of logic. Note their dependency on the terms used
and how they map to the concept model.
115

Rules-as-code (required)
Computer code can play an interesting and exciting role for developing
legislation and regulation. Firstly there’s the pragmatic realisation that
computers have been a vital part of rule implementation for some time
with a lot of government rules already being interpreted subjectively and
then coded into software in both the public and private sectors.
What has been discovered through the Better Rules work is that
attempting to explain a rule to a computer can significantly impact
or even change how it is implemented. The best way to describe what
happens in this process (other than experiencing it) is that the computer
acts as a brutal mirror without assumption or context, making visible any
assumptions/context held by the team.
The consequences of this are experienced every day when people
implementing legislation in software have to make enormous leaps in
interpretation. A recent simple example was the challenges experienced
with the NZ Holidays Act, which had significant ambiguity in the rules
leading to very different implementations across the economy, creating
billions in incorrect and inconsistent holiday pay.
The use of computer code in this process can vary. Below is a brief summary
of some rules-as-code uses and what they might offer:
•
Simulations: Establishing a digital twin of the current policy
environment to support policy simulation is a great way to improve
the quality of new legislation, without creating contradictory or
duplicative rules. Combining datasets relevant to the concept
being addressed with this rules-as-code digital policy twin enables
simulations to feed into the drafting process. Simulations also allow
experimentation with various parameters, assumptions or proposals
and may lead to entirely new solutions not previously explored.
•
Reference implementations: If the rules-as-code reference
implementation of the new legislation or regulation is published
in a suitable, machine readable format, government departments
and regulated entities could more easily implement those rules
into their business systems. This process would vastly decrease the
differing implementations and discrepancies, creating economy wide
efficiencies and productivity uplift.
116

•
Publication: In the same way governments publish legislation online,
legislation-as-code could also be published in an open executable
format allowing for non-government entities to build services
informed by law, able to consume legislation as a service.
•
Powering government services: legislation as code model can be used
by government services both to streamline and make service delivery
more efficient, and to delineate foundational policies from operational
policies, such that government services don’t unintentionally become
non-compliant with rules defined explicitly in legislation.
The process of simultaneously drafting human readable and machine
readable rules may iterate many times as new issues are identified and
grappled with. This will also often highlight issues with the underlying
concept model design.
It’s important to note that rules-as-code can exist separate from the
Better Rules process and is a large field of expertise in its own right that
overlaps into other areas, such as business contracts, trade agreements
and business rules.
Test suites (required)
Guided by the policy intent, tests are often described as scenarios and
provide the means to assure and test that the policy definition and
reference implementation match each other, and match the intended
policy outcome. In the field of programming these tests are often
described as test suites, and used in what’s known as test-driven-
development.
The tests describe a scenario along with the expected (policy) outcomes
that the test should deliver. When this concept is combined with rules-
as-code, computers can be leveraged to store large numbers of these tests
describing as many unique scenarios as needed to be captured and then
the machines can execute these tests en masse, producing immediate
reports. If stored and published alongside the rules-as-code, these
test suites provide another way to assess if policy intent will be met
and capture existing institutional knowledge for future maintainers
of the rules.
117

Better rules and rules as code references
•
The first Better Rules Discovery Report from NZ (by Nadia Webster)
and video by MBIE
•
Legislation as code for New Zealand: opportunities, risks and
recommendations and also Governing digital legal systems by Tom
Barraclough and Hamish Fraser
•
Cracking the code: rulemaking for humans and machines and the
Global Innovation in Government Trends 2019 (OECD)
•
The NSW Rules as Code Emerging Tech Primer
(the NSW Gov Policy Lab)
•
Accident Compensation Act (NZ) Better Rules Discovery Report
(ACC)
•
Applying Rules as Code for city planning and consenting
(Wellington Council)
•
Experimenting with Rules as Code by the Canadian Community of
Federal Regulators, and the Canadian School of Public Service
•
A March 2021 report by the Law Foundation in NZ on Rules as Code.
An adaptive toolset—
Infrastructure for impactful policy
“Policy infrastructure” isn’t a term that’s often used in government, and
yet public servants use and rely upon policy infrastructure every day.
Policy infrastructure includes the data, tools and platforms that help us to
analyse, design, model, implement, automate, iterate, monitor and report
on policies and policy interventions, throughout the entire policy lifecycle.
Policy infrastructure necessarily includes an enormous range of software,
data and platforms, because any one tool that tries to do it all will never
work.
Policy infrastructure is used to support both the design and development
of new policies, as well as the delivery, ongoing management and
118
