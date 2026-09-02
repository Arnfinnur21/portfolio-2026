"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CONTACT, TOOL_LOGOS } from "@/lib/data";
import { useLang } from "../ui/LangProvider";

const DARK_INVERT = new Set(["Next.js", "Vercel"]);

const ORBIT_TOOLS = (() => {
	const seen = new Set<string>();
	const tools: { name: string; src: string }[] = [];
	for (const [name, src] of Object.entries(TOOL_LOGOS)) {
		if (seen.has(src)) continue;
		seen.add(src);
		tools.push({ name, src });
	}
	return tools;
})();

const RADIUS = 95;
const ORBIT_DURATION = 50;

const FIELD_LABELS = {
	ICE: { email: "Netfang", phone: "Sími" },
	ENG: { email: "Email", phone: "Phone" },
};

function formatPhone(phone: string, lang: "ICE" | "ENG") {
	const local = `${phone.slice(0, 3)} ${phone.slice(3)}`;
	return lang === "ENG" ? `+354 ${local}` : local;
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
		</svg>
	);
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
		</svg>
	);
}

function FooterField({
	label,
	value,
	href,
}: {
	label: string;
	value: string;
	href: string;
}) {
	const external = href.startsWith("http");
	return (
		<a
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			className="group/field block w-fit"
		>
			<span className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
				{label}
			</span>
			<span className="block text-base text-zinc-700 transition-colors group-hover/field:text-zinc-950 dark:text-zinc-300 dark:group-hover/field:text-zinc-50">
				{value}
			</span>
		</a>
	);
}

export default function Footer() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const contact = CONTACT[lang];
	const labels = FIELD_LABELS[lang];
	const [hovered, setHovered] = useState(false);

	return (
		<footer className="border-t border-zinc-100 dark:border-zinc-900">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2"
			>
				<div className="space-y-8">
					<h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
						{contact.heading}
					</h3>
					<div className="space-y-6">
						<FooterField
							label={labels.email}
							value={contact.email}
							href={`mailto:${contact.email}`}
						/>
						<FooterField
							label={labels.phone}
							value={formatPhone(contact.phone, lang)}
							href={`tel:+354${contact.phone}`}
						/>
					</div>
					<div className="flex gap-5">
						<a
							href={contact.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
						>
							<GithubIcon className="h-6 w-6" />
						</a>
						<a
							href={contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
						>
							<LinkedinIcon className="h-6 w-6" />
						</a>
					</div>
				</div>

				<div className="flex justify-center md:justify-end">
					<div className="relative h-80 w-80 origin-center scale-75 sm:scale-90 md:scale-100">
						<motion.div
							className="absolute inset-0"
							animate={{ rotate: 360 }}
							transition={{
								duration: ORBIT_DURATION,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							{ORBIT_TOOLS.map(({ name, src }, i) => {
								const angle = (i / ORBIT_TOOLS.length) * Math.PI * 2;
								const x = (RADIUS * Math.cos(angle)).toFixed(2);
								const y = (RADIUS * Math.sin(angle)).toFixed(2);
								return (
									<div
										key={name}
										className="absolute left-1/2 top-1/2"
										style={{ transform: `translate(${x}px, ${y}px)` }}
									>
										<motion.div
											className="-translate-x-1/2 -translate-y-1/2"
											animate={{ rotate: -360 }}
											transition={{
												duration: ORBIT_DURATION,
												repeat: Infinity,
												ease: "linear",
											}}
										>
											<span
												title={name}
												className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 shadow-sm dark:bg-zinc-900"
											>
												<Image
													src={src}
													alt={name}
													width={18}
													height={18}
													className={`object-contain transition-all duration-500 ${hovered ? "grayscale-0" : "grayscale"
														}${DARK_INVERT.has(name) ? " dark:invert" : ""}`}
												/>
											</span>
										</motion.div>
									</div>
								);
							})}
						</motion.div>

						<div className="absolute inset-0 flex items-center justify-center">
							<div
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
								className="flex h-32 w-32 items-center justify-center rounded-full bg-black shadow-lg transition-transform duration-300 hover:scale-105"
							>
								<Image
									src="/aklogo.png"
									alt="AK Logo"
									width={128}
									height={128}
									className="object-contain p-4 invert"
								/>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</footer>
	);
}
