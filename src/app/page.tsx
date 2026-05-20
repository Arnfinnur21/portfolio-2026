"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="pt-16">
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800">
				Designed &amp; built by YOUR NAME
			</footer>
		</>
	);
}
