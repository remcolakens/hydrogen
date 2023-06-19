import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgArrowDiagonalIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="M18 7.697 7.393 18.303M9.803 7.243h8.485v8.485"
			/>
		</Icon>
	);
};
export default SvgArrowDiagonalIcon;
