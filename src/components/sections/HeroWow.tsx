"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";

const LETTER_STAGGER = 0.045;
const NAME_GAP = 0.15;

const ROSE = "#F43F5E";
const GREEN = "#7cff67";
const VIOLET = "#5227FF";

type Node = [number, number];

// Four corner clusters (a loose "network" motif) plus two long connectors
// spanning the top and bottom edges, in a 1600x900 canvas.
const NODES: Node[] = [
	[140, 130], [300, 110], [230, 260], [90, 300], // 0-3 top-left
	[1460, 130], [1300, 110], [1370, 260], [1510, 300], // 4-7 top-right
	[140, 770], [300, 790], [230, 640], [90, 600], // 8-11 bottom-left
	[1460, 770], [1300, 790], [1370, 640], [1510, 600], // 12-15 bottom-right
];

const EDGES: [number, number][] = [
	[0, 1], [0, 2], [1, 2], [2, 3], [0, 3],
	[4, 5], [4, 6], [5, 6], [6, 7], [4, 7],
	[8, 9], [8, 10], [9, 10], [10, 11], [8, 11],
	[12, 13], [12, 14], [13, 14], [14, 15], [12, 15],
	[1, 5], [9, 13],
];

const SCAN_PATHS = [
	{
		d: "M -50,620 C 320,240 560,640 800,340 C 1040,40 1300,520 1650,220",
		color: GREEN,
		width: 2.5,
	},
	{
		d: "M -50,260 C 350,560 620,180 800,480 C 980,780 1280,380 1650,660",
		color: ROSE,
		width: 1.5,
	},
];

export default function HeroWow() {
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

	const networkDraw = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
	const ringDraw = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
	const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 70]);
	const scan0Offset = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const scan1Offset = useTransform(scrollYProgress, [0, 1], [0.1, 1.1]);

	const contentRotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
	const contentScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	const blobOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
	const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

	return (
		<section
			ref={sectionRef}
			style={{ perspective: 1600 }}
			className="relative isolate flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 text-center"
		>
			{/* ambient color wash, replaces the old Aurora */}
			<motion.div style={{ opacity: blobOpacity }} className="absolute inset-0 -z-30">
				<motion.div
					animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
					transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
					className="absolute left-[8%] top-[10%] h-[42vw] w-[42vw] rounded-full opacity-30 blur-[110px]"
					style={{ backgroundColor: VIOLET }}
				/>
				<motion.div
					animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
					transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
					className="absolute right-[10%] top-[20%] h-[36vw] w-[36vw] rounded-full opacity-25 blur-[110px]"
					style={{ backgroundColor: ROSE }}
				/>
				<motion.div
					animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
					transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
					className="absolute bottom-[5%] left-[30%] h-[38vw] w-[38vw] rounded-full opacity-20 blur-[110px]"
					style={{ backgroundColor: GREEN }}
				/>
			</motion.div>

			{/* trim-path graphic layer */}
			<svg
				viewBox="0 0 1600 900"
				preserveAspectRatio="xMidYMid slice"
				className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
			>
				<defs>
					<linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor={ROSE} />
						<stop offset="50%" stopColor={GREEN} />
						<stop offset="100%" stopColor={VIOLET} />
					</linearGradient>
				</defs>

				<motion.g style={{ rotate: ringRotate, transformOrigin: "800px 450px" }}>
					<motion.circle
						cx={800}
						cy={450}
						r={260}
						fill="none"
						stroke="url(#heroLineGrad)"
						strokeWidth={1}
						strokeOpacity={0.35}
						style={{ pathLength: ringDraw }}
					/>
					<motion.circle
						cx={800}
						cy={450}
						r={340}
						fill="none"
						stroke="url(#heroLineGrad)"
						strokeWidth={1}
						strokeOpacity={0.18}
						style={{ pathLength: ringDraw }}
					/>
				</motion.g>

				<g>
					{EDGES.map(([a, b], i) => (
						<motion.line
							key={i}
							x1={NODES[a][0]}
							y1={NODES[a][1]}
							x2={NODES[b][0]}
							y2={NODES[b][1]}
							stroke="url(#heroLineGrad)"
							strokeWidth={1}
							strokeOpacity={0.4}
							style={{ pathLength: networkDraw }}
						/>
					))}
					{NODES.map(([x, y], i) => (
						<motion.circle
							key={i}
							cx={x}
							cy={y}
							r={3}
							fill="#fff"
							style={{ opacity: networkDraw }}
						/>
					))}
				</g>

				{SCAN_PATHS.map((scan, i) => (
					<motion.path
						key={i}
						d={scan.d}
						fill="none"
						stroke={scan.color}
						strokeWidth={scan.width}
						strokeLinecap="round"
						strokeOpacity={0.8}
						style={{
							pathLength: 0.07,
							pathOffset: i === 0 ? scan0Offset : scan1Offset,
						}}
					/>
				))}
			</svg>

			<motion.div
				style={{
					rotateX: contentRotateX,
					y: contentY,
					scale: contentScale,
					opacity: contentOpacity,
					transformStyle: "preserve-3d",
				}}
				className="relative flex h-full w-full flex-col items-center justify-center"
			>
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
			</motion.div>

			<motion.div
				style={{ opacity: cueOpacity }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<svg width="24" height="36" viewBox="0 0 24 36" fill="none">
					<motion.path
						d="M12 2 L12 30 M4 22 L12 30 L20 22"
						stroke="#fff"
						strokeWidth={1.5}
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ pathLength: 0, opacity: 0.3 }}
						animate={{ pathLength: [0, 1, 1, 0], opacity: [0.3, 1, 1, 0.3] }}
						transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
					/>
				</svg>
			</motion.div>
		</section>
	);
}
