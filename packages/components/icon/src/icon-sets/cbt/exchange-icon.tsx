import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgExchangeIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="M13 18H6V7" />
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m3 9 3-3 3 3M11 6h7v11"
			/>
			<path stroke="currentColor" strokeLinecap="square" d="m21 15-3 3-3-3" />
		</Icon>
	);
};
export default SvgExchangeIcon;
