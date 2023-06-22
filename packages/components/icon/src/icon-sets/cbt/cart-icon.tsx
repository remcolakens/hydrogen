import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCartIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M6 6h15l-1.5 9h-12L6 6ZM9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 6H3"
			/>
		</Icon>
	);
};
export default SvgCartIcon;
