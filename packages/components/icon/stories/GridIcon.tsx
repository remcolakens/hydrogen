import React from 'react';

export interface IGridIcon {
	children: React.ReactNode;
	name: string;
}

export const GridIcon: React.FC<IGridIcon> = ({ children, name }) => {
	const handleClick = () => {
		navigator.clipboard.writeText(name);
		window.alert(`Copied ${name} to your clipboard`);
	};

	return (
		<div>
			<button
				className="flex w-full flex-col items-center rounded-md border p-5 hover:bg-gray-100"
				onClick={handleClick}
			>
				{children}
				<span className="mt-1 text-xs">{name}</span>
			</button>
		</div>
	);
};
