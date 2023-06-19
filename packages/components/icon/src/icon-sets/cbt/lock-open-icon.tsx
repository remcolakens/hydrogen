import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLockOpenIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M7 7.625V7a5 5 0 0 1 10 0v4M19 11H5v10h14V11Z"
			/>
		</Icon>
	);
};
export default SvgLockOpenIcon;
