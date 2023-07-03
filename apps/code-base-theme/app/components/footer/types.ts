import { HTMLAttributes, ReactNode } from 'react';

export interface IFooterProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
}

export interface IFooterNavigationSectionProps
	extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	navigation: IFooterNavigationSectionItemProps[];
	navigationMenuListClasses?: string;
	orientation?: 'vertical' | 'horizontal';
	ariaLabel?: string;
}

export interface IFooterNavigationSectionItemProps {
	id: string;
	title: string;
	href?: string;
}

export interface IFooterNavigationSocialsProps
	extends HTMLAttributes<HTMLDivElement> {
	navigation: IFooterNavigationSocialsItemProps[];
}

export interface IFooterNavigationSocialsItemProps {
	id: string;
	title: string;
	href: string;
	svg: ReactNode;
}
