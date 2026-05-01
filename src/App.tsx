import { Canvas } from '@react-three/fiber';
import { Header } from './header';
import { TestCube } from './test-cube';
import { TestModel } from './test-model';

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
				<TestModel />
			</Canvas>
		</div>
	);
}

export default App;
