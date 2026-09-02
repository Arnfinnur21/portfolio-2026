export type HeroMotionState = {
	scrollProgress: number;
	mouseX: number;
	mouseY: number;
	reducedMotion: boolean;
};

export const heroMotion: HeroMotionState = {
	scrollProgress: 0,
	mouseX: 0,
	mouseY: 0,
	reducedMotion: false,
};
