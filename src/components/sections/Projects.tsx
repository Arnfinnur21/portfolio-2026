"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { useLang } from "../LangProvider";

export default function Projects() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const projects = PROJECTS[lang];

	return (
		<section id="projects" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Projects
				</h2>
				<div className="grid gap-6 sm:grid-cols-2">
					{projects.map((project, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
							className="group rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
						>
							<h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
								{project.title}
							</h3>
							<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
								{project.description}
							</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="mt-4 flex gap-4 text-sm font-medium">
								{project.href && (
									<a
										href={project.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
									>
										Live ↗
									</a>
								)}
								{project.repo && (
									<a
										href={project.repo}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
									>
										GitHub ↗
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
