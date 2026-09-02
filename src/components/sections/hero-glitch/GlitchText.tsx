"use client";

import { cn } from "@/lib/utils";
import styles from "./glitch.module.css";

type GlitchTextProps = {
	as?: "h1" | "span" | "p";
	text: string;
	className?: string;
};

export default function GlitchText({ as = "span", text, className }: GlitchTextProps) {
	const Tag = as;
	return (
		<Tag data-text={text} className={cn(styles.glitchText, className)}>
			{text}
		</Tag>
	);
}
