"use client";

import { motion, useInView } from "framer-motion";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/LangProvider";
import React from "react";

export default function Hero() {
	const lang = useLang();
	const hero = HERO[lang];
	const name = HERO.ICE.name;
	const splittedname = name.split("");

	const pullupVariant = {
		initial: { y: 10, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.02,
			},
		}),
	};
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section className="flex min-h-screen flex-col items-center justify-center px-6 text-center from-gray-800 to-background bg-linear-to-br">
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
			>
				{hero.greeting}
			</motion.p>
			{/* <motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl"
			>
				{hero.name}
			</motion.h1> */}
			<div className="flex">
				{splittedname.map((current, i) => (
					<motion.div
						key={i}
						ref={ref}
						variants={pullupVariant}
						initial="initial"
						animate={isInView ? "animate" : ""}
						custom={i}
						className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl"
					>
						{current == " " ? <span>&nbsp;</span> : current}
					</motion.div>
				))}
			</div>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="text-2xl font-bold tracking-tight text-zinc-500 dark:text-grey-50 sm:text-2xl mt-2"
			>
				{hero?.pronounciation}
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="mt-4 text-xl text-zinc-500 dark:text-zinc-400"
			>
				{hero.tagline}
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="mt-6 max-w-xl text-zinc-600 dark:text-zinc-400"
			>
				{hero.bio}
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="mt-10 flex gap-4"
			>
				<a
					href={hero.ctaHref}
					className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
				>
					{hero.ctaLabel}
				</a>
				{/* <a
					href={hero.resumeHref}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400"
				>
					Resume
				</a> */}
			</motion.div>
		</section>
	);
}
