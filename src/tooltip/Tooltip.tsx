import { useState } from 'react';
import { ITooltip, TooltipContext } from './types';

export function Tooltip(props: { children: React.ReactNode }) {
	const [tooltip, setTooltip] = useState<ITooltip | null>(null);

	return (
		<TooltipContext.Provider value={{ tooltip, setTooltip }}>
			{props.children}
			<div
				style={{
					position: 'fixed',
					left: tooltip?.x ?? 0,
					top: tooltip?.y ?? 0,
					marginLeft: `${tooltip?.marginLeft ?? 0}px`,
					marginTop: `${tooltip?.marginTop ?? 0}px`,
					pointerEvents: 'none',
					color: 'white',
					fontFamily: 'sans-serif',
					whiteSpace: 'nowrap',
					zIndex: 10, // Sits safely above the canvas
				}}
			>
				{tooltip?.text}
			</div>
		</TooltipContext.Provider>
	);
}
