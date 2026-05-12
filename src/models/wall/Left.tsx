import { useControls, folder } from 'leva';
import modelUrl from '../../../assets/models/LeftWall.glb?url';
import { useGLTF } from '@react-three/drei';

useGLTF.preload(modelUrl);

export function LeftWallModel() {
	const { nodes, materials } = useGLTF(modelUrl);

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Base board left wall',
		{
			position: folder({
				positionX: { value: 10.1, step: 0.1 },
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
			<mesh geometry={(nodes.LeftWall as any).geometry} material={materials.LightBlue} />
		</group>
	);
}
