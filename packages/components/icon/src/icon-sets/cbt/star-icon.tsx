import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgStarIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				d="m12 17.844-5.817 3.058 1.11-6.477-4.705-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L12 17.844Z"
			/>
		</Icon>
	);
};
export default SvgStarIcon;
