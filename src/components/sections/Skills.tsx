"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/data";
import { useLang } from "../LangProvider";

export default function Skills() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const skills = SKILLS[lang];

	return (
		<section id="skills" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Skills
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					{skills.map((group, i) => (
						<motion.div
							key={group.category}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
						>
							<h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
								{group.category}
							</h3>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
									>
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
