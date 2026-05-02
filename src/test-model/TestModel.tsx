import { GradientTexture, useGLTF } from '@react-three/drei';
import modelUrl from '../../assets/models/PerspectiveRoom.glb?url';

const MODEL_PATH = modelUrl;

export function TestModel() {
	const { nodes } = useGLTF(MODEL_PATH);
	// Fix: Change GradientTexture to rotate correctly on the walls
	return (
		<group position={[0, -8, -10]} castShadow receiveShadow>
			<mesh
				geometry={(nodes.WallRight as any).geometry}
				position={[0, 1, 0]}
				scale={[10, 1, 0.125]}
			>
				<meshStandardMaterial>
					<GradientTexture
						rotation={(Math.PI / 180) * 90}
						stops={[0, 1]}
						colors={['red', 'blue']}
					/>
				</meshStandardMaterial>
			</mesh>
			<mesh
				geometry={(nodes.WallLeft as any).geometry}
				position={[-10, 1, 10]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[10, 1, 0.125]}
			>
				<meshStandardMaterial color="#8b3c3e" transparent />
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
