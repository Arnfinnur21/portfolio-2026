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
import Footer from "@/components/sections/Footer";
import LanguageButton from "@/components/LanguageButton";

export default function Home() {
	return (
		<>
			{/* <Navbar /> */}
			<main>
				<Hero />
				<Experience />
				<About />
				<Projects />
				<Education />
				<PersonalProjects />
				{/* <Skills /> */}
				{/* <Contact /> */}
				<LanguageButton />
			</main>
			<Footer />
		</>
	);
}
