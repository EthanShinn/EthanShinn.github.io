export const profile = {
  name: 'Shinn Wai Yan Bo',
  title: 'Power Platform Solution Architect & AI Enablement Leader',
  tagline:
    'I architect enterprise low-code solutions on Microsoft Power Platform and help organizations responsibly fold AI into how they build, automate, and decide.',
  email: 'shinwaiyan@gmail.com',
  phone: '+65 9148 9315',
  location: 'Singapore',
  linkedin: 'https://www.linkedin.com/in/shinn-wai-yan-bo-899711b7/',
  resumeUrl: '/Shinn_Wai_Yan_Bo_Resume.pdf',
  portfolioUrl: '/Shinn_Wai_Yan_Bo_Power_Platform_Portfolio.pdf',
}

export const aboutSummary = [
  'Hands-on Power Platform Solution Architect with 7+ years designing, supporting, and scaling enterprise Canvas and Model-driven applications across regulated, security-conscious industries — banking, energy, and infrastructure.',
  'Most recently certified as a Microsoft AI Transformation Leader, I now focus on bridging low-code automation with applied AI: modernizing legacy processes, layering AI capability onto existing Power Platform solutions, and designing governed architectures that scale safely.',
  'Proven track record across Power Apps, Power Automate, Power BI, Dataverse, SQL, and Azure — with deep experience in production support, deployment management, environment governance, and stakeholder-facing solution delivery.',
]

export const stats = [
  { label: 'Years in Power Platform', value: '7+' },
  { label: 'Production Apps Delivered', value: '10+' },
  { label: 'Microsoft Certifications', value: '5' },
  { label: 'Digital Officers Mentored', value: '70+' },
]

export type ExperienceEntry = {
  role: string
  company: string
  location: string
  period: string
  points: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Microsoft Power Platform Engineer',
    company: 'REDEX',
    location: 'Singapore',
    period: 'Jan 2024 – Present',
    points: [
      'Provide ongoing support and enhancement for multiple production Canvas and Model-driven Power Apps, ensuring system stability and usability.',
      'Built and maintained complex Power Automate flows for approvals, notifications, data synchronization, and exception handling.',
      'Created and managed Custom Connectors to integrate Power Platform with REST APIs and backend services.',
      'Integrated Power Apps with Azure SQL and Azure Blob Storage for document and data management.',
      'Developed Power BI reports consolidating data from Dataverse, SQL, and other business systems.',
      'Managed solution deployments across development, testing, and production environments.',
    ],
  },
  {
    role: 'Microsoft 365 Consultant',
    company: 'YTL PowerSeraya',
    location: 'Singapore',
    period: 'Jan 2023 – Dec 2023',
    points: [
      'Developed and supported Canvas Apps and Power Automate workflows for internal business users.',
      'Designed Power Platform solutions integrating SharePoint, OneDrive, and SQL data sources.',
      'Built Power BI dashboards to provide operational and management insights.',
      'Conducted user training and documentation to support adoption and self-service usage.',
    ],
  },
  {
    role: 'Office Automation Team Leader',
    company: 'Hana Microfinance',
    location: 'Myanmar',
    period: 'Feb 2022 – Dec 2022',
    points: [
      'Developed and supported Power Apps and Power Automate solutions for daily operational workflows.',
      'Integrated Power Platform applications with SQL databases and core systems.',
      'Managed testing, UAT, and production rollout; provided post-deployment support based on user feedback.',
    ],
  },
  {
    role: 'MIS Manager',
    company: 'Hana Microfinance',
    location: 'Myanmar',
    period: 'Jul 2020 – Feb 2022',
    points: [
      'Managed core-banking operations, SQL/VBA reporting, and portfolio dashboards across 50+ branches.',
      'Led digitization and data-quality projects, improving efficiency by 70% and analytics accuracy.',
      'Mentored 70+ digital officers, strengthening organization-wide digital literacy.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Hana Microfinance',
    location: 'Myanmar',
    period: 'Feb 2020 – Jul 2020',
    points: [
      'Led digitization projects during the pandemic, including business continuity and employee tracking dashboards using Metabase and Zoho Creator, cutting manual work by 70%.',
    ],
  },
  {
    role: 'Deputy IT Manager | Strategic Executive',
    company: 'INNO Capital Microfinance',
    location: 'Myanmar',
    period: 'Jan 2018 – Jan 2020',
    points: [
      'Directed core-banking implementation and data migration; established IT policies and SOPs.',
      'Managed IT budgeting and infrastructure upgrades supporting business expansion.',
    ],
  },
  {
    role: 'Junior System Engineer',
    company: 'NTT Data Myanmar',
    location: 'Myanmar',
    period: 'Dec 2015 – Jun 2017',
    points: ['Assisted in Java application development and technical training delivery within the R&D team.'],
  },
]

export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Power Platform Development',
    items: ['Canvas Apps', 'Model-Driven Apps', 'Power Automate', 'Power Virtual Agents', 'Dataverse Schema Design'],
  },
  {
    category: 'AI & Solution Architecture',
    items: ['AI Transformation Strategy', 'Solution Architecture Design', 'Fabric Analytics', 'Architecture & Environment Governance'],
  },
  {
    category: 'Integration & Automation',
    items: ['Microsoft 365', 'Dynamics 365', 'SharePoint & Teams', 'Azure Functions', 'REST API & Custom Connectors'],
  },
  {
    category: 'Data & Analytics',
    items: ['Power BI', 'Power Query', 'SQL', 'Azure Synapse Analytics', 'Python', 'VBA'],
  },
  {
    category: 'Governance & Delivery',
    items: ['DLP Policies', 'Role-Based Security', 'Agile/Scrum Delivery', 'Documentation', 'Stakeholder Communication'],
  },
]

export type Project = {
  title: string
  description: string
  tools: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'Central Quotation System',
    description:
      'A model-driven application for business development and sales teams to create buy/sell quotations and route them through department-head approvals.',
    tools: ['Model-Driven App', 'Power Automate', 'Dataverse', 'Power BI'],
    highlights: [
      'Gave the business development team pricing-trend insights ahead of entering new geographic markets.',
      'Automated approval workflow with business process flows, cutting manual effort and errors.',
      'One-click quotation cloning and role-based access to sensitive pricing data.',
      'Synced market pricing data between Dataverse and Azure Synapse for ongoing market intelligence.',
    ],
  },
  {
    title: 'Management BI Analytics Reports',
    description:
      'Organization-wide BI reporting suite giving management real-time visibility into performance across regions and products.',
    tools: ['Power BI', 'Azure Synapse Analytics', 'SQL', 'Python'],
    highlights: [
      'Map-based geographical performance analysis to surface regional strengths and weaknesses.',
      'Time-series trend tracking to support forecasting and long-term strategic planning.',
      'Let teams continuously monitor product performance and adjust plans from real-time data.',
    ],
  },
  {
    title: 'Solar Customer Engagement System',
    description:
      'End-to-end automated workflow managing solar customer enquiries from submission through supplier assignment and feedback collection.',
    tools: ['SharePoint', 'Power Automate', 'PDF Encryption', 'Outlook Integration'],
    highlights: [
      'Automated enquiry intake, supplier assignment, and feedback collection end to end.',
      'Encrypted PDF delivery for secure transmission of sensitive customer data.',
      'Centralized enquiry status for sales reps, improving collaboration and response times.',
    ],
  },
  {
    title: 'Employee Name Card System',
    description:
      'Automated digital name-card generator producing a unique, scannable QR/vCard for every new employee.',
    tools: ['Canvas App', 'SharePoint', 'Power Automate', 'Custom Connector', 'API Integration'],
    highlights: [
      'Generated a unique QR code per employee, resolving to a vCard on scan for iOS and Android.',
      'Integrated a third-party QR/vCard generator via a custom connector.',
      'Centralized, access-restricted storage limited to HR personnel.',
    ],
  },
  {
    title: 'Outbound Call Center Management System',
    description:
      'Replaced a manual, Excel-based call-result process with a fully automated system for uploading, assigning, and tracking outbound call lists.',
    tools: ['Canvas App', 'SharePoint', 'Power Automate'],
    highlights: [
      'Admins upload daily call lists and assign or reassign call officers in a few clicks.',
      'Centralized all call results in SharePoint with real-time tracking and reporting.',
      'Role-based access plus weekly/monthly quality-review workflows for team leads.',
    ],
  },
  {
    title: 'Call Center Management Model-Driven App',
    description:
      'Re-platformed the Canvas-based call center system onto Dataverse to handle tens of thousands of records and integrate with the 3CX phone system.',
    tools: ['Model-Driven App', 'Dataverse', 'Power Automate', '3CX'],
    highlights: [
      'Scaled the previous Canvas app to handle rapidly growing data volumes without performance loss.',
      'Integrated the 3CX phone system to streamline inbound/outbound call routing.',
      'Added advanced analytics and reporting on call center performance and customer satisfaction.',
    ],
  },
  {
    title: 'Risk Zone Identification System',
    description:
      'A reporting and approval system letting branch managers flag high-risk areas, with multi-level review by the credit risk department and head.',
    tools: ['Model-Driven App', 'Canvas App', 'Dataverse', 'Power Automate', 'Custom Connector'],
    highlights: [
      'Embedded a Canvas app inside a model-driven app for richer ground-level reporting.',
      'Multi-stage approval workflow (RM/RRO, then AOM/ARM) before a zone goes active.',
      'Pulled core-banking data into the risk view for real-time, centralized decision-making.',
    ],
  },
]

export type Certification = {
  name: string
  issuer: string
  date: string
}

export const certifications: Certification[] = [
  { name: 'Power Platform Solution Architect Expert', issuer: 'Microsoft', date: 'Jun 2024' },
  { name: 'AI Transformation Leader', issuer: 'Microsoft', date: 'Jan 2026' },
  { name: 'Fabric Analytics Engineer Associate', issuer: 'Microsoft', date: 'Jun 2024' },
  { name: 'Power Platform Functional Consultant Associate', issuer: 'Microsoft', date: 'Oct 2023' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', date: 'Jul 2021' },
]

export const education = {
  degree: 'B.Sc. (Hons) Business Information Technology',
  school: 'University of Greenwich, UK',
  honors: 'First Class Honors',
  date: 'Feb 2019',
}
