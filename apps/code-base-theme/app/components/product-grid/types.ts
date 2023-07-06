import { IButton } from '@code-internet-applications/react';
import { HomepageFeaturedProductsQuery } from 'storefrontapi.generated';

export interface IProductGridProps {
	title: string;
	products: HomepageFeaturedProductsQuery;
	button?: IButton;
}