export const profile = {
	name: 'Muzzamil Hissan',
	role: 'Full-Stack Engineer & AI Automation Engineer',
	location: 'Islamabad, Pakistan',
	email: 'muzzamilhissan2@gmail.com',
	phone: '+92 304 8230247',
	whatsapp: '923048230247',
	github: 'https://github.com/muzamilhissan',
	linkedin: 'https://www.linkedin.com/in/muzzamilhissan',
	cv: '/files/cv_pdf/Muzzamil_CV.pdf',
	headline: 'I ship production SaaS, end to end.',
	summary:
		'Full-Stack Engineer who ships production SaaS end to end — multi-tenant PostgreSQL schemas, typed REST and server-action APIs, React/Next.js interfaces, background job pipelines, payment and messaging integrations, LLM-driven automation, and the Docker/Nginx/Cloudflare infrastructure underneath.',
	about: [
		'I build software that runs real businesses. Most recently I have been the sole technical owner of two live platforms at Exitech — an AI content & SEO SaaS for publishers and a complete operations platform for a US services business — from the database schema all the way to the Nginx config.',
		'Before that I built ERP, CRM, marketplace and portal products at RippleBerry Tech, and RAG pipelines and ML models at Arch Technologies. Alongside client work I built SehatDoc and SehatLab, healthcare products for clinics and diagnostic labs in Pakistan.',
		'I am equally comfortable as the single technical point of contact: I run the client meetings, turn feedback into scoped roadmaps, deliver against milestones with sign-off evidence, and write the documentation the system runs on.',
	],
};

export type Experience = {
	company: string;
	role: string;
	location: string;
	period: string;
	current?: boolean;
	summary: string;
	highlights: string[];
	stack: string[];
	projects?: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Exitech',
		role: 'Full-Stack Engineer & AI Automation Engineer',
		location: 'Islamabad, Pakistan (Remote)',
		period: 'Jul 2026 – Oct 2026',
		summary: 'Sole engineer and client-facing technical owner of two production SaaS platforms.',
		highlights: [
			'Sole engineer and client-facing technical owner of PublisherOS (multi-tenant AI content & SEO platform) and Zyrean (operations platform for a US services business) — ran requirement and milestone meetings, delivered 5 milestones with sign-off evidence, and authored the architecture and deployment docs.',
			'Designed a multi-tenant Supabase/PostgreSQL architecture with 222 versioned migrations and Row Level Security per organization, verified by an automated RLS/trigger suite run against production before each release.',
			'Built an AI content generation engine on the OpenAI API — outline planning, sectioned drafting, competitor analysis and a RAG research agent — behind a 35+ handler background worker pipeline with retry, timeout and idempotency contracts under test.',
			'Architected Zyrean as a server-first Next.js 16 / React 19 app on Prisma 7 with 74 data models and 9 state machines, delivering the full money path: Authorize.Net payments, refunds, settlement, commissions and payout batching.',
			'Integrated Stripe, SEMrush, WordPress REST, Google Analytics and Twilio SMS, and owned the infrastructure — Docker, Nginx with TLS, Cloudflare, Coolify/DigitalOcean — plus 40+ Playwright regression suites.',
		],
		stack: ['Next.js 16', 'React 19', 'Express 5', 'Supabase', 'PostgreSQL', 'Prisma 7', 'OpenAI', 'Stripe', 'Authorize.Net', 'Docker', 'Playwright'],
		projects: ['publisher-os', 'zyrean'],
	},
	{
		company: 'RippleBerry Tech',
		role: 'Full-Stack Engineer',
		location: 'Islamabad, Pakistan',
		period: 'Jan 2026 – Jul 2026',
		summary: 'Built ERP, CRM, marketplace and portal products for international clients.',
		highlights: [
			'Architected and developed full-stack web applications — including ERP and CRM platforms — using React, Next.js, TypeScript, Node.js and PostgreSQL.',
			'Delivered core ERP and CRM modules: inventory and stock control, invoicing and billing, lead and sales pipelines, role-based access control, and reporting dashboards for operations teams.',
			'Built and maintained Laravel (PHP) backend services — MVC architecture, Eloquent ORM models and migrations, middleware, queued jobs and Blade templating — against MySQL databases.',
			'Integrated Daily.co for real-time in-app video calling — room provisioning, secure meeting tokens, scheduled sessions, participant controls and call recording.',
			'Designed REST APIs across Node.js and Laravel stacks, engineered responsive UIs from Figma designs, and managed deployments through CI/CD pipelines.',
		],
		stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Socket.io', 'Daily.co'],
		projects: ['luxelinen', 'kes-crm', 'knowflow', 'voxel'],
	},
	{
		company: 'Arch Technologies',
		role: 'AI Engineer',
		location: 'Remote',
		period: 'Jan 2024 – Mar 2024',
		summary: 'RAG pipelines, LLM fine-tuning and end-to-end ML model development.',
		highlights: [
			'Architected and deployed Retrieval-Augmented Generation (RAG) pipelines using LangChain and OpenAI APIs.',
			'Fine-tuned Large Language Models to improve domain-specific accuracy and context retention.',
			'Developed ML models end to end — preprocessing, feature engineering, training, hyperparameter tuning and evaluation against held-out benchmarks.',
			'Designed the database systems behind the ML pipelines and managed secure, scalable deployments with Docker and AWS.',
		],
		stack: ['Python', 'LangChain', 'OpenAI', 'RAG', 'Docker', 'AWS'],
	},
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
	{ category: 'Languages', items: ['TypeScript', 'JavaScript (ES2023+)', 'PHP', 'SQL', 'Python', 'HTML5', 'CSS3'] },
	{
		category: 'Frontend',
		items: ['React 19', 'Next.js 16 (App Router, RSC, Server Actions)', 'Vite', 'React Router', 'TanStack Query', 'Tailwind CSS v4', 'Radix UI', 'shadcn/ui', 'React Hook Form', 'Zod', 'Framer Motion', 'Figma-to-code'],
	},
	{
		category: 'Backend',
		items: ['Node.js 22', 'Express 5', 'Laravel', 'Eloquent ORM', 'Prisma ORM', 'REST API design', 'Background workers & job queues', 'State machines', 'Webhooks', 'Idempotency & retry design', 'Socket.io'],
	},
	{
		category: 'Databases',
		items: ['PostgreSQL', 'Supabase', 'Row Level Security', 'MySQL', 'MongoDB', 'SQLite', 'Multi-tenant schema design', 'Indexing & query optimization', 'Ledger / credit systems'],
	},
	{
		category: 'AI & ML',
		items: ['OpenAI API', 'LangChain', 'RAG pipelines', 'LLM fine-tuning', 'Prompt engineering', 'Multi-step agents', 'AI usage metering', 'Content-safety guardrails'],
	},
	{
		category: 'Payments & Integrations',
		items: ['Stripe', 'Authorize.Net', 'Commissions & payouts', 'SEMrush API', 'DataForSEO', 'WordPress REST', 'Google Analytics', 'Twilio SMS', 'Resend', 'Zoom SDK', 'Daily.co (WebRTC)'],
	},
	{
		category: 'Auth & Security',
		items: ['Supabase Auth', 'OAuth 2.0', 'JWT (jose)', 'RBAC & permissions', 'Session middleware', 'Helmet / CORS', 'HTML sanitization', 'Audit trails'],
	},
	{
		category: 'Cloud & DevOps',
		items: ['Docker', 'Docker Compose', 'Nginx', 'Cloudflare', 'Coolify', 'DigitalOcean', 'AWS', 'Vercel', 'PM2', 'CI/CD', 'npm workspaces monorepos'],
	},
	{
		category: 'Testing & Data',
		items: ['Playwright', 'Vitest', 'Node test runner', 'Contract & regression suites', 'SheetJS', 'ExcelJS', 'jsPDF', 'Sharp'],
	},
];

export const education = [
	{
		school: 'FAST National University (NUCES)',
		degree: 'BS Computer Science',
		location: 'Islamabad, Pakistan',
		period: 'Graduated 2026',
		image: '/education/college_img.jpg',
		detail: 'Algorithms, data structures, databases, operating systems, networking, AI and machine learning.',
		tags: ['DSA', 'OOP', 'DBMS', 'AI', 'ML', 'OS', 'Networking'],
	},
	{
		school: 'The City School — Jinnah Campus',
		degree: 'A Levels — Physics, Chemistry, Mathematics',
		location: 'Hyderabad, Pakistan',
		period: '2 A*, 1 A',
		image: '/education/school_img.jpg',
		detail: 'Core sciences with a focus on analytical problem-solving.',
		tags: ['Physics', 'Chemistry', 'Mathematics'],
	},
];
