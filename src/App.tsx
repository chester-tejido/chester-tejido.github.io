import { Canvas } from '@react-three/fiber';
import { Header } from './header';
import * as THREE from 'three';
import { CameraControls, CameraControlsImpl } from '@react-three/drei';
import { useRef } from 'react';
import { CameraStats } from './camera-stats';
import { PerspectiveRoom } from './perspective-room';

export function App() {
	const { ACTION } = CameraControlsImpl;
	const cameraControlsRef = useRef<CameraControlsImpl>(null);

	return (
		<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
			<Header />
			<Canvas
				shadows={{
					enabled: true,
					type: THREE.PCFShadowMap,
				}}
				frameloop="always"
				camera={{ position: [12, 12, 12], fov: 50 }}
			>
				<CameraControls
					mouseButtons={{
						left: ACTION.ROTATE,
						middle: ACTION.TRUCK,
						right: ACTION.DOLLY,
						wheel: ACTION.DOLLY,
					}}
					ref={cameraControlsRef}
				/>
				<CameraStats cameraControlsRef={cameraControlsRef} />
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
