import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import * as THREE from 'three';
import modelUrl from '../../../assets/models/Shelf.glb?url';

useGLTF.preload(modelUrl);

export function ShelfModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Shelf',
		{
			position: folder({
				positionX: { value: 10.0, step: 0.1 },
				positionY: { value: -0.5, step: 0.1 },
				positionZ: { value: 10.0, step: 0.1 },
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

	return (
		<group
			position={[positionX, positionY, positionZ]}
			rotation={[
				(Math.PI / 180) * rotationX,
				(Math.PI / 180) * rotationY,
				(Math.PI / 180) * rotationZ,
			]}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Shelf as THREE.Mesh).geometry}
				material={materials.Brown}
				position={[-14.169, 6.642, -7.369]}
			/>
		</group>
	);
}
