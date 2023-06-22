import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgPreviousIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="M8 4 4 8l4 4" />
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M4 8h10.5a5.5 5.5 0 1 1 0 11H5"
			/>
		</Icon>
	);
};
export default SvgPreviousIcon;
