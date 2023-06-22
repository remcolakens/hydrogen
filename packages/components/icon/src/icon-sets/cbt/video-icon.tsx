import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgVideoIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
			/>
			<path stroke="currentColor" d="M10 15.464 16 12l-6-3.464v6.928Z" />
		</Icon>
	);
};
export default SvgVideoIcon;
