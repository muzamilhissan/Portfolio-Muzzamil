import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/views/ProjectDetail';
import { getProject, projects } from '@/data/projects';

export function generateStaticParams() {
	return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	const project = getProject(params.slug);
	if (!project) return {};
	return {
		title: `${project.name} — Muzzamil Hissan`,
		description: project.tagline,
	};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = getProject(params.slug);
	if (!project) notFound();
	return <ProjectDetail project={project} />;
}
