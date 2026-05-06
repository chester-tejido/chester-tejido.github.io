import { folder, useControls } from 'leva';

export function FloorModel() {
	const { color, size, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } =
		useControls(
			'Floor Model',
			{
				color: '#7c2525',
				size: { value: 30, step: 0.1 },
				position: folder({
					positionX: { value: 10, step: 0.1 },
					positionY: { value: -0.5, step: 0.1 },
					positionZ: { value: 10, step: 0.1 },
				}),
				rotation: folder({
					rotationX: { value: -90, step: 1 },
					rotationY: { value: 0, step: 1 },
					rotationZ: { value: 0, step: 1 },
				}),
			},
			{
				collapsed: true,
			},
		);

	return (
		<mesh
			castShadow
			receiveShadow
			position={[positionX, positionY, positionZ]}
			rotation={[
				(Math.PI / 180) * rotationX,
				(Math.PI / 180) * rotationY,
				(Math.PI / 180) * rotationZ,
			]}
		>
			<planeGeometry args={[size, size]} />
			<meshStandardMaterial color={color} transparent />
		</mesh>
	);
}
