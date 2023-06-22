import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCrossedEyeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M22 12s-3 6-10 6-10-6-10-6 3-6 10-6 10 6 10 6Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 21 20 4"
			/>
		</Icon>
	);
};
export default SvgCrossedEyeIcon;
