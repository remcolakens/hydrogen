import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowRightIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 12H4M14 6l6 6-6 6"
			/>
		</Icon>
	);
};
export default SvgArrowRightIcon;
