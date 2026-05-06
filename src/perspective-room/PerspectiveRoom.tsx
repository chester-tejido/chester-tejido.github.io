import { FloorModel } from './floor';
import { LeftWallModel } from './left-wall';
import { RightWallModel } from './right-wall';

export function PerspectiveRoom() {
	return (
		<group>
			<FloorModel />
			<LeftWallModel />
			<RightWallModel />
		</group>
	);
}
