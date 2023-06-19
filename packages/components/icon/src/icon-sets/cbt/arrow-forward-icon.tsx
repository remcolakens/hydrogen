import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowForwardIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 12H6a2 2 0 0 1-2-2V4"
			/>
			<path stroke="currentColor" strokeLinecap="square" d="m14 6 6 6-6 6" />
		</Icon>
	);
};
export default SvgArrowForwardIcon;
