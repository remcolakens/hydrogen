import { HTMLAttributes } from 'react';

export interface IMenuData {
	name: string;
	href?: string;
	navigation?: Navigation[];
}

export interface Navigation {
	name?: string;
	type: 'column' | 'image';
	navItems?: NavItem[];
	image?: INavImage;
	className?: string;
}

export interface IMainNavigationSubnav {
	name: string;
	navItems: Navigation[];
}

export interface NavItem {
	name: string;
	href: string;
}

export interface IMainNavigationItem {
	name: string;
	href: string;
}

export interface IMainNavigationSubnavColumn
	extends HTMLAttributes<HTMLDivElement> {
	name?: string;
	navItems: NavItem[];
}

export interface IMainNavigationSubnavImage
	extends HTMLAttributes<HTMLDivElement> {
	name: string;
	image: INavImage;
}

export interface INavImage {
	src: string;
	alt: string;
	height: number;
	width: number;
}
