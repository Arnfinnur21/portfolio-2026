"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT } from "@/lib/data";
import { useLang } from "../ui/LangProvider";

export default function Contact() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const contact = CONTACT[lang];

	return (
		<section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					{contact.heading}
				</h2>
				<p className="mx-auto max-w-md text-zinc-600 dark:text-zinc-400">
					{contact.blurb}
				</p>
				<div className="mt-10 flex flex-wrap justify-center gap-4">
					<a
						href={`mailto:${contact.email}`}
						className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
					>
						Say hello
					</a>
					<a
						href={contact.github}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300"
					>
						GitHub
					</a>
					<a
						href={contact.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300"
					>
						LinkedIn
					</a>
				</div>
			</motion.div>
		</section>
	);
}
