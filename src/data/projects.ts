export type Shot = { src: string; caption: string };

export type Project = {
	slug: string;
	name: string;
	tagline: string;
	category: 'SaaS' | 'Healthcare' | 'ERP & CRM' | 'Marketplace';
	org: string;
	period: string;
	role: string;
	accent: string;
	live?: string;
	overview: string;
	highlights: string[];
	metrics: { value: string; label: string }[];
	stack: { group: string; items: string[] }[];
	tags: string[];
	shots: Shot[];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'publisher-os',
		name: 'PublisherOS',
		tagline: 'Multi-tenant AI content & SEO SaaS for publishers and agencies',
		category: 'SaaS',
		org: 'Exitech',
		period: '2026',
		role: 'Sole engineer & technical owner',
		accent: '#8b5cf6',
		live: 'https://publisher-os.exitech.org',
		overview:
			'A publisher workspace where agencies and their client organisations plan, research, AI-generate, review, approve and publish SEO content to client WordPress sites — wrapped in Stripe billing, AI usage metering, analytics, a client-approval portal and a platform super-admin. Built as a clean React + Node + Supabase rebuild of a legacy app, ported one vertical slice at a time.',
		highlights: [
			'Multi-tenant Supabase/PostgreSQL architecture with Row Level Security per organisation, verified by an automated RLS/trigger suite run against production before every release.',
			'AI content engine on the OpenAI API — keyword clusters, outline planning, sectioned drafting, competitor analysis, a PubMed-aware research agent and a prompt studio.',
			'Postgres-backed job queue (`for update skip locked`) driving 30+ worker handlers with retry, timeout and idempotency contracts — research, planning, image/video generation, WordPress auto-sync.',
			'WordPress publish pipeline with a companion WP plugin, inventory sync and an improvements inbox that diffs AI rewrites before pushing them live.',
			'SEO intelligence: Semrush & DataForSEO data, GA4 and Search Console analytics, competitor research, internal-link and architecture graph, reader simulator.',
			'Client approvals portal with email-driven review links, plus Stripe plans, billing webhooks and per-org AI credentials.',
			'Typed npm-workspaces monorepo (frontend / backend / shared zod schemas) with a repository → service → route layering rule across 80+ API modules; shipped with Docker on Coolify.',
		],
		metrics: [
			{ value: '222', label: 'SQL migrations' },
			{ value: '170+', label: 'Postgres tables' },
			{ value: '82', label: 'API route modules' },
			{ value: '370+', label: 'test & DB-verify files' },
		],
		stack: [
			{ group: 'Frontend', items: ['React 19', 'Vite 7', 'React Router 7', 'TanStack Query', 'Tailwind CSS 4', 'Radix UI', 'Zod'] },
			{ group: 'Backend', items: ['Node 22', 'Express 5', 'TypeScript', 'pino', 'jose (JWT)', 'Helmet', 'sanitize-html'] },
			{ group: 'Data & AI', items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'OpenAI', 'Anthropic', 'Semrush API'] },
			{ group: 'Integrations', items: ['Stripe', 'WordPress REST', 'GA4', 'Search Console', 'Google Reviews', 'Resend'] },
			{ group: 'Infra & QA', items: ['Docker', 'Nginx', 'Coolify', 'node:test', 'Playwright'] },
		],
		tags: ['React 19', 'Express 5', 'Supabase', 'OpenAI', 'Stripe'],
		shots: [
			{ src: '/projects/publisher-os/automation-center.webp', caption: 'Automation Center — what is running, what needs attention, what reached WordPress' },
			{ src: '/projects/publisher-os/content-planner.webp', caption: 'Content Planner — keyword opportunities scheduled onto a publishing calendar' },
			{ src: '/projects/publisher-os/rewrite-review.webp', caption: 'Rewrite review — section-by-section diff before an AI rewrite is pushed live' },
			{ src: '/projects/publisher-os/published-article.webp', caption: 'Published article with AI-generated hero image' },
			{ src: '/projects/publisher-os/client-approvals.webp', caption: 'Client draft approvals with private preview links' },
			{ src: '/projects/publisher-os/improvements.webp', caption: 'Article improvements inbox' },
		],
		featured: true,
	},
	{
		slug: 'zyrean',
		name: 'Zyrean',
		tagline: 'Operations platform for a US beauty-services business — Customer, Business & Partner OS',
		category: 'SaaS',
		org: 'Exitech',
		period: '2026',
		role: 'Sole engineer & technical owner',
		accent: '#f59e0b',
		live: 'https://zyrean.exitech.org',
		overview:
			'Zyrean runs the entire lifecycle of a Las Vegas hair & makeup services business: public booking and quote pages, inquiries, multi-slot bookings, artist and driver assignment, deposits and card payments, refunds and disputes, commissions, tip splits, payouts and partner attribution — three connected operating layers sharing one canonical data core.',
		highlights: [
			'Server-first Next.js 16 / React 19 App Router app on Prisma 7 and PostgreSQL, with 9 explicit state machines (inquiry, booking, assignment, payment, payout, quote, receivable, ride, support ticket).',
			'Full money path on Authorize.Net — hosted payment page, deposits, payment links, settlement sync, refunds, voids and disputes, with PDF receipts and invoices.',
			'Finance engine: per-service commissions, tip splits, fulfilment fees, receivables and batched provider payouts.',
			'Artist & driver assignment with eligibility rules, slot reassignment, escalation and staff portals for availability and calendars.',
			'Partner OS: source-coded booking links with per-partner menus, price and commission overrides.',
			'Twilio SMS lifecycle, branded Resend email templates, a workflow/automation engine and an OpenAI support assistant.',
			'Role-based access over Supabase Auth (admin, operator, customer, artist, driver, partner) with a complete audit trail; 80+ regression scripts against an isolated test schema.',
		],
		metrics: [
			{ value: '77', label: 'Prisma models' },
			{ value: '9', label: 'state machines' },
			{ value: '85', label: 'app pages' },
			{ value: '80+', label: 'regression suites' },
		],
		stack: [
			{ group: 'App', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Radix UI', 'React Hook Form', 'Zod'] },
			{ group: 'Data', items: ['Prisma 7', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage'] },
			{ group: 'Payments & Messaging', items: ['Authorize.Net', 'Twilio SMS', 'Resend', 'OpenAI'] },
			{ group: 'Docs & Reports', items: ['jsPDF', 'SheetJS', 'sharp'] },
			{ group: 'Infra & QA', items: ['Docker', 'Playwright', 'tsx regression suites'] },
		],
		tags: ['Next.js 16', 'Prisma 7', 'PostgreSQL', 'Authorize.Net', 'Twilio'],
		shots: [
			{ src: '/projects/zyrean/booking-detail.webp', caption: 'Booking detail — service, schedule, commissions, workflow and card payment actions' },
			{ src: '/projects/zyrean/payments.webp', caption: 'Payments ledger with capture, refund and failure states' },
			{ src: '/projects/zyrean/calendar.webp', caption: 'Operations calendar with coverage alerts and blockouts' },
			{ src: '/projects/zyrean/payouts.webp', caption: 'Provider payouts grouped by recipient' },
			{ src: '/projects/zyrean/services-catalog.webp', caption: 'Master products & services catalogue' },
		],
		featured: true,
	},
	{
		slug: 'sehatdoc',
		name: 'SehatDoc',
		tagline: 'Cloud clinic & practice management platform for doctors in Pakistan',
		category: 'Healthcare',
		org: 'Personal product',
		period: '2025 – 2026',
		role: 'Founder & full-stack engineer',
		accent: '#14b8a6',
		live: 'https://www.sehatdoc.com',
		overview:
			'SehatDoc gives clinics one place for patients, appointments, prescriptions, billing and pharmacy — with dedicated portals for doctors, receptionists and pharmacy staff, a public doctor directory and booking site, an internal super-admin console, an SEO marketing site and a native Windows desktop client. It scales from a single clinic to multi-branch operations.',
		highlights: [
			'Patients/EMR with MRN search, document folders, lab reports and printable patient records.',
			'Appointments with follow-ups, reschedules, online bookings and a public live walk-in queue.',
			'Prescriptions with custom layouts and a public QR verification page; billing with installments, expenses, budgets and thermal slips.',
			'Full pharmacy add-on — POS, batches & expiry, purchases, suppliers, returns, day closing and reorder.',
			'Staff & HR (attendance, salary, departments) with role-based access for admin, doctor and receptionist.',
			'WhatsApp reminders, real-time WebSocket updates and a SehatLab integration for lab orders and synced reports.',
			'Five apps on one DigitalOcean droplet behind Nginx + Cloudflare, managed by PM2; native Windows client in .NET 8 / Avalonia.',
		],
		metrics: [
			{ value: '126', label: 'pages across 4 web apps' },
			{ value: '~345', label: 'API endpoints' },
			{ value: '80', label: 'Prisma models' },
			{ value: '131', label: 'test files' },
		],
		stack: [
			{ group: 'Web apps', items: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'TanStack Query', 'Recharts', 'Framer Motion'] },
			{ group: 'Backend', items: ['Node.js', 'Express 5', 'TypeScript', 'Prisma', 'PostgreSQL', 'WebSockets (ws)', 'Swagger'] },
			{ group: 'Services', items: ['AWS S3', 'Firebase Auth', 'Postmark', 'Resend', 'WhatsApp', 'pdfkit / jsPDF'] },
			{ group: 'Desktop', items: ['.NET 8', 'Avalonia UI', 'MVVM Toolkit'] },
			{ group: 'Infra & QA', items: ['DigitalOcean', 'PM2', 'Nginx', 'Cloudflare', 'Docker', 'Jest', 'Supertest'] },
		],
		tags: ['Next.js 16', 'Express 5', 'Prisma', 'PostgreSQL', 'DigitalOcean'],
		shots: [
			{ src: '/projects/sehatdoc/doctor-dashboard.webp', caption: 'Doctor dashboard — schedule, walk-in queue and notepad' },
			{ src: '/projects/sehatdoc/appointmenthub.webp', caption: 'Appointment hub' },
			{ src: '/projects/sehatdoc/patientdirectory.webp', caption: 'Patient directory with MRN search' },
			{ src: '/projects/sehatdoc/prescription.webp', caption: 'Prescription builder' },
			{ src: '/projects/sehatdoc/billing-invoice.webp', caption: 'Billing & invoices' },
			{ src: '/projects/sehatdoc/pharmacy-pos.webp', caption: 'Pharmacy point of sale' },
			{ src: '/projects/sehatdoc/img-receptionistdashboard.webp', caption: 'Receptionist dashboard' },
			{ src: '/projects/sehatdoc/staffmanagement.webp', caption: 'Staff management' },
		],
		featured: true,
	},
	{
		slug: 'sehatlab',
		name: 'SehatLab',
		tagline: 'Laboratory information system for diagnostic labs, connected to SehatDoc clinics',
		category: 'Healthcare',
		org: 'Personal product',
		period: '2026',
		role: 'Founder & full-stack engineer',
		accent: '#ec4899',
		live: 'https://www.sehatdoc.com/sehatlab',
		overview:
			'SehatLab is a cloud LIS/LIMS for diagnostic and pathology labs. It tracks every sample, verifies results in two stages, publishes reports on the lab’s own branded template and bills for them — and connects directly to SehatDoc clinics so doctors can order tests and receive verified reports inside their portal.',
		highlights: [
			'Request intake and sample log tying every sample to its patient and order.',
			'Configurable test panels and templates, with two-stage result verification.',
			'Reports printed on the lab’s own branded template and pushed straight to the ordering doctor.',
			'Billing that joins up with the clinic’s billing.',
			'Clinic ↔ lab connection handshake with an origin allow-list, platform-key checks and approval / decline / disconnect flows.',
			'Doctors order from the lab’s test catalogue in SehatDoc and see synced reports and stats in real time.',
		],
		metrics: [
			{ value: '2-stage', label: 'result verification' },
			{ value: '17', label: 'clinic ↔ lab endpoints' },
			{ value: '1-click', label: 'report delivery to doctor' },
		],
		stack: [
			{ group: 'Platform', items: ['Node.js', 'REST API', 'Render'] },
			{ group: 'Integration', items: ['SehatDoc API', 'Webhooks', 'Origin allow-list', 'Platform keys'] },
		],
		tags: ['LIMS', 'Node.js', 'Webhooks', 'SehatDoc API'],
		shots: [
			{ src: '/projects/sehatlab/overview.webp', caption: 'SehatLab — laboratory information system' },
			{ src: '/projects/sehatlab/login.webp', caption: 'SehatLab medical portal' },
		],
	},
	{
		slug: 'luxelinen',
		name: 'LuxeLinen ERP',
		tagline: 'Multi-branch ERP for a luxury bedding & linen retailer',
		category: 'ERP & CRM',
		org: 'RippleBerry Tech',
		period: '2026',
		role: 'Full-stack engineer',
		accent: '#3b82f6',
		overview:
			'An ERP for a multi-branch luxury linen retailer: access management (users, roles, permissions, branches), clients, branch sales with line items, expenses, payment types and branch performance reporting — with Excel sales import and PDF receipts.',
		highlights: [
			'JWT access + refresh tokens with rotation, revocation and email password reset.',
			'RBAC with a role–permission matrix, permission-aware route guards and multi-branch user assignment.',
			'Branch management with S3 logo uploads used on branch-specific invoices.',
			'Sales per branch with line items, Excel import and printable PDF receipts.',
			'Dashboard with total sales, expenses, estimated COGS, profit and per-branch contribution.',
			'Feature-first frontend architecture with a strict 200-line-per-file limit.',
		],
		metrics: [
			{ value: '~36', label: 'REST endpoints' },
			{ value: '15', label: 'TypeORM entities' },
			{ value: '14', label: 'migrations' },
			{ value: '9', label: 'feature modules' },
		],
		stack: [
			{ group: 'Frontend', items: ['React 19', 'TypeScript', 'Vite 8', 'TanStack Query', 'Tailwind CSS 4', 'React Hook Form', 'Zod', '@react-pdf/renderer'] },
			{ group: 'Backend', items: ['Node 20', 'Express', 'TypeORM', 'PostgreSQL', 'AWS S3', 'Nodemailer', 'node:test'] },
		],
		tags: ['React 19', 'Express', 'TypeORM', 'PostgreSQL', 'AWS S3'],
		shots: [{ src: '/projects/luxelinen/dashboard.webp', caption: 'All-branches performance dashboard' }],
	},
	{
		slug: 'kes-crm',
		name: 'Kudon CRM (KES)',
		tagline: 'Sales CRM for an engineering company — lead to deal to purchase order',
		category: 'ERP & CRM',
		org: 'RippleBerry Tech',
		period: '2026',
		role: 'Full-stack engineer',
		accent: '#22c55e',
		overview:
			'A sales CRM for Kudon Engineering Services covering the full path from lead to deal to purchase order: lead pipeline, contacts, accounts, AI-generated proposals and documents — with two-way SSO into the company’s POMS operations system and purchase orders pushed back to the KES main app.',
		highlights: [
			'Lead pipeline with both Kanban and table views, a stage stepper, activity timeline and quick actions.',
			'Lead assignment and conversion into deals; deals, contacts and accounts modules.',
			'AI-generated proposals through a multi-step wizard — questionnaire, generation, review and attachments.',
			'Quotes that create purchase orders in the KES main app.',
			'Two-way SSO with Kudon-POMS using switch tokens.',
			'API wrapper with automatic JWT injection; lazy-loaded routes and a super-admin configuration area.',
		],
		metrics: [
			{ value: '10k+', label: 'records handled' },
			{ value: '20%', label: 'faster lead tracking' },
			{ value: '11', label: 'feature modules' },
		],
		stack: [
			{ group: 'Frontend', items: ['React 19', 'TypeScript', 'Vite 8', 'TanStack Query', 'React Router 7', 'Tailwind CSS 4', 'Radix UI', 'React Hook Form', 'Zod'] },
			{ group: 'Backend', items: ['Laravel API', 'MySQL', 'SSO tokens'] },
		],
		tags: ['React 19', 'TypeScript', 'TanStack Query', 'Laravel'],
		shots: [],
	},
	{
		slug: 'knowflow',
		name: 'KnowFlow',
		tagline: 'Two-sided mentorship marketplace with video sessions and payouts',
		category: 'Marketplace',
		org: 'RippleBerry Tech',
		period: '2025 – 2026',
		role: 'Full-stack engineer (team)',
		accent: '#06b6d4',
		overview:
			'KnowFlow connects knowledge seekers with expert guides. Seekers onboard with a subscription, discover guides, book sessions in the guide’s timezone and pay with Stripe; sessions run as in-app video calls, with real-time chat, wallets and Stripe Connect payouts for guides, and a full admin back office.',
		highlights: [
			'Separate multi-step onboarding for guides and seekers, with subscription guards.',
			'Guide discovery, profiles and timezone-aware appointment booking.',
			'In-app video sessions on Daily.co with the Zoom Meeting SDK as an alternative.',
			'Real-time chat and notifications over Socket.io.',
			'Stripe payments, wallet & ledger, and Stripe Connect payout onboarding for guides.',
			'Admin panel for users, roles, guide approvals, disputes, violations and issues.',
		],
		metrics: [
			{ value: '~130', label: 'RTK Query endpoints' },
			{ value: '40+', label: 'routes' },
			{ value: '14', label: 'feature modules' },
		],
		stack: [
			{ group: 'Frontend', items: ['React 19', 'Vite', 'Redux Toolkit', 'RTK Query', 'Jotai', 'Tailwind CSS', 'Vitest'] },
			{ group: 'Realtime & Video', items: ['Socket.io', 'Daily.co', 'Zoom Meeting SDK'] },
			{ group: 'Backend & Payments', items: ['Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Stripe', 'Stripe Connect', 'Heroku'] },
		],
		tags: ['React 19', 'Socket.io', 'Stripe', 'Daily.co'],
		shots: [],
	},
	{
		slug: 'voxel',
		name: 'Voxel Patient Portal',
		tagline: 'Secure patient file-transfer portal for non-DICOM medical documents',
		category: 'Healthcare',
		org: 'RippleBerry Tech',
		period: '2026',
		role: 'Frontend engineer (team)',
		accent: '#a855f7',
		overview:
			'An admin portal for Voxel Systems’ patient file-transfer service. Staff manage patient records and upload or browse each patient’s documents in category folders; admins manage users, roles and document types. Login runs on Laravel Sanctum with an email-OTP second factor.',
		highlights: [
			'Sanctum authentication with email OTP 2FA, password reset and inactivity-aware session handling.',
			'Patient list with search, filters, sorting and pagination; add/edit/view/delete modals.',
			'Document folder browser with drag-and-drop uploads, grid/list views and preview.',
			'Upload slots tagged by configurable document types, with confirmation.',
			'User & role management for Admin, Staff and Auditor permissions.',
			'Switchable mock API layer for frontend development without the backend.',
		],
		metrics: [
			{ value: '2FA', label: 'email OTP login' },
			{ value: '3', label: 'permission roles' },
			{ value: '5', label: 'feature modules' },
		],
		stack: [
			{ group: 'Frontend', items: ['React 19', 'TypeScript', 'Vite 8', 'React Router 7', 'Tailwind CSS 4'] },
			{ group: 'Backend', items: ['Laravel', 'Sanctum', 'REST API'] },
		],
		tags: ['React 19', 'TypeScript', 'Laravel Sanctum'],
		shots: [],
	},
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
