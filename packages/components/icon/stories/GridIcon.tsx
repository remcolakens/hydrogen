import { FC, ReactNode, useState } from 'react';

export interface IGridIcon {
	children: ReactNode;
	name: string;
}

export const GridIcon: FC<IGridIcon> = ({ children, name }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleClick = () => {
		navigator.clipboard.writeText(name);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1500);
	};

	return (
		<div>
			<button
				className="flex w-full flex-col items-center rounded-md border p-5 hover:bg-gray-100"
				onClick={handleClick}
			>
				{children}
				<span className="mt-1 text-xs">{isCopied ? 'Copied...' : name}</span>
			</button>
		</div>
	);
};
