'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { SectionHeading } from '@/components/ui';
import { profile } from '@/data/profile';

const inputClass =
	'w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40 outline-none transition-colors text-sm sm:text-base';

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

	// No backend: compose the message in the visitor's own mail client.
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const body = `${form.message}\n\n— ${form.name} (${form.email})`;
		window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
	};

	const channels = [
		{ icon: <Mail className="w-5 h-5" />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
		{ icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', value: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
		{ icon: <Phone className="w-5 h-5" />, label: 'Phone', value: profile.phone, href: `tel:+${profile.whatsapp}` },
		{ icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'linkedin.com/in/muzzamilhissan', href: profile.linkedin },
		{ icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'github.com/muzamilhissan', href: profile.github },
		{ icon: <MapPin className="w-5 h-5" />, label: 'Location', value: `${profile.location} · Remote-friendly (PKT, UTC+5)` },
	];

	return (
		<div className="min-h-screen pt-28 px-4 max-w-6xl mx-auto pb-20">
			<SectionHeading
				eyebrow="Contact"
				title="Let's build something."
				description="Tell me about the product, the deadline and what success looks like. I usually reply within a day."
			/>

			<div className="grid lg:grid-cols-[1fr,1.4fr] gap-8 sm:gap-10">
				<ScrollAnimation className="space-y-3">
					{channels.map(c => {
						const inner = (
							<>
								<div className="p-2.5 rounded-lg bg-white/[0.06] text-gray-300 group-hover:text-emerald-400 transition-colors">{c.icon}</div>
								<div className="min-w-0">
									<p className="text-xs text-gray-500">{c.label}</p>
									<p className="text-sm sm:text-base truncate">{c.value}</p>
								</div>
							</>
						);
						return c.href ? (
							<a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/25 transition-colors">
								{inner}
							</a>
						) : (
							<div key={c.label} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">{inner}</div>
						);
					})}
				</ScrollAnimation>

				<ScrollAnimation>
					<form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-5">
						<h3 className="text-lg sm:text-xl font-semibold">Send a message</h3>
						<div className="grid md:grid-cols-2 gap-5">
							<label className="block">
								<span className="block text-sm text-gray-400 mb-2">Name</span>
								<input required className={inputClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
							</label>
							<label className="block">
								<span className="block text-sm text-gray-400 mb-2">Email</span>
								<input type="email" required className={inputClass} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
							</label>
						</div>
						<label className="block">
							<span className="block text-sm text-gray-400 mb-2">Subject</span>
							<input required className={inputClass} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
						</label>
						<label className="block">
							<span className="block text-sm text-gray-400 mb-2">Message</span>
							<textarea rows={6} required className={`${inputClass} resize-none`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
						</label>
						<button type="submit" className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
							Open in email <Send className="w-4 h-4" />
						</button>
						<p className="text-xs text-gray-500 text-center">Opens your email app with the message filled in.</p>
					</form>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default Contact;
