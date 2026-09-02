"use client";

import type { CSSProperties } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CameraRig from "./CameraRig";
import GeometryField from "./GeometryField";
import AtmosphereParticles from "./AtmosphereParticles";

const BG_COLOR = "#0b0b0c";

type HeroCanvasProps = {
	layer: "back" | "front";
	reducedMotion: boolean;
	isCompact: boolean;
	transparent?: boolean;
	style: CSSProperties;
};

export default function HeroCanvas({
	layer,
	reducedMotion,
	isCompact,
	transparent = false,
	style,
}: HeroCanvasProps) {
	return (
		<Canvas
			style={style}
			dpr={[1, isCompact ? 1.3 : 1.6]}
			gl={{ antialias: true, alpha: transparent, powerPreference: "high-performance" }}
			camera={{ fov: 45, near: 0.1, far: 40 }}
			onCreated={({ gl }) => {
				gl.setClearColor(BG_COLOR, transparent ? 0 : 1);
			}}
		>
			{!transparent && <color attach="background" args={[BG_COLOR]} />}
			{!transparent && <fog attach="fog" args={[BG_COLOR, 6, 22]} />}

			<ambientLight intensity={0.35} />
			<directionalLight position={[4, 6, 5]} intensity={1.1} color="#ffffff" />
			<directionalLight position={[-6, -2, -4]} intensity={0.4} color="#8fa5ff" />

			<Environment resolution={256}>
				<Lightformer
					intensity={2.2}
					rotation={[Math.PI / 2, 0, 0]}
					position={[0, 6, 0]}
					scale={[12, 12, 1]}
					color="#ffffff"
				/>
				<Lightformer
					intensity={1}
					position={[-6, 1, -3]}
					scale={[6, 6, 1]}
					color="#9fb4ff"
				/>
				<Lightformer
					intensity={1.3}
					position={[6, -1, 3]}
					scale={[6, 6, 1]}
					color="#ffffff"
				/>
			</Environment>

			<CameraRig />
			<GeometryField layer={layer} reducedMotion={reducedMotion} isCompact={isCompact} />

			{layer === "back" && (
				<AtmosphereParticles count={isCompact ? 90 : 220} reducedMotion={reducedMotion} />
			)}

			{layer === "back" && !isCompact && (
				<EffectComposer multisampling={0}>
					<Bloom
						mipmapBlur
						luminanceThreshold={0.82}
						luminanceSmoothing={0.25}
						intensity={0.55}
					/>
				</EffectComposer>
			)}
		</Canvas>
	);
}
