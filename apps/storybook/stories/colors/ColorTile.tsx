import { clsx } from 'clsx';

export interface IColorTile {
	color: string;
	border?: boolean;
}

export const ColorTile: React.FC<IColorTile> = ({ color, border }) => {
	const colorTitleClasses = clsx('h-16 w-16 rounded-xl', color, {
		border: border,
	});

	return (
		<div className="w-16">
			<div className={colorTitleClasses}></div>
			<span className="pt-4 text-2xs text-gray-500">
				{color.replace('bg-', '')}
			</span>
		</div>
	);
};
