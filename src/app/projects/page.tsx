import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Muzzamil Hissan',
	description: 'View Muzzamil Hissan\'s portfolio of projects.',
};

export default function ProjectsPage() {
	return <Projects />;
}