'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BrowserFrame, ProjectPlaceholder, TechChip } from '@/components/ui';
import type { Project } from '@/data/projects';

const ProjectCard = ({ project, large = false }: { project: Project; large?: boolean }) => {
	const cover = project.shots[0];
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.05] transition-all"
		>
			<div className={large ? 'lg:grid lg:grid-cols-[1.45fr,1fr] lg:gap-8 lg:items-center' : ''}>
			<div className="overflow-hidden rounded-xl">
				<div className="transition-transform duration-500 group-hover:scale-[1.02]">
					{cover ? (
						<BrowserFrame src={cover.src} alt={`${project.name} — ${cover.caption}`} url={project.live?.replace('https://', '')} />
					) : (
						<ProjectPlaceholder name={project.name} accent={project.accent} />
					)}
				</div>
			</div>
			<div className={`px-1 sm:px-2 pt-5 pb-2 ${large ? 'lg:pt-0 lg:pr-4' : ''}`}>
				<div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-500">
					<span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
					<span>{project.category}</span>
					<span>·</span>
					<span>{project.org}</span>
				</div>
				<div className="flex items-start justify-between gap-3">
					<h3 className={`${large ? 'text-2xl sm:text-3xl' : 'text-xl'} font-semibold tracking-tight`}>{project.name}</h3>
					<ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
				</div>
				<p className="text-gray-400 mt-2 leading-relaxed text-sm sm:text-base">{project.tagline}</p>
				{large && (
					<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 mt-5">
						{project.metrics.slice(0, 4).map(m => (
							<div key={m.label} className="rounded-lg bg-white/[0.04] px-3 py-2.5">
								<div className="text-lg font-semibold">{m.value}</div>
								<div className="text-[11px] text-gray-500 leading-tight">{m.label}</div>
							</div>
						))}
					</div>
				)}
				<div className="flex flex-wrap gap-2 mt-4">
					{project.tags.map(t => <TechChip key={t} label={t} />)}
				</div>
			</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
