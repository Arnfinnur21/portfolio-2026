"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HERO } from "@/lib/data";
import { useLang } from "@/components/ui/LangProvider";

type HeroContentProps = {
	reducedMotion: boolean;
};

export default function HeroContent({ reducedMotion }: HeroContentProps) {
	const lang = useLang();
	const hero = HERO[lang];
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;
		const items = root.querySelectorAll("[data-hero-in]");

		if (reducedMotion) {
			gsap.set(items, { opacity: 1, y: 0 });
			return;
		}

		const tween = gsap.fromTo(
			items,
			{ opacity: 0, y: 28 },
			{
				opacity: 1,
				y: 0,
				duration: 1.1,
				ease: "power3.out",
				stagger: 0.12,
				delay: 0.3,
			},
		);

		return () => {
			tween.kill();
		};
	}, [reducedMotion]);

	return (
		<div
			ref={rootRef}
			className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
		>
			<span
				data-hero-in
				className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-white/40"
			>
				Portfolio — {new Date().getFullYear()}
			</span>
			<h1
				data-hero-in
				style={{ fontFamily: "var(--font-hero-name)", fontWeight: 1 }}
				className="italic leading-[0.85] tracking-tighter text-white text-[15vw] sm:text-[9vw]"
			>
				{HERO.ICE.name}
			</h1>
			<p
				data-hero-in
				className="mt-7 max-w-xl text-base font-light tracking-wide text-white/60 sm:text-lg"
			>
				{hero.tagline}
			</p>
			{hero.pronounciation && (
				<p data-hero-in className="mt-2 text-sm italic text-white/30">
					{hero.pronounciation}
				</p>
			)}
		</div>
	);
}
