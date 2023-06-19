import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLockAltOpenIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M7 7.625V7a5 5 0 0 1 10 0v4M19 11H5v10h14V11Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
			/>
		</Icon>
	);
};
export default SvgLockAltOpenIcon;
