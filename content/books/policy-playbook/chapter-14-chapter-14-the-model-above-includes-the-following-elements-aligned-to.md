---
title: "Chapter 14: The model above includes the following elements, aligned to"
type: "book"
book: "The Policy Playbook"
tag: "policy-playbook"
status: "draft"
---
The model above includes the following elements, aligned to the broad
temporal phases of policy delivery:
To support the Policy Preparation phase:
•
Public engagement tools to explore, co-design and test policy
options, both initially (new policies) and ongoing (continuous
improvement to policies and policy interventions).
•
Linked and integrated admin data for research, policy modelling and
patterns monitoring, best hosted by an independent, highly trusted
entity, like the ABS.
•
Case law and gazettes as a utility to use for analysis and to test
new ideas.
•
Publicly available modeling tools for testing and exploring
policy change.
•
Consistently applied Human Impact Measurement Framework
used across government, including for new policy proposals and
for monitoring.
•
Public repository to share policy tools, government models,
measurement frameworks, synthetic population data, etc.
To support the Policy Navigation phase:
•
A linked data representation of the administrative orders
to automate reporting, accountability, auditing, security, access
and to streamline MOGs.
•
Publicly available Policy as code (intended outcomes, legislation,
models, defined target group) available at api.legislation.gov.au
•
Policy catalogue where all operational and Government policies
can be discovered, along with measures and transparent reporting
of progress.
•
A “Citizen’s ledger” to record all decisions with traceable
explanations, for auditing and citizen access.
•
Policy test suite to validate legality of system outputs in gov services
and regulated entities.
•
Open Feedback loops for public and staff about policies and services,
to drive continuous improvement and to identify and mitigate harm.
129

•
Continuous monitoring of policy and human impacts, including
dark patterns and quality of life indicators, alongside usual systems
monitoring, to ensure adverse impacts are identified early and often.
•
Escalation and policy iteration mechanisms to ensure issues detected
are acted upon at portfolio and whole of gov levels.
Another representation of policy infrastructure for adaptive policy
management is below.
CC-BY: Pia Andrews, 2023
Policy Twins
Although not all policies are legislation or regulation, almost all government
services and programs draw upon some legislation/regulation combined
with myriad operational policies. The many and varied interpretations
of these building blocks of public administration can make it hard to
understand which rules are authoritative and which are operational. If
we had reference implementations of policy (including legislation and
regulation) as code, then we could remove the interpretation gap and have
a better chance at identifying and remediating unintended policy issues
as they arise.
130

A Policy Twin is simply the policy equivalent of a “Digital Twin”. Digital
Twins provide a digital representation of spatial information like buildings,
roads, water and gas pipes, which is used to model town planning,
environmental impacts or other spatially driven analyses. A Policy Twin
could be as simple as a digital representation of a policy, but could include
legislation as code, relevant data (admin data, policy measures, lead
and tail indicators, and others), modeling tools, impact monitoring and
more. All the things you have seen emerge in the “Digital Twin” space,
are possible with Policy Twins, and in fact some Digital Twins have
already started including policy as code, such as the inclusion of resource
management regulations in the Wellington City Council digital twin
to model and display the impacts of changes to the building code.
A shift to “CI/CD policy”?
It’s clear when you start trying to imagine a more collaborative,
adaptive, humane, iterative and test driven approach to policy
management, that a lot of the techniques and methods from product
management, CI/CD (Continuous Integration / Continuous Development)
pipelines, service design and agile become useful. So why not reuse some
of the infrastructure, tools, methods and platforms that we have adopted
in service reforms over the last decade to help modernise policy delivery.
Speak to people in your IT department or in the tech sector about the tools
required for CI/CD, and consider which ones are relevant to CI/CD policy
in your context.
We could have CI/CD policy pipelines, policy feedback loops, product
management for policy, policy monitoring and measurement tools, policy
escalation frameworks, policy test suites, policy twins, and public policy
engagement/codesign platforms. Perhaps each policy would have a policy
manager who owns the end to end outcome realisation (rather than the
current baton passing from design to delivery teams). Perhaps each policy
intervention could have its own “policy product owner” who owns the
delivery of that intervention, but works to the policy manager with other
interventions to make sure interventions are effective, complementary
and continuously adapting to change and impact.
131

Foundations
For those curious on the history and foundations of public policy, we have
provided some background and insights. This is not to say the foundations
can’t be changed, but it is worth understanding the past to help you shape
the future. Then you are better able to understand how we got here, what
is worth keeping and what is worth changing.
Every reader of this playbook ought to consider their own origin stories
and historical backdrops to the development over time of the political and
policymaking systems of which they are a part. We provide the Australian
story here as an example of the types of matters to consider as you reflect
on the foundational DNA that structures your architecture and journey
path dependencies.
Without reflection on these origin stories and histories, we cannot weigh
and calibrate the balance of what we might need to unlearn or lay down,
what we need to preserve, and what might demand us to innovate or create
new to meet our contemporary and future aspirations and challenges.
Washminster: the uniqueness
of Australian Government
The colloquial term for the Australian system is Washminster—
reflecting the dominant influences of the British and American systems
and the locational building (Westminster) and place (Washington) that
spoke to the Australian sensibilities of “founding fathers” of the late
20th century. Such a term speaks of the international gaze that colonial
Australia exercised from its inception, as well as the pragmatic deployment
of a range of governance systems that were uniquely meshed together to
form a functional mechanism to manage six distinct colonies across a vast
landmass with need for some semblance of unity to attempt to create
a national identity worthy of defence and economic development.
132

As an island continent far removed from the rest of the known world,
marked with what colonisers saw as harsh land conditions, massive spatial
distances and an incredibly large shoreline, Australian governance was
structured both to capture its land of opportunity status as well as its
dangerous qualities. From its inception, colonial Australia ignored
or dismissed wisdom it might have learned from the country itself
and that of the Aboriginal and Torres Strait Islander inhabitants whose
governance systems were viewed as uncivilised or impenetrable
(Althaus and Morrison 2015).
The concept of Australian government must also be taken in
historical context.
Aboriginal and Torres Strait Islander governance has a long history,
featuring remarkable attributes that prioritised relationality across all
facets of life and the planet. Governance included integrated holistic
community progress, sustainable custodianship and management of
country, biological kinship and clan structures that remain sophisticated
in ways that sustained complex but robust and harmonious intertribal
coexistence. These structures enabled over 500 unique nations (some
250-300 language groups) to flourish with dignity across the diverse
conditions of the Australian landscape for over 65,000 years (Mulvaney
and Kamminga 1999; Clarkson et al. 2017). A noteworthy feature is the
ability of these unique systems of governance to achieve unity through
diversity, prizing their specific customs, traditions, languages and
practices, managing conflict and living sustainably in ways that defy the
domination effects that otherwise dogs other significant civilisations.
Colonial public administration in Australia brought the practices of British
rule to establish a penal colony, setting a new and different tone to the
governance of this part of the world. Each state had their own approach so
when it came to Federation in 1901, the course of a federalised Australian
government as a discrete set of institutional arrangements moved
beyond mere British sensibilities to attempt to capture some of what
was considered the ”best and brightest” of the western world. Deliberate
attention was paid not only to enshrining the ideas of Westminster
enhanced with the republic ideas of the United States of America.
Westminster carried notions of responsible government in an elected
parliament, the separation of powers and an independent judiciary, the
133

roles of sovereign and symbolic heads of state, and the presence of a loyal
opposition and independent public service. Washington contributed its
federated model of layered jurisdictions with the division of powers,
the presence of a dedicated “states” house in parliament and a
written constitution.
The Swiss referendum process was adopted for constitutional reform and
Canadian ideas of united, nationalised government were also influential,
as was having a single federal defence force. Australians remained citizens
of the British Empire until the Nationality and Citizenship Act 1948 when the
idea of Australian citizenship was pragmatically adopted. The collapse
of the British Empire and the increasing non-British migration patterns
of the post-WWII era facilitated assimilation agendas and heralded
a need to address the Australian constitutional requirement that
parliamentarians could not be dual citizens.
A number of features mark this Australian system of government and
associated policymaking.
First, it is pragmatic. Australians are rarely persuaded by grand narratives
or theoretical forays. They want something that works. And Australian
citizens are not fussy as to who or how many layers of government may
be involved (Brown 2010; Gray and Brown 2006). They just want good
outcomes. On the policymaking side, there is no pressure to conform
to a particular model or framework. On the contrary an eclectic mix of
approaches can be found across and between different policy domains,
with policymakers often mesmerised by experimenting with new shiny
ideas from overseas or kicking around the cobbling of various ideas into
a practical option to explore for suitability and fit to the Australian policy
landscape. Together, this suggests a pragmatic bowerbird style might
describe something of the Australian style of policymaking.
Second, checks and balances. From the inception of the colonial system
of governance, Australia has relished the deployment of specific measures
to contain unilateral power and an interesting paradoxical tendency
to simultaneously prize high conservatism with thumbing our noses
at authority. The incorporation of compulsory voting makes citizens
participate in their civic life so Australians know for sure the people have
decided the expression of their political will. We turn this into the modern
134

democracy sausage party and community fundraising event but we value
abiding by the law, maintaining social order, and people “having a fair go”.
Culturally, Australians endure the “tall poppy syndrome”—one doesn’t
want to grow too tall or they will get cut down to size. Much of this cultural
reality stems from a checks and balances approach that values equality
and no one getting “too big for their boots”.
Third, there is a big and prominent role for the public sector. Australians
did not feature a significant elite class nor the presence of a high number
of entrepreneurs, manufacturing, or philanthropic actors. It was a British
colonial outpost populated initially largely by convicts and rogues seeking
new opportunities and fresh starts far away from their old mother or
fatherlands who had often exiled them for one reason or another. In such
a setting, the public sector became a dominant force helping to create
Australian colonial society. Moreover the public service was instrumental
in forging the basic foundations of the federation and spawning the
massive infrastructure, defence, education, agricultural and justice
architecture and initiatives that marked out economic progress. This origin
story of the role of the public sector has remained unchanged over time
with Australians not only tolerant of the role of government, but often
demanding it to do its part in creating economic growth, employment
opportunities and government service delivery. According to The Economist
(2025), Australia features the biggest public sector workforce, adjusted
for population, in International Labour Organisation (ILO) data with
143 employees per 1000 people, equating to approximately 29% of
Australian workers.
Fourth, the role of place is significant for policymaking. The sheer
diversity of geographic biodiversity and cultural realities across the
vast continent of Australia is remarkable. What life is like for a citizen
in the North Queensland tourist mecca of Cairns is very different from
that in cosmopolitan Melbourne, remote communities in Alice Springs
or Kalgoorlie, or the regional realities of Launceston in Tasmania. Over
time, and in contrary movement to that of Canadian provincialism,
Australia’s states and territories have ceded their states rights for a more
unified national market and identity. Yet the institutional governance
fabric and the economic instruments of the Australian federation remain
wedded to deliberate calculations dedicated to establishing ongoing
135

“equality” across the states and territories through mechanisms such
as the Commonwealth Grants Commission. Furthermore, flirtation has
long persisted with regional governance institutions in attempts to meet
the needs and aspirations of highly dispersed populations across large
geographic distances (Brown 2001 and Brown 2007). Meanwhile, Australia
is home to persistent secessionist tendencies, especially from Western
Australia (Secession In Australia - MoAD History Stories, and Republic
of Western Australia: From secession to COVID, the west has always
charted its own course - ABC News, (Holbrook and Megarrity 2025).
While territorial parochialism remains alive and well—especially in the
realm of the Australian national religion of sport—Australians are sensitive
to both the uniqueness of their personal place as well as the unifying
forces of being singularly Australian. Trends emphasising place-based
policymaking continue to find modern expression in institutions such
as PLACE (Partnerships for Local Action and Community Empowerment).
Put together, these historical and foundational characteristics of
Australian policymaking and its public sector and political system suggest
attention be paid to its critical role and ongoing purpose and fit. Australia
is viewed as a mature liberal democracy (Emy and Hughes 1988) featuring
remarkably flexible and evolving democratic principles that remain hinged
to free and fair elections, adherence to the rule of law, engaged citizenry
through compulsory voting, and relatively inclusive society (Dunleavy et
al. 2024). Yet it still grapples with its historical and modern relationship
with Aboriginal and Torres Strait Islander peoples (Davis 2018; Davis 2015).
Assimilation and racism remain forces at play (Bargallie 2019) as does
complex relationships to multiculturalism and Australia’s current (and
future) status as an Asian nation.
Australia’s interpretations of responsible government and ministerial
responsibility have moved beyond a strict interpretation that it is only
the minister of the day to whom policymaking responsibility is owed.
The pragmatism of Australian policymaking style is likely to endure,
marking it out as particularly ripe in dynamic, adaptive capacity.
136

A (very) brief history of public
management and policy
Public management and policymaking have been shaped by various
theories and approaches over time. While this book does not purport
to offer a comprehensive overview of public management theory,
it nevertheless feels important to situate this work in the context
of its history.
Classical public administration
Classical Public Administration theory emerged in the late 19th
and early 20th centuries. It is often associated with the foundational
works and thoughts of scholars such as Woodrow Wilson, Max Weber,
and Frederick Taylor, who sought to bring about efficiency, predictability,
and standardized procedures in the management of public organizations.
The core principles and characteristics of Classical Public Administration
include:
•
Hierarchical Organization Structure: It is important to establish
a clear, hierarchical structure within organizations, where authority
and responsibilities are clearly defined, and there is a distinct chain
of command.
•
Division of Labor: Tasks should be specialised and overseen by people
with specific skills and expertise. By dividing work into specific tasks,
each employee becomes highly skilled in their particular area, leading
to increased efficiency and productivity.
•
Impersonality: Decisions and actions within the organization are
made based on established rules and procedures, rather than
personal preferences or relationships.
•
Merit-based Advancement: Employees should be selected and
promoted based on their abilities and performance, rather than
nepotism or patronage.
137

•
Formal Rules, Norms and Procedures: Clear, formal rules and
procedures should be the basis for governing operations. In addition,
authority within organizations should be grounded in legal statutes
and bureaucratic norms, rather than in traditional or charismatic forms
of leadership.
New Public Administration
New Public Administration was born out of the Minnowbrook Conference
in 1968, which was attended by a group of young public administration
scholars who gathered to discuss and propose a new direction for the field.
These scholars were concerned with the pressing social issues of the time
and advocated for a public administration that was more responsive to the
needs of society, more engaged with ethical issues, and more committed
to social equity. Key themes of New Public Administration include:
•
A focus on addressing social equity and justice.
•
The importance of bringing values and democracy into the
administration discourse.
•
A call for public administrators to be change agents who actively
work to improve society.
•
The recognition of the political nature of public administration.
New Public Management
New Public Management (NPM) emerged in the 1980s as a response to
criticisms of the inefficiencies of traditional public administration. NPM
shifted the focus towards efficiency, effectiveness, and the adoption
of private sector management practices within the public sector. It was
characterized by an emphasis on performance measurement, market-
based mechanisms, and customer service orientation. Scholars like
Christopher Hood played a significant role in shaping the NPM agenda.
Key principles underpinning NPM include:
•
Performance Measurement: Focus on results through setting clear,
measurable objectives and benchmarks.
138
