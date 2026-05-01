import { useGLTF } from '@react-three/drei';
import modelUrl from '../../assets/models/PerspectiveRoom.glb?url';

const MODEL_PATH = modelUrl;

export function TestModel() {
	const { nodes } = useGLTF(MODEL_PATH);
	return (
		<group position={[5, -0.75, -5]} castShadow receiveShadow>
			<mesh
				geometry={(nodes.WallRight as any).geometry}
				position={[0, 1, 0]}
				scale={[10, 1, 0.125]}
			>
				<meshStandardMaterial color="#b85255" transparent />
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
