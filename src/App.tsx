import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { createContext } from 'react';
import * as THREE from 'three';
import { Camera } from './camera';
import { Header } from './header';
import { PerspectiveRoom } from './perspective-room';
import { Tooltip } from './tooltip';

export const TooltipContext = createContext<{
	tooltip: string | null;
	setTooltip: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export function App() {
	const isProduction = process.env.NODE_ENV === 'production';

	return (
		<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
			<Header />
			<Leva hidden={isProduction} />
			<Tooltip>
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
			</Tooltip>
		</div>
	);
}

export default App;
