import { CameraControlsImpl } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RefObject, useRef } from 'react';

export interface CameraStats {
	distance: number;
	azimuthAngle: number;
	polarAngle: number;
	zoom: number;
	position: [number, number, number];
}

export function CameraStatsUpdater({
	cameraControlsRef,
	onUpdate,
}: {
	cameraControlsRef: RefObject<CameraControlsImpl | null>;
	onUpdate: (next: CameraStats) => void;
}) {
	const prev = useRef<CameraStats | null>(null);

	useFrame(() => {
		const controls = cameraControlsRef?.current;
		if (!controls) return;

		const next: CameraStats = {
			distance: Number(controls.distance.toFixed(2)),
			azimuthAngle: Number(controls.azimuthAngle.toFixed(2)),
			polarAngle: Number(controls.polarAngle.toFixed(2)),
			zoom: Number(controls.camera.zoom.toFixed(2)),
			position: controls.camera.position.toArray().map((value) => Number(value.toFixed(2))) as [
				number,
				number,
				number,
			],
		};

		const same =
			prev.current &&
			prev.current.distance === next.distance &&
			prev.current.azimuthAngle === next.azimuthAngle &&
			prev.current.polarAngle === next.polarAngle &&
			prev.current.zoom === next.zoom &&
			prev.current.position.every((value, index) => value === next.position[index]);

		if (!same) {
			prev.current = next;
			onUpdate(next);
		}
	});

	return null;
}
