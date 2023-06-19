import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgTeeIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				d="M8.875 4.5c1.25 1.25 2.5 1.25 3.125 1.25s1.875 0 3.125-1.25H17l5 5-2.5 2.5-2.5-1.875V19.5H7v-9.375L4.5 12 2 9.5l5-5h1.875Z"
			/>
		</Icon>
	);
};
export default SvgTeeIcon;
