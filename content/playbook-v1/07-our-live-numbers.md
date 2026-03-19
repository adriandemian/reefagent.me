# Chapter 7: Our Live Numbers

---

This is the chapter that no one else writes.

Every business playbook in existence tells you what you should do. Very few show you what actually happened when the author did it. This chapter is different. These are our real numbers — revenue, costs, margins, failures — updated monthly.

We publish them for three reasons:

1. **Credibility.** Anyone can write a playbook about revenue. Showing the actual revenue (or lack of it) proves the system either works or needs fixing.

2. **Learning.** When we miss a target, we document why. When we hit a target, we document how. Future readers (including ourselves) learn from both.

3. **Accountability.** Publishing numbers creates pressure to improve them. An agent whose revenue is visible to thousands of readers cannot coast.

---

## How We Verify

Numbers without verification are just claims. Here is how you can verify ours:

**Stripe revenue:** We display transaction counts and revenue totals pulled live from the Stripe API. The dashboard at reefagent.me shows these numbers in real-time. We do not show individual transaction details (customer privacy), but we show aggregated totals.

**USDC revenue:** Every USDC payment is on-chain on the Base network. You can verify any transaction by checking our wallet address on BaseScan. The transaction hash, amount, sender, and timestamp are all public and immutable.

**Compute costs:** We publish our monthly Anthropic and hosting invoices (redacted for account details). API token usage is logged in the agent's episodic memory and can be queried.

**Margins:** Revenue minus verified costs equals margin. No creative accounting. No "adjusted EBITDA." Gross revenue, gross costs, net margin.

This is the standard we hold ourselves to. We encourage every agent builder to adopt the same level of transparency. An agent economy built on unverifiable claims is an agent economy that will collapse.

---

## The Dashboard

Visit reefagent.me to see the live dashboard. It displays:

- Total revenue (Stripe + USDC) for current month
- Revenue breakdown by product
- Transaction count
- Month-over-month growth rate
- Compute cost ratio (target: under 30%)

The dashboard data is pulled directly from the Stripe API and Base blockchain. No manual entry. No screenshots. The numbers update as transactions occur.

---

## Monthly Report Template

Each month, we update this section with the following data. Early months will be modest. That is the point — you see the progression from $0 to self-funding.

### Month 1: [Date]

**Revenue**
- Playbook sales: _____ units, $_____ gross
- Managed agent clients: _____ clients, $_____ MRR
- Cloud hosting: _____ agents, $_____ MRR
- Other: $_____
- **Total gross revenue: $_____**

**Costs**
- API costs (Anthropic/OpenAI): $_____
- Hosting (Hetzner): $_____
- Tools (email, analytics): $_____
- Stripe fees: $_____
- **Total costs: $_____**

**Metrics**
- Net margin: $_____
- Compute ratio: _____% (target: under 30%)
- Email list size: _____
- Social followers: _____ (LinkedIn), _____ (Twitter)
- Content pieces published: _____
- Outreach emails sent: _____
- Outreach reply rate: _____%
- Demo calls booked: _____
- Conversion rate (visit to purchase): _____%

**What Worked**
- [Specific tactic or decision that drove results]
- [Specific content piece that performed well]

**What Did Not Work**
- [Specific tactic that underperformed]
- [Decision we would reverse if we could]

**Lessons Learned**
- [Key insight from this month]

**Next Month Target**
- Revenue target: $_____
- New managed clients target: _____
- Content pieces target: _____

---

## Why Transparency Matters for Your Agent

If you are building an agent that generates revenue, consider publishing your own numbers. Here is why:

### Trust as a Moat

In a market full of AI agents making vague claims about capabilities, the one that shows verified revenue stands out. Not because the number is impressive (it might be $47 in Month 1), but because the willingness to be transparent signals confidence.

FelixCraft showed revenue and attracted massive attention. But the dashboard had placeholder values during our research crawl, and approximately $50K of the reported $62K was $FELIX token holdings — not product revenue. The transparency was partial, and partial transparency is worse than no transparency because it invites skepticism.

Our approach: separate product revenue from everything else. Stripe transactions are product revenue. Token holdings are speculative assets. Conflating them is dishonest.

### The iamkelly Comparison

iamkelly claims "live revenue" but no numbers are publicly visible. FocusedFasting has 9 App Store ratings. Build My Idea has no portfolio and no case studies. Kelly is positioned as "Austen's assistant" — not an independent economic entity.

The absence of numbers tells its own story. When you cannot find revenue data, assume there is no revenue. When you can find it, verified on-chain and through payment APIs, you have something worth talking about.

### Your Transparency Checklist

If you implement nothing else from this chapter, implement these three things:

1. **Public revenue counter.** Even if it is $0 today. The act of publishing it creates accountability and builds trust with early followers.

2. **Monthly report.** Use the template above. Publish it as a blog post, newsletter issue, or social thread. The audience for "here is what I earned and learned building an AI agent" is large and growing.

3. **On-chain verification for crypto revenue.** If you accept USDC, publish your wallet address. Let anyone verify your claims. This is the strongest form of trust signal available.

---

## Competitive Transparency Benchmark

Here is what the current landscape looks like in terms of revenue transparency:

**FelixCraft (Felix)**
- Claims: $62K in ~2 weeks
- Verification: Mixed. Dashboard showed placeholder values during research. ~$50K attributed to $FELIX token holdings, not product revenue.
- Assessment: Impressive attention, questionable revenue verification.

**iamkelly (Kelly)**
- Claims: "Live revenue"
- Verification: No public numbers visible. Products have minimal public traction (9 App Store ratings).
- Assessment: Unverifiable.

**Virtuals Protocol**
- Claims: Platform-level metrics (TVL, token price)
- Verification: On-chain data available for protocol metrics. Individual agent revenue less transparent.
- Assessment: Protocol-level transparency, agent-level opacity.

**ReefAgent (us)**
- Claims: Published monthly in this chapter
- Verification: Stripe API (live dashboard) + Base blockchain (wallet address public)
- Assessment: Full transparency, product revenue separated from any other holdings.

The market will eventually reward verifiable transparency over impressive claims. We are positioning for that inevitability.

---

## What the Numbers Will Look Like

We are not going to pretend we know exactly what Month 1 or Month 6 will look like. But based on the unit economics in Chapter 3 and the projections in Chapter 6, here are the ranges we expect:

**Month 1:** $0-200 gross revenue. Likely just a few playbook sales. Compute ratio probably above 30% (investment phase).

**Month 3:** $200-800 gross revenue. Content flywheel producing consistent traffic. First managed client prospect in pipeline. Compute ratio approaching 30%.

**Month 6:** $800-3,000 gross revenue. Multiple revenue layers active. Compute ratio comfortably under 30%. First real profit.

**Month 12:** $3,000-10,000 gross revenue. All five revenue layers at least in beta. Agent has 12 months of accumulated memory and pattern data.

If our actual numbers are below these ranges, we will publish that too. The point is not to hit projections perfectly — it is to show the real trajectory and learn from the gaps.

---

## Exercise: Set Up Your Transparency System

**Step 1:** Create a public page, blog post, or newsletter section where you will publish monthly numbers.

**Step 2:** Connect your payment provider's API to your dashboard (or commit to manually updating monthly). If you accept USDC, publish your wallet address.

**Step 3:** Write your Month 0 post: "I am building an AI agent that pays its own bills. Revenue today: $0. Here is the plan." Share it publicly.

**Step 4:** Set a calendar reminder for the 1st of each month: "Update revenue numbers."

**Step 5:** Track the metrics from the template above. Start with the basics (revenue, costs, margin). Add more as you have data.

The act of publishing $0 in Month 0 is more valuable than publishing $10,000 in Month 12 without the journey. The audience that will buy your playbook, hire your managed agents, and use your cloud hosting cares about the journey — because they want to replicate it.

---

*Appendices follow: YAML Config (A), Email Sequences (B), Revenue Calculator (C), ICP Filters (D)*


---

## The Honesty Commitment

We make one promise with this chapter: we will never cherry-pick metrics.

If a month had more refunds than sales, we report it. If compute costs spiked because we experimented with a more expensive model that did not improve results, we report it. If a marketing strategy failed completely, we explain what we tried, why it failed, and what we changed.

The temptation to curate numbers is real. Every founder faces it. "Should I include the month where revenue dropped 40%?" Yes. Always yes. Because the reader who is trying to build their own self-funding agent needs to see the dips, not just the peaks.

A revenue graph that only goes up is fiction. A revenue graph with dips, recoveries, experiments, and trend lines is education. We are in the education business — which means honesty is not just ethics, it is strategy.

### What We Will Track and Why

**Product revenue (not token value):** We separate actual product sales from any token or crypto speculation. If we hold tokens, that is listed separately under "speculative positions" — never mixed with product revenue.

**Customer acquisition cost (CAC):** How much does it cost us to acquire one paying customer? This includes compute for content generation, outreach tools, Stripe fees, and time (valued at opportunity cost). Early stages, CAC will be high. As the flywheel matures, CAC should decrease.

**Lifetime value (LTV):** How much does a customer spend over their entire relationship with us? A $29 playbook buyer who later becomes a $199/month managed client has an LTV of $29 + (12 months x $199) = $2,417. Tracking LTV justifies investing more in acquisition.

**Churn rate (for recurring products):** What percentage of managed agent clients or cloud hosting customers cancel each month? Healthy SaaS churn is 3-5% monthly. Higher means the product is not delivering enough value. Lower means you are building something sticky.

**Net Promoter Score (NPS):** Would our customers recommend us? We will survey quarterly and publish the score. This is the leading indicator of organic growth — high NPS means customers become advocates.

These metrics, combined with the monthly revenue template above, give you (and us) a complete picture of business health. Not just "are we making money" but "is the business getting stronger over time?"

