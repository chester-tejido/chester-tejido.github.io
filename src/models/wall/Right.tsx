import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import modelUrl from '../../../assets/models/RightWall.glb?url';

useGLTF.preload(modelUrl);

export function RightWallModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Right wall model',
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
				geometry={(nodes.RightWall as any).geometry}
				material={materials.LightBlue}
				position={[0, 6, -15]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}
