import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLockAltIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 11H5v10h14V11ZM12 3a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
			/>
		</Icon>
	);
};
export default SvgLockAltIcon;
