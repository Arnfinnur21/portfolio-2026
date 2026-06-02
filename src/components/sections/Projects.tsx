"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { useLang } from "../LangProvider";
import BorderGlow from '../BorderGlow';

function toAbsoluteUrl(url: string) {
	if (!url || url === "#") return url;
	return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

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
						<BorderGlow
							edgeSensitivity={30}
							glowColor="40 80 80"
							backgroundColor="#120F17"
							borderRadius={10}
							glowRadius={40}
							glowIntensity={1}
							coneSpread={25}
							animated={false}
							colors={['#c084fc', '#f472b6', '#38bdf8']}
						>
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: i * 0.1 + 0.2 }}
								className="group relative overflow-hidden p-6 transition"
							>
								{project.ribbon && project.ribbonText && (
									<div className="absolute right-[-28px] top-[18px] w-[110px] rotate-45 bg-indigo-500/90 py-[5px] text-center text-[10px] font-semibold tracking-wide text-white shadow-sm">
										{project.ribbonText}
									</div>
								)}
								<h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
									{project.title}
								</h3>
								<p className="mt-2 whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400">
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
											href={toAbsoluteUrl(project.href)}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
										>
											Live ↗
										</a>
									)}
									{project.repo && (
										<a
											href={toAbsoluteUrl(project.repo)}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-50"
										>
											GitHub ↗
										</a>
									)}
								</div>
							</motion.div>
						</BorderGlow>
					))}
				</div>
			</motion.div>
		</section>
	);
}
