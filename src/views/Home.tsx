'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy, FileDown, Github, Linkedin, MessageCircle } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading } from '@/components/ui';
import ProjectCard from '@/components/ProjectCard';
import { ExperienceTimeline } from '@/views/Experience';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

const stats = [
	{ value: '8', label: 'production platforms shipped' },
	{ value: '222', label: 'versioned DB migrations on one SaaS' },
	{ value: '35+', label: 'background job handlers' },
	{ value: '9', label: 'state machines in one platform' },
];

const marquee = ['Next.js 16', 'React 19', 'TypeScript', 'Node.js 22', 'Express 5', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI', 'Stripe', 'Authorize.Net', 'Twilio', 'Docker', 'Nginx', 'Cloudflare', 'Playwright', 'Laravel', 'Socket.io'];

const Home = () => {
	const [copied, setCopied] = useState(false);
	const featured = projects.filter(p => p.featured);
	const more = projects.filter(p => !p.featured);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	};

	return (
		<div className="overflow-x-hidden">
			{/* Hero */}
			<section className="min-h-[92vh] flex items-center px-4 pt-28 pb-16">
				<div className="max-w-6xl mx-auto w-full">
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs sm:text-sm text-emerald-300 mb-8"
					>
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
						</span>
						Open to full-time & contract roles
					</motion.div>

					<motion.h1
						className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						{profile.name}
					</motion.h1>
					<motion.p
						className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-500"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						{profile.headline}
					</motion.p>
					<motion.p
						className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						{profile.role} based in {profile.location}. I design multi-tenant databases, typed APIs, React/Next.js
						interfaces, AI pipelines, payment flows and the infrastructure underneath — then own them in production.
					</motion.p>

					<motion.div
						className="mt-9 flex flex-wrap items-center gap-3"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						<Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm sm:text-base font-medium text-black hover:bg-gray-200 transition-colors">
							View my work <ArrowRight className="w-4 h-4" />
						</Link>
						<a href={profile.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm sm:text-base font-medium hover:bg-white/20 transition-colors">
							<FileDown className="w-4 h-4" /> Download CV
						</a>
						<button onClick={copyEmail} className="group inline-flex items-center gap-2 px-3 py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
							<span className="font-mono text-gray-600">~/</span>{profile.email}
							{copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100" />}
						</button>
					</motion.div>

					<motion.div
						className="mt-6 flex items-center gap-5 text-gray-500"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
						<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
						<a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
					</motion.div>

					<motion.div
						className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.45 }}
					>
						{stats.map(s => (
							<div key={s.label} className="bg-black/80 backdrop-blur-sm p-5 sm:p-6">
								<div className="text-3xl sm:text-4xl font-bold tracking-tight">{s.value}</div>
								<div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Tech marquee */}
			<div className="relative border-y border-white/10 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
				<div className="flex w-max animate-marquee gap-10 font-mono text-sm text-gray-500">
					{[...marquee, ...marquee].map((t, i) => <span key={i} className="whitespace-nowrap">{t}</span>)}
				</div>
			</div>

			{/* Featured work */}
			<section className="px-4 py-24 sm:py-32 max-w-6xl mx-auto">
				<SectionHeading
					eyebrow="Featured work"
					title="Platforms in production"
					description="Systems I own end to end — from schema and job queues to payments, deployments and the client meetings."
				/>
				<div className="space-y-6">
					{featured.map(p => (
						<ScrollAnimation key={p.slug}>
							<ProjectCard project={p} large />
						</ScrollAnimation>
					))}
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
					{more.map(p => (
						<ScrollAnimation key={p.slug}>
							<ProjectCard project={p} />
						</ScrollAnimation>
					))}
				</div>
			</section>

			{/* Experience */}
			<section className="px-4 py-24 sm:py-32 max-w-5xl mx-auto">
				<SectionHeading eyebrow="Career" title="Where I've worked" />
				<ExperienceTimeline compact />
				<ScrollAnimation className="mt-10">
					<Link href="/experience" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
						Full experience <ArrowRight className="w-4 h-4" />
					</Link>
				</ScrollAnimation>
			</section>

			{/* CTA */}
			<section className="px-4 pb-10 max-w-6xl mx-auto">
				<ScrollAnimation>
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-white/[0.03] to-violet-500/15 p-8 sm:p-14 text-center">
						<h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Have a platform to build?</h2>
						<p className="mt-4 text-gray-400 max-w-xl mx-auto">
							I take products from requirements to production — and stay the technical point of contact after launch.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3">
							<Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 transition-colors">
								Get in touch <ArrowRight className="w-4 h-4" />
							</Link>
							<a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium hover:bg-white/20 transition-colors">
								<MessageCircle className="w-4 h-4" /> WhatsApp
							</a>
						</div>
					</div>
				</ScrollAnimation>
			</section>
		</div>
	);
};

export default Home;
