import { useCursor } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { RefObject, useState } from 'react';
import * as THREE from 'three';

export function useOutlineEffect(meshRef: RefObject<THREE.Group<THREE.Object3DEventMap> | null>): {
	onHover: (e: ThreeEvent<PointerEvent>) => void;
	onHoverOut: (e: ThreeEvent<PointerEvent>) => void;
	selected: THREE.Object3D[];
} {
	const [selected, setSelected] = useState<THREE.Object3D[]>([]);
	useCursor(selected.length > 0, 'pointer', 'auto');

	const onHover = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		if (meshRef.current && meshRef.current.children.length > 0) {
			setSelected(meshRef.current.children);
		} else if (meshRef.current) {
			setSelected([meshRef.current]);
		}
	};

	const onHoverOut = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		setSelected([]);
	};

	return {
		onHover,
		onHoverOut,
		selected,
	};
}
