import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgLocationIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 21c4-4.2 6-8.2 6-12A6 6 0 0 0 6 9c0 3.8 2 7.8 6 12Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
			/>
		</Icon>
	);
};
export default SvgLocationIcon;
