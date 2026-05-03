import { CameraControlsImpl } from '@react-three/drei';
import { button, useControls } from 'leva';
import { RefObject } from 'react';
import { CameraStatsUpdater } from './CameraStatsUpdater';

export function CameraStats({
	cameraControlsRef,
}: {
	cameraControlsRef: RefObject<CameraControlsImpl | null>;
}) {
	const CAMERA_FOLDER_NAME = 'Camera Stats';

	const [, setDistance] = useControls(CAMERA_FOLDER_NAME, () => ({
		zoom: { value: 0, step: 0.1, readOnly: true },
	}));
	const [, setAzimuthAngle] = useControls(CAMERA_FOLDER_NAME, () => ({
		horizontalAngle: { value: 0, step: 0.1, readOnly: true },
	}));
	const [, setPolarAngle] = useControls(CAMERA_FOLDER_NAME, () => ({
		verticalAngle: { value: 0, step: 0.1, readOnly: true },
	}));
	const [, setPosition] = useControls(CAMERA_FOLDER_NAME, () => ({
		position: { value: [5, 5, 5], step: 0.1, readOnly: true },
	}));

	useControls(CAMERA_FOLDER_NAME, {
		reset: button(() => {
			if (!cameraControlsRef.current) return;
			cameraControlsRef.current.reset();
		}),
	});

	return (
		<CameraStatsUpdater
			cameraControlsRef={cameraControlsRef}
			onUpdate={(stats) => {
				setDistance({ zoom: stats.distance });
				setAzimuthAngle({ horizontalAngle: stats.azimuthAngle });
				setPolarAngle({ verticalAngle: stats.polarAngle });
				setPosition({ position: stats.position });
			}}
		/>
	);
}
