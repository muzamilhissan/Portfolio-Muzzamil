import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Muzzamil Hissan',
	description: 'View Muzzamil Hissan\'s certifications and achievements.',
};

export default function CertificatesPage() {
	return <Certificates />;
}