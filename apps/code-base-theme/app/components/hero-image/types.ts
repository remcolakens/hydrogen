import { IButton } from '@code-internet-applications/react';
import { IProductCardImage } from '~/types';

export interface IHeroImageProps {
	title: string;
	description: string;
	image: {
		mobile: IProductCardImage;
		desktop: IProductCardImage;
	};
	button?: IButton;
}
