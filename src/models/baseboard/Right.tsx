import { useGLTF } from '@react-three/drei';
import { folder, useControls } from 'leva';
import modelUrl from '../../../assets/models/BaseBoard.glb?url';

useGLTF.preload(modelUrl);

export function BaseBoardRight() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Base board right wall',
		{
			position: folder({
				positionX: { value: 10.0, step: 0.1 },
				positionY: { value: -0.5, step: 0.1 },
				positionZ: { value: -19.9, step: 0.1 },
			}),
			rotation: folder({
				rotationX: { value: -90, step: 1 },
				rotationY: { value: 90, step: 1 },
				rotationZ: { value: 90, step: 1 },
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
			<mesh geometry={(nodes.Cube as any).geometry} material={materials.DarkBrown} />
		</group>
	);
}
