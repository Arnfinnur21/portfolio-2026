"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "@/lib/data";
import { useLang } from "../LangProvider";

export default function Experience() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const experiences = EXPERIENCES[lang];

	return (
		<section id="experience" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Experience
				</h2>
				<div className="space-y-10">
					{experiences.map((exp, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -20 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
							className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-700"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-2">
								<h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
									{exp.role} <span className="text-zinc-500">@ {exp.company}</span>
								</h3>
								<span className="text-sm text-zinc-500">{exp.period}</span>
							</div>
							<p className="mt-2 text-zinc-600 dark:text-zinc-400">
								{exp.description}
							</p>
							{exp.tags && (
								<div className="mt-3 flex flex-wrap gap-2">
									{exp.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
