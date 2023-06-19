import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgMastercardIcon = ({ className }: IIconProps) => {
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
			<g clipPath="url(#mastercard-icon_svg__a)">
				<path fill="#F16022" d="M19.6 7.603h-5.353v9.86H19.6v-9.86Z" />
				<path
					fill="#E91D25"
					d="M14.586 12.533c0-2 .914-3.782 2.337-4.93a5.998 5.998 0 0 0-3.78-1.341c-3.38 0-6.118 2.808-6.118 6.27 0 3.464 2.739 6.272 6.117 6.272 1.427 0 2.74-.501 3.781-1.341a6.318 6.318 0 0 1-2.337-4.93Z"
				/>
				<path
					fill="#F69E1E"
					d="M26.821 12.533c0 3.463-2.739 6.27-6.117 6.27a5.998 5.998 0 0 1-3.781-1.34 6.318 6.318 0 0 0 2.337-4.93c0-2-.914-3.782-2.337-4.93a5.998 5.998 0 0 1 3.78-1.341c3.38 0 6.118 2.808 6.118 6.27Zm-.584 3.886v-.202h.08v-.041h-.203v.04h.08v.203h.043Zm.393 0v-.244h-.062l-.071.168-.072-.168h-.062v.244h.044v-.184l.067.158h.045l.067-.159v.184h.044Z"
				/>
			</g>
			<defs>
				<clipPath id="mastercard-icon_svg__a">
					<path fill="#fff" d="M7 6h20v13H7z" />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgMastercardIcon;
