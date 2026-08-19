"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HOBBY_PROJECTS } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Image from "next/image";
import ToolBadge from "../ui/ToolBadge";
import BorderGlow from "../ui/BorderGlow";

function toAbsoluteUrl(url: string) {
	if (!url || url === "#") return url;
	return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export default function PersonalProjects() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const { heading, items } = HOBBY_PROJECTS[lang];

	return (
		<section id="personal-projects" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					{heading}
				</h2>
				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 group">
					{items.map((project, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
							className="h-full grayscale hover:grayscale-0 transition duration-300"
						>
							<BorderGlow
								backgroundColor="#18181b"
								glowColor="160 80 60"
								colors={project.colors}
								borderRadius={12}
								glowIntensity={0.9}
								className="h-full"
							>
								<div className="flex h-full flex-col p-6 relative overflow-hidden group">
									<div className="mb-3 flex items-start justify-between gap-3">
										<h3 className="font-semibold text-zinc-50 text-lg">
											{project.title}
										</h3>
										{project.logo && (
											<div className="absolute h-50 w-50 -top-5 -right-5 shrink-0 -z-3 opacity-20">
												<Image
													src={project.logo}
													fill
													alt={`${project.title} logo`}
													className="object-contain"
												/>
											</div>
										)}
									</div>
									<p className="whitespace-pre-line text-md text-zinc-200 mr-30 mt-5">
										{project.description}
									</p>
									<div className="mt-auto">
										{project.sidenote && (
											<p className="mt-3 whitespace-pre-line text-sm italic text-zinc-300">
												"{project.sidenote}"
											</p>
										)}
										<div className="mt-4 flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<ToolBadge key={tag} tag={tag} />
											))}
										</div>
									</div>
									{(project.href || project.repo) && (
										<div className="mt-4 flex gap-4 text-sm font-medium">
											{project.href && (
												<a
													href={toAbsoluteUrl(project.href)}
													target="_blank"
													rel="noopener noreferrer"
													className="text-zinc-500 transition hover:text-zinc-50"
												>
													Live ↗
												</a>
											)}
											{project.repo && (
												<a
													href={toAbsoluteUrl(project.repo)}
													target="_blank"
													rel="noopener noreferrer"
													className="text-zinc-500 transition hover:text-zinc-50"
												>
													GitHub ↗
												</a>
											)}
										</div>
									)}
								</div>
							</BorderGlow>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
