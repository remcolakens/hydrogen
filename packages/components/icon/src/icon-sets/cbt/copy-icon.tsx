import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCopyIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="M16 3H3v13h13V3Z" />
			<path stroke="currentColor" strokeLinecap="square" d="M16 8h5v13H8v-5" />
		</Icon>
	);
};
export default SvgCopyIcon;
