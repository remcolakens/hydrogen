import { buttonSizeProps } from '@code-internet-applications/react';

export interface IHeroImageProps {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	button?: {
		text: string;
		handleClick: () => void;
		size?: buttonSizeProps;
		className?: string;
	};
}
