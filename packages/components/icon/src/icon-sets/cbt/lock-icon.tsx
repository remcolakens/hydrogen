import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLockIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 11H5v10h14V11ZM12 3a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5Z"
			/>
		</Icon>
	);
};
export default SvgLockIcon;
