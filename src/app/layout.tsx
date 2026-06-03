import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Noto_Sans,
	Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/ui/LangProvider";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Personal portfolio and CV",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"dark scroll-smooth",
				geistSans.variable,
				geistMono.variable,
				"font-sans",
				notoSans.variable,
				playfairDisplayHeading.variable,
			)}
		>
			<body className="bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100 w-screen">
				<LangProvider>{children}</LangProvider>
			</body>
		</html>
	);
}
