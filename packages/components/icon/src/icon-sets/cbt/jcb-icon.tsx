import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgJcbIcon = ({ className, ...props }: IIconProps) => {
	return (
		<Icon viewBox="0 0 34 24" className={className} {...props}>
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
				fill="url(#jcb-icon_svg__a)"
				d="M21.982 11.954c.532.012 1.066-.023 1.595.018.536.1.665.912.189 1.177-.325.175-.71.066-1.063.096h-.72v-1.29Zm1.902-1.461c.118.416-.283.79-.685.733h-1.217c.009-.393-.016-.82.013-1.191.487.013.98-.028 1.464.021a.58.58 0 0 1 .425.437Zm2.93-6.178c.022.795.002 1.633.009 2.445-.002 3.3.003 6.6-.003 9.9-.021 1.238-1.117 2.313-2.346 2.337-1.23.005-2.459.001-3.689.002v-4.99c1.34-.006 2.68.015 4.02-.01.621-.039 1.302-.449 1.33-1.132.074-.687-.574-1.162-1.188-1.237-.236-.006-.23-.069 0-.096.586-.127 1.046-.734.874-1.341-.147-.64-.853-.887-1.441-.885-1.198-.009-2.396-.002-3.594-.004.007-.931-.017-1.864.012-2.795.096-1.214 1.22-2.216 2.43-2.194h3.585Z"
			/>
			<path
				fill="url(#jcb-icon_svg__b)"
				d="M7.247 6.635c.03-1.235 1.131-2.3 2.358-2.319 1.225-.004 2.45 0 3.675-.001-.003 4.131.007 8.264-.005 12.395-.047 1.22-1.136 2.266-2.35 2.287-1.227.005-2.454.001-3.682.002v-5.157c1.193.281 2.443.401 3.659.214.727-.117 1.522-.474 1.769-1.228.18-.645.079-1.324.106-1.986V9.304h-2.105c-.01 1.017.02 2.036-.015 3.052-.057.624-.675 1.02-1.264 1-.73.007-2.178-.53-2.178-.53-.003-1.905.021-4.292.032-6.19Z"
			/>
			<path
				fill="url(#jcb-icon_svg__c)"
				d="M14.065 9.924c-.11.024-.022-.377-.05-.53.007-.96-.017-1.923.012-2.884.095-1.22 1.227-2.224 2.443-2.195h3.581c-.003 4.132.007 8.264-.005 12.395-.047 1.22-1.136 2.266-2.35 2.288-1.227.004-2.454 0-3.682.002v-5.651c.838.687 1.978.794 3.022.796.787 0 1.57-.121 2.335-.303v-1.035c-.862.43-1.875.702-2.83.455-.666-.166-1.15-.81-1.14-1.497-.076-.715.343-1.47 1.046-1.683.872-.273 1.823-.064 2.64.291.176.092.354.206.284-.087v-.814c-1.368-.325-2.824-.445-4.198-.091-.398.112-.785.282-1.108.543Z"
			/>
			<defs>
				<linearGradient
					id="jcb-icon_svg__a"
					x1={20.744}
					x2={26.785}
					y1={11.343}
					y2={11.343}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#58B03A" />
					<stop offset={1} stopColor="#55B330" />
				</linearGradient>
				<linearGradient
					id="jcb-icon_svg__b"
					x1={7.115}
					x2={13.181}
					y1={11.798}
					y2={11.798}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#0F6EB6" />
					<stop offset={1} stopColor="#006DBA" />
				</linearGradient>
				<linearGradient
					id="jcb-icon_svg__c"
					x1={14.005}
					x2={20.05}
					y1={11.485}
					y2={11.485}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#DE0D3D" />
					<stop offset={1} stopColor="#E30138" />
				</linearGradient>
			</defs>
		</Icon>
	);
};
export default SvgJcbIcon;