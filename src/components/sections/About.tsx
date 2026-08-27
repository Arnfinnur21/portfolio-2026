"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Image from "next/image";
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
				<div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-8">
					<div className="space-y-4 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
						{about.paragraphs.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
					<div className="relative w-52 h-52 shrink-0 transition duration-300">
						<div
							className="relative w-52 h-52 overflow-hidden"
							style={{
								clipPath:
									"polygon(0% 0%, 72% 0%, 100% 28%, 100% 100%, 28% 100%, 0% 72%)",
							}}
						>
							<Image
								src="/ak_port.webp"
								fill
								alt="Profile Image"
								className="object-cover scale-[1.6] translate-y-8"
							/>
						</div>
						<div
							className="absolute -bottom-4 -right-4 h-24 w-24 overflow-hidden bg-black shadow-lg sm:h-28 sm:w-28"
							style={{
								clipPath:
									"polygon(0% 0%, 72% 0%, 100% 28%, 100% 100%, 28% 100%, 0% 72%)",
							}}
						>
							<Image
								src="/aklogo.png"
								fill
								alt="AK Logo"
								className="object-contain p-2.5 invert"
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
