import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLeafAlternativeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M7.444 7.667c-3.555 3.555-1.481 7.407 0 8.889 1.482 1.481 5.333 3.555 8.89 0 3.555-3.556 2.962-8.89 2.221-11.112-2.222-.74-7.555-1.333-11.11 2.223Z"
			/>
			<path
				stroke="currentColor"
				d="M18.712 5.19 4.046 19.856M9.284 6.238v8.38h8.38M13.475 5.19v5.238h5.237"
			/>
		</Icon>
	);
};
export default SvgLeafAlternativeIcon;
