import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgCarAlternativeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m5 11 2-6h10l2 6M5 11h14M5 11v6m14-6v6M5 17v2h1v-2m-1 0h1m13 0v2h-1v-2m1 0h-1M6 17h12M8 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
			/>
		</Icon>
	);
};
export default SvgCarAlternativeIcon;
