import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowUpIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 5v15M6 10l6-6 6 6"
			/>
		</Icon>
	);
};
export default SvgArrowUpIcon;
