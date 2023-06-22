import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPlusAndBagIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 40 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M34 8H20v12h14V8ZM23 8a4 4 0 1 1 8 0M14 14H6M10 10v8"
			/>
		</Icon>
	);
};
export default SvgPlusAndBagIcon;
