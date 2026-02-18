import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Muzzamil Hissan - Software Developer',
	description: 'Learn about Muzzamil Hissan, a full-stack developer with expertise in building web applications with modern web technologies.',
};

export default function AboutPage() {
	return <About />;
}