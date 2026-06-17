"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Image from "next/image";
import ToolBadge from "../ui/ToolBadge";
export default function Experience() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const experiences = EXPERIENCES[lang];
	const recent = experiences.items.filter((exp) => !exp.older);
	const older = experiences.items.filter((exp) => exp.older);

	return (
		<section id="experience" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					{experiences.heading}
				</h2>
				<div className="space-y-10">
					{recent.map((exp, i) => (
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
								<span
									className={`text-sm  ${exp.active ? "text-zinc-100 font-bold" : "text-zinc-500"}`}
								>
									{exp.period}
								</span>
							</div>
							<div className="flex flex-row justify-between gap-30">
								<p className="mt-2 text-zinc-600 dark:text-zinc-400">
									{exp.description}
								</p>
								{"image" in exp && exp.image && (
									<Image
										src={exp.image}
										alt={"logo"}
										width={80}
										height={80}
										className="shrink-0 object-contain"
									/>
								)}
							</div>
							{/* {exp.tags && (
								<div className="mt-3 flex flex-wrap gap-2">
									{exp.tags.map((tag) => (
										<ToolBadge key={tag} tag={tag} />
									))}
								</div>
							)} */}
						</motion.div>
					))}
				</div>
				{older.length > 0 && (
					<div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
							{experiences.olderHeading}
						</h3>
						<ul className="space-y-2">
							{older.map((exp, i) => (
								<li
									key={i}
									className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-zinc-600 dark:text-zinc-400"
								>
									<span>
										{exp.role} <span className="text-zinc-500">@ {exp.company}</span>
									</span>
									<span className="text-zinc-500">{exp.period}</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</motion.div>
		</section>
	);
}
