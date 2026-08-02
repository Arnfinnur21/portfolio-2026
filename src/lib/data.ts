import {
	NavLink,
	Project,
	ExperienceSection,
	Skill,
	EducationSection,
	HobbyProject,
} from "./types";

// Maps tag names to their logo in /public/tools. Tags without an entry fall back to a text pill.
export const TOOL_LOGOS: Record<string, string> = {
	React: "/tools/React.png",
	TypeScript: "/tools/TypeScript.png",
	"JS/TS": "/tools/TypeScript.png",
	JavaScript: "/tools/JavaScript.png",
	"Next.js": "/tools/Next.js.png",
	"Prismic CMS": "/tools/logos_prismic-icon.png",
	Figma: "/tools/Figma.png",
	"UI/UX": "/tools/Figma.png",
	Webflow: "/tools/Webflow.png",
	MongoDB: "/tools/MongoDB.png",
	"Davinci Resolve": "/tools/DaVinci_Resolve_Studio.png",
	Python: "/python_logo.png",
	Riot: "/riot_logo.png",
	OSRS: "/osrs_logo.png",
	ElevenLabs: "/el_logo.png",
	OBS: "/obs_logo.png",
	OpenAI: "/openai_logo.png",
	Twitch: "/twitch_logo.png",
	Vercel: "/vercel_logo.png"
};

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
			"Tölvunarfræðingur með áherslu á vefþróun, notendaviðmót og efnisgerð",
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
		image: "/ak_port.webp"
	},
	ENG: {
		heading: "About Me",
		paragraphs: [
			"My name is Arnfinnur Kolbeinsson and I recently graduated in Computer Science from Reykjavík University. I've always been passionate about technology, design, and building digital experiences.",
			"I mainly focus on frontend development and UI work, while also having experience with backend development, design, and digital media production. I've worked on both personal and client-facing projects through freelance work and software development roles.",
		],
		image: "/ak_port.webp"
	},
};

// Shared fields that don't need translation
const EXPERIENCE_SHARED = [
	{ company: "Nemo Solutions", image: "/nemo_logo.svg" },
	{ company: "ELKO Þjónustuver", image: "/Elko_Logo_2014.png" },
	{ company: "Takk Samskipti", image: "/takk_logo.png" },
	{ company: "Domino's", image: "/dominos.png" },
	{ company: "Sólar Gluggatjöld", image: "/solar-logo.png" },
	{ company: "Þórsberg", image: "/torsberg.png" },
];

const EXPERIENCE_TEXT = {
	ICE: [
		{
			role: "Hugbúnaðarþróun",
			period: "2022 – Núverandi",
			description:
				`Komið að þróun á veflausnum og innri kerfum fyrir kúnna með áherslu á framenda, notendaviðmót og nútímalega vefþróun. 
				
				Unnið í litlum teymum og tekið þátt í bæði þróunar- og hönnunarákvörðunum. 
				
				Settur í óþekkt kóðaumhverfi og fundið mína leið til að sinna verkefnum. Hef refactorað heilar síður og komið með kerfishönnunarbreytingar á margar fleiri.`,
			tags: [
				"React",
				"JS/TS",
				"Next.js",
				"Prismic CMS",
				"UI/UX",
				"Figma",
				"Webflow",
			],
			older: false,
		},
		{
			role: "Þjónustufulltrúi & Vakstjóri",
			period: "2021 – Núverandi",
			description:
				`Sá um tæknilega aðstoð, þjónustu við viðskiptavini og mikil samskipti við helstu flutningsaðila/birgja landsins. Hingað koma öll símtöl, tölvupóstar og spjöll inn fyrir stærstu raftækjaverslun landsins.

Lært á mörg ný kerfi sem hafa verið síbreytileg og uppfærð án þess að það hefur áhrif á þjónustu.

Unnið sem vaktstjóri yfir Black Friday, Singles Day og séð um eftirkaupaþjónustu eftir áramót þegar mest er um að gera í þjónustuverinu.`,
			tags: ["Forysta", "Tækniþjónusta", "Þjónusta"],
			older: false,
		},
		{
			role: "Sölufulltrúi",
			period: "2018 – 2021",
			description:
				"Þróaði sterka samskipta- og söluhæfileika í gegnum dagleg samskipti við viðskiptavini og markmiðadrifna sölu.",
			tags: ["Samskipti", "Sala"],
			older: false,
		},
		{
			role: "Sendill",
			period: "2017 - 2018",
			older: true,
		},
		{
			role: "Uppsetning & Framleiðsla á gardínum",
			period: "2013 - 2019",
			older: true,
		},
		{
			role: "Fiskvinnsla",
			period: "2011",
			older: true,
		},
	],
	ENG: [
		{
			role: "Software Developer",
			period: "2022 – Present",
			description:
				`Worked on real-world web solutions and internal tools for clients, focusing on frontend development, UI implementation, and modern web technologies.

Stepped into unfamiliar codebases and found my footing quickly — refactoring entire pages and proposing system-level design changes across multiple projects.

Collaborated in small teams with input on both development and design decisions.`,
			tags: ["React", "TypeScript", "Next.js", "UI/UX"],
			older: false,
		},
		{
			role: "Customer Service & Shift Manager",
			period: "2021 – Present",
			description:
				`Handled technical troubleshooting, customer support, and high-volume communication in Iceland's largest electronics retailer — all calls, emails, and chats for the company flow through this team, including direct contact with major carriers and suppliers.

Continuously adapted to frequently updated internal systems without disruption to service quality.

Managed shift operations as shift manager through Black Friday, Singles Day, and post-holiday support surges.`,
			tags: ["Leadership", "Technical Support", "Customer Service"],
			older: false,
		},
		{
			role: "Phone Sales Representative",
			period: "2018 – 2021",
			description:
				"Developed strong communication and persuasion skills through high-volume customer interactions and sales-focused outreach.",
			tags: ["Communication", "Sales"],
			older: false,
		},
		{
			role: "Courier",
			period: "2017 - 2018",
			older: true,
		},
		{
			role: "Curtain Installation & Production",
			period: "2013 - 2019",
			older: true,
		},
		{
			role: "Fish Processing",
			period: "2011",
			older: true,
		},
	],
};

export const EXPERIENCES: Record<string, ExperienceSection> = {
	ICE: {
		heading: "Starfsferill",
		olderHeading: "Eldri störf",
		items: EXPERIENCE_SHARED.map((shared, i) => ({
			...shared,
			...EXPERIENCE_TEXT.ICE[i],
		})),
	},
	ENG: {
		heading: "Work History",
		olderHeading: "Earlier Roles",
		items: EXPERIENCE_SHARED.map((shared, i) => ({
			...shared,
			...EXPERIENCE_TEXT.ENG[i],
		})),
	},
};

// Shared fields that don't need translation
const PROJECT_SHARED = [
	{
		href: "https://nfs2026.is",
		tags: ["Webflow", "UI/UX", "CMS"],
		colors: ["#FFFFFF", "#52ff00"],
		logo: "/NFS_logo.png",
	},
	{
		repo: "https://skemman.is/handle/1946/52014",
		href: "",
		tags: ["React", "TypeScript", "MongoDB", "Next.js"],
		colors: ["#FFFFFF", "#FFFFFFF"],
		logo: "/TW_logo.png",
	},
	{
		href: "https://bbafjeldco.is",
		tags: ["Webflow"],
		colors: ["#ffd37e", "#ffa400"],
		logo: "/BBA_logo.png",
	},
	{
		href: "https://hreinsnilld.is",
		tags: ["Prismic CMS", "Davinci Resolve"],
		colors: ["#FFFFFF", "#00ffec"],
		logo: "/HS_logo.png",
	},
	{
		href: "https://herognu.is",
		tags: ["Prismic CMS", "JavaScript", "Figma"],
		colors: ["#FFFFFF", "#52ff00"],
		logo: "/HN.png",
	},
];

const PROJECT_TEXT = {
	ICE: [
		{
			title: "Ráðstefnuvefur NFS 2026",
			description:
				`Static vefsíða fyrir Nordic Fertility Society ráðstefnuna 2026.

Sá um uppsetningu, hýsingu, hönnun og umsjón á vefnum fyrir Senu. Setti upp CMS fyrir auðvelda uppsetningu og breytingu á efni fyrir kúnna. 

Þetta er árleg ráðstefna sem Nordic Fertility Society heldur. Hingað fara einstaklingar og fyrirtæki til að skrá sig á ráðstefnuna og afla sér upplýsinga um viðburði og landið í heild sinni. Allt efnið var sett upp á aðgengilegan hátt þar sem aldursbilið er mikið og tæknikunnáttan misjöfn. 
`,
		},
		{
			title: "TypeWriter",
			description:
				`Lokaverkefnið mitt fyrir BSc gráðuna mína í Tölvunarfræði.

Ritgreiningarkerfi fyrir nemendur og kennara með áherslu á ritunargögn, framvindu og greiningu skjala.

Kerfið gefur ítarlega tölfræði og sögu fyrir skrifleg verkefni unnin af nemendum. Kerfið var byggt alveg frá grunni með gagnagrunn, skýjahýsingu, aðgangsumsjón og fleiru ofan á virknina sjálfa. 
`,
		},
		{
			title: "BBA // Fjeldco",
			description:
				`Sá um ýmsar breytingar á heimasíðunni.

Uppsetning á nýjum undirsíðum og breytingar á núverandi síðum. Oft unnið á þröngum tímarömmum og klárað beiðnir fljótt og örugglega. 

Ýmsar lausnir þar sem það þurfti að blanda saman sérsniðnum kóða við uppsetninguna. 
`,
		},
		{
			title: "Hrein Snilld",
			description:
				"Refactoraði síðuna yfir í Prismic CMS og hannaði auglýsingaefni fyrir markaðsherferðir.",
		},
		{
			title: "Hér & Nú",
			description:
				`Sá um uppsetningu á rebranding síðu hjá auglýsingastofunni Hér & Nú.

Mikið af samskiptum við hönnuði til að tryggja að síðan leit út alveg eins og þau vildu.

Passa þurfti sérstaklega upp á það að síðan myndi líta vel út í öllum upplausnum. 
`,
		},
	],
	ENG: [
		{
			title: "NFS 2026 Conference",
			description:
				`Live production website for the Nordic Fertility Society conference 2026.

Handled full setup, hosting, design, and ongoing management of the site. Set up a CMS so the client can update content themselves without needing a developer.`,
		},
		{
			title: "TypeWriter",
			description:
				`My BSc thesis project at Reykjavík University.

A full-stack writing analysis system for students and teachers, built around keystroke data, progress tracking, and document analysis.`,
		},
		{
			title: "BBA // Fjeldco",
			description:
				`Handled various changes across their main website, often on tight timelines.

Built out new subpages and updated existing ones, regularly blending custom code with the existing Webflow setup to meet specific design requirements.`,
		},
		{
			title: "Hrein Snilld",
			description:
				"Refactored the site over to Prismic CMS and designed promotional material for their marketing campaigns.",
		},
		{
			title: "Hér & Nú",
			description:
				`Handled the setup of a rebranding site for the design studio Hér & Nú.

Close collaboration with their designers to make sure every detail matched the vision. Particular attention paid to responsive behaviour across all screen sizes.`,
		},
	],
};

export const PROJECTS: Record<string, Project[]> = {
	ICE: PROJECT_SHARED.map((shared, i) => ({
		...shared,
		...PROJECT_TEXT.ICE[i],
	})),
	ENG: PROJECT_SHARED.map((shared, i) => ({
		...shared,
		...PROJECT_TEXT.ENG[i],
	})),
};

const SKILL_ITEMS = [
	[
		"React",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
		"HTML",
		"CSS",
	],
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

// Shared fields that don't need translation. `image` shows a school/provider logo
// inside the item's timeline dot instead of the default graduation cap icon.
const EDUCATION_SHARED = [
	{ image: "/education/hr_logo.png" as string | undefined },
	{ image: "/education/google_logo.png" as string | undefined },
	{ image: "/education/ts_logo.webp" as string | undefined },
	{ image: "/education/mh_logo.png" as string | undefined },
	{ image: "/education/alfto_logo.png" as string | undefined },
];

const EDUCATION_TEXT = {
	ICE: [
		{
			degree: "Bakkalársgráða",
			institution: "Háskólinn í Reykjavík",
			type: "Háskólapróf (BSc)",
			period: "ágúst 2023 - júní 2026",
		},
		{
			degree: "Fundamentals in Digital Marketing",
			institution: "Google",
			type: "Námskeið",
			period: "mars 2022 - apríl 2022",
		},
		{
			degree: "Brottfararpróf í Grafískri Miðlun",
			institution: "Tækniskólinn",
			type: "Sveinspróf",
			period: "ágúst 2018 - maí 2020",
		},
		{
			degree: "Stúdentspróf",
			institution: "Menntaskólinn við Hamrahlíð",
			type: "Framhaldsskólapróf",
			period: "ágúst 2012 - júní 2016",
		},
		{
			degree: "Grunnskólapróf",
			institution: "Álftamýrarskóli",
			type: "Grunnskólapróf",
			period: "maí 2002 - ágúst 2012",
		},
	],
	ENG: [
		{
			degree: "Bachelors in Computer Science",
			institution: "Reykjavík University",
			type: "Bachelor's Degree (BSc)",
			period: "August 2023 - June 2026",
		},
		{
			degree: "Fundamentals in Digital Marketing",
			institution: "Google",
			type: "Course",
			period: "March 2022 - April 2022",
		},
		{
			degree: "Graphic Communication Diploma",
			institution: "Tækniskólinn",
			type: "Journeyman's Certificate",
			period: "August 2018 - May 2020",
		},
		{
			degree: "College Diploma",
			institution: "Menntaskólinn við Hamrahlíð",
			type: "College",
			period: "August 2012 - June 2016",
		},
		{
			degree: "Primary School Diploma",
			institution: "Álftamýrarskóli",
			type: "Other",
			period: "May 2002 - August 2012",
		},
	],
};

export const EDUCATION: Record<string, EducationSection> = {
	ICE: {
		heading: "Menntun",
		items: EDUCATION_SHARED.map((shared, i) => ({
			...shared,
			...EDUCATION_TEXT.ICE[i],
		})),
	},
	ENG: {
		heading: "Education",
		items: EDUCATION_SHARED.map((shared, i) => ({
			...shared,
			...EDUCATION_TEXT.ENG[i],
		})),
	},
};

const HOBBY_PROJECT_SHARED = [
	{ tags: ["Python", "OBS", "Twitch", "OpenAI", "ElevenLabs"], colors: ["#FFFFFF", "#BE27F5"], logo: "/twitch_logo.png", repo: "https://github.com/Arnfinnur21/elevenlabstwitchbot" },
	{ tags: ["Next.js", "Riot", "JavaScript", "Vercel"], colors: ["#FFFFFF", "#00ffec"], logo: "/lol_logo.png", repo: "https://github.com/Arnfinnur21/lolbois" },
	{ tags: ["Next.js", "OSRS", "JavaScript", "Vercel"], colors: ["#FFFFFF", "#ffa400"], logo: "/osrs_logo.png", repo: "https://github.com/Arnfinnur21/lolbois" },
];

const HOBBY_PROJECT_TEXT = {
	ICE: [
		{
			title: "Twitch AI Botti",
			description: `Twitch botti fyrir streymi, aðallega fyrir vini mína.

Bottinn tekur við beiðnum frá Twitch í formi '!tts' eða '!bot' og spilar skilaboð til baka í rödd sem notandinn velur.

Beiðnin er filteruð í gegnum OpenAI API'ið og ElevenLabs er notað til að búa til raddirnar.

OBS Websockets og TwitchIO er notað til að meðhöndla tengingu við twitch og móttöku og sendingu skilaboða.`,
			sidenote: `Mér hefur alltaf fundist svona AI raddir skemmtilegar og komst að því að það var einfaldara en ég hélt að setja þær upp. Síðan í kjölfarið var mjög skemmtilegt að búa til 'persónuleika' fyrir raddirnar þannig þær hljómi ekki allar eins og default GPT svör.`,
		},
		{
			title: "League Tölfræði",
			description: `Hálfstatic síða sem sýnir skemmtilega tölfræði yfir síðustu 20 leiki hjá völdum spilurum.

Riot API'ið er notað til að nálgast gögn og síðan er rennt í gegnum response'ið til sía og móta.`,
			sidenote: `Þar sem þetta var verkefni fyrir lítin hóp þá þurfti ég að koma með áhugaverðar leiðir til að komast framhjá timeout'i útaf mörgum requests.

Mestöll vinnan fór í það að renna yfir massívu skrárnar sem skila sér frá Riot og tengja saman playerana við þeirra stats.`,
		},
		{
			title: "RuneScape Tölfræði",
			description: `Rosalega svipuð pæling og League Tölfræðin.

Jagex API'ið er notað til að nálgast gögn hjá völdum spilurum sem er síðan rennt yfir og gert lesanleg.`,
			sidenote: `Fyrsta verkefnið sem ég gerði í frítímanum mínum. Mig langaði að sjá tölfræðina hjá mér og vinum mínum fyrst. Það voru að sjálfsögðu önnur tól í boði en þá þyrfti að leita af einum og síðan opna annað tab til að sjá annan o.s.frvs.`,
		},
	],
	ENG: [
		{
			title: "Twitch AI Bot",
			description: `Twitch bot for streaming, mainly built for me and my friends.

Takes requests from chat using '!tts' or '!bot' and plays the message back in a voice the user picks.

The request gets filtered through the OpenAI API and ElevenLabs handles generating and playing the voices.

OBS Websockets and TwitchIO handle the Twitch connection and message sending/receiving.`,
			sidenote: `I've always found these AI voices entertaining and figured setting them up would be harder than it was. After that it was really fun giving each voice its own personality so they don't all just sound like default GPT responses.`,
		},
		{
			title: "League Stats",
			description: `A semi-static page showing fun stats from the last 20 games for selected players.

Uses the Riot API to fetch data which then gets parsed and shaped into something readable.`,
			sidenote: `Since this was built for a small group I had to find creative ways to get around rate limiting from too many requests.

Most of the work went into going through the massive files Riot returns and mapping players to their stats.`,
		},
		{
			title: "RuneScape Stats",
			description: `Pretty much the same idea as the League Stats site.

Uses the Jagex API to pull data for selected players, then parses and displays it in a readable format.`,
			sidenote: `The first personal project I built. I wanted to see mine and my friends' stats in one place. There were other tools out there but you'd have to look one person up, then open another tab for the next, and so on.`,
		},
	],
};

export const HOBBY_PROJECTS: Record<string, HobbyProject> = {
	ICE: {
		heading: "Eigin Verkefni",
		items: HOBBY_PROJECT_SHARED.map((shared, i) => ({
			...shared,
			...HOBBY_PROJECT_TEXT.ICE[i],
		})),
	},
	ENG: {
		heading: "Personal Projects",
		items: HOBBY_PROJECT_SHARED.map((shared, i) => ({
			...shared,
			...HOBBY_PROJECT_TEXT.ENG[i],
		})),
	},
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
