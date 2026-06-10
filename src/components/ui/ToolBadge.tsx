import Image from "next/image";
import { TOOL_LOGOS } from "@/lib/data";

export default function ToolBadge({ tag }: { tag: string }) {
	const logo = TOOL_LOGOS[tag];

	if (!logo) {
		return null;
	}

	return (
		<span
			title={tag}
			className="flex items-center justify-center rounded-full bg-zinc-100 p-1.5 dark:bg-zinc-900"
		>
			<Image
				src={logo}
				alt={tag}
				width={20}
				height={20}
				className="object-contain"
			/>
		</span>
	);
}
