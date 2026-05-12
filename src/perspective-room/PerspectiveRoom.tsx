import {
	BaseBoardRight,
	BaseBoardLeft,
	FloorModel,
	BedModel,
	WorkstationModel,
	CabinetModel,
	CurtainModel,
	WindowModel,
	CurtainRodModel,
	ShelfModel,
} from '../models';
import { LeftWallModel, RightWallModel } from '../models/wall';

export function PerspectiveRoom() {
	return (
		<group>
			<LeftWallModel />
			<RightWallModel />
			<BaseBoardRight />
			<BaseBoardLeft />
			<BedModel />
			<WorkstationModel />
			<CabinetModel />
			<CurtainModel />
			<WindowModel />
			<CurtainRodModel />
			<ShelfModel />
			<FloorModel />
		</group>
	);
}
