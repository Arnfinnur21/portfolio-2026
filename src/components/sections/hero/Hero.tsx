"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HeroContent from "./HeroContent";
import { heroMotion } from "./motion-state";
import { useMediaQuery } from "./use-media-query";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const SCROLL_HEIGHT_VH = 300;

const GRAIN_DATA_URI =
	"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero() {
	const wrapperRef = useRef<HTMLElement>(null);
	const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	const isCompact = useMediaQuery("(max-width: 820px)");

	useEffect(() => {
		heroMotion.reducedMotion = reducedMotion;
	}, [reducedMotion]);

	useEffect(() => {
		if (!wrapperRef.current) return;

		gsap.registerPlugin(ScrollTrigger);
		const previousScrollBehavior = document.documentElement.style.scrollBehavior;

		const trigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			onUpdate: (self) => {
				heroMotion.scrollProgress = self.progress;
			},
		});

		let lenis: Lenis | undefined;
		let tickerFn: ((time: number) => void) | undefined;
		let handleMouseMove: ((e: MouseEvent) => void) | undefined;

		if (!reducedMotion) {
			document.documentElement.style.scrollBehavior = "auto";
			lenis = new Lenis({ duration: 1.3, wheelMultiplier: 0.9 });
			lenis.on("scroll", ScrollTrigger.update);
			tickerFn = (time: number) => {
				lenis?.raf(time * 1000);
			};
			gsap.ticker.add(tickerFn);
			gsap.ticker.lagSmoothing(0);

			if (!isCompact) {
				handleMouseMove = (e: MouseEvent) => {
					heroMotion.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
					heroMotion.mouseY = (e.clientY / window.innerHeight) * 2 - 1;
				};
				window.addEventListener("mousemove", handleMouseMove, { passive: true });
			}
		}

		return () => {
			trigger.kill();
			if (tickerFn) gsap.ticker.remove(tickerFn);
			lenis?.destroy();
			document.documentElement.style.scrollBehavior = previousScrollBehavior;
			if (handleMouseMove) {
				window.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [reducedMotion, isCompact]);

	const scrollHeightVh = reducedMotion ? 100 : SCROLL_HEIGHT_VH;

	return (
		<section
			ref={wrapperRef}
			className="relative w-screen"
			style={{ height: `${scrollHeightVh}vh` }}
		>
			<div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#0b0b0c]">
				<HeroCanvas
					layer="back"
					reducedMotion={reducedMotion}
					isCompact={isCompact}
					style={{ position: "absolute", inset: 0, zIndex: 0 }}
				/>

				<HeroContent reducedMotion={reducedMotion} />

				{!isCompact && (
					<HeroCanvas
						layer="front"
						reducedMotion={reducedMotion}
						isCompact={isCompact}
						transparent
						style={{
							position: "absolute",
							inset: 0,
							zIndex: 20,
							pointerEvents: "none",
						}}
					/>
				)}

				<div
					className="pointer-events-none absolute inset-0 z-30"
					style={{
						background:
							"radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.65) 100%)",
					}}
				/>
				<div
					className="pointer-events-none absolute inset-0 z-30 opacity-[0.05] mix-blend-overlay"
					style={{ backgroundImage: GRAIN_DATA_URI, backgroundSize: "180px 180px" }}
				/>
			</div>
		</section>
	);
}
