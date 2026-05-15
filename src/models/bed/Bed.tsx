import { Effects } from '@/effects';
import { TooltipContext } from '@/tooltip';
import { useCursor, useGLTF } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import modelUrl from 'assets/models/Bed.glb?url';
import { folder, useControls } from 'leva';
import { useContext, useRef, useState } from 'react';
import * as THREE from 'three';

useGLTF.preload(modelUrl);

export function BedModel() {
	const { nodes, materials } = useGLTF(modelUrl);
	const meshRef = useRef<THREE.Group | null>(null);
	const tooltipContext = useContext(TooltipContext);

	const [selected, setSelected] = useState<THREE.Object3D[]>([]);
	useCursor(selected.length > 0, 'pointer', 'auto');

	const onHover = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		if (meshRef.current) {
			setSelected(meshRef.current.children);
		}
	};
	const onHoverOut = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		tooltipContext?.setTooltip(null);
		setSelected([]);
	};

	const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		const { clientX, clientY } = e;
		tooltipContext?.setTooltip({
			text: 'Bed',
			x: clientX,
			y: clientY,
			marginLeft: -14,
			marginTop: -20,
		});
	};

	const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls(
		'Bed',
		{
			position: folder({
				positionX: { value: 10.0, step: 0.1 },
				positionY: { value: -0.5, step: 0.1 },
				positionZ: { value: 10.0, step: 0.1 },
			}),
			rotation: folder({
				rotationX: { value: 0, step: 1 },
				rotationY: { value: 0, step: 1 },
				rotationZ: { value: 0, step: 1 },
			}),
		},
		{
			collapsed: true,
		},
	);

	return (
		<>
			<Effects selected={selected} />
			<group
				onPointerEnter={onHover}
				onPointerDown={onHover}
				onPointerUp={onHoverOut}
				onPointerLeave={onHoverOut}
				onPointerMove={onPointerMove}
				position={[positionX, positionY, positionZ]}
				rotation={[
					(Math.PI / 180) * rotationX,
					(Math.PI / 180) * rotationY,
					(Math.PI / 180) * rotationZ,
				]}
			>
				<group ref={meshRef} position={[-10.924, 1.521, -6.74]}>
					<mesh
						receiveShadow
						castShadow
						geometry={(nodes.Plane037 as any).geometry}
						material={materials.Brown}
					/>
					<mesh
						receiveShadow
						castShadow
						geometry={(nodes.Plane037_1 as any).geometry}
						material={materials.White}
					/>
					<mesh
						receiveShadow
						castShadow
						geometry={(nodes.Plane037_2 as any).geometry}
						material={materials.DirtyWhite}
					/>
					<mesh
						receiveShadow
						castShadow
						geometry={(nodes.Plane037_3 as any).geometry}
						material={materials.Red}
					/>
				</group>
			</group>
		</>
	);
}
