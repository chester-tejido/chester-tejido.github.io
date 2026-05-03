import { GradientTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export function TestCube() {
	const meshRef = useRef<THREE.Mesh>(null);
	const materialRef1 = useRef<THREE.MeshStandardMaterial>(null);
	const materialRef2 = useRef<THREE.MeshStandardMaterial>(null);
	const materialRef3 = useRef<THREE.MeshStandardMaterial>(null);
	const materialRef4 = useRef<THREE.MeshStandardMaterial>(null);
	const materialRef5 = useRef<THREE.MeshStandardMaterial>(null);
	const materialRef6 = useRef<THREE.MeshStandardMaterial>(null);

	const [hoveredSide, setHoveredSide] = useState<number | null>(null);
	const [color, setColor] = useState<string>('white');
	const hoveredColor = 'darkgrey';

	// Rotate box mesh
	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.y -= delta * 0.6;
		}
	});

	// Bounce box mesh
	useFrame((state, delta) => {
		if (meshRef.current) {
			meshRef.current.position.y = 0.2 + Math.sin(state.clock.getElapsedTime() * 2) * 0.125;
		}
	});

	// Randomly change material color
	const changeMaterialColor = () => {
		setColor(
			`#${Math.floor(Math.random() * 0xffffff)
				.toString(16)
				.padStart(6, '0')}`,
		);
		if (materialRef1.current) {
			// Random color
			materialRef1.current.color.set(color);
		}
		if (materialRef2.current) {
			// Random color
			materialRef2.current.color.set(color);
		}
		if (materialRef3.current) {
			// Random color
			materialRef3.current.color.set(color);
		}
		if (materialRef4.current) {
			// Random color
			materialRef4.current.color.set(color);
		}
		if (materialRef5.current) {
			// Random color
			materialRef5.current.color.set(color);
		}
		if (materialRef6.current) {
			// Random color
			materialRef6.current.color.set(color);
		}
	};

	return (
		<mesh
			onPointerMove={(e) => {
				// e.faceIndex indicates the specific triangle hovered
				// Dividing by 2 identifies the specific rectangular side (0-5)
				const sideIndex = Math.floor((e.faceIndex ?? 0) / 2);
				setHoveredSide(sideIndex);
			}}
			onPointerOut={() => setHoveredSide(null)}
			onClick={changeMaterialColor}
			ref={meshRef}
			position={[0, 0.2, 0]}
			castShadow
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial
				ref={materialRef1}
				attach="material-0"
				color={hoveredSide === 0 ? hoveredColor : color}
			>
				<GradientTexture stops={[0, 1]} colors={['red', 'blue']} attach="map" />
			</meshStandardMaterial>
			<meshStandardMaterial
				ref={materialRef2}
				attach="material-1"
				color={hoveredSide === 1 ? hoveredColor : color}
			/>
			<meshStandardMaterial
				ref={materialRef3}
				attach="material-2"
				color={hoveredSide === 2 ? hoveredColor : color}
			/>
			<meshStandardMaterial
				ref={materialRef4}
				attach="material-3"
				color={hoveredSide === 3 ? hoveredColor : color}
			/>
			<meshStandardMaterial
				ref={materialRef5}
				attach="material-4"
				color={hoveredSide === 4 ? hoveredColor : color}
			/>
			<meshStandardMaterial
				ref={materialRef6}
				attach="material-5"
				color={hoveredSide === 5 ? hoveredColor : color}
			/>
			<Text position={[0.51, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.25} color="black">
				HELLO
			</Text>
			<Text position={[0, 0, -0.51]} rotation={[0, -Math.PI, 0]} fontSize={0.25} color="black">
				WORLD!
			</Text>
		</mesh>
	);
}
