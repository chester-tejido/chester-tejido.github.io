import { GradientTexture } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { Euler, Quaternion } from 'three';

export function RightWallModel() {
	const { sizeX, sizeY, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } =
		useControls(
			'Right Wall Model',
			{
				size: folder({
					sizeX: { value: 30, step: 0.1 },
					sizeY: { value: 12, step: 0.1 },
				}),
				position: folder({
					positionX: { value: 10, step: 0.1 },
					positionY: { value: -0.5, step: 0.1 },
					positionZ: { value: -4.9, step: 0.1 },
				}),
				rotation: folder({
					rotationX: { value: 0, step: 1 },
					rotationY: { value: 0, step: 1 },
					rotationZ: { value: 0, step: 1 },
				}),
			},
			{
				collapsed: true,
			},
		);

	// Prevent from gimbal lock by using quaternion instead of Euler angles for rotation
	const quaternion = new Quaternion().setFromEuler(
		new Euler(
			(Math.PI / 180) * rotationX,
			(Math.PI / 180) * rotationY,
			(Math.PI / 180) * rotationZ,
		),
	);

	return (
		<group position={[positionX, positionY, positionZ]}>
			<mesh castShadow receiveShadow position={[0, sizeY / 2, 0]} quaternion={quaternion}>
				<planeGeometry args={[sizeX, sizeY]} />
				<meshStandardMaterial>
					<GradientTexture stops={[0, 1]} colors={['lightcoral', 'red']} />
				</meshStandardMaterial>
			</mesh>
		</group>
	);
}
