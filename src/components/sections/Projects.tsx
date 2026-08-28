"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Image from "next/image";
import Ferrofluid from "../ui/Ferrofluid";
import ToolBadge from "../ui/ToolBadge";

function toAbsoluteUrl(url?: string) {
	if (!url || url === "#") return url ?? "";
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
					{lang === "ICE" ? "Nýleg verkefni" : "Recent Projects"}
				</h2>
				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
					{projects.map((project, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: i * 0.1 + 0.2 }}
							className="group relative h-full overflow-hidden rounded-2xl bg-zinc-900 grayscale transition duration-300 hover:grayscale-0"
						>
							<div className="absolute inset-0 -z-10 opacity-50 transition duration-300 group-hover:opacity-100">
								{/* @ts-expect-error JS component */}
								<Ferrofluid
									colors={[project.colors[0], project.colors[1]]}
									speed={0.05}
									scale={2.2}
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
							<div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

							<div className="flex h-full flex-col p-6">
								<div className="mb-3 flex items-start justify-between gap-3">
									<h3 className="font-semibold text-zinc-50 text-lg">
										{project.title}
									</h3>
									<div
										className="relative h-16 w-16 shrink-0 transition duration-300 hover:filter-[drop-shadow(0_0_16px_var(--glow-color))]"
										style={{ "--glow-color": project.colors[1] } as React.CSSProperties}
									>
										<Image
											src={project.logo}
											fill
											sizes="64px"
											alt={`${project.title} logo`}
											className="object-contain"
										/>
									</div>
								</div>
								<p className="whitespace-pre-line text-sm text-zinc-200">
									{project.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<ToolBadge key={tag} tag={tag} />
									))}
								</div>
								{(project.href || project.repo) && (
									<div className="mt-auto flex gap-4 pt-4 text-sm font-medium">
										{project.href && (
											<a
												href={toAbsoluteUrl(project.href)}
												target="_blank"
												rel="noopener noreferrer"
												className="text-zinc-400 transition hover:text-zinc-50"
											>
												Live ↗
											</a>
										)}
										{project.repo && (
											<a
												href={toAbsoluteUrl(project.repo)}
												target="_blank"
												rel="noopener noreferrer"
												className="text-zinc-400 transition hover:text-zinc-50"
											>
												GitHub ↗
											</a>
										)}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
