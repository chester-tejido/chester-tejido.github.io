import { GradientTexture, useGLTF, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import modelUrl from '../../assets/models/PerspectiveRoom.glb?url';
import textureUrl from '../../assets/textures/LeftWallTexture.png?url';

const MODEL_PATH = modelUrl;
const TEXTURE_PATH = textureUrl;

export function TestModel() {
	const { nodes } = useGLTF(MODEL_PATH);
	const texture = useTexture(TEXTURE_PATH);

	const { position } = useControls('Test Model', {
		position: {
			value: [5, -0.75, -5],
			step: 0.25,
		},
	});

	return (
		<group position={position} castShadow receiveShadow>
			<mesh
				geometry={(nodes.WallRight as any).geometry}
				position={[0, 1, 0]}
				scale={[10, 1, 0.125]}
			>
				<meshStandardMaterial>
					<GradientTexture stops={[0, 1]} colors={['red', 'blue']} attach="map" />
				</meshStandardMaterial>
			</mesh>
			<mesh
				geometry={(nodes.WallLeft as any).geometry}
				position={[-10, 1, 10]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[10, 1, 0.125]}
			>
				<meshStandardMaterial map={texture} />
			</mesh>
			<mesh
				geometry={(nodes.Floor as any).geometry}
				position={[0, 0.125, 10]}
				scale={[2.848, 0.052, 3.816]}
				receiveShadow
			>
				<meshStandardMaterial color="darkgrey" transparent />
			</mesh>
		</group>
	);
}

useGLTF.preload(MODEL_PATH);
