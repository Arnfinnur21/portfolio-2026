"use client";

import { Sparkles } from "@react-three/drei";

type AtmosphereParticlesProps = {
	count: number;
	reducedMotion: boolean;
};

export default function AtmosphereParticles({
	count,
	reducedMotion,
}: AtmosphereParticlesProps) {
	return (
		<Sparkles
			count={count}
			scale={[16, 9, 18]}
			size={1.4}
			speed={reducedMotion ? 0 : 0.15}
			opacity={0.35}
			color="#ffffff"
			noise={0.4}
		/>
	);
}
