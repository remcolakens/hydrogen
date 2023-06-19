import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgAddToBagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 7H5v12h14V7ZM8 7a4 4 0 0 1 8 0"
			/>
			<circle cx={18} cy={6} r={6} fill="currentColor" />
			<path stroke="#fff" strokeLinecap="square" d="M21 6h-6M18 3v6" />
		</Icon>
	);
};
export default SvgAddToBagIcon;
