import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgDiscoverIcon = ({ className }: IIconProps) => {
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
			<path fill="#fff" d="M4.089 3.605h25.815v16.797H4.096L4.089 3.605Z" />
			<path
				fill="#F48120"
				d="M29.815 12.948s-7.054 5.084-19.972 7.364h19.972v-7.364Z"
			/>
			<path
				fill="#231F20"
				d="M29.904 3.507H4V20.5h26v-17h-.096v.007Zm-.089.189v16.608H4.191V3.696h25.624Z"
			/>
			<path
				fill="#231F20"
				d="M6.271 8.703H5.197v3.846h1.074c.568 0 .979-.14 1.341-.44a1.94 1.94 0 0 0 .684-1.476c-.006-1.14-.834-1.93-2.025-1.93Zm.863 2.895c-.233.21-.527.307-1.006.307H5.93V9.36h.198c.472 0 .76.084 1.006.308.253.231.404.588.404.958s-.152.741-.404.972ZM9.365 8.703h-.733v3.846h.733V8.703ZM11.156 10.178c-.437-.167-.567-.28-.567-.482 0-.245.232-.427.547-.427.219 0 .404.09.589.314l.383-.51a1.634 1.634 0 0 0-1.109-.427c-.663 0-1.176.476-1.176 1.105 0 .532.24.804.923 1.056.288.105.432.175.507.217a.47.47 0 0 1 .219.399c0 .314-.24.545-.568.545-.349 0-.63-.181-.8-.51l-.473.468c.335.511.746.735 1.3.735.76 0 1.3-.518 1.3-1.266.014-.622-.24-.902-1.075-1.217ZM12.47 10.633c0 1.133.87 2.007 1.984 2.007.315 0 .589-.063.917-.224v-.881c-.294.3-.554.42-.883.42-.739 0-1.266-.546-1.266-1.33 0-.74.54-1.321 1.232-1.321.349 0 .616.126.916.433v-.881c-.321-.168-.588-.238-.903-.238-1.1 0-1.997.896-1.997 2.015ZM21.201 11.29l-1.006-2.587h-.8l1.594 3.944h.397l1.622-3.944h-.794L21.2 11.29ZM23.342 12.55h2.08v-.651h-1.347v-1.035h1.3v-.651h-1.3V9.36h1.347v-.657h-2.08v3.846ZM28.33 9.842c0-.72-.485-1.133-1.334-1.133H25.91v3.847h.732V11.01h.096l1.013 1.546h.903l-1.184-1.623c.554-.118.861-.503.861-1.09Zm-1.477.637h-.213V9.31h.226c.459 0 .705.196.705.573 0 .385-.246.595-.718.595Z"
			/>
			<path
				fill="url(#discover-icon_svg__a)"
				d="M17.622 12.689c1.108 0 2.005-.918 2.005-2.05 0-1.131-.897-2.048-2.005-2.048-1.107 0-2.004.917-2.004 2.049 0 1.131.897 2.049 2.004 2.049Z"
			/>
			<path
				fill="url(#discover-icon_svg__b)"
				d="M17.622 12.689c1.108 0 2.005-.918 2.005-2.05 0-1.131-.897-2.048-2.005-2.048-1.107 0-2.004.917-2.004 2.049 0 1.131.897 2.049 2.004 2.049Z"
				opacity={0.65}
			/>
			<path
				fill="#231F20"
				d="M28.796 8.85c0-.07-.048-.105-.123-.105h-.11v.335h.082v-.133l.096.133h.096l-.11-.14c.042-.007.07-.042.07-.09Zm-.137.048h-.014v-.09h.014c.041 0 .061.013.061.041 0 .035-.02.05-.061.05Z"
			/>
			<path
				fill="#231F20"
				d="M28.686 8.619a.292.292 0 0 0-.287.293c0 .161.13.294.287.294a.292.292 0 0 0 .288-.294c0-.16-.13-.293-.288-.293Zm0 .538a.24.24 0 0 1-.232-.245.24.24 0 0 1 .232-.245c.124 0 .226.112.226.245s-.102.245-.226.245Z"
			/>
			<defs>
				<linearGradient
					id="discover-icon_svg__a"
					x1={18.647}
					x2={17.218}
					y1={12.28}
					y2={10.09}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F89F20" />
					<stop offset={0.25} stopColor="#F79A20" />
					<stop offset={0.533} stopColor="#F68D20" />
					<stop offset={0.62} stopColor="#F58720" />
					<stop offset={0.723} stopColor="#F48120" />
					<stop offset={1} stopColor="#F37521" />
				</linearGradient>
				<linearGradient
					id="discover-icon_svg__b"
					x1={18.428}
					x2={16.332}
					y1={12.25}
					y2={8.241}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F58720" />
					<stop offset={0.359} stopColor="#E16F27" />
					<stop offset={0.703} stopColor="#D4602C" />
					<stop offset={0.982} stopColor="#D05B2E" />
				</linearGradient>
			</defs>
		</Icon>
	);
};
export default SvgDiscoverIcon;
