'use client';

import Link from 'next/link';
import { Briefcase, Code2, FileDown, Layers, Users } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading } from '@/components/ui';
import { profile } from '@/data/profile';

const facts = [
	{ icon: <Layers className="w-5 h-5" />, title: '8 platforms', text: 'SaaS, healthcare, ERP/CRM and marketplace products shipped to production.' },
	{ icon: <Briefcase className="w-5 h-5" />, title: '3 companies', text: 'Exitech, RippleBerry Tech and Arch Technologies.' },
	{ icon: <Users className="w-5 h-5" />, title: 'Client-facing', text: 'Requirement meetings, milestone sign-offs, roadmaps and documentation.' },
	{ icon: <Code2 className="w-5 h-5" />, title: 'End to end', text: 'Database, APIs, UI, AI pipelines, payments and infrastructure.' },
];

const principles = [
	['Server-first by default', 'Business rules live on the server — in state machines, services and database constraints — not scattered across components.'],
	['Evidence over claims', 'Every milestone ships with regression suites, verification scripts and screenshots the client can check.'],
	['Boring infrastructure', 'Docker, Nginx, Postgres and Cloudflare, configured carefully and documented so anyone can run it.'],
	['Own the outcome', 'I stay the technical point of contact after launch — the system is not done when the PR merges.'],
];

const About = () => (
	<div className="min-h-screen pt-28 px-4 max-w-6xl mx-auto pb-20">
		<SectionHeading eyebrow="About" title="Engineer, owner, point of contact." />

		<div className="grid md:grid-cols-[minmax(0,340px),1fr] gap-10 lg:gap-16 items-start">
			<ScrollAnimation>
				<div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/profile/me.png" alt={profile.name} className="w-full h-full object-cover" />
					<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
						<p className="font-semibold">{profile.name}</p>
						<p className="text-sm text-gray-400">{profile.location}</p>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation className="space-y-5">
				{profile.about.map(p => (
					<p key={p} className="text-gray-300 leading-relaxed text-base sm:text-lg">{p}</p>
				))}
				<div className="flex flex-wrap gap-3 pt-3">
					<a href={profile.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
						<FileDown className="w-4 h-4" /> Download CV
					</a>
					<Link href="/projects" className="px-5 py-2.5 bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors">
						See projects
					</Link>
				</div>
			</ScrollAnimation>
		</div>

		<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
			{facts.map(f => (
				<ScrollAnimation key={f.title}>
					<div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
						<div className="text-emerald-400 mb-3">{f.icon}</div>
						<h3 className="text-lg font-semibold">{f.title}</h3>
						<p className="text-sm text-gray-400 mt-1 leading-relaxed">{f.text}</p>
					</div>
				</ScrollAnimation>
			))}
		</div>

		<section className="mt-20">
			<ScrollAnimation>
				<h3 className="text-2xl sm:text-3xl font-semibold mb-8">How I work</h3>
			</ScrollAnimation>
			<div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
				{principles.map(([t, d], i) => (
					<ScrollAnimation key={t}>
						<div className="flex gap-4">
							<span className="font-mono text-sm text-gray-600 pt-1">0{i + 1}</span>
							<div>
								<h4 className="font-semibold text-lg">{t}</h4>
								<p className="text-gray-400 mt-1 leading-relaxed">{d}</p>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</section>
	</div>
);

export default About;
