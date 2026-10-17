'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading, TechChip } from '@/components/ui';
import { education } from '@/data/profile';

const Education = () => (
	<div className="min-h-screen pt-28 px-4 max-w-5xl mx-auto pb-20">
		<SectionHeading eyebrow="Education" title="Where I studied" />
		<div className="space-y-6">
			{education.map(edu => (
				<ScrollAnimation key={edu.school}>
					<div className="grid md:grid-cols-[260px,1fr] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
						<div className="relative h-48 md:h-full">
							<Image src={edu.image} alt={edu.school} fill className="object-cover" sizes="(max-width: 768px) 100vw, 260px" />
						</div>
						<div className="p-6 sm:p-8">
							<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
								<h3 className="text-xl sm:text-2xl font-semibold">{edu.school}</h3>
								<span className="font-mono text-sm text-gray-400">{edu.period}</span>
							</div>
							<p className="text-gray-300 mt-1">{edu.degree}</p>
							<p className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
								<MapPin className="w-3.5 h-3.5" /> {edu.location}
							</p>
							<p className="text-gray-400 mt-4 leading-relaxed">{edu.detail}</p>
							<div className="flex flex-wrap gap-2 mt-4">
								{edu.tags.map(t => <TechChip key={t} label={t} />)}
							</div>
						</div>
					</div>
				</ScrollAnimation>
			))}
		</div>
	</div>
);

export default Education;
