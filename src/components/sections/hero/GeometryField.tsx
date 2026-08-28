"use client";

import { useRef, type ReactNode } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { heroMotion } from "./motion-state";

const CHARCOAL = "#141414";
const GRAPHITE = "#232323";
const STEEL = "#2c2c2e";
const OFFWHITE = "#f2f2f0";

type Vec3 = [number, number, number];

type DepthObjectProps = {
	basePosition: Vec3;
	rotationSpeed?: Vec3;
	scrollDrift?: Vec3;
	floatIntensity?: number;
	rotationIntensity?: number;
	reducedMotion: boolean;
	children: ReactNode;
};

function DepthObject({
	basePosition,
	rotationSpeed = [0.05, 0.12, 0.035],
	scrollDrift = [0, 0, 0],
	floatIntensity = 1.4,
	rotationIntensity = 0.6,
	reducedMotion,
	children,
}: DepthObjectProps) {
	const group = useRef<THREE.Group>(null);

	useFrame((_, delta) => {
		const node = group.current;
		if (!node) return;
		const { scrollProgress } = heroMotion;

		node.position.set(
			basePosition[0] + scrollDrift[0] * scrollProgress,
			basePosition[1] + scrollDrift[1] * scrollProgress,
			basePosition[2] + scrollDrift[2] * scrollProgress,
		);

		if (!reducedMotion) {
			node.rotation.x += delta * rotationSpeed[0];
			node.rotation.y += delta * rotationSpeed[1];
			node.rotation.z += delta * rotationSpeed[2];
		}
	});

	return (
		<group ref={group} position={basePosition}>
			<Float
				speed={reducedMotion ? 0 : 1.8}
				floatIntensity={reducedMotion ? 0 : floatIntensity}
				rotationIntensity={reducedMotion ? 0 : rotationIntensity}
			>
				{children}
			</Float>
		</group>
	);
}

type GeometryFieldProps = {
	layer: "back" | "front";
	reducedMotion: boolean;
	isCompact: boolean;
};

export default function GeometryField({
	layer,
	reducedMotion,
	isCompact,
}: GeometryFieldProps) {
	if (layer === "front") {
		return (
			<>
				<DepthObject
					basePosition={[2.6, 0.6, 4.5]}
					scrollDrift={[0.6, -0.3, 0]}
					floatIntensity={1.8}
					rotationIntensity={0.9}
					reducedMotion={reducedMotion}
				>
					<mesh>
						<sphereGeometry args={[0.75, 48, 48]} />
						<meshPhysicalMaterial
							color={OFFWHITE}
							transmission={1}
							thickness={1.4}
							roughness={0.06}
							ior={1.4}
							metalness={0}
							clearcoat={1}
							envMapIntensity={1.3}
						/>
					</mesh>
				</DepthObject>
				<DepthObject
					basePosition={[-2.8, -0.8, 3.2]}
					scrollDrift={[-0.4, 0.5, 0]}
					floatIntensity={1.3}
					rotationIntensity={0.7}
					rotationSpeed={[0.09, 0.18, 0.06]}
					reducedMotion={reducedMotion}
				>
					<mesh rotation={[Math.PI / 2.4, 0, 0]}>
						<torusGeometry args={[0.55, 0.05, 24, 96]} />
						<meshStandardMaterial
							color={STEEL}
							metalness={1}
							roughness={0.2}
							envMapIntensity={1.5}
						/>
					</mesh>
				</DepthObject>
			</>
		);
	}

	const slabCount = isCompact ? 2 : 3;

	return (
		<>
			<DepthObject
				basePosition={[0, 0, -1]}
				scrollDrift={[0, 0, -1.5]}
				floatIntensity={0.7}
				rotationIntensity={0.5}
				rotationSpeed={[0.03, 0.09, 0.02]}
				reducedMotion={reducedMotion}
			>
				<mesh rotation={[Math.PI / 2, 0, 0]}>
					<torusGeometry args={[3.1, 0.04, 24, 128]} />
					<meshStandardMaterial
						color={GRAPHITE}
						metalness={0.9}
						roughness={0.3}
						envMapIntensity={1.2}
					/>
				</mesh>
			</DepthObject>

			<DepthObject
				basePosition={[3.6, 1.2, -5]}
				scrollDrift={[1.4, 0.6, -3]}
				floatIntensity={0.9}
				rotationIntensity={0.6}
				rotationSpeed={[0.045, -0.06, 0.03]}
				reducedMotion={reducedMotion}
			>
				<mesh rotation={[0.3, 0.6, 0.1]}>
					<torusGeometry args={[1.9, 0.03, 16, 96]} />
					<meshStandardMaterial
						color={CHARCOAL}
						metalness={0.85}
						roughness={0.35}
						envMapIntensity={1.1}
					/>
				</mesh>
			</DepthObject>

			{Array.from({ length: slabCount }).map((_, i) => {
				const side = i % 2 === 0 ? 1 : -1;
				const depth = -3 - i * 3.2;
				return (
					<DepthObject
						key={i}
						basePosition={[side * (2.2 + i * 0.6), (i - 1) * 0.4, depth]}
						scrollDrift={[side * (1.5 + i * 0.4), -0.3, -2 - i]}
						rotationSpeed={[0.024, 0.06 * side, 0.018]}
						floatIntensity={0.8}
						rotationIntensity={0.5}
						reducedMotion={reducedMotion}
					>
						<mesh rotation={[0.15, side * 0.5, 0]}>
							<boxGeometry args={[0.14, 3.4, 1.6]} />
							<meshStandardMaterial
								color={i % 2 === 0 ? GRAPHITE : CHARCOAL}
								metalness={0.92}
								roughness={0.28}
								envMapIntensity={1.3}
							/>
						</mesh>
					</DepthObject>
				);
			})}

			<DepthObject
				basePosition={[-3.2, -1, -6.5]}
				scrollDrift={[-0.8, 0.4, -2]}
				floatIntensity={1.1}
				rotationIntensity={0.6}
				reducedMotion={reducedMotion}
			>
				<mesh>
					<sphereGeometry args={[1.1, 48, 48]} />
					<meshStandardMaterial
						color={STEEL}
						metalness={1}
						roughness={0.18}
						envMapIntensity={1.5}
					/>
				</mesh>
			</DepthObject>

			<DepthObject
				basePosition={[2.4, -1.6, -8]}
				scrollDrift={[0.6, 0.5, -2]}
				floatIntensity={1}
				rotationIntensity={0.6}
				reducedMotion={reducedMotion}
			>
				<mesh>
					<sphereGeometry args={[0.7, 48, 48]} />
					<meshPhysicalMaterial
						color={OFFWHITE}
						transmission={1}
						thickness={1.2}
						roughness={0.08}
						ior={1.4}
						clearcoat={1}
						envMapIntensity={1.2}
					/>
				</mesh>
			</DepthObject>
		</>
	);
}
