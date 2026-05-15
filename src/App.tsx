import { Canvas } from '@react-three/fiber';
import { Header } from './header';
import * as THREE from 'three';
import { PerspectiveRoom } from './perspective-room';
import { Leva } from 'leva';
import { Camera } from './camera';

export function App() {
	const isProduction = process.env.NODE_ENV === 'production';

	return (
		<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
			<Header />
			<Leva hidden={isProduction} />
			<Canvas
				shadows={{
					enabled: true,
					type: THREE.PCFShadowMap,
				}}
				frameloop="always"
			>
				<Camera />
				<hemisphereLight groundColor="white" intensity={0.35} />
				<directionalLight position={[10, 10, 10]} intensity={1} />
				<directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />
				<ambientLight intensity={0.25} />
				<pointLight position={[-10, 10, -10]} intensity={0.5} />
				<PerspectiveRoom />
			</Canvas>
		</div>
	);
}

export default App;
