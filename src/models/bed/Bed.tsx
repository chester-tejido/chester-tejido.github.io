import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import modelUrl from '../../../assets/models/Bed.glb?url';

useGLTF.preload(modelUrl);

export function BedModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Bed',
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
			<group position={[-10.924, 1.521, -6.74]}>
				<mesh
					receiveShadow
					castShadow
					geometry={(nodes.Plane037 as any).geometry}
					material={materials.Brown}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={(nodes.Plane037_1 as any).geometry}
					material={materials.White}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={(nodes.Plane037_2 as any).geometry}
					material={materials.DirtyWhite}
				/>
				<mesh
					receiveShadow
					castShadow
					geometry={(nodes.Plane037_3 as any).geometry}
					material={materials.Red}
				/>
			</group>
		</group>
	);
}
