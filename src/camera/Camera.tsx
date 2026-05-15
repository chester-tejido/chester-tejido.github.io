import { CameraControls, CameraControlsImpl, PerspectiveCamera } from '@react-three/drei';
import { button, useControls } from 'leva';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box3, Vector3 } from 'three';

const CAMERA_POSITION_X = 12;
const CAMERA_POSITION_Y = 12;
const CAMERA_POSITION_Z = 12;

export function Camera() {
	const isProduction = process.env.NODE_ENV === 'production';
	const { ACTION } = CameraControlsImpl;
	const cameraControlsRef = useRef<CameraControlsImpl>(null);
	const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);

	const boundaryBox = useMemo(() => {
		const min = new Vector3(-5, -0.5, -5);
		const max = new Vector3(17, 15, 17);
		const borderBox = new Box3(min, max);
		return borderBox;
	}, []);

	useControls(
		'Camera Boundary',
		{
			boundaryMinX: {
				value: boundaryBox.min.x,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.min.x = value;
				},
			},
			boundaryMinY: {
				value: boundaryBox.min.y,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.min.y = value;
				},
			},
			boundaryMinZ: {
				value: boundaryBox.min.z,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.min.z = value;
				},
			},
			boundaryMaxX: {
				value: boundaryBox.max.x,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.max.x = value;
				},
			},
			boundaryMaxY: {
				value: boundaryBox.max.y,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.max.y = value;
				},
			},
			boundaryMaxZ: {
				value: boundaryBox.max.z,
				step: 0.1,
				onChange: (value) => {
					boundaryBox.max.z = value;
				},
			},
		},
		{
			collapsed: true,
		},
	);

	useControls(
		'Camera Position',
		{
			positionX: {
				value: camera ? camera.position.x : CAMERA_POSITION_X,
				editable: false,
			},
			positionY: {
				value: camera ? camera.position.y : CAMERA_POSITION_Y,
				editable: false,
			},
			positionZ: {
				value: camera ? camera.position.z : CAMERA_POSITION_Z,
				editable: false,
			},
			reset: button(() => {
				if (camera) {
					camera.position.set(CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z);
					const controls = cameraControlsRef.current;
					if (controls) {
						controls.setLookAt(
							CAMERA_POSITION_X,
							CAMERA_POSITION_Y,
							CAMERA_POSITION_Z,
							0,
							0,
							0,
							true,
						);
					}
				}
			}),
		},
		{
			collapsed: true,
		},
	);

	useEffect(() => {
		const controls = cameraControlsRef.current;
		if (controls) {
			controls.setBoundary(boundaryBox);
			controls.setLookAt(CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z, 0, 0, 0, true);

			controls.boundaryEnclosesCamera = isProduction;
		}
	}, [camera, cameraControlsRef, boundaryBox]);

	return (
		<>
			<PerspectiveCamera
				makeDefault
				position={[CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z]}
				ref={setCamera}
			/>
			{isProduction
				? camera && (
						<CameraControls
							camera={camera}
							mouseButtons={{
								left: ACTION.TRUCK,
								middle: ACTION.TRUCK,
								right: ACTION.NONE,
								wheel: ACTION.NONE,
							}}
							touches={{
								one: ACTION.TOUCH_TRUCK,
								two: ACTION.NONE,
								three: ACTION.NONE,
							}}
							ref={cameraControlsRef}
						/>
					)
				: camera && (
						<CameraControls
							camera={camera}
							mouseButtons={{
								left: ACTION.ROTATE,
								middle: ACTION.TRUCK,
								right: ACTION.DOLLY,
								wheel: ACTION.DOLLY,
							}}
							ref={cameraControlsRef}
						/>
					)}

			{!isProduction && <primitive object={new THREE.Box3Helper(boundaryBox, 0xff0000)} />}
		</>
	);
}
