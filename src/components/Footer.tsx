'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

const pageLinks = [
	{ name: 'About', path: '/about' },
	{ name: 'Experience', path: '/experience' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Skills', path: '/skills' },
	{ name: 'Education', path: '/education' },
	{ name: 'Contact', path: '/contact' },
];

const Footer = () => (
	<footer className="relative mt-24 border-t border-white/10">
		<div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
		<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
			<div className="grid grid-cols-2 md:grid-cols-[1.5fr,1fr,1fr] gap-10 py-12">
				<div className="col-span-2 md:col-span-1 space-y-4">
					<Link href="/" className="flex items-center gap-3">
						<Code2 className="w-7 h-7" />
						<span className="text-lg font-bold">{profile.name}</span>
					</Link>
					<p className="text-sm text-gray-400 max-w-xs">{profile.role}. Shipping production SaaS end to end.</p>
					<div className="flex gap-4 text-gray-400">
						<a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
						<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
						<a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
						<a href={`mailto:${profile.email}`} className="hover:text-white transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-4">Pages</h3>
					<ul className="space-y-2.5">
						{pageLinks.map(l => (
							<li key={l.path}><Link href={l.path} className="text-sm text-gray-400 hover:text-white transition-colors">{l.name}</Link></li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-4">Projects</h3>
					<ul className="space-y-2.5">
						{projects.map(p => (
							<li key={p.slug}><Link href={`/projects/${p.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">{p.name}</Link></li>
						))}
					</ul>
				</div>
			</div>
			<div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-500">
				<p>© {new Date().getFullYear()} {profile.name}</p>
				<p>Built with Next.js, Tailwind CSS & Framer Motion</p>
			</div>
		</div>
	</footer>
);

export default Footer;
