"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { heroMotion } from "./motion-state";

const START_Z = 9;
const END_Z = -6;
const MOUSE_AMOUNT_X = 0.35;
const MOUSE_AMOUNT_Y = 0.22;
const IDLE_AMOUNT_Y = 0.22;
const IDLE_AMOUNT_X = 0.16;
const DAMPING = 2.4;

export default function CameraRig() {
	const { camera } = useThree();
	const pos = useRef({ x: 0, y: 0, z: START_Z });

	useFrame((state, delta) => {
		const { scrollProgress, mouseX, mouseY, reducedMotion } = heroMotion;
		const t = state.clock.elapsedTime;

		const targetZ = START_Z + (END_Z - START_Z) * scrollProgress;
		const idleY = reducedMotion ? 0 : Math.sin(t * 0.5) * IDLE_AMOUNT_Y;
		const idleX = reducedMotion ? 0 : Math.sin(t * 0.35 + 1.3) * IDLE_AMOUNT_X;
		const targetX = reducedMotion ? 0 : mouseX * MOUSE_AMOUNT_X + idleX;
		const targetY = reducedMotion ? 0 : -mouseY * MOUSE_AMOUNT_Y + idleY;

		const damp = Math.min(1, delta * DAMPING);
		pos.current.x += (targetX - pos.current.x) * damp;
		pos.current.y += (targetY - pos.current.y) * damp;
		pos.current.z += (targetZ - pos.current.z) * damp;

		camera.position.set(pos.current.x, pos.current.y, pos.current.z);
		camera.lookAt(
			pos.current.x * 0.3,
			pos.current.y * 0.3,
			pos.current.z - 10,
		);
	});

	return null;
}
