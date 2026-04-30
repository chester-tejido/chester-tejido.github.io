import { Canvas, useFrame } from '@react-three/fiber';
import { Header } from './header';
import { useRef } from 'react';
import * as THREE from 'three';

function Box() {
	const meshRef = useRef<THREE.Mesh>(null);

	// Rotate box mesh
	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.y += delta * 0.6;
		}
	});

	return (
		<mesh ref={meshRef} rotation={[10, 10, 0]}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="white " />
		</mesh>
	);
}

export function App() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Header />
			<Canvas frameloop="always">
				<hemisphereLight groundColor="orange" intensity={0.35} />
				<directionalLight position={[5, 5, 5]} intensity={1} castShadow />
				<ambientLight intensity={0.25} />
				<pointLight position={[-10, 10, -10]} intensity={0.5} />
				<Box />
			</Canvas>
		</div>
	);
}

export default App;
