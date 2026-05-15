import {
	BaseBoardLeft,
	BaseBoardRight,
	BedModel,
	CabinetModel,
	CurtainModel,
	CurtainRodModel,
	FloorModel,
	ShelfModel,
	WindowModel,
	WorkstationModel,
} from '../models';
import { LeftWallModel, RightWallModel } from '../models/wall';

export function PerspectiveRoom() {
	return (
		<group>
			<LeftWallModel />
			<RightWallModel />
			<FloorModel />
			<BaseBoardRight />
			<BaseBoardLeft />
			<BedModel />
			<WorkstationModel />
			<CabinetModel />
			<CurtainModel />
			<WindowModel />
			<CurtainRodModel />
			<ShelfModel />
		</group>
	);
}
