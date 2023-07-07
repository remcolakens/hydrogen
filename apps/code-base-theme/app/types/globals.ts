import { PropsWithChildren, ReactNode } from 'react';

export interface IDocumentProps extends PropsWithChildren {
	hasError?: boolean;
}

export interface IGridViewProps {
	view: number;
	icon: ReactNode;
	className: string;
}
