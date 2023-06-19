import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgC2Icon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path stroke="currentColor" strokeLinecap="square" d="M21 3H3v18h18V3Z" />
			<path stroke="currentColor" d="M12 3v18" />
		</Icon>
	);
};
export default SvgC2Icon;
