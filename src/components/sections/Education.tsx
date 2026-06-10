"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/data";
import { EducationItem } from "@/lib/types";
import { useLang } from "../ui/LangProvider";

function EducationDot({ item }: { item: EducationItem }) {
	return (
		<div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
			{item.image ? (
				<span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white p-1.5">
					<Image
						src={item.image}
						alt={item.institution}
						width={28}
						height={28}
						className="object-contain"
					/>
				</span>
			) : (
				<GraduationCap className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
			)}
		</div>
	);
}

function EducationContent({
	item,
	align,
}: {
	item: EducationItem;
	align: "left" | "right";
}) {
	return (
		<div
			className={`space-y-1 ${
				align === "right" ? "md:text-right" : "md:text-left"
			}`}
		>
			<h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
				{item.degree}
			</h3>
			<p className="text-sm text-zinc-500">{item.institution}</p>
			<p className="text-sm text-zinc-500">{item.type}</p>
			<p className="text-xs text-zinc-400">{item.period}</p>
		</div>
	);
}

export default function Education() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const education = EDUCATION[lang];

	return (
		<section id="education" className="mx-auto max-w-5xl px-6 py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					{education.heading}
				</h2>
				<div className="relative">
					<div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-zinc-200 md:left-1/2 dark:bg-zinc-700" />
					<div className="space-y-10">
						{education.items.map((item, i) => {
							const isLeft = i % 2 === 0;
							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: i * 0.1 + 0.2 }}
									className="grid grid-cols-[3rem_1fr] items-center gap-x-4 gap-y-2 md:grid-cols-[1fr_3rem_1fr] md:gap-x-6"
								>
									<div
										className={`row-start-1 ${
											isLeft
												? "col-start-2 md:col-start-1"
												: "col-start-2 md:col-start-3"
										}`}
									>
										<EducationContent
											item={item}
											align={isLeft ? "right" : "left"}
										/>
									</div>
									<div className="col-start-1 row-start-1 md:col-start-2">
										<EducationDot item={item} />
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
