import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSwapVerticalIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m4 8 3-3 3 3M7 20V6M20 17l-3 3-3-3M17 5v14"
			/>
		</Icon>
	);
};
export default SvgSwapVerticalIcon;
