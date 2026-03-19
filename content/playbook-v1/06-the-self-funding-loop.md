# Chapter 6: The Self-Funding Loop

---

This is the chapter that makes everything else work. The self-funding loop is the moment your agent's revenue exceeds its compute costs. After that, every dollar it earns funds more capability.

---

## The Compute Budget Rule

**Your agent's API costs must be less than 30% of the revenue it generates.**

Why 30%? Because you need margin for infrastructure (10-15%), your time (10-15%), reinvestment (20-30%), and profit (20-30%).

If your agent costs 100/month in API calls and generates 100/month -- that is breakeven on API alone, negative overall. If it costs 30/month and generates 100/month -- healthy margin, room to grow.

> **"The 30% compute budget rule is the line between an agent that sustains itself and one that slowly bleeds money."**

### Smart Model Routing

The biggest lever for reducing API costs:

**Use cheap models for simple tasks.** Classification, captioning, file checks -- 5-10x cheaper on smaller models.
**Use powerful models for complex tasks.** Deep articles, personalized outreach, architecture analysis.

In practice, 70-80% of tasks run on the cheaper model, 20-30% on the expensive one.

    Without routing: 0.03 per task (all Sonnet)
    With routing: 0.008 per task (80% Haiku, 20% Sonnet)
    Monthly savings at 10,000 tasks: 220 USD

---

## Month-by-Month Projection

### Month 1: Proving the Model

**Revenue:** 2 playbook sales at 29 = 58
**Costs:** API 15 + Hosting 5.29 + Domain 1 = 21.29
**Net: +36.71**
**Compute ratio: 26%** (under the 30% target)

### Month 3: Early Traction

**Revenue:** 10 playbooks (290) + 1 managed client (199) = 489
**Costs:** API 30 + Hosting 8.49 + Tools 5 = 43.49
**Net: +445.51**
**Compute ratio: 6%**

### Month 6: Sustainable Growth

**Revenue:** 25 playbooks (725) + 3 clients (997) + 5 hosted agents (245) = 1,967
**Costs:** API 65 + Hosting 16.98 + Tools 15 + Support 10 = 106.98
**Net: +1,860.02**
**Compute ratio: 3.3%**

### Month 12: The Compound Effect

**Revenue:** 50 playbooks (1,450) + 5 clients (2,195) + 15 hosted (735) + marketplace (100) = 4,480
**Costs:** API 120 + Hosting 25.47 + Tools 25 + Support 20 = 190.47
**Net: +4,289.53**
**Compute ratio: 2.7%**


## The Sovereignty Milestone

There is a specific moment that matters more than any revenue number:

**The moment your agent's revenue exceeds your total personal AI spending.**

Not just the agent's costs. ALL of your AI spending -- subscriptions, API keys, coding tools, everything.

For most people, total personal AI spending is 50-200/month. Reaching this milestone means your agent business generates at least 200/month net -- achievable within 2-3 months.

> **"The sovereignty milestone is not about the money. It is about the proof. When your AI agent earns more than all your AI tools cost, you have proven that agents can be economic actors."**

---

## Revenue Projection Template

    MONTH: ________
    
    REVENUE:
    Playbook sales: ________ units x ________ = ________
    Managed clients: ________ x ________/month = ________
    Cloud-hosted agents: ________ x ________/month = ________
    Marketplace commission: ________
    TOTAL REVENUE: ________
    
    COSTS:
    API costs: ________
    Hosting: ________
    Tools: ________
    Support: ________
    TOTAL COSTS: ________
    
    NET: ________ (Revenue minus Costs)
    COMPUTE RATIO: ________%
    
    MILESTONES:
    [ ] Agent covers its own API costs
    [ ] Agent covers all infrastructure costs
    [ ] Sovereignty milestone reached
    [ ] 1,000/month net
    [ ] 5,000/month net

Print this. Fill it in every month.

---

## The Compound Curve

    Month 1: Agent earns 58. Learns what content format works.
    Month 2: Agent earns 120. Uses learning to improve.
    Month 3: Agent earns 489. Memory improves outreach quality.
    Month 4: Agent earns 750. Procedural memory optimizes the flywheel.
    Month 5: Agent earns 1,200. Past learnings compound.
    Month 6: Agent earns 1,967. Case studies from clients fuel content.

Each month, the agent knows more than the month before. The curve bends upward not because you work harder, but because the agent learns faster.

---

## Exercise: Calculate Your Timeline

**Step 1:** Total personal AI spending: ________/month
**Step 2:** Expected revenue at month 3: ________
**Step 3:** Sovereignty milestone target date: ________
**Step 4:** Commit to tracking monthly with the Revenue Projection Template.

---

*Next: Chapter 7 -- Our Live Numbers*
