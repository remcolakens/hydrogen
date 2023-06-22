import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCopyAlternativeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path stroke="currentColor" strokeLinecap="square" d="M20 7H8v14h12V7Z" />
			<path stroke="currentColor" strokeLinecap="square" d="M16 3H4v14" />
		</Icon>
	);
};
export default SvgCopyAlternativeIcon;
