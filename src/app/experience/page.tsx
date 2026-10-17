import Experience from '@/views/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Muzzamil Hissan',
	description: 'Professional experience of Muzzamil Hissan.',
};

export default function ExperiencePage() {
	return <Experience />;
}