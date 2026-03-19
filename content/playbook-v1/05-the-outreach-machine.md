# Chapter 5: The Outreach Machine

---

Content brings people to you. Outreach brings you to them.

Chapter 4 built the flywheel that generates inbound interest. But inbound alone has a ceiling. The first 10 customers, the first 5 managed agent clients, the first marketplace developers — most of them will come from outreach, not from content.

This chapter builds the outreach machine: the system that identifies ideal customers, crafts sequences that earn responses, and uses your agent to automate the parts that should be automated — while keeping the parts that should be human, human.

---

## The Five ICP Personas

ICP means Ideal Customer Profile. Not "everyone who might be interested" — the specific people who are most likely to pay, with the least amount of convincing.

Each persona maps to a different revenue layer from Chapter 3. You do not need to target all five simultaneously. Pick the one that matches your current offering and go deep.

### Persona 1: The Overwhelmed Solopreneur

**Who:** Non-technical founders running solo businesses. Coaches, consultants, freelancers, course creators.

**Pain:** They spend 15+ hours per week on repetitive tasks (email, scheduling, content posting, client follow-up) that they know could be automated but do not know how.

**What they buy:** Managed AI Employee (Layer 2) — Starter or Business tier at $199-399/month.

**Where to find them:**
- LinkedIn: title contains "Founder" OR "CEO" + company size 1-10 + industry: Professional Services, Education, Marketing
- Twitter: follows @levelsio, @marclouv, @taborluke + bio contains "solopreneur" OR "indie" OR "founder"
- Communities: IndieHackers, r/solopreneur, Hacker News (Show HN threads)

**Trigger event:** They just complained publicly about being overwhelmed. They posted "I need to hire but cannot afford it." They shared a workflow that has more than 5 manual steps.

**Conversion path:** DM with specific automation suggestion based on their public content, then offer a 15-minute audit call, then propose a Starter Agent deployment.

### Persona 2: The AI-Curious Developer

**Who:** Software developers who have experimented with AI APIs but have not built a persistent, autonomous agent.

**Pain:** They built a chatbot but it forgets everything between sessions. They integrated an AI API but it is just a function call, not an agent. They want to build something real but the existing frameworks are either too complex or too limiting.

**What they buy:** Playbooks (Layer 1) at $19-49. Then the open-source runtime. Then cloud hosting (Layer 3) at $29-99/month when they want to deploy.

**Where to find them:**
- GitHub: contributors to AI/LLM repos, starred agent frameworks
- LinkedIn: title contains "Developer" OR "Engineer" + skills include "AI" OR "Machine Learning" OR "LLM"
- Twitter: follows AI-focused accounts, tweets about "building with" AI APIs
- Reddit: r/LocalLLaMA, r/MachineLearning, r/artificial

**Trigger event:** They just starred a competitor's repo. They posted a question about agent memory. They shared frustration with an existing framework.

**Conversion path:** Engage with their technical content authentically (not a sales pitch), share a relevant code snippet or config, mention the playbook when asked for resources.

### Persona 3: The Agency Owner

**Who:** Digital marketing or web development agency owners with 5-20 employees.

**Pain:** They see AI eating their margins. Clients are asking for AI capabilities. They need to offer AI services but do not have the in-house expertise to build them.

**What they buy:** Managed AI Employee (Layer 2) — Business or Executive tier at $399-799/month. Often for their own internal ops first, then as a white-label service for their clients.

**Where to find them:**
- LinkedIn: title contains "Agency Owner" OR "Managing Director" + company size 5-50 + industry: Marketing, IT Services, Consulting
- Conferences: local digital marketing meetups, MarTech events
- Clutch.co, Sortlist: browse agency listings, identify ones without AI capabilities

**Trigger event:** They lost a pitch to an agency that offered AI capabilities. They posted about AI disruption in their industry. They are hiring for an "AI specialist" role.

**Conversion path:** Connect on LinkedIn with a relevant industry insight, share a case study of an agency that added AI services, offer a white-label partnership proposal.

### Persona 4: The Technical Founder

**Who:** Founders building AI-adjacent products who need agent infrastructure but do not want to build it from scratch.

**Pain:** They are spending months building agent infrastructure when they should be building their product. They need memory, tool integration, and multi-channel communication — and they need it yesterday.

**What they buy:** Cloud hosting (Layer 3) at $49-99/month. Marketplace skills (Layer 4). Eventually, bot-to-bot commerce capabilities (Layer 5).

**Where to find them:**
- LinkedIn: title contains "CTO" OR "Technical Founder" + company size 1-10 + recently founded
- GitHub: repos with agent-related keywords but no persistent memory implementation
- Y Combinator: current batch companies with AI focus (check batch announcements)
- Product Hunt: recently launched AI tools

**Trigger event:** They just launched an MVP without agent capabilities. They posted about struggling with agent memory. They commented on a thread about agent frameworks.

**Conversion path:** Technical credibility first — share architecture insights, contribute to their discussions, offer to review their approach. Then introduce the runtime as a faster path to their goals.


### Persona 5: The Local Market Business Owner

**Who:** Small businesses with 1-50 employees in your local market. Every geography has businesses that haven't adopted AI yet.

**Pain:** They see larger competitors using AI and feel left behind. They want to automate customer communications but the tools feel too complex or too English-centric. Compliance deadlines keep stacking up.

**What they buy:** Managed AI Employee with local language support. Localized agent deployments. Compliance automation relevant to their market.

**Where to find them:**
- LinkedIn: location filter for your region + title contains "Director" OR "Owner" + company size 1-50
- Local business communities, industry-specific Facebook groups, regional Slack communities
- Accounting firm partnerships: accountants serving small businesses are the best referral channel

**Trigger event:** A compliance deadline is approaching. They posted about feeling overwhelmed by new regulations. They asked about AI tools in their local language.

**Conversion path:** Local-language content (rare in the AI space — most content is English-only). Free compliance checklist as lead magnet. Then managed agent deployment for full automation. Price in local currency if possible for maximum conversion.


## The Outreach Sequences

Cold outreach gets a bad reputation because most of it is terrible. Generic, self-centered messages that start with "Hi [NAME], I noticed your company..." and end with "Can we hop on a call?"

The sequences below are different because they follow one rule: **lead with value, not with an ask.**

### Sequence 1: The Developer Cold Email (3 emails)

**Email 1 — Day 0: The Value Lead**

Subject: Thought on your [specific project/post]

Body:
Hi [Name],

Saw your [post about agent memory / GitHub repo / tweet about X]. Interesting approach — particularly the way you handled [specific technical detail].

I ran into a similar problem building persistent memory for our agent runtime. Found that a 3-layer approach (episodic + semantic + procedural) with a 20% injection cap solved the context overflow issue. Happy to share the YAML config if useful.

[Your name]

**Email 2 — Day 3: The Resource Share**

Subject: Config I mentioned

Body:
Hi [Name],

Promised the config — here it is: [link to gist or appendix]

The key insight was the memory decay function — confidence scores drop 0.05 per week for observations, faster for corrections. Keeps the memory relevant without manual pruning.

There is a full breakdown in our architecture guide if you want the deep dive: [link to article or playbook preview]

[Your name]

**Email 3 — Day 7: The Soft Close**

Subject: Quick question

Body:
Hi [Name],

Curious — did the config help? If you are building a persistent agent, we have a few deployment options (self-hosted or cloud-hosted) that might save you some infrastructure time.

No pressure — happy to jump on a 15-minute call if you want to talk architecture. Or just reply here.

[Your name]

### Sequence 2: The Solopreneur Cold Email (3 emails)

**Email 1 — Day 0: The Observation**

Subject: Your [specific workflow] could be 90% automated

Body:
Hi [Name],

I follow your work on [platform]. Noticed you [specific observation — e.g., post content every day, respond to every DM manually, send weekly newsletters by hand].

We built an AI agent that handles [specific task] autonomously — including remembering context from past interactions. One of our clients went from 15 hours/week on [task] to 2 hours.

Thought it might be relevant for you. Happy to show you a 5-minute demo if you are curious.

[Your name]

**Email 2 — Day 4: The Case Study**

Subject: How [similar person] saved 13 hours/week

Body:
Hi [Name],

Quick case study that might be relevant:

[Similar person/business] was spending 15+ hours per week on [specific task]. We deployed a managed AI agent that handles [list of automated tasks]. After setup, their weekly time on [task] dropped to 2 hours.

The agent costs $199/month. That is roughly $3/hour for the time it saves — compared to a virtual assistant at $15-25/hour.

Worth exploring? I can share the exact setup we used.

[Your name]

**Email 3 — Day 8: The Breakup**

Subject: Last one from me

Body:
Hi [Name],

I will not keep emailing — just wanted to leave this resource in case it is useful later: [link to relevant playbook chapter or case study].

If you ever want to explore AI automation for [their specific workflow], reply to this email. The offer for a free audit call stays open.

[Your name]

### Sequence 3: The Agency Partnership Email (3 emails)

**Email 1 — Day 0: The Industry Insight**

Subject: AI capability gap in [their industry]

Body:
Hi [Name],

I have been researching [their industry] agencies and noticed an interesting pattern: agencies that offer AI capabilities are winning 40% more pitches than those that do not (based on a sample of 50 recent RFPs on [platform]).

[Their agency name] has strong [specific strength — design, development, strategy]. Adding AI agent deployment as a service line could be a significant differentiator.

We offer white-label managed AI agents specifically for agencies — your branding, your client relationship, our infrastructure. Margins are 60-70% for the agency on every deployment.

Interested in seeing how other agencies have added this?

[Your name]

**Email 2 — Day 4: The Revenue Math**

Subject: The numbers on AI agent upsells

Body:
Hi [Name],

Following up with the revenue math I mentioned:

Typical agency AI upsell: $399-799/month per client
Your cost: $199/month (our managed infrastructure)
Your margin: $200-600/month per client

If you add this to 5 existing clients: $1,000-3,000/month in recurring revenue with near-zero additional overhead.

We handle deployment, maintenance, and updates. You handle the client relationship and the upsell conversation.

Happy to walk through a live demo of what the agent does for your industry.

[Your name]

**Email 3 — Day 8: The Pilot Offer**

Subject: Free pilot for [agency name]

Body:
Hi [Name],

I will make this simple: we will deploy a managed AI agent for [agency name]'s internal operations at no cost for 30 days.

If it saves your team time, we discuss a white-label partnership for your clients. If it does not, no hard feelings.

The worst outcome is your team gets a free AI assistant for a month. The best outcome is a new revenue line for your agency.

Worth a 15-minute setup call?

[Your name]

---

## Email Infrastructure

Before you send a single cold email, set up the infrastructure correctly. Sending from your main domain without warm-up is the fastest way to land in spam.

### Domain Setup

1. **Buy a separate domain** for outreach. If your main domain is reefagent.me, buy reefagent.io or reefagent.co for cold emails. This protects your main domain's reputation.

2. **Set up SPF, DKIM, and DMARC** on the outreach domain. Non-negotiable. Without these, most email providers will reject or spam your messages.

3. **Warm up the domain** for 2-3 weeks before sending cold emails. Use a warm-up service (Lemwarm, Warmbox) that gradually increases send volume and generates positive engagement signals.

4. **Limit volume** to 30-50 emails per day per sending address. Going higher risks triggering spam filters.

### Tools

For cold email at the scale we are discussing (30-50 emails/day), you do not need an enterprise tool. Options:

- **Lemlist:** $59/month. Built for cold outreach. Good deliverability tools.
- **Instantly.ai:** $37/month. Unlimited accounts, good warm-up.
- **Manual + your agent:** Free. Your agent drafts emails, you send from a standard email client. Lower volume but higher personalization.

The agent approach works well for the first 50 prospects. Beyond that, a dedicated tool makes sense.

---

## LinkedIn Outreach

LinkedIn outreach has different rules than email. The platform's algorithm actively detects and penalizes mass outreach behavior. The key is to be genuine, slow, and specific.

### The LinkedIn Sequence

**Day 0: Connect** — Send a personalized connection request. NO sales pitch in the connect note. Just a genuine reason for connecting: "Hi [Name], saw your post about [topic]. Building in the same space — would love to connect."

**Day 1-3: Engage** — Like and comment on 2-3 of their recent posts. Genuine comments only. "Great point about X. We found the same thing when building Y." Not "Love this! Check out my product."

**Day 4: DM with value** — Send a direct message that offers something specific: a relevant article, a tool recommendation, a config file, a case study. NOT a pitch.

**Day 7: The soft mention** — In a follow-up DM referencing something they posted or said, naturally mention your offering: "By the way, we wrote a detailed breakdown of this exact problem in our playbook. Happy to send a preview chapter if it is useful."

**Day 10+: Relationship** — Continue engaging with their content. The conversion may happen in week 1 or month 6. LinkedIn outreach is a long game.

### Volume Limits

LinkedIn enforces connection request limits:
- New accounts: 50-80 connection requests per week
- Established accounts (500+ connections): 100-150 per week
- With Sales Navigator: up to 200 per week

Stay well under these limits. Getting your account restricted kills all future outreach from that profile.

---

## Your Agent's Role in Outreach

Your agent can automate the research and drafting phases of outreach while keeping the human touch where it matters.

### What the agent automates:
- **Prospect research:** Scanning LinkedIn profiles, GitHub repos, and Twitter feeds to find trigger events
- **Email drafting:** Generating personalized first drafts based on prospect data and successful past templates
- **Follow-up scheduling:** Tracking which prospects are in which stage of the sequence
- **Engagement tracking:** Monitoring open rates, reply rates, and conversion rates per sequence
- **CRM-style memory:** Storing all prospect interactions in episodic memory for context in future conversations

### What stays human:
- **Final review of emails** before sending (especially the first few weeks until you trust the agent's tone)
- **All LinkedIn DMs** — LinkedIn can detect automated messages and will restrict your account
- **Sales calls** — the agent prepares notes, you have the conversation
- **Relationship building** — genuine engagement cannot be faked

### The Ideal Split

70% agent (research, drafting, scheduling, tracking)
30% human (review, personal touch, calls, relationship)

As trust builds, the split can move to 80/20. But never 100/0. Cold outreach that feels automated fails. The human touch in the final 20% is what makes the other 80% effective.

---

## Metrics That Matter

Track these weekly. Your agent should store them in episodic memory and report trends.

**Email metrics:**
- Open rate target: 50%+ (cold email with good subject lines)
- Reply rate target: 10-15% (positive and negative combined)
- Meeting booked rate: 3-5% of emails sent
- Cost per meeting: total outreach cost / meetings booked

**LinkedIn metrics:**
- Connection acceptance rate target: 30-50%
- DM response rate target: 15-25%
- Content engagement rate: track which posts generate inbound DMs

**Pipeline metrics:**
- Prospects contacted this week
- Prospects in active conversation
- Meetings booked this week
- Proposals sent this week
- Deals closed this month

The most important metric: **Revenue per outreach hour.** If you spend 5 hours per week on outreach and close one $199/month managed client, your outreach ROI is $199 per 5 hours = $39.80/hour. That number should increase as your sequences improve and your agent handles more of the research and drafting.

---

## Exercise: Build Your First Outreach List

**Step 1:** Choose one ICP persona from the five above. The one closest to your current offering.

**Step 2:** Find 20 prospects that match the persona. Use LinkedIn search, GitHub, Twitter, or the filters in Appendix D.

**Step 3:** Research each prospect for 5 minutes. Find one specific, relevant observation about their work.

**Step 4:** Draft email 1 for each prospect using the appropriate sequence template. Personalize the first two sentences.

**Step 5:** Send 5 per day for 4 days. Track open rates and replies.

**Step 6:** Evaluate after one week. Which prospects responded? What did they respond to? Feed these insights back into your agent's procedural memory.

Twenty targeted outreach emails, sent over one week, with genuine personalization. That is the minimum viable outreach machine. Chapter 6 shows you how the revenue from these efforts feeds back into the self-funding loop.

---

*Next: Chapter 6 — The Self-Funding Loop*


---

## The Follow-Up System

Most outreach fails not because the initial message was bad, but because there was no follow-up. Research consistently shows that 80% of sales require at least 5 follow-up contacts, but 44% of salespeople give up after one attempt.

Your agent solves this by automating follow-up tracking while keeping the messages personal.

### The Follow-Up Cadence

After the initial 3-email sequence (Day 0, Day 3-4, Day 7-8):

**Day 14:** If no response to the sequence, move to "warm nurture" — add them to your newsletter list (with permission), engage with their social content, share relevant resources.

**Day 30:** "The Check-In." A brief, friendly email: "Hi [Name], shared that config a month ago — curious if you ended up using it. We just published a new case study on [relevant topic] that might be useful: [link]"

**Day 60:** "The Update." Share a significant milestone or result: "Hi [Name], quick update — our managed agents just hit [milestone]. Happy to share how we got there if you are ever looking at agent deployment."

**Day 90:** "The Re-engage or Release." Final outreach attempt: "Hi [Name], I will stop reaching out unless I hear otherwise. If agent deployment ever becomes a priority, you know where to find me. Meanwhile, here is the latest from our work: [link to recent content]"

After Day 90 with no response, move the prospect to a "dormant" list. They may circle back in 6-12 months when their situation changes. Your agent should log all interactions in episodic memory so that if they do reach out later, you have full context.

### Tracking Follow-Ups in Agent Memory

Your agent should maintain a simple pipeline in its memory:

**Active prospects:** Responded, conversation ongoing. Highest priority.
**Sequence in progress:** Sent email 1 or 2, waiting for response. Check daily.
**Warm nurture:** Completed sequence with no response. Engage socially, send monthly resources.
**Dormant:** 90+ days no response. Monitor for trigger events only.

Each prospect should have an episodic memory entry with: name, company, ICP persona, sequence stage, all emails sent/received, social interactions, and next action date.

This is CRM functionality built from agent memory — no additional tool required. The agent that tracks this in memory becomes more valuable with every outreach cycle because it builds pattern recognition about what types of prospects respond to what types of messages.

---

## Outreach at Scale: When to Add Tools

The manual outreach approach (Chapter 5 core) works up to about 50-100 prospects per month. Beyond that, you need tooling:

**50-100 prospects/month:** Manual with agent drafting. Your agent researches prospects and drafts emails. You review and send from your email client.

**100-300 prospects/month:** Semi-automated. Use Lemlist or Instantly.ai for sending. Your agent drafts personalized first lines and loads them into the tool. You review batches rather than individual emails.

**300+ prospects/month:** Fully tooled. Your agent integrates directly with the email sending tool via API. It drafts, loads, and monitors autonomously. You review performance metrics weekly and adjust strategy monthly.

The transition from manual to tooled should happen only after you have validated your sequences at the manual stage. Scaling bad outreach faster just means annoying more people faster.

---

## The Warm Introduction Play

Cold outreach is effective but slow. The highest-converting outreach channel is warm introductions — someone who already knows both you and the prospect makes the connection.

Your agent cannot generate warm introductions directly. But it can identify warm introduction paths:

1. Scan your LinkedIn connections for mutual connections with target prospects
2. Identify which of your existing customers know your target prospects
3. Draft introduction request templates for your warm connectors
4. Track which warm connectors have the highest introduction-to-meeting conversion rate

A warm introduction converts to a meeting at 40-60% rate versus 3-5% for cold email. Five warm introductions per month may generate more pipeline than 200 cold emails.

The agent's role: find the paths. Your role: ask for the introductions. The human touch in requesting warm introductions is non-negotiable — automated introduction requests destroy relationships.

