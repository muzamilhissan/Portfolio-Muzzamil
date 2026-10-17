'use client';

import { Code2, Layout, Server, Database, Brain, CreditCard, ShieldCheck, Cloud, FlaskConical } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading } from '@/components/ui';
import { skillGroups } from '@/data/profile';

const icons: Record<string, React.ReactNode> = {
	Languages: <Code2 className="w-5 h-5" />,
	Frontend: <Layout className="w-5 h-5" />,
	Backend: <Server className="w-5 h-5" />,
	Databases: <Database className="w-5 h-5" />,
	'AI & ML': <Brain className="w-5 h-5" />,
	'Payments & Integrations': <CreditCard className="w-5 h-5" />,
	'Auth & Security': <ShieldCheck className="w-5 h-5" />,
	'Cloud & DevOps': <Cloud className="w-5 h-5" />,
	'Testing & Data': <FlaskConical className="w-5 h-5" />,
};

export const SkillsGrid = () => (
	<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
		{skillGroups.map(group => (
			<ScrollAnimation key={group.category}>
				<div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm hover:border-white/20 transition-colors">
					<div className="flex items-center gap-3 mb-4">
						<div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">{icons[group.category]}</div>
						<h3 className="font-semibold">{group.category}</h3>
					</div>
					<div className="flex flex-wrap gap-2">
						{group.items.map(item => (
							<span key={item} className="px-2.5 py-1 text-xs sm:text-sm rounded-md bg-white/[0.05] text-gray-300">
								{item}
							</span>
						))}
					</div>
				</div>
			</ScrollAnimation>
		))}
	</div>
);

const Skills = () => (
	<div className="min-h-screen pt-28 px-4 max-w-6xl mx-auto pb-20">
		<SectionHeading
			eyebrow="Toolbox"
			title="Technical Skills"
			description="The stack I use to take a product from schema to production — and keep it running."
		/>
		<SkillsGrid />
	</div>
);

export default Skills;
