import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgSearchIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M14.412 14.412 20 20M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
			/>
		</Icon>
	);
};
export default SvgSearchIcon;
