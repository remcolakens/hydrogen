export interface IStyleText {
	children: React.ReactNode;
}

export const StyleText: React.FC<IStyleText> = ({ children }) => {
	return <div className="mb-8 flex flex-col justify-between">{children}</div>;
};
