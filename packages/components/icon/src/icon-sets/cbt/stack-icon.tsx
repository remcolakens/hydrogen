import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgStackIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M14 17h-4m8-5H6m15-5H3"
			/>
		</Icon>
	);
};
export default SvgStackIcon;
