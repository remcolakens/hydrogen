import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCalendarIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M3 5h18v16H3V5ZM21 9H3M7 5V3M17 5V3"
			/>
		</Icon>
	);
};
export default SvgCalendarIcon;
