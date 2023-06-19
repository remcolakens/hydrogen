import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBoltIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m5 14 8-11v7h5l-8 11v-7H5Z"
			/>
		</Icon>
	);
};
export default SvgBoltIcon;
