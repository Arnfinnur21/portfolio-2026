"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import FerrofluidImpl from "./Ferrofluid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ferrofluid = FerrofluidImpl as any;

// Each instance mounts its own WebGL context, and mobile browsers cap how
// many can exist at once (often as low as 8) — with several project/hobby
// cards on the page, mounting them all unconditionally silently blanks out
// whichever ones get evicted. Only actually mount the canvas while the card
// is near the viewport; unmounting the rest frees their context back up.
export default function FerrofluidBG({
	colors,
	className = "",
	timeOffset = 0,
	...rest
}: {
	colors: string[];
	className?: string;
	timeOffset?: number;
	[key: string]: unknown;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { margin: "200px" });

	return (
		<div
			ref={ref}
			className={`pointer-events-none absolute inset-0 ${className}`}
		>
			{inView && (
				<Ferrofluid
					colors={colors}
					timeOffset={timeOffset}
					speed={0.1}
					scale={1.3}
					fluidity={0.18}
					rimWidth={0.2}
					sharpness={2.8}
					glow={2}
					flowDirection="down"
					opacity={0.8}
					mouseInteraction={false}
					{...rest}
				/>
			)}
		</div>
	);
}
