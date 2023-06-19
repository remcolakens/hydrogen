import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgMaestroIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 34 24" className={className}>
			<rect
				width={33}
				height={23}
				x={0.5}
				y={0.5}
				fill="#fff"
				stroke="currentColor"
				rx={3.5}
			/>
			<path
				fill="#ED0006"
				d="M19.131 12c0 3.314-2.715 6-6.065 6C9.716 18 7 15.314 7 12s2.716-6 6.066-6c3.35 0 6.065 2.686 6.065 6Z"
			/>
			<path
				fill="#0099DF"
				d="M27 12c0 3.314-2.715 6-6.065 6-3.35 0-6.066-2.686-6.066-6s2.716-6 6.066-6C24.285 6 27 8.686 27 12Z"
			/>
			<path
				fill="#6C6BBD"
				fillRule="evenodd"
				d="M17 16.567A5.96 5.96 0 0 0 19.131 12a5.96 5.96 0 0 0-2.13-4.567A5.96 5.96 0 0 0 14.868 12 5.96 5.96 0 0 0 17 16.567Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgMaestroIcon;
