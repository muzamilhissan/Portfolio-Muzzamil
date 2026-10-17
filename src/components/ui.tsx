'use client';

import { ScrollAnimation } from '@/components/ScrollAnimation';

export const SectionHeading = ({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description?: string;
}) => (
	<ScrollAnimation className="mb-10 sm:mb-14">
		<p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-emerald-400/90 mb-3">
			{eyebrow}
		</p>
		<h2 className="text-3xl sm:text-5xl font-bold tracking-tight gradient-text">{title}</h2>
		{description && (
			<p className="mt-4 text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">{description}</p>
		)}
	</ScrollAnimation>
);

export const TechChip = ({ label }: { label: string }) => (
	<span className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.06] border border-white/10 text-gray-300">
		{label}
	</span>
);

/** Screenshot wrapped in a minimal browser chrome. */
export const BrowserFrame = ({
	src,
	alt,
	url,
	className = '',
	priority = false,
}: {
	src: string;
	alt: string;
	url?: string;
	className?: string;
	priority?: boolean;
}) => (
	<div className={`rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0e] shadow-2xl shadow-black/50 ${className}`}>
		<div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
			<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
			<span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
			<span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
			{url && (
				<span className="ml-3 flex-1 truncate rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] font-mono text-gray-500">
					{url}
				</span>
			)}
		</div>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img
			src={src}
			alt={alt}
			loading={priority ? 'eager' : 'lazy'}
			className="w-full aspect-[16/10] object-cover object-top"
		/>
	</div>
);

/** Fallback visual when a project has no public screenshot (private / client work). */
export const ProjectPlaceholder = ({ name, accent }: { name: string; accent: string }) => (
	<div
		className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center"
		style={{ background: `radial-gradient(circle at 30% 20%, ${accent}55, transparent 60%), radial-gradient(circle at 80% 90%, ${accent}33, transparent 55%), #0c0c0e` }}
	>
		<div className="absolute inset-0 gradient-grid opacity-60" />
		<span className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white/90">{name}</span>
	</div>
);
