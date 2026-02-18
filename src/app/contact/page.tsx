import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Muzzamil Hissan',
	description: 'Get in touch with Muzzamil Hissan, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}