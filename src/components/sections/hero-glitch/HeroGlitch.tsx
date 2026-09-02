"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";
import { cn } from "@/lib/utils";
import GlitchText from "./GlitchText";
import { useMediaQuery } from "./use-media-query";
import styles from "./glitch.module.css";

export default function HeroGlitch() {
	const lang = useLang();
	const hero = HERO[lang];
	const sectionRef = useRef<HTMLElement>(null);
	const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const range = (to: [number, number]): [number, number] =>
		reducedMotion ? [to[0], to[0]] : to;

	const contentY = useTransform(scrollYProgress, [0, 1], range([0, -60]));
	const contentOpacity = useTransform(scrollYProgress, [0, 1], range([1, 0]));

	const diamondRotate = useTransform(scrollYProgress, [0, 1], range([45, 130]));
	const diamondX = useTransform(scrollYProgress, [0, 1], range([0, 120]));
	const diamondY = useTransform(scrollYProgress, [0, 1], range([0, -40]));

	const barX = useTransform(scrollYProgress, [0, 1], range([-200, 260]));

	const ticksY = useTransform(scrollYProgress, [0, 1], range([0, -80]));
	const ticksOpacity = useTransform(scrollYProgress, [0, 1], range([1, 0.2]));

	const ringScale = useTransform(scrollYProgress, [0, 1], range([1, 1.6]));
	const ringOpacity = useTransform(scrollYProgress, [0, 1], range([0.5, 0]));

	return (
		<section
			ref={sectionRef}
			className="relative isolate flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 text-center"
		>
			<div className={styles.scanlines} />
			<div className={styles.noise} />
			<div className={styles.flash} />

			<svg
				viewBox="0 0 1600 900"
				preserveAspectRatio="xMidYMid slice"
				className="pointer-events-none absolute inset-0 h-full w-full"
			>
				<motion.circle
					cx={800}
					cy={450}
					r={260}
					fill="none"
					stroke="#f5f5f5"
					strokeWidth={1}
					style={{
						scale: ringScale,
						opacity: ringOpacity,
						transformOrigin: "800px 450px",
					}}
				/>
				<motion.rect
					x={1220}
					y={70}
					width={200}
					height={200}
					fill="none"
					stroke="#f5f5f5"
					strokeWidth={1.5}
					style={{
						rotate: diamondRotate,
						x: diamondX,
						y: diamondY,
						transformOrigin: "1320px 170px",
					}}
				/>
				<motion.rect
					x={-260}
					y={700}
					width={280}
					height={22}
					fill="#f5f5f5"
					style={{ x: barX }}
				/>
				<motion.g style={{ y: ticksY, opacity: ticksOpacity }}>
					{Array.from({ length: 6 }).map((_, i) => (
						<line
							key={i}
							x1={90}
							y1={200 + i * 40}
							x2={130}
							y2={200 + i * 40}
							stroke="#f5f5f5"
							strokeWidth={1}
							strokeOpacity={0.6}
						/>
					))}
				</motion.g>
			</svg>

			<div
				className={cn(styles.glitchBlock, styles.blockRed)}
				style={{ left: "34%", top: "38%", width: 60, height: 10 }}
			/>
			<div
				className={cn(styles.glitchBlock, styles.blockCyan)}
				style={{ right: "30%", top: "58%", width: 46, height: 8 }}
			/>

			<motion.div
				style={{ y: contentY, opacity: contentOpacity }}
				className="relative z-10 flex flex-col items-center"
			>
				<span className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-white/40">
					[ system: portfolio.exe — {new Date().getFullYear()} ]
				</span>
				<h1 className="text-[13vw] font-light italic leading-[0.85] tracking-tighter text-white sm:text-[8vw]">
					<GlitchText as="span" text={HERO.ICE.name} className={styles.sliceGlitch} />
				</h1>
				<p className="mt-6 max-w-xl font-mono text-sm text-white/50 sm:text-base">
					{hero.tagline}
				</p>
			</motion.div>
		</section>
	);
}
