"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";
import Aurora from "../ui/Aurora";

const LETTER_STAGGER = 0.045;
const NAME_GAP = 0.15;
const LETTER_Z_STEP = 5;

export default function Hero3D() {
	const lang = useLang();
	const hero = HERO[lang];
	const [firstName, lastName] = HERO.ICE.name.split(" ");
	const firstNameLetters = firstName.toUpperCase().split("");
	const lastNameLetters = lastName.toUpperCase().split("");
	const lastNameDelay =
		0.1 + firstNameLetters.length * LETTER_STAGGER + NAME_GAP;

	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	// Background aurora recedes and drifts slower than the foreground.
	const auroraY = useTransform(scrollYProgress, [0, 1], [0, 140]);
	const auroraScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	// The whole content plane tilts back and rises as if pivoting away from the viewer.
	const contentRotateX = useTransform(scrollYProgress, [0, 1], [0, 7]);
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

	return (
		<section
			ref={sectionRef}
			style={{ perspective: 1400 }}
			className="relative isolate flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
		>
			<motion.div
				style={{
					transformStyle: "preserve-3d",
					rotateX: contentRotateX,
					y: contentY,
					opacity: contentOpacity,
				}}
				className="relative flex h-full w-full flex-col items-center justify-center"
			>
				<motion.div
					style={{ y: auroraY, scale: auroraScale, z: -350 }}
					className="absolute inset-0 -z-10 w-screen left-1/2 opacity-50 hover:opacity-100 transition duration-300 -translate-x-1/2 mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
				>
					<Aurora
						colorStops={["#F43F5E", "#7cff67", "#5227FF"]}
						amplitude={0.7}
						blend={1}
					/>
				</motion.div>

				<div
					style={{
						fontFamily: "var(--font-hero-name)",
						fontWeight: 1,
						transformStyle: "preserve-3d",
						transform: "translateZ(70px)",
					}}
					className="pointer-events-none absolute left-3 top-3 flex select-none italic text-[10vw] leading-[0.8] tracking-tighter text-white mix-blend-difference sm:left-6 sm:top-6 sm:text-[9vw]"
				>
					{firstNameLetters.map((ch, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 + i * LETTER_STAGGER, duration: 0.7 }}
							style={{ z: i * LETTER_Z_STEP }}
							className="inline-block"
						>
							{ch}
						</motion.span>
					))}
				</div>
				<div
					style={{
						fontFamily: "var(--font-hero-name)",
						fontWeight: 1,
						transformStyle: "preserve-3d",
						transform: "translateZ(70px)",
					}}
					className="pointer-events-none absolute bottom-3 right-3 flex select-none italic text-[10vw] leading-[0.8] tracking-tighter text-white mix-blend-difference sm:bottom-6 sm:right-6 sm:text-[9vw]"
				>
					{lastNameLetters.map((ch, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: 1 + lastNameDelay + i * LETTER_STAGGER,
								duration: 0.4,
							}}
							style={{ z: (lastNameLetters.length - i) * LETTER_Z_STEP }}
							className="inline-block"
						>
							{ch}
						</motion.span>
					))}
				</div>

				{hero.pronounciation && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
						style={{ transform: "translateZ(30px)" }}
						className="mt-1 text-sm italic text-zinc-400 dark:text-zinc-500"
					>
						{hero.pronounciation}
					</motion.p>
				)}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2 }}
					style={{ transform: "translateZ(30px)" }}
					className="mt-6 max-w-2xl text-2xl font-semibold italic tracking-tight text-white mix-blend-difference sm:text-3xl"
				>
					{hero.tagline}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.1 }}
					style={{ transform: "translateZ(30px)" }}
					className="mt-6 max-w-xl text-white mix-blend-difference"
				>
					{hero.bio}
				</motion.p>
			</motion.div>
		</section>
	);
}
