import { NavLink, Project, Experience, Skill } from "./types";

export const NAV_LINKS: NavLink[] = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

export const HERO = {
	ICE: {
		greeting: "Góðan daginn, ég heiti",
		name: "Arnfinnur Kolbeinsson",
		pronounciation: "",
		tagline:
			"Tölvunarfræðingur með áherslu á vefþróun, notendaviðmót og stafræna upplifun",
		bio: "Tæknimiðaður forritari með reynslu í bæði framenda- og bakendaforritun, hönnun og efnisgerð. Hef unnið að veflausnum og stafrænum verkefnum fyrir bæði smáa og stóra kúnna ásamt því að þróa eigin verkefni í frítíma.",
		ctaLabel: "Sjá verkefni",
		ctaHref: "#projects",
		// resumeHref: "/resume.pdf",
	},
	ENG: {
		greeting: "Hello, I'm",
		name: "Arnfinnur Kolbeinsson",
		pronounciation: "(Arrn-finn-err Kol-bain-son)",
		tagline:
			"Frontend-focused developer passionate about web experiences, UI design, and digital products",
		bio: "Frontend-focused developer with experience in both frontend and backend development, UI design, and digital media production. Worked on web solutions and creative projects for both small and large clients while continuously building personal and freelance projects.",
		ctaLabel: "View my work",
		ctaHref: "#projects",
		resumeHref: "/resume.pdf",
	},
};
export const ABOUT = {
	ICE: {
		heading: "Um Mig",
		paragraphs: [
			"Ég heiti Arnfinnur Kolbeinsson og er nýútskrifaður tölvunarfræðingur frá Háskólanum í Reykjavík. Ég hef lengi haft mikinn áhuga á tækni, hönnun og stafrænum lausnum.",
			"Ég sérhæfi mig helst í vefþróun og notendaviðmótum, en hef einnig reynslu af bakendaforritun, hönnun og efnisgerð. Hef unnið að bæði eigin verkefnum og lausnum fyrir raunverulega kúnna í gegnum störf mín og freelance vinnu.",
		],
	},

	ENG: {
		heading: "About Me",
		paragraphs: [
			"My name is Arnfinnur Kolbeinsson and I recently graduated in Computer Science from Reykjavík University. I’ve always been passionate about technology, design, and building digital experiences.",
			"I mainly focus on frontend development and UI work, while also having experience with backend development, design, and digital media production. I’ve worked on both personal and client-facing projects through freelance work and software development roles.",
		],
	},
};

export const EXPERIENCES = {
	ICE: [
		{
			company: "Nemo Solutions",
			role: "Hugbúnaðarþróun",
			period: "2022 – Núverandi",
			description:
				"Komið að þróun á veflausnum og innri kerfum fyrir kúnna með áherslu á framenda, notendaviðmót og nútímalega vefþróun. Unnið í litlum teymum og tekið þátt í bæði þróunar- og hönnunarákvörðunum.",
			tags: [
				"React",
				"JS/TS",
				"Next.js",
				"Prismic CMS",
				"UI/UX",
				"Figma",
				"Webflow",
			],
			image: "/nemo_logo.svg",
		},
		{
			company: "ELKO",
			role: "Þjónustufulltrúi & Vakstjóri",
			period: "2021 – Núverandi",
			description:
				"Sá um tæknilega aðstoð, þjónustu við viðskiptavini og mikil samskipti við helstu flutningsaðila/birgja landsins. Aðstoðaði viðskiptavini með flóknar tæknivörur og vann í hröðu og krefjandi umhverfi.",
			tags: ["Forysta", "Tækniþjónusta", "Þjónusta"],
			image: "/Elko_Logo_2014.png",
		},
		{
			company: "Takk Samskipti",
			role: "Sölufulltrúi",
			period: "2018 – 2021",
			description:
				"Þróaði sterka samskipta- og söluhæfileika í gegnum dagleg samskipti við viðskiptavini og markmiðadrifna sölu.",
			tags: ["Samskipti", "Sala"],
			image: "/takk_logo.png",
		},
	],

	ENG: [
		{
			company: "Nemo Solutions",
			role: "Software Developer",
			period: "2022 – Present",
			description:
				"Worked on real-world web solutions and internal tools for clients, focusing on frontend development, UI implementation, and modern web technologies. Collaborated in small teams and contributed to both development and design decisions.",
			tags: ["React", "TypeScript", "Next.js", "UI/UX"],
			image: "/nemo_logo.svg",
		},
		{
			company: "ELKO",
			role: "Customer Service & Shift Manager",
			period: "2021 – Present",
			description:
				"Handled technical troubleshooting, customer support, and daily shift operations in Iceland’s largest electronics retailer. Assisted customers with complex technical products while helping manage team operations in a fast-paced environment.",
			tags: ["Leadership", "Technical Support", "Customer Service"],
			image: "/Elko_Logo_2014.png",
		},
		{
			company: "Charity Sales",
			role: "Phone Sales Representative",
			period: "2018 – 2021",
			description:
				"Developed strong communication and persuasion skills through high-volume customer interactions and sales-focused outreach.",
			tags: ["Communication", "Sales"],
			image: "/takk_logo.png",
		},
	],
};

export const PROJECTS = {
	ICE: [
		{
			title: "TypeWriter",
			description:
				"Ritgreiningarkerfi fyrir nemendur og kennara með áherslu á ritunargögn, framvindu og greiningu skjala.",
			tags: ["React", "TypeScript", "MongoDB", "Next.js"],
			href: "#",
			repo: "",
		},
		{
			title: "Ráðstefnuvefur",
			description:
				"Hannaði og þróaði nútímalegan ráðstefnuvef með CMS efnisstjórnun, responsive uppsetningu og sérsniðnum notendaviðmótum.",
			tags: ["Webflow", "UI/UX", "CMS"],
			href: "#",
			repo: "",
		},
		{
			title: "AI YouTube Samantektir",
			description:
				"Vefforrit sem sækir texta úr YouTube myndböndum og býr til stuttar AI-knúnar samantektir.",
			tags: ["Next.js", "OpenAI", "Tailwind CSS"],
			href: "#",
			repo: "",
		},
	],

	ENG: [
		{
			title: "TypeWriter",
			description:
				"A writing analytics platform built for students and teachers with features focused on writing statistics, progress tracking, and document analysis.",
			tags: ["React", "TypeScript", "MongoDB", "Next.js"],
			href: "#",
			repo: "",
		},
		{
			title: "Conference Website",
			description:
				"Designed and developed a modern conference website with CMS-driven content management, responsive layouts, and custom UI components.",
			tags: ["Webflow", "UI/UX", "CMS"],
			href: "#",
			repo: "",
		},
		{
			title: "AI YouTube Summarizer",
			description:
				"A web application that retrieves YouTube transcripts and generates concise AI-powered summaries using modern frontend technologies and OpenAI APIs.",
			tags: ["Next.js", "OpenAI", "Tailwind CSS"],
			href: "#",
			repo: "",
		},
	],
};

export const SKILLS = {
	ICE: [
		{
			category: "Framendi",
			items: [
				"React",
				"Next.js",
				"TypeScript",
				"JavaScript",
				"Tailwind CSS",
				"HTML",
				"CSS",
			],
		},
		{
			category: "Bakendi",
			items: ["Node.js", "MongoDB", "REST APIs", "Express"],
		},
		{
			category: "Hönnun & Verkfæri",
			items: ["Figma", "Webflow", "Git", "Responsive Design", "UI/UX Hönnun"],
		},
	],

	ENG: [
		{
			category: "Frontend",
			items: [
				"React",
				"Next.js",
				"TypeScript",
				"JavaScript",
				"Tailwind CSS",
				"HTML",
				"CSS",
			],
		},
		{
			category: "Backend",
			items: ["Node.js", "MongoDB", "REST APIs", "Express"],
		},
		{
			category: "Design & Tools",
			items: ["Figma", "Webflow", "Git", "Responsive Design", "UI/UX Design"],
		},
	],
};

export const CONTACT = {
	ICE: {
		heading: "Hafðu Samband",
		blurb:
			"Er opinn fyrir verkefnum og störfum tengdum vefþróun, framenda og notendaviðmótum.",
		email: "your@email.com",
		github: "",
		linkedin: "",
	},

	ENG: {
		heading: "Get In Touch",
		blurb:
			"I'm currently open to frontend, web development, and UI-focused opportunities. Feel free to reach out.",
		email: "your@email.com",
		github: "",
		linkedin: "",
	},
};
