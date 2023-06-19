import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgDinersClubIcon = ({ className }: IIconProps) => {
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
				fill="#0079BE"
				fillRule="evenodd"
				d="M15.838 19.3h2.596c4.053 0 7.282-3.215 7.409-7.187v-.063c-.064-4.034-3.356-7.312-7.409-7.25h-2.912c-3.863.127-6.902 3.405-6.776 7.314 0 3.908 3.166 7.123 7.092 7.186Zm-5.825-7.25c0-3.278 2.723-5.988 6.015-5.988 3.293 0 6.016 2.71 6.016 5.988 0 3.278-2.723 5.99-6.016 5.99-3.292 0-6.015-2.711-6.015-5.99Zm6.965 4.035V8.079c2.216.567 3.61 2.774 3.04 4.98a4.114 4.114 0 0 1-3.04 3.026Zm-4.876-5.043a4.142 4.142 0 0 0 2.976 5.043V8.079a4.155 4.155 0 0 0-2.976 2.963Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgDinersClubIcon;
