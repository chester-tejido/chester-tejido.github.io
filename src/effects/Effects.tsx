import { EffectComposer, Outline } from '@react-three/postprocessing';
import * as THREE from 'three';

export function Effects(props: { selected?: THREE.Object3D[] }) {
	const { selected } = props;
	return (
		<EffectComposer multisampling={8} autoClear={false}>
			<Outline selection={selected} blur edgeStrength={10} width={500} />
		</EffectComposer>
	);
}
