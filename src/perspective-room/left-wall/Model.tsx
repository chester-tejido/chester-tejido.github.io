import { GradientTexture } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { FrontSide } from 'three';

export function LeftWallModel() {
	const { sizeX, sizeY, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } =
		useControls(
			'Left Wall Model',
			{
				size: folder({
					sizeX: { value: 12, step: 0.1 },
					sizeY: { value: 30, step: 0.1 },
				}),
				position: folder({
					positionX: { value: -4.9, step: 0.1 },
					positionY: { value: -0.5, step: 0.1 },
					positionZ: { value: 10, step: 0.1 },
				}),
				rotation: folder({
					rotationX: { value: -90, step: 1 },
					rotationY: { value: 90, step: 1 },
					rotationZ: { value: 0, step: 1 },
				}),
			},
			{
				collapsed: true,
			},
		);

	return (
		<group position={[positionX, positionY, positionZ]}>
			<mesh
				castShadow
				receiveShadow
				rotation={[
					(Math.PI / 180) * rotationX,
					(Math.PI / 180) * rotationY,
					(Math.PI / 180) * rotationZ,
				]}
				// Having another position inside a group allows to change the pivot point of the wall when changing the size of the plane geometry
				position={[0, sizeX / 2, 0]}
			>
				<planeGeometry args={[sizeX, sizeY]} />
				<meshStandardMaterial>
					<GradientTexture
						rotation={(Math.PI / 180) * -90}
						stops={[0, 1]}
						colors={['red', 'lightcoral']}
					/>
				</meshStandardMaterial>
			</mesh>
		</group>
	);
}
