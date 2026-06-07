export interface NavLink {
	label: string;
	href: string;
}

export interface Project {
	title: string;
	description: string;
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
	description: string;
	tags?: string[];
	image: string;
}

export interface Skill {
	category: string;
	items: string[];
}
