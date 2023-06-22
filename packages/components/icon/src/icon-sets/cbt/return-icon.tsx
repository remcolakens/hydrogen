import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgReturnIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M19 8v3a2 2 0 0 1-2 2H6"
			/>
			<path stroke="currentColor" strokeLinecap="square" d="m8 16-3-3 3-3" />
		</Icon>
	);
};
export default SvgReturnIcon;
