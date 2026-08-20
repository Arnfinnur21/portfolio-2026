"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { useLang } from "../ui/LangProvider";
import Image from "next/image";
import ToolBadge from "../ui/ToolBadge";

function toAbsoluteUrl(url?: string) {
	if (!url || url === "#") return url ?? "";
	return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// px width of the diagonal cut between panels — kept in px (not %) so the
// slant angle stays constant while a panel's flex-grow width animates.
const SLANT = 28;

// Screenshots have wildly different aspect ratios, so a fixed pan duration
// would make tall pages fly by and near-square ones crawl. We derive a
// duration per project from a constant px/s speed so every screenshot pans
// at the same rate — panels with little or no overflow (e.g. a single
// dashboard shot) just don't pan at all.
//
// Durations are computed from *predicted* expanded dimensions (from the row
// width + the known flex-grow ratio, rather than measuring the panel after
// it finishes expanding) so the pan can start the instant a panel is
// hovered instead of waiting for the expand transition to settle.
const PAN_SPEED = 100; // px per second
const ACTIVE_GROW = 3;
const IDLE_GROW = 1;
const MOBILE_ASSUMED_HEIGHT = 500; // approx. expanded mobile card height (content-dependent, can't be measured ahead of time)
const MOBILE_PADDING_X = 48; // px-6 on both sides of the mobile stack

function computePanDuration(
	ratio: number | undefined,
	width: number,
	height: number,
) {
	if (!ratio || width <= 0 || height <= 0) return 0;
	const overflow = width * ratio - height;
	return overflow > 40 ? overflow / PAN_SPEED : 0;
}

export default function Projects() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const lang = useLang();
	const projects = PROJECTS[lang];
	const [active, setActive] = useState<number | null>(null);
	const [panDurations, setPanDurations] = useState<{
		desktop: number[];
		mobile: number[];
	}>({ desktop: [], mobile: [] });
	const rowRef = useRef<HTMLDivElement>(null);
	const mobileStackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const recompute = () => {
			const row = rowRef.current;
			const mobileStack = mobileStackRef.current;
			const n = projects.length;

			const rowWidth = row?.clientWidth ?? 0;
			const rowHeight = row?.clientHeight ?? 0;
			const activeWidth =
				(rowWidth * ACTIVE_GROW) / (ACTIVE_GROW + (n - 1) * IDLE_GROW);

			const mobileWidth = Math.max(
				0,
				(mobileStack?.clientWidth ?? 0) - MOBILE_PADDING_X,
			);

			setPanDurations({
				desktop: projects.map((p) =>
					computePanDuration(p.screenshotRatio, activeWidth, rowHeight),
				),
				mobile: projects.map((p) =>
					computePanDuration(p.screenshotRatio, mobileWidth, MOBILE_ASSUMED_HEIGHT),
				),
			});
		};

		recompute();

		const observer = new ResizeObserver(recompute);
		if (rowRef.current) observer.observe(rowRef.current);
		if (mobileStackRef.current) observer.observe(mobileStackRef.current);
		return () => observer.disconnect();
	}, [projects]);

	return (
		<section id="projects" className="mx-auto w-screen overflow-hidden py-24">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 40 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
				className="flex w-full flex-col items-center"
			>
				<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Recent Projects
				</h2>

				{/* Desktop: tilted split panels, hover to expand */}
				<div className="hidden w-full md:block">
					<div ref={rowRef} className="flex h-180 w-full overflow-hidden">
						{projects.map((project, i) => {
							const isActive = active === i;
							const leftSlant = i > 0;
							const rightSlant = i < projects.length - 1;
							const panDuration = panDurations.desktop[i] ?? 0;
							const canPan = panDuration > 0;

							return (
								<div
									key={i}
									role="button"
									tabIndex={0}
									aria-expanded={isActive}
									aria-label={project.title}
									onMouseEnter={() => setActive(i)}
									onMouseLeave={() => setActive((a) => (a === i ? null : a))}
									onFocus={() => setActive(i)}
									onBlur={() => setActive((a) => (a === i ? null : a))}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											setActive((a) => (a === i ? null : i));
										}
									}}
									style={{
										flexGrow: isActive ? 3 : 1,
										flexBasis: 0,
										marginLeft: leftSlant ? -SLANT : 0,
										clipPath: `polygon(${
											leftSlant ? SLANT : 0
										}px 0, 100% 0, calc(100% - ${
											rightSlant ? SLANT : 0
										}px) 100%, 0 100%)`,
										zIndex: isActive ? 20 : projects.length - i,
									}}
									className="group relative flex min-w-0 cursor-pointer flex-col justify-end overflow-hidden bg-zinc-900 outline-none transition-[flex-grow] duration-500 ease-out"
								>
									{/* screenshot, slowly pans downward while active */}
									{project.screenshot && (
										<div
											aria-hidden="true"
											className="pointer-events-none absolute inset-0 -z-30 grayscale-30"
											style={{
												backgroundImage: `url(${project.screenshot})`,
												backgroundSize: "cover",
												backgroundRepeat: "no-repeat",
												backgroundPosition:
													isActive && canPan ? "center 100%" : "center 0%",
												opacity: isActive ? 0.85 : 0.4,
												transitionProperty: "background-position, opacity",
												transitionDuration: `${canPan ? panDuration : 0}s, 700ms`,
												transitionTimingFunction: "ease-out, ease-out",
											}}
										/>
									)}
									{/* accent glow, softens into focus on hover — stays fixed over the screenshot */}
									<div
										className="pointer-events-none absolute inset-0 -z-20 transition-all duration-500"
										style={{
											background: `radial-gradient(circle at 50% 30%, ${project.colors[1]}66, transparent 70%)`,
											filter: isActive ? "blur(16px)" : "blur(48px)",
											opacity: isActive ? 0.9 : 0.45,
										}}
									/>
									<div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/50 to-black/10" />

									<div className="flex flex-1 flex-col items-center justify-center px-8 pb-8 pt-8 text-center">
										<div
											className="relative h-32 w-32 shrink-0 transition-transform duration-500"
											style={{
												transform: isActive ? "scale(1.2) translateY(-4px)" : "scale(1)",
												filter: isActive
													? `drop-shadow(0 0 22px ${project.colors[1]})`
													: "drop-shadow(0 0 0 transparent)",
											}}
										>
											<Image
												src={project.logo}
												fill
												sizes="128px"
												alt={`${project.title} logo`}
												className="object-contain"
											/>
										</div>

										<div
											className="grid w-full transition-[grid-template-rows] duration-500 ease-out"
											style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
										>
											<div className="min-h-0 overflow-hidden">
												<div
													className="mt-3.5 rounded-xl bg-black/40 px-4 py-3 backdrop-blur-[2px] transition-opacity duration-400"
													style={{ opacity: isActive ? 1 : 0 }}
												>
													<h3
														className="font-semibold text-zinc-50"
														style={{
															textShadow:
																"0 1px 1px rgba(0,0,0,1), 0 3px 6px rgba(0,0,0,0.9)",
														}}
													>
														{project.title}
													</h3>
													<p
														className="mx-auto mt-1.5 max-w-[75ch] whitespace-pre-line text-sm leading-snug text-zinc-300"
														style={{
															textShadow:
																"0 1px 1px rgba(0,0,0,1), 0 2px 5px rgba(0,0,0,0.85)",
														}}
													>
														{project.description}
													</p>
													<div className="mt-3 flex flex-wrap justify-center gap-2">
														{project.tags.map((tag) => (
															<ToolBadge key={tag} tag={tag} />
														))}
													</div>
													{(project.href || project.repo) && (
														<div className="mt-3 flex justify-center gap-4 text-sm font-medium">
															{project.href && (
																<a
																	href={toAbsoluteUrl(project.href)}
																	target="_blank"
																	rel="noopener noreferrer"
																	onClick={(e) => e.stopPropagation()}
																	className="text-zinc-300 transition hover:text-zinc-50"
																>
																	Live ↗
																</a>
															)}
															{project.repo && (
																<a
																	href={toAbsoluteUrl(project.repo)}
																	target="_blank"
																	rel="noopener noreferrer"
																	onClick={(e) => e.stopPropagation()}
																	className="text-zinc-300 transition hover:text-zinc-50"
																>
																	Details ↗
																</a>
															)}
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Mobile: stacked cards, tap to expand */}
				<div
					ref={mobileStackRef}
					className="flex w-full flex-col gap-4 px-6 md:hidden"
				>
					{projects.map((project, i) => {
						const isActive = active === i;
						const panDuration = panDurations.mobile[i] ?? 0;
						const canPan = panDuration > 0;
						return (
							<div
								key={i}
								role="button"
								tabIndex={0}
								aria-expanded={isActive}
								aria-label={project.title}
								onClick={() => setActive((a) => (a === i ? null : i))}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										setActive((a) => (a === i ? null : i));
									}
								}}
								className="relative overflow-hidden rounded-2xl bg-zinc-900 outline-none"
							>
								{project.screenshot && (
									<div
										aria-hidden="true"
										className="pointer-events-none absolute inset-0 -z-30 grayscale-30"
										style={{
											backgroundImage: `url(${project.screenshot})`,
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat",
											backgroundPosition: isActive && canPan ? "center 100%" : "center 0%",
											opacity: isActive ? 0.85 : 0.4,
											transitionProperty: "background-position, opacity",
											transitionDuration: `${canPan ? panDuration : 0}s, 700ms`,
											transitionTimingFunction: "ease-out, ease-out",
										}}
									/>
								)}
								<div
									className="pointer-events-none absolute inset-0 -z-20 transition-all duration-500"
									style={{
										background: `radial-gradient(circle at 50% 20%, ${project.colors[1]}66, transparent 70%)`,
										filter: isActive ? "blur(16px)" : "blur(48px)",
										opacity: isActive ? 0.9 : 0.45,
									}}
								/>
								<div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/50 to-black/10" />

								<div className="flex flex-col items-center px-6 py-8 text-center">
									<div
										className="relative h-24 w-24 shrink-0 transition-transform duration-500"
										style={{
											transform: isActive ? "scale(1.1)" : "scale(1)",
											filter: isActive
												? `drop-shadow(0 0 18px ${project.colors[1]})`
												: "drop-shadow(0 0 0 transparent)",
										}}
									>
										<Image
											src={project.logo}
											fill
											sizes="96px"
											alt={`${project.title} logo`}
											className="object-contain"
										/>
									</div>
									<h3
										className="mt-3 font-semibold text-zinc-50"
										style={{
											textShadow: "0 1px 1px rgba(0,0,0,1), 0 3px 6px rgba(0,0,0,0.9)",
										}}
									>
										{project.title}
									</h3>

									<div
										className="grid w-full transition-[grid-template-rows] duration-500 ease-out"
										style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
									>
										<div className="min-h-0 overflow-hidden">
											<div
												className="mt-3 rounded-xl bg-black/40 px-4 py-3 backdrop-blur-[2px] transition-opacity duration-400"
												style={{ opacity: isActive ? 1 : 0 }}
											>
												<p
													className="mx-auto max-w-[32ch] whitespace-pre-line text-sm leading-snug text-zinc-300"
													style={{
														textShadow: "0 1px 1px rgba(0,0,0,1), 0 2px 5px rgba(0,0,0,0.85)",
													}}
												>
													{project.description}
												</p>
												<div className="mt-3 flex flex-wrap justify-center gap-2">
													{project.tags.map((tag) => (
														<ToolBadge key={tag} tag={tag} />
													))}
												</div>
												{(project.href || project.repo) && (
													<div className="mt-3 flex justify-center gap-4 text-sm font-medium">
														{project.href && (
															<a
																href={toAbsoluteUrl(project.href)}
																target="_blank"
																rel="noopener noreferrer"
																onClick={(e) => e.stopPropagation()}
																className="text-zinc-300 transition hover:text-zinc-50"
															>
																Live ↗
															</a>
														)}
														{project.repo && (
															<a
																href={toAbsoluteUrl(project.repo)}
																target="_blank"
																rel="noopener noreferrer"
																onClick={(e) => e.stopPropagation()}
																className="text-zinc-300 transition hover:text-zinc-50"
															>
																Details ↗
															</a>
														)}
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}
