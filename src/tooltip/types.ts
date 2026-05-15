import { createContext } from 'react';

export interface ITooltip {
	text: string;
	x: number;
	y: number;
	marginLeft?: number;
	marginTop?: number;
}

export const TooltipContext = createContext<{
	tooltip: ITooltip | null;
	setTooltip: React.Dispatch<React.SetStateAction<ITooltip | null>>;
} | null>(null);
