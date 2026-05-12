import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import modelUrl from '../../../assets/models/Cabinet.glb?url';
import * as THREE from 'three';

useGLTF.preload(modelUrl);

export function CabinetModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Cabinet',
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
				geometry={(nodes.Cabinet as THREE.Mesh).geometry}
				material={materials.Brown}
				position={[-14.154, 5.166, -0.994]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}
