export const siteConfig = {
  name: "EdisonTKP",
  tagline: "AI-Native Engineering & Agent Automation",
  description: "Custom AI agent systems by EdisonTKP to automate support, sales, ops, and data workflows.",
  url: "https://aiagent.edisontkp.com",
  email: "hello@edisontkp.com",
}

export const heroContent = {
  headline: "AI Agents That Actually Run Your Business",
  subheadline: "Custom AI agent systems by EdisonTKP to automate support, sales, ops, and data workflows.",
  bullets: [
    "AI-native engineering, not just a chatbot",
    "Custom workflows on your data and systems",
    "From quick pilot to enterprise rollout"
  ],
  primaryCta: "Book a Discovery Call",
  secondaryCta: "Download Service Package PDF",
  trustLine: "Built for founders, SMEs, and enterprise teams."
}

export const whyAgentsContent = {
  title: "Turn Manual Work into Autonomous Workflows",
  description: "AI agents are multi-step, tool-connected systems that handle tasks end-to-end — not just simple chatbots. They can access your data, use your tools, and complete workflows autonomously.",
  features: [
    {
      title: "Customer Support",
      description: "Auto-answer FAQs, policies, and product questions from your own docs.",
      icon: "headset"
    },
    {
      title: "Sales & Leads",
      description: "Qualify leads, route to sales, draft proposals, and follow up.",
      icon: "trending-up"
    },
    {
      title: "Internal Ops",
      description: "Automate reports, approvals, and data entry from email, forms, and chats.",
      icon: "settings"
    },
    {
      title: "Data Intelligence",
      description: "Ask questions in natural language over your database and documents.",
      icon: "database"
    }
  ]
}

export const packages = [
  {
    id: "lite",
    tier: "Starter",
    name: "AI Agent Lite",
    price: "From RM3,500",
    forWho: "Individuals, freelancers, small teams",
    includes: [
      "1 custom agent (support/sales/admin)",
      "Basic prompt logic + 1 workflow (email, WhatsApp, or webchat)",
      "1 integration (Google Sheets, Gmail, Notion or a simple CRM)",
      "Basic analytics",
      "7 days post-launch support"
    ],
    highlighted: false
  },
  {
    id: "pro-starter",
    tier: "Starter",
    name: "AI Agent Pro Starter",
    price: "From RM8,000",
    forWho: "Growing teams and SMEs",
    includes: [
      "1 advanced agent with multi-step logic",
      "Basic RAG on up to 50 documents",
      "Database-ready (PostgreSQL/MySQL)",
      "Custom response tone/persona",
      "1-month tuning & support"
    ],
    highlighted: false
  },
  {
    id: "business-auto",
    tier: "Business",
    name: "Business Automation Agent Pack",
    price: "From RM12,000",
    forWho: "SMEs, property management, service businesses",
    includes: [
      "2–3 agents (Ops, Support, Sales combo)",
      "RAG knowledge base",
      "Integration with PostgreSQL or existing systems",
      "Lead capture and reporting workflows",
      "Simple dashboard (usage & logs)",
      "1 month support"
    ],
    highlighted: false
  },
  {
    id: "sales-cs",
    tier: "Business",
    name: "Sales & Customer Service Agent Bundle",
    price: "From RM18,000",
    forWho: "SMEs with sales-focused operations",
    includes: [
      "Sales qualification agent",
      "Customer support agent",
      "Proposal/quotation generator",
      "CRM integration (e.g., HubSpot/Zoho)",
      "3 key workflows automated",
      "2 months support"
    ],
    highlighted: false
  },
  {
    id: "enterprise",
    tier: "Enterprise",
    name: "Enterprise Agent Suite",
    price: "From RM35,000",
    forWho: "Corporates and larger teams",
    includes: [
      "5–7 agents across departments",
      "Complex workflow chain",
      "Data connectors (SQL, S3-style storage, Redis)",
      "Full RAG architecture",
      "Logging, monitoring, and error alerts",
      "3 months optimization & support"
    ],
    highlighted: false
  },
  {
    id: "pilot",
    tier: "Special",
    name: "AI Agent Pilot",
    price: "RM6,800",
    duration: "2–3 weeks",
    forWho: "Anyone wanting to start with a focused proof-of-concept",
    includes: [
      "1 core agent",
      "1 real workflow on real data",
      "Quick integration and testing",
      "Optimization sprint",
      "Clear roadmap and next steps"
    ],
    highlighted: true,
    badge: "Most Popular"
  }
]

export const howItWorksSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "Understand your workflows and pain points."
  },
  {
    step: 2,
    title: "Design & Prototype",
    description: "Draft the agent workflow and create a quick prototype on your real data."
  },
  {
    step: 3,
    title: "Build & Integrate",
    description: "Implement the agent, connect tools, and test with your team."
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description: "Monitor usage, tune prompts, and add more workflows over time."
  }
]

export const useCases = [
  {
    industry: "Insurance & Takaful",
    description: "Underwriting support, claims triage, policy Q&A.",
    icon: "shield-check"
  },
  {
    industry: "Property Management",
    description: "Tenant requests, maintenance, rent reminders.",
    icon: "building-2"
  },
  {
    industry: "Education & Training",
    description: "Student assistant, course Q&A, content helper.",
    icon: "graduation-cap"
  },
  {
    industry: "SME Ops",
    description: "Invoicing, HR onboarding, SOP automation, AI email assistant.",
    icon: "briefcase"
  },
  {
    industry: "E-commerce",
    description: "Order tracking, product recommendations, customer support.",
    icon: "shopping-cart"
  },
  {
    industry: "Healthcare",
    description: "Appointment scheduling, patient FAQ, document processing.",
    icon: "heart-pulse"
  }
]

export const aboutContent = {
  title: "About EdisonTKP",
  description: "EdisonTKP is an AI-native engineer and architect with hands-on experience in AI agents, RAG systems, and automation across insurance, fintech, and enterprise environments. The focus is on practical, deployable AI that plugs into real business systems — not demos that never ship.",
  highlights: [
    "Full-stack AI-native architecture",
    "Hands-on with agents, RAG, and vector DBs",
    "Comfortable with compliance-heavy environments"
  ]
}

export const faqs = [
  {
    question: "What's the difference between an AI agent and a normal chatbot?",
    answer: "A normal chatbot follows scripted responses or simple intent matching. An AI agent can reason, access tools, query databases, and complete multi-step workflows autonomously. Think of it as the difference between a FAQ page and an actual assistant who can take action."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope. A focused pilot (AI Agent Pilot) takes 2–3 weeks. A full production agent system typically takes 4–8 weeks depending on integrations and complexity. Enterprise deployments may take longer."
  },
  {
    question: "Do you work with our existing tools and cloud?",
    answer: "Yes. Solutions are tailored to your existing stack — whether that's AWS, GCP, Azure, or on-prem. Common integrations include PostgreSQL, MySQL, CRMs like HubSpot or Zoho, Google Workspace, and messaging platforms."
  },
  {
    question: "Can we start with a small pilot first?",
    answer: "Absolutely. The AI Agent Pilot is designed exactly for this — a quick, focused engagement to prove value with real data before committing to a larger rollout."
  },
  {
    question: "What about data privacy and security?",
    answer: "Data privacy is a priority. Agents can be deployed in your own cloud or VPC. No customer data is shared with third parties. For compliance-heavy environments, additional safeguards like audit logging and access controls are available."
  },
  {
    question: "What happens after launch?",
    answer: "All packages include post-launch support for tuning and optimization. After the support period, you can continue with a maintenance arrangement or manage the system independently with documentation provided."
  }
]
