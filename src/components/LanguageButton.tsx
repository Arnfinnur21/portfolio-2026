import React from "react";
import Image from "next/image";
import { useLang, useSetLang } from "@/components/ui/LangProvider";

export default function LanguageButton() {
	const lang = useLang();
	const setLang = useSetLang();
	return (
		<div className="relative">
			<button
				onClick={() => setLang(lang === "ICE" ? "ENG" : "ICE")}
				aria-label="Switch language"
				className="fixed bottom-10 right-50 bg-slate-700 rounded-full p-2"
			>
				<Image
					src={lang === "ICE" ? "/usa_flag.png" : "/iceland_flag.png"}
					alt={lang === "ICE" ? "English" : "Icelandic"}
					width={28}
					height={28}
					className="rounded-full object-cover"
				/>
			</button>
		</div>
	);
}
