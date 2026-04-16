export const chatMessages = [
  {
    sender: "Realtor",
    tone: "user",
    text: "Show me hot leads near Oak Street.",
  },
  {
    sender: "Kingpin AI",
    tone: "assistant",
    text: "Found 3 highly qualified buyers for properties on Oak Street. Here is John Doe (approved $900K) and Sarah Chen (cash, $1.2M). Draft introductory email?",
  },
  {
    sender: "Realtor",
    tone: "user",
    text: "Yes, for John Doe, mentioning the listing at 123 Oak St.",
  },
  {
    sender: "Kingpin AI",
    tone: "assistant",
    text: "Drafting email. [Action: Draft Email]",
  },
];

export const pendingActions = [
  { label: "Hot Leads & opportunities", count: 0 },
  { label: "Contact staging & opportunities", count: 11 },
  { label: "Update communications", count: 4 },
  { label: "Automascagement", count: 7 },
  { label: "Understabilization", count: 2 },
];

export const quickTools = [
  "Quick Tools",
  "Quick Tools",
  "New West installer",
  "Quick Chat",
  "Events",
];

export const heroStats = [
  { label: "Active Deals", value: "14" },
  { label: "Total Pipeline", value: "$28M" },
];

export const leadCards = [
  {
    name: "Lead Profile",
    score: "A+",
    scoreTone: "gold",
    metrics: ["Contact Frequency", "Interest Score", "Next Best Action"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lead Profile",
    score: "A+",
    scoreTone: "green",
    metrics: ["Contact Frequency", "Interest Score", "Next Best Action"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sarah Chen",
    score: "A",
    scoreTone: "gold",
    metrics: ["Contact Frequency", "Interest Score", "Next Best Action"],
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lead Profile",
    score: "A-",
    scoreTone: "green",
    metrics: ["Contact Frequency", "Interest Score", "Next Best Action"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
];

export const clientCards = [
  {
    name: "Client Profile",
    person: "John Shen",
    meta: ["Property Matches", "Preferred Areas", "Communication History"],
    avatars: [
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    ],
    property: "John Shen",
  },
  {
    name: "Sarah Profile",
    person: "Sarah Profile",
    meta: ["Property Matches", "Preferred Areas", "Communication History"],
    avatars: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    ],
    property: "Math Area",
  },
  {
    name: "Sarah Chenn",
    person: "John Chen",
    meta: ["Property Matches", "Preferred Areas", "Communication History"],
    avatars: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80",
    ],
    property: "Schedule Promote",
  },
  {
    name: "Sur Profile",
    person: "Property Insight",
    meta: ["Property Matches", "Preferred Areas", "Communication History"],
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=240&q=80",
    ],
    property: "Preferred Area",
  },
];

export const pipelineCards = [
  {
    title: "Active Transactions",
    subtitle: "Active Transactions",
    stage: "Offer",
    progress: 20,
    tone: "teal",
  },
  {
    title: "Offer Transaction",
    subtitle: "Active Transactions",
    stage: "Closing",
    progress: 30,
    tone: "amber",
  },
  {
    title: "Deal Pipeline",
    subtitle: "Active Transactions",
    stage: "Milestones",
    progress: 20,
    tone: "dark",
  },
  {
    title: "Closing",
    subtitle: "Active Transactions",
    stage: "Closing",
    progress: 42,
    tone: "teal",
  },
];

export const followUpCards = [
  {
    title: "Scheduled Viewings",
    lines: ["Thursday • 10:30 am", "1:00 pm - 2:30 pm", "1:30 pm - 7:00 pm"],
    cta: "Scheduled Viewing",
  },
  {
    title: "Scheduled Viewing",
    lines: ["Scheduled reminder committed your viewing cards."],
    cta: "Scheduled Viewing",
  },
  {
    title: "Automated Reminder",
    lines: ["Automated reminder committed your viewing cards."],
    cta: "Automate reminder",
  },
  {
    title: "Automated Reminder",
    lines: ["Auto-viewing cards standing by."],
    cta: "Automate reminder",
  },
];
