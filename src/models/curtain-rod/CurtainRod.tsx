import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import modelUrl from '../../../assets/models/CurtainRod.glb?url';
import * as THREE from 'three';

useGLTF.preload(modelUrl);

export function CurtainRodModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Curtain Rod',
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
				geometry={(nodes.CurtainRod as THREE.Mesh).geometry}
				material={materials.Black}
				position={[-4.169, 7.859, -14.647]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
			/>
		</group>
	);
}
