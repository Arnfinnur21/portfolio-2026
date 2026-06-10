"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, HERO } from "@/lib/data";
import { useLang, useSetLang } from "@/components/ui/LangProvider";

export default function Navbar() {
	const lang = useLang();
	const setLang = useSetLang();
	return (
		<motion.header
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4 }}
			className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800"
		>
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<a
					href="#"
					className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
				>
					{HERO.ICE.name}
				</a>
				<div className="flex items-center gap-6">
					{/* <ul className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul> */}
					<button
						onClick={() => setLang(lang === "ICE" ? "ENG" : "ICE")}
						aria-label="Switch language"
						className="absolute"
					>
						<Image
							src={lang === "ICE" ? "/usa_flag.png" : "/iceland_flag.png"}
							alt={lang === "ICE" ? "English" : "Icelandic"}
							width={28}
							height={28}
							className="rounded-full object-cover"
						/>
					</button>
				</div>
			</nav>
		</motion.header>
	);
}
