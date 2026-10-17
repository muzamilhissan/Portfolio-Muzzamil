'use client';

import { useState } from 'react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading } from '@/components/ui';
import ProjectCard from '@/components/ProjectCard';
import { projects, type Project } from '@/data/projects';

const filters: ('All' | Project['category'])[] = ['All', 'SaaS', 'Healthcare', 'ERP & CRM', 'Marketplace'];

const Projects = () => {
	const [filter, setFilter] = useState<(typeof filters)[number]>('All');
	const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);

	return (
		<div className="min-h-screen pt-28 px-4 max-w-6xl mx-auto pb-20">
			<SectionHeading
				eyebrow="Selected work"
				title="Projects"
				description="Production platforms I have architected and shipped — multi-tenant SaaS, healthcare systems, ERP/CRM and marketplaces."
			/>

			<div className="flex flex-wrap gap-2 mb-10">
				{filters.map(f => (
					<button
						key={f}
						onClick={() => setFilter(f)}
						className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
							filter === f ? 'bg-white text-black border-white' : 'border-white/15 text-gray-400 hover:text-white hover:border-white/30'
						}`}
					>
						{f}
					</button>
				))}
			</div>

			<div className="grid md:grid-cols-2 gap-5 sm:gap-6">
				{visible.map(p => (
					<ScrollAnimation key={p.slug}>
						<ProjectCard project={p} />
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;
