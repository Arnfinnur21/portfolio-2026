"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "@/lib/data";
import { useLang } from "../LangProvider";

export default function About() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const about = ABOUT[lang];
	return (
		<section id="about" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					{about.heading}
				</h2>
				<div className="space-y-4 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
					{about.paragraphs.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			</motion.div>
		</section>
	);
}
