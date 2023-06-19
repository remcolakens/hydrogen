import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSwapHorizontalIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m16 4 3 3-3 3M4 7h14M7 20l-3-3 3-3M19 17H5"
			/>
		</Icon>
	);
};
export default SvgSwapHorizontalIcon;
