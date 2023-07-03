import { HTMLAttributes, ReactNode } from 'react';

export type IHeaderProps = HTMLAttributes<HTMLDivElement>;

export interface IHeaderCtaButton {
	buttons: HeaderCtaButton[];
}

export type HeaderCtaButton = {
	name: string;
	svg: ReactNode;
	className?: string;
	handleClick: () => void;
};
