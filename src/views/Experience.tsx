'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading, TechChip } from '@/components/ui';
import { experiences } from '@/data/profile';
import { projects } from '@/data/projects';

export const ExperienceTimeline = ({ compact = false }: { compact?: boolean }) => (
	<div className="relative border-l border-white/10 ml-2 sm:ml-3 space-y-10 sm:space-y-12">
		{experiences.map(exp => {
			const related = projects.filter(p => exp.projects?.includes(p.slug));
			return (
				<ScrollAnimation key={exp.company}>
					<div className="relative pl-6 sm:pl-10">
						<span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-black" />
						<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
							<h3 className="text-xl sm:text-2xl font-semibold">
								{exp.role} <span className="text-gray-500">@</span> {exp.company}
							</h3>
							<span className="font-mono text-xs sm:text-sm text-gray-400 shrink-0">{exp.period}</span>
						</div>
						<p className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
							<MapPin className="w-3.5 h-3.5" /> {exp.location}
						</p>
						{compact ? (
							<p className="text-gray-300 leading-relaxed mb-4">{exp.summary}</p>
						) : (
							<ul className="space-y-2.5 mb-5">
								{exp.highlights.map(h => (
									<li key={h} className="flex gap-3 text-gray-300 leading-relaxed text-sm sm:text-base">
										<span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
										<span>{h}</span>
									</li>
								))}
							</ul>
						)}
						<div className="flex flex-wrap gap-2">
							{exp.stack.map(s => <TechChip key={s} label={s} />)}
						</div>
						{related.length > 0 && (
							<div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
								{related.map(p => (
									<Link
										key={p.slug}
										href={`/projects/${p.slug}`}
										className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
									>
										{p.name} <ArrowUpRight className="w-3.5 h-3.5" />
									</Link>
								))}
							</div>
						)}
					</div>
				</ScrollAnimation>
			);
		})}
	</div>
);

const Experience = () => (
	<div className="min-h-screen pt-28 px-4 max-w-5xl mx-auto pb-20">
		<SectionHeading
			eyebrow="Career"
			title="Experience"
			description="From RAG pipelines to running the full money path of a production platform — here is where I have worked and what I shipped."
		/>
		<ExperienceTimeline />
	</div>
);

export default Experience;
