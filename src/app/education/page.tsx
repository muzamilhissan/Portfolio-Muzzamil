import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Muzzamil Hissan',
	description: 'Muzzamil Hissan\'s educational background.',
};

export default function EducationPage() {
	return <Education />;
}