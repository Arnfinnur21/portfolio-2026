"use client";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import PersonalProjects from "@/components/sections/PersonalProjects";
import LanguageButton from "@/components/LanguageButton";

export default function Home() {
	return (
		<>
			{/* <Navbar /> */}
			<main>
				<Hero />
				<Projects />
				<About />
				<Experience />
				<Education />
				<PersonalProjects />
				{/* <Skills /> */}
				{/* <Contact /> */}
				<LanguageButton />
			</main>
			{/* <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800">
				Scaffolded with AI (Claude) & and built by Arnfinnur Kolbeinsson
			</footer> */}
		</>
	);
}
