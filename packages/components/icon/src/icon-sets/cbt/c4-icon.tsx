import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgC4Icon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="M21 3H3v18h18V3Z" />
			<path stroke="currentColor" d="M12 3v18M21 12H3" />
		</Icon>
	);
};
export default SvgC4Icon;
