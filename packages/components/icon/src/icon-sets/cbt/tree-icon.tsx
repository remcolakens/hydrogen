import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgTreeIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 24 24" className={className} {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M9.5 16v5M17.5 16v5"
			/>
			<circle
				cx={9.5}
				cy={9.5}
				r={6.5}
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				d="M14 14.305C14.697 15.33 15.848 16 17.148 16 19.276 16 21 14.21 21 12s-1.724-4-3.852-4c-.37 0-.73.055-1.07.156"
			/>
		</Icon>
	);
};
export default SvgTreeIcon;
