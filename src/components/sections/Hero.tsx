"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";
import ColorBendsImpl from "../ui/ColorBends";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ColorBends = ColorBendsImpl as any;

const LETTER_STAGGER = 0.045;
const NAME_GAP = 0.15;

export default function Hero() {
	const lang = useLang();
	const hero = HERO[lang];
	const [firstName, lastName] = HERO.ICE.name.split(" ");
	const firstNameLetters = firstName.toUpperCase().split("");
	const lastNameLetters = lastName.toUpperCase().split("");
	const lastNameDelay =
		0.1 + firstNameLetters.length * LETTER_STAGGER + NAME_GAP;

	return (
		<section className="relative isolate flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
			<div className="absolute inset-0 -z-20 opacity-70 transition duration-300 hover:opacity-100">
				<ColorBends
					rotation={90}
					speed={0.35}
					colors={["#00efff", "#bcbef6"]}
					transparent
					autoRotate={0}
					scale={0.9}
					frequency={1}
					warpStrength={1}
					mouseInfluence={0}
					parallax={0}
					noise={0}
					iterations={1}
					intensity={0.5}
					bandWidth={11.5}
				/>
			</div>

			<div
				style={{ fontFamily: "var(--font-hero-name)", fontWeight: 1 }}
				className="pointer-events-none absolute left-3 top-3 flex select-none italic text-[10vw] leading-[0.8] tracking-tighter text-white mix-blend-difference sm:left-6 sm:top-6 sm:text-[9vw]"
			>
				{firstNameLetters.map((ch, i) => (
					<motion.span
						key={i}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 + i * LETTER_STAGGER, duration: 0.7 }}
						className="inline-block"
					>
						{ch}
					</motion.span>
				))}
			</div>
			<div
				style={{ fontFamily: "var(--font-hero-name)", fontWeight: 1 }}
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
						className="inline-block"
					>
						{ch}
					</motion.span>
				))}
			</div>

			{/* <motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
			>
				{hero.greeting}
			</motion.p> */}
			{hero.pronounciation && (
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
					className="mt-1 text-sm italic text-zinc-400 dark:text-zinc-500"
				>
					{hero.pronounciation}
				</motion.p>
			)}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2 }}
				className="mt-6 max-w-2xl text-2xl font-semibold italic tracking-tight text-white mix-blend-difference sm:text-3xl"
			>
				{hero.tagline}
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.1 }}
				className="mt-6 max-w-xl text-white mix-blend-difference"
			>
				{hero.bio}
			</motion.p>
			{/* <motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.55 }}
				className="mt-10 flex gap-4"
			>
				<a
					href={hero.ctaHref}
					className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
				>
					{hero.ctaLabel}
				</a>
			</motion.div> */}
		</section>
	);
}
