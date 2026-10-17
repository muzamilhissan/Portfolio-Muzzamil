import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Muzzamil Hissan — Full-Stack Engineer',
	description: 'Muzzamil Hissan — Full-Stack & AI Automation Engineer shipping production SaaS end to end: PublisherOS, Zyrean, SehatDoc, SehatLab and more. Next.js, React, Node.js, PostgreSQL, OpenAI, Stripe, Docker.',
	keywords: 'Muzzamil Hissan, Full-Stack Engineer, AI Automation Engineer, Next.js, React, Node.js, TypeScript, PostgreSQL, Supabase, Prisma, OpenAI, SaaS, Pakistan, Islamabad',
	authors: [{ name: 'Muzzamil Hissan' }],
	creator: 'Muzzamil Hissan',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://github.com/muzamilhissan',
		title: 'Muzzamil Hissan — Full-Stack Engineer',
		description: 'Production SaaS, healthcare, ERP/CRM and AI platforms — built and owned end to end.',
		siteName: 'Muzzamil Hissan Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Muzzamil Hissan — Full-Stack Engineer',
		description: 'Production SaaS, healthcare, ERP/CRM and AI platforms — built and owned end to end.',
		creator: '@muzamilhissan',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://github.com/muzamilhissan'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export const viewport: Viewport = {
	themeColor: '#000000',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}