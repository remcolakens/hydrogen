import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgTagIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className}>
			<circle
				cx={15.938}
				cy={8.063}
				r={1.688}
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				stroke="currentColor"
				d="M13.286 3 3 13.286 10.714 21 21 10.714V3h-7.714Z"
			/>
		</Icon>
	);
};
export default SvgTagIcon;
