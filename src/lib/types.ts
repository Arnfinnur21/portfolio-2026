export interface NavLink {
	label: string;
	href: string;
}

export interface Project {
	title: string;
	description: string;
	sidenote?: string;
	tags: string[];
	href?: string;
	repo?: string;
	image?: string;
	colors: string[];
	logo: string;
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	description?: string;
	tags?: string[];
	image: string;
	older: boolean;
}

export interface ExperienceSection {
	heading: string;
	olderHeading: string;
	items: Experience[];
}

export interface Skill {
	category: string;
	items: string[];
}

export interface EducationItem {
	degree: string;
	institution: string;
	type: string;
	period: string;
	image?: string;
}

export interface EducationSection {
	heading: string;
	items: EducationItem[];
}

export interface HobbyProject {
	heading: string;
	items: Project[];
}