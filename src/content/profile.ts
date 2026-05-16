export type Job = {
  company: string
  role: string
  period: string
  blurb: string
}

export type ProjectKind = 'mobile' | 'web' | 'cli'

export type Project = {
  title: string
  blurb: string
  href?: string
  tags: string[]
  kind: ProjectKind
}

export type Schooling = {
  school: string
  degree: string
  period: string
}

export type SkillItem = {
  name: string
  highlighted?: boolean
}

export type SkillCategory = {
  name: string
  items: SkillItem[]
}

export const profile = {
  name: 'Shubham Upadhyay',
  wordmark: 'shubham',
  location: 'New Delhi, India',
  role: 'Web & Mobile Developer',
  tagline:
    'Web & mobile developer building with React, React Native, and TypeScript — currently going deep on AI, always learning something new.',

  stats: [
    '1 app live on Play Store',
    '3 internships — 2 web, 1 mobile',
    '300+ DSA solved',
    'CS @ IIT Patna',
    // 'RN intern → frontend @ mProfit',
  ],

  about: [
    "I'm a 4th-semester CS student at IIT Patna, currently a frontend developer at mProfit after wrapping up an internship there. Before that, I spent a year building React Native at FlokkApp and a summer doing fullstack at Heliverse.",
    "What I love most is building — especially on mobile, taking a project end-to-end from idea to a live release. UX matters to me, but mostly I care about shipping. I mostly write React and React Native; on the backend I lean on Node (Fastify, Express), with some Python (FastAPI, Flask) and a bit of Go.",
  ],

  work: [
    {
      company: 'mProfit',
      role: 'Frontend Developer · AI Team',
      period: 'Apr 2026 — Present',
      blurb:
        'Promoted from intern. Building product surfaces and now also part of the AI team at a wealth-management platform.',
    },
    {
      company: 'mProfit',
      role: 'Frontend Developer Intern',
      period: 'Jan 2026 — Apr 2026',
      blurb:
        'Shipped frontend features end-to-end alongside the product team.',
    },
    {
      company: 'FlokkApp',
      role: 'React Native Intern · Remote',
      period: 'Dec 2024 — Jan 2026',
      blurb:
        'Collaborated with design and backend teams to deliver high-quality mobile UX .',
    },
    {
      company: 'Heliverse',
      role: 'Fullstack Developer Intern',
      period: 'Apr 2024 — Jun 2024',
      blurb:
        'First industry internship — got hands on both sides of the stack.',
    },
  ] satisfies Job[],

  projects: [
    {
      title: '[Play Store React Native app]',
      blurb:
        '[Short description — what it does, who it serves, what you owned.]',
      href: '#',
      tags: ['React Native', 'Expo', 'Play Store'],
      kind: 'mobile',
    },
    {
      title: '[Project Two]',
      blurb: '[Short description.]',
      href: '#',
      tags: ['React', 'TypeScript'],
      kind: 'web',
    },
    {
      title: '[Project Three]',
      blurb: '[Short description.]',
      href: '#',
      tags: ['Next.js', 'Postgres'],
      kind: 'web',
    },
    {
      title: '[Project Four]',
      blurb: '[Short description.]',
      href: '#',
      tags: ['Go', 'API'],
      kind: 'cli',
    },
  ] satisfies Project[],

  skills: [
    {
      name: 'Frontend / Web',
      items: [
        { name: 'React', highlighted: true },
        { name: 'TypeScript', highlighted: true },
        {name : "Next.js",},
        { name: 'JavaScript' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      name: 'Mobile',
      items: [
        { name: 'React Native', highlighted: true },
        { name: 'Play Store (Android)', highlighted : true},
        { name: 'Expo' },
        { name: 'Flutter', highlighted: false },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', highlighted : true },
        { name: 'Fast Api'},
        { name: 'Flask'},
        { name: 'Go' },
        { name: 'REST APIs' },
      ],
    },
    {
      name: 'Tools / Workflow',
      items: [
        { name: 'Git' },
        { name: 'Jira' },
        { name: 'Figma' },
        { name: 'Vercel/Render' },
        { name: 'Claude Code'},
        { name: 'Docker'},
        { name: 'Github Actions'},
        { name: 'CI/CD'}

      ],
    },
  ] satisfies SkillCategory[],

  education: [
    {
      school: 'IIT Patna',
      degree: 'B.S. Computer Science',
      period: 'Jul 2024 — Aug 2028',
    },
    {
      school: 'Aakash Model Sr Sec',
      degree: 'Science (12th)',
      period: 'Mar 2019 — Mar 2024',
    },
  ] satisfies Schooling[],

  certifications: ['Full Stack React Native', 'Backend Engineering with Go'],

  contact: {
    email: 'shubhamwork48@gmail.com',
    github: 'https://github.com/shubhamupadhyaydeveloper',
    linkedin: 'https://www.linkedin.com/in/shubhamupadhyaydeveloper/',
    twitter: '',
  },
}
