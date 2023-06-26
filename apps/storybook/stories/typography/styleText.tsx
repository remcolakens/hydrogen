import { FC, ReactNode } from 'react';

export interface IStyleText {
	children: ReactNode;
}

export const StyleText: FC<IStyleText> = ({ children }) => {
	return <div className="mb-8 flex flex-col justify-between">{children}</div>;
};
