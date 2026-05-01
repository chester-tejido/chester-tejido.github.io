import { Canvas } from '@react-three/fiber';
import { Header } from './header';
import { TestCube } from './test-cube';

function Plane() {
	return (
		<mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
			<planeGeometry args={[100, 100]} />
			<meshStandardMaterial color="white" transparent opacity={0.35} />
		</mesh>
	);
}

export function App() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Header />
			<Canvas shadows frameloop="always" camera={{ position: [5, 5, 5], fov: 50 }}>
				<hemisphereLight groundColor="white" intensity={0.35} />
				<directionalLight position={[10, 10, 10]} intensity={1} />
				<directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />
				<ambientLight intensity={0.25} />
				<pointLight position={[-10, 10, -10]} intensity={0.5} />
				<TestCube />
				<Plane />
			</Canvas>
		</div>
	);
}

export default App;
