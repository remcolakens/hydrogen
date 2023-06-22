import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPercentIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M17.657 6.343 6.343 17.657M6 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM14 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
			/>
		</Icon>
	);
};
export default SvgPercentIcon;
