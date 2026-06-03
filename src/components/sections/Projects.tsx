"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Ferrofluid from "../ui/Ferrofluid";

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
		<section id="projects" className="mx-auto py-24 w-screen">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="w-screen flex justify-center items-center flex-col"
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Projects
				</h2>
				<div className="w-full">
					{projects.map((project, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
							className="relative w-full overflow-hidden py-20 transition mask-image:radial-gradient(circle_at_center,black_80%,transparent_100%) grayscale hover:grayscale-0 duration-300"
						>
							{/* Full-width background */}
							<div className="absolute inset-0 -z-10 w-screen left-1/2 opacity-50 hover:opacity-100 transition duration-300 -translate-x-1/2 mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
								{/* @ts-expect-error JS component */}
								<Ferrofluid
									colors={[project.colors[0], project.colors[1]]}
									speed={0.05}
									scale={4.5}
									fluidity={0.15}
									rimWidth={0.18}
									sharpness={3.1}
									glow={2.4}
									flowDirection="down"
									opacity={1}
									mouseInteraction={false}
									mouseStrength={0}
									mouseRadius={0.05}
									timeOffset={i * 42}
								/>
							</div>
							{/* Centered content */}
							<div className="mx-auto max-w-2xl px-6">
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
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
