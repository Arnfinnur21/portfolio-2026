import { NavLink, Project, Experience, Skill } from "./types";

export const NAV_LINKS: NavLink[] = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

const HERO_SHARED = {
	name: "Arnfinnur Kolbeinsson",
	ctaHref: "#projects",
};

export const HERO = {
	ICE: {
		...HERO_SHARED,
		greeting: "Góðan daginn, ég heiti",
		pronounciation: "",
		tagline:
			"Tölvunarfræðingur með áherslu á vefþróun, notendaviðmót og stafræna upplifun",
		bio: "Tæknimiðaður forritari með reynslu í bæði framenda- og bakendaforritun, hönnun og efnisgerð. Hef unnið að veflausnum og stafrænum verkefnum fyrir bæði smáa og stóra kúnna ásamt því að þróa eigin verkefni í frítíma.",
		ctaLabel: "Sjá verkefni",
	},
	ENG: {
		...HERO_SHARED,
		greeting: "Hello, I'm",
		pronounciation: "(Arrn-finn-err Kol-bain-son)",
		tagline:
			"Frontend-focused developer passionate about web experiences, UI design, and digital products",
		bio: "Frontend-focused developer with experience in both frontend and backend development, UI design, and digital media production. Worked on web solutions and creative projects for both small and large clients while continuously building personal and freelance projects.",
		ctaLabel: "View my work",
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
			"My name is Arnfinnur Kolbeinsson and I recently graduated in Computer Science from Reykjavík University. I've always been passionate about technology, design, and building digital experiences.",
			"I mainly focus on frontend development and UI work, while also having experience with backend development, design, and digital media production. I've worked on both personal and client-facing projects through freelance work and software development roles.",
		],
	},
};

// Shared fields that don't need translation
const EXPERIENCE_SHARED = [
	{ company: "Nemo Solutions", image: "/nemo_logo.svg" },
	{ company: "ELKO", image: "/Elko_Logo_2014.png" },
	{ company: "Takk Samskipti", image: "/takk_logo.png" },
];

const EXPERIENCE_TEXT = {
	ICE: [
		{
			role: "Hugbúnaðarþróun",
			period: "2022 – Núverandi",
			description:
				"Komið að þróun á veflausnum og innri kerfum fyrir kúnna með áherslu á framenda, notendaviðmót og nútímalega vefþróun. Unnið í litlum teymum og tekið þátt í bæði þróunar- og hönnunarákvörðunum.",
			tags: ["React", "JS/TS", "Next.js", "Prismic CMS", "UI/UX", "Figma", "Webflow"],
		},
		{
			role: "Þjónustufulltrúi & Vakstjóri",
			period: "2021 – Núverandi",
			description:
				"Sá um tæknilega aðstoð, þjónustu við viðskiptavini og mikil samskipti við helstu flutningsaðila/birgja landsins. Aðstoðaði viðskiptavini með flóknar tæknivörur og vann í hröðu og krefjandi umhverfi.",
			tags: ["Forysta", "Tækniþjónusta", "Þjónusta"],
		},
		{
			role: "Sölufulltrúi",
			period: "2018 – 2021",
			description:
				"Þróaði sterka samskipta- og söluhæfileika í gegnum dagleg samskipti við viðskiptavini og markmiðadrifna sölu.",
			tags: ["Samskipti", "Sala"],
		},
	],
	ENG: [
		{
			role: "Software Developer",
			period: "2022 – Present",
			description:
				"Worked on real-world web solutions and internal tools for clients, focusing on frontend development, UI implementation, and modern web technologies. Collaborated in small teams and contributed to both development and design decisions.",
			tags: ["React", "TypeScript", "Next.js", "UI/UX"],
		},
		{
			role: "Customer Service & Shift Manager",
			period: "2021 – Present",
			description:
				"Handled technical troubleshooting, customer support, and daily shift operations in Iceland's largest electronics retailer. Assisted customers with complex technical products while helping manage team operations in a fast-paced environment.",
			tags: ["Leadership", "Technical Support", "Customer Service"],
		},
		{
			role: "Phone Sales Representative",
			period: "2018 – 2021",
			description:
				"Developed strong communication and persuasion skills through high-volume customer interactions and sales-focused outreach.",
			tags: ["Communication", "Sales"],
		},
	],
};

export const EXPERIENCES: Record<string, Experience[]> = {
	ICE: EXPERIENCE_SHARED.map((shared, i) => ({ ...shared, ...EXPERIENCE_TEXT.ICE[i] })),
	ENG: EXPERIENCE_SHARED.map((shared, i) => ({ ...shared, ...EXPERIENCE_TEXT.ENG[i] })),
};

// Shared fields that don't need translation
const PROJECT_SHARED = [
	{
		repo: "https://skemman.is/handle/1946/52014",
		href: "",
		tags: ["React", "TypeScript", "MongoDB", "Next.js"],
		colors: ["#FFFFFF", "#FFFFFFF"],
	},
	{
		href: "https://nfs2026.is",
		repo: "",
		tags: ["Webflow", "UI/UX", "CMS"],
		colors: ["#FFFFFF", "#52ff00"],
	},
	{
		href: "https://hreinsnilld.is",
		tags: ["Prismic CMS", "Davinci Resolve"],
		colors: ["#FFFFFF", "#00ffec"],
	},
	{
		href: "https://herognu.is",
		tags: ["Prismic CMS", "JavaScript", "Figma"],
		colors: ["#FFFFFF", "#52ff00"],
	},
	{
		href: "",
		tags: ["Webflow"],
		colors: ["#ffd37e", "#ffa400"],
	},
];

const PROJECT_TEXT = {
	ICE: [
		{
			title: "TypeWriter",
			description:
				"Lokaverkefnið mitt fyrir BSc gráðuna mína í Tölvunarfræði.\n \n Ritgreiningarkerfi fyrir nemendur og kennara með áherslu á ritunargögn, framvindu og greiningu skjala.",
		},
		{
			title: "Ráðstefnuvefur NFS 2026",
			description:
				"Static vefsíða fyrir Nordic Fertility Society ráðstefnuna 2026. \n \n Sá um uppsetningu, hýsingu, hönnun og umsjón á vefnum fyrir Senu. Setti upp CMS fyrir auðvelda uppsetningu og breytingu á efni fyrir kúnna.",
		},
		{
			title: "Hrein Snilld",
			description:
				"Refactoraði síðuna yfir í Prismic CMS og hannaði auglýsingaefni fyrir markaðsherferðir.",
		},
		{
			title: "Hér & Nú",
			description:
				"Sá um uppsetningu á rebranding síðu hjá auglýsingastofunni Hér & Nú. \n \n Mikið af samskiptum við hönnuði til að tryggja að síðan leit út alveg eins og þau vildu.",
		},
		{
			title: "BBA // Fjeldco",
			description:
				"Sá um ýmsar breytingar á heimasíðunni. \n \n Uppsetning á nýjum undirsíðum og breytingar á núverandi síðum",
		},
	],
	ENG: [
		{
			title: "TypeWriter",
			description:
				"A writing analytics platform built for students and teachers with features focused on writing statistics, progress tracking, and document analysis.",
		},
		{
			title: "Conference Website",
			description:
				"Designed and developed a modern conference website with CMS-driven content management, responsive layouts, and custom UI components.",
		},
		{
			title: "Hrein Snilld",
			description:
				"Refactored the website to use Prismic CMS and designed promotional content for multiple marketing campaigns.",
		},
		{
			title: "Hér & Nú",
			description:
				"Handled the setup for a rebranding website for the design studio Hér & Nú.",
		},
		{
			title: "BBA // Fjeldco",
			description:
				"Handled various changes on their main website. \n \n Creation of new subpages and changes to existing ones",
		},
	],
};

export const PROJECTS: Record<string, Project[]> = {
	ICE: PROJECT_SHARED.map((shared, i) => ({ ...shared, ...PROJECT_TEXT.ICE[i] })),
	ENG: PROJECT_SHARED.map((shared, i) => ({ ...shared, ...PROJECT_TEXT.ENG[i] })),
};

const SKILL_ITEMS = [
	["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
	["Node.js", "MongoDB", "REST APIs", "Express"],
	["Figma", "Webflow", "Git", "Responsive Design", "UI/UX Design"],
];

export const SKILLS: Record<string, Skill[]> = {
	ICE: [
		{ category: "Framendi", items: SKILL_ITEMS[0] },
		{ category: "Bakendi", items: SKILL_ITEMS[1] },
		{ category: "Hönnun & Verkfæri", items: SKILL_ITEMS[2] },
	],
	ENG: [
		{ category: "Frontend", items: SKILL_ITEMS[0] },
		{ category: "Backend", items: SKILL_ITEMS[1] },
		{ category: "Design & Tools", items: SKILL_ITEMS[2] },
	],
};

const CONTACT_SHARED = {
	email: "your@email.com",
	github: "",
	linkedin: "",
};

export const CONTACT = {
	ICE: {
		...CONTACT_SHARED,
		heading: "Hafðu Samband",
		blurb:
			"Er opinn fyrir verkefnum og störfum tengdum vefþróun, framenda og notendaviðmótum.",
	},
	ENG: {
		...CONTACT_SHARED,
		heading: "Get In Touch",
		blurb:
			"I'm currently open to frontend, web development, and UI-focused opportunities. Feel free to reach out.",
	},
};
