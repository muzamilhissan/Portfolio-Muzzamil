'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { BrowserFrame, ProjectPlaceholder, TechChip } from '@/components/ui';
import { projects, type Project } from '@/data/projects';

const ProjectDetail = ({ project }: { project: Project }) => {
	const [open, setOpen] = useState<number | null>(null);
	const index = projects.findIndex(p => p.slug === project.slug);
	const next = projects[(index + 1) % projects.length];
	const [hero, ...rest] = project.shots;

	return (
		<div className="min-h-screen pt-28 px-4 max-w-6xl mx-auto pb-20">
			<Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
				<ArrowLeft className="w-4 h-4" /> All projects
			</Link>

			<ScrollAnimation>
				<div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-mono text-gray-400">
					<span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
					{project.category} · {project.org} · {project.period}
				</div>
				<h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{project.name}</h1>
				<p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl">{project.tagline}</p>
				<div className="flex flex-wrap items-center gap-3 mt-6">
					<span className="px-3 py-1.5 rounded-full text-sm bg-white/[0.06] border border-white/10">{project.role}</span>
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm bg-white text-black font-medium hover:bg-gray-200 transition-colors"
						>
							Visit live <ExternalLink className="w-3.5 h-3.5" />
						</a>
					)}
				</div>
			</ScrollAnimation>

			<ScrollAnimation className="mt-10 sm:mt-14">
				{hero ? (
					<button onClick={() => setOpen(0)} className="block w-full text-left">
						<BrowserFrame src={hero.src} alt={hero.caption} url={project.live?.replace('https://', '')} priority />
					</button>
				) : (
					<ProjectPlaceholder name={project.name} accent={project.accent} />
				)}
			</ScrollAnimation>

			<div className="grid lg:grid-cols-[1.6fr,1fr] gap-10 lg:gap-14 mt-12 sm:mt-16">
				<div>
					<ScrollAnimation>
						<h2 className="text-2xl font-semibold mb-4">Overview</h2>
						<p className="text-gray-300 leading-relaxed text-base sm:text-lg">{project.overview}</p>
					</ScrollAnimation>
					<ScrollAnimation className="mt-10">
						<h2 className="text-2xl font-semibold mb-5">What I built</h2>
						<ul className="space-y-3.5">
							{project.highlights.map(h => (
								<li key={h} className="flex gap-3 text-gray-300 leading-relaxed">
									<span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
									<span>{h}</span>
								</li>
							))}
						</ul>
					</ScrollAnimation>
				</div>

				<aside className="space-y-6">
					<ScrollAnimation>
						<div className="grid grid-cols-2 gap-3">
							{project.metrics.map(m => (
								<div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
									<div className="text-2xl font-bold">{m.value}</div>
									<div className="text-xs text-gray-500 mt-1">{m.label}</div>
								</div>
							))}
						</div>
					</ScrollAnimation>
					<ScrollAnimation>
						<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 space-y-5">
							<h3 className="font-semibold">Tech stack</h3>
							{project.stack.map(s => (
								<div key={s.group}>
									<p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{s.group}</p>
									<div className="flex flex-wrap gap-2">
										{s.items.map(i => <TechChip key={i} label={i} />)}
									</div>
								</div>
							))}
						</div>
					</ScrollAnimation>
				</aside>
			</div>

			{rest.length > 0 && (
				<section className="mt-16 sm:mt-20">
					<ScrollAnimation>
						<h2 className="text-2xl font-semibold mb-6">Screens</h2>
					</ScrollAnimation>
					<div className="grid md:grid-cols-2 gap-6">
						{rest.map((s, i) => (
							<ScrollAnimation key={s.src}>
								<button onClick={() => setOpen(i + 1)} className="block w-full text-left group">
									<div className="overflow-hidden rounded-xl">
										<div className="transition-transform duration-500 group-hover:scale-[1.02]">
											<BrowserFrame src={s.src} alt={s.caption} />
										</div>
									</div>
									<p className="text-sm text-gray-400 mt-3">{s.caption}</p>
								</button>
							</ScrollAnimation>
						))}
					</div>
				</section>
			)}

			{project.shots.length === 0 && (
				<p className="mt-12 text-sm text-gray-500">
					Screens for this project are under client NDA — happy to walk through it on a call.
				</p>
			)}

			<Link
				href={`/projects/${next.slug}`}
				className="group mt-20 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-white/25 transition-colors"
			>
				<div>
					<p className="text-xs font-mono uppercase tracking-wider text-gray-500">Next project</p>
					<p className="text-2xl sm:text-3xl font-semibold mt-1">{next.name}</p>
				</div>
				<ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
			</Link>

			{open !== null && project.shots[open] && (
				<div
					className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
					onClick={() => setOpen(null)}
				>
					<button className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white" aria-label="Close">
						<X className="w-6 h-6" />
					</button>
					<figure className="max-w-6xl w-full max-h-full overflow-auto" onClick={e => e.stopPropagation()}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={project.shots[open].src} alt={project.shots[open].caption} className="w-full rounded-lg" />
						<figcaption className="text-center text-sm text-gray-400 mt-3">{project.shots[open].caption}</figcaption>
					</figure>
				</div>
			)}
		</div>
	);
};

export default ProjectDetail;
