import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowDownIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 4v15M6 14l6 6 6-6"
			/>
		</Icon>
	);
};
export default SvgArrowDownIcon;
