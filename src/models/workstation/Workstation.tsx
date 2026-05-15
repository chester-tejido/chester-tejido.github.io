import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import * as THREE from 'three';
import modelUrl from '../../../assets/models/Workstation.glb?url';

useGLTF.preload(modelUrl);

export function WorkstationModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Workstation',
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
				geometry={(nodes.CpuTower as THREE.Mesh).geometry}
				material={materials.LightGray}
				position={[1.173, 3.8, -12.765]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Mouse as THREE.Mesh).geometry}
				material={materials['Material.018']}
				position={[0.62, 3.635, -13.212]}
				scale={1.394}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.OfficeChair as THREE.Mesh).geometry}
				material={materials.Grey}
				position={[1.173, 3.8, -12.736]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Desk as THREE.Mesh).geometry}
				material={materials.Brown}
				position={[1.173, 3.8, -12.765]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Monitor2 as THREE.Mesh).geometry}
				material={materials.Black}
				position={[1.173, 3.8, -12.765]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Monitor1 as THREE.Mesh).geometry}
				material={materials.Black}
				position={[1.173, 3.8, -12.765]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={(nodes.Keyboard as THREE.Mesh).geometry}
				material={materials.Grey}
				position={[1.173, 3.8, -12.765]}
			/>
		</group>
	);
}
