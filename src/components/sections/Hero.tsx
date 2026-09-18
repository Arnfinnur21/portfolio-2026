"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";
import MaskedHeadingImpl from "@/components/ui/MaskedHeading";
import WebThreadsImpl from "@/components/ui/WebThreads";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MaskedHeading = MaskedHeadingImpl as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WebThreads = WebThreadsImpl as any;

export default function Hero() {
	const lang = useLang();
	const hero = HERO[lang];
	const [firstName, lastName] = HERO.ICE.name.split(" ");
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const cardY = useTransform(scrollYProgress, [0, 1], [0, -110]);
	const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
	const cardOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
	const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

	return (
		<section
			ref={sectionRef}
			className="relative flex h-screen w-screen items-center overflow-hidden px-6 sm:px-12 lg:px-24"
		>
			<motion.div
				style={{ y: blobY }}
				className="pointer-events-none absolute inset-0 -z-10"
			>
				<WebThreads
					color1="#0400ff"
					color2="#ff0000"
					color3="#ffffff"
					speed={0.05}
					threadCount={7}
					frequency={5.0}
					spread={0.18}
					taper={1.0}
					position={0.5}
					fanMode="left"
					glow={0.02}
					falloff={0.6}
					thickness={1.1}
					brightness={0.6}
					opacity={0.19}
					mirror={true}
					shimmer={false}
					grain={false}
					grainIntensity={0.05}
					mouseInteraction={false}
					mouseStrength={0}
				/>
			</motion.div>

			<motion.div
				style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="flex w-full flex-col items-start gap-5 text-left"
			>
				{/* {hero.greeting && (
					<p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400">
						{hero.greeting}
					</p>
				)} */}
				<h1 className="font-heading flex w-full flex-col items-start">
					<span className="block text-7xl font-normal leading-[0.85] tracking-tight text-zinc-50 sm:text-8xl md:text-9xl lg:text-[11rem]">
						{firstName}
					</span>
					<MaskedHeading
						text={lastName}
						tag="span"
						style={{ display: "block", width: "100%" }}
						mediaType="image"
						src="/MASK_BG.jpg"
						fillScale={1.2}
						parallax={0}
						reveal="wipe"
						trigger="view"
						saturation={3.5}
						stagger={0.13}
						align="left"
						weight={800}
						tracking={-0.01}
						lineHeight={0.95}
						textScale={0.16}
					/>
				</h1>
				{hero.pronounciation && (
					<p className="text-sm italic text-zinc-400">{hero.pronounciation}</p>
				)}
				<p className="max-w-xl text-lg font-medium text-zinc-200 sm:text-xl">
					{hero.tagline}
				</p>
				<p className="max-w-xl text-sm text-zinc-400 sm:text-base">{hero.bio}</p>
				<a
					href={hero.ctaHref}
					className="mt-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
				>
					{hero.ctaLabel}
				</a>
			</motion.div>

			<motion.div
				style={{ opacity: cueOpacity }}
				className="absolute bottom-8 left-6 sm:left-12 lg:left-24"
			>
				<motion.span
					animate={{ y: [0, 8, 0], opacity: [0.7, 0.2, 0.7] }}
					transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					className="block h-9 w-px bg-linear-to-b from-zinc-400 to-transparent"
				/>
			</motion.div>
		</section>
	);
}
