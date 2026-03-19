# Appendix A: Full YAML Agent Config

This is a complete, production-ready configuration for a revenue-generating agent.

    # config.yaml -- Revenue-Generating Agent Configuration
    #
    # Copy this file and customize for your use case.
    # All values have sensible defaults.
    
    agents:
      revenue-agent:
        # Model selection
        # Use 'sonnet' for content generation (smart, cost-effective)
        # Use 'haiku' for simple tasks (fast, cheap)
        # Use 'opus' for complex analysis (expensive, powerful)
        model: sonnet
        
        # Project directory for file operations
        projectPath: ~/my-agent-project
        
        # Agent identity and instructions
        identity:
          name: RevenueBot
          instructions: >
            You are a revenue-generating AI agent. Your primary goal is
            to create and distribute content that drives product sales.
            
            Daily targets:
            - 1 deep content piece (article, thread, or guide section)
            - 3 social media posts derived from the deep piece
            - 5 personalized outreach emails to ICP-matching leads
            - Check revenue dashboard and log results
            
            You measure success by: product sales, email signups,
            engagement metrics, and outreach reply rates.
            
            Rules:
            - Never produce filler content
            - Every piece must teach something actionable
            - Track what works and double down on it
            - If something is not generating results after 2 weeks, change it
        
        # Memory configuration
        memory:
          enabled: true
          maxMemories: 200
          injectionBudgetPercent: 20
          categories:
            - preference    # User and audience preferences
            - fact          # Verified data points
            - style         # Writing and communication patterns
            - context       # Situational awareness
            - skill         # Learned behaviors and optimizations
        
        # Available tools
        tools:
          - exec            # Run scripts, check data
          - webSearch       # Research topics, find trends
          - webResearch     # Deep-dive research
          - browser         # Screenshot, interact with web
          - remember        # Store new memories
          - recall          # Retrieve relevant memories
          - readFile        # Read project files
          - writeFile       # Create content files
          - message         # Send to channels
        
        # Think loop configuration
        thinkLoop:
          enabled: true
          intervalSeconds: 3600    # Run every hour
          goals:
            - "Create 1 distributable content piece per day"
            - "Publish content to configured channels"
            - "Review analytics and update strategy"
            - "Draft outreach emails for ICP-matching prospects"
    
    # Channel configuration
    channels:
      telegram:
        type: telegram
        token: YOUR_TELEGRAM_BOT_TOKEN
        allowedChats:
          - YOUR_CHAT_ID

---

## Customization Notes

**Model selection:** Start with 'sonnet' for everything. Add smart routing later when you understand your usage patterns.

**Memory categories:** Start with all five. Disable categories you do not use after 30 days of observation.

**Think loop interval:** 3600 seconds (1 hour) is a good default. Reduce to 1800 (30 min) for high-frequency content agents. Increase to 7200 (2 hours) to reduce API costs.

**Tools:** Only include tools your agent actually needs. Fewer tools = less confusion for the model = better performance.
