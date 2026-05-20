// src/components/LangProvider.tsx
"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext<"ICE" | "ENG">("ICE");
const SetLangContext = createContext<React.Dispatch<React.SetStateAction<"ICE" | "ENG">>>(() => {});

export const useLang = () => useContext(LangContext);
export const useSetLang = () => useContext(SetLangContext);

export function LangProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<"ICE" | "ENG">("ICE");
	return (
		<LangContext.Provider value={lang}>
			<SetLangContext.Provider value={setLang}>
				{children}
			</SetLangContext.Provider>
		</LangContext.Provider>
	);
}
