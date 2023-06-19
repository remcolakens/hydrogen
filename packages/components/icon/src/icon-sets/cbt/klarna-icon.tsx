import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgKlarnaIcon = ({ className }: IIconProps) => {
	return (
		<Icon viewBox="0 0 34 24" className={className}>
			<rect
				width={33}
				height={23}
				x={0.5}
				y={0.5}
				fill="#FFB3C7"
				stroke="#FFB3C7"
				rx={3.5}
			/>
			<g clipPath="url(#klarna-icon_svg__a)">
				<path
					fill="#FFB3C7"
					d="M28.479 6H5.521C3.577 6 2 7.689 2 9.773v5.454C2 17.311 3.577 19 5.522 19h22.957C30.422 19 32 17.311 32 15.227V9.773C32 7.689 30.423 6 28.479 6Z"
				/>
				<path
					fill="#010000"
					d="M26.023 11.696a1.756 1.756 0 0 0-1.915-.115 1.92 1.92 0 0 0-.723.733c-.174.31-.266.665-.266 1.027 0 .362.092.717.266 1.027.175.31.425.564.723.733a1.756 1.756 0 0 0 1.915-.115v.241h1.055v-3.772h-1.055v.241Zm-.959 2.616a.87.87 0 0 1-.49-.188.969.969 0 0 1-.313-.447 1.037 1.037 0 0 1-.032-.557.99.99 0 0 1 .26-.484.887.887 0 0 1 .464-.252.851.851 0 0 1 .518.064c.163.075.302.2.4.359.097.158.149.344.149.534a1.032 1.032 0 0 1-.29.697.898.898 0 0 1-.666.274ZM11.564 9.774h-1.103v5.453h1.103V9.774ZM21.246 11.353a1.206 1.206 0 0 0-.603.12c-.19.092-.355.231-.483.407v-.425h-1.05v3.772h1.063v-1.982a.847.847 0 0 1 .043-.336.805.805 0 0 1 .17-.285.738.738 0 0 1 .266-.184c.1-.04.206-.058.313-.05.463 0 .73.297.73.847v1.99h1.052v-2.399c0-.878-.651-1.475-1.5-1.475ZM14.9 11.696a1.757 1.757 0 0 0-1.915-.115 1.92 1.92 0 0 0-.723.733 2.1 2.1 0 0 0-.266 1.027c0 .362.092.717.266 1.027.175.31.425.564.723.733a1.757 1.757 0 0 0 1.915-.115v.241h1.054v-3.772H14.9v.241Zm-.959 2.616a.87.87 0 0 1-.49-.188.968.968 0 0 1-.313-.447 1.037 1.037 0 0 1-.032-.557.99.99 0 0 1 .259-.484.886.886 0 0 1 .465-.252.851.851 0 0 1 .518.064c.162.075.301.2.399.359.098.158.15.344.15.534a1.032 1.032 0 0 1-.29.697.898.898 0 0 1-.666.274ZM17.585 11.946v-.491h-1.08v3.772h1.083v-1.76c0-.595.6-.915 1.018-.915l.013.001v-1.098a1.24 1.24 0 0 0-.569.12 1.326 1.326 0 0 0-.465.371ZM28.197 13.89a.631.631 0 0 0-.368.119.701.701 0 0 0-.244.318.755.755 0 0 0-.037.41.725.725 0 0 0 .181.363c.093.099.21.166.339.194a.621.621 0 0 0 .382-.04.675.675 0 0 0 .297-.262.746.746 0 0 0-.082-.895.66.66 0 0 0-.215-.154.625.625 0 0 0-.253-.054ZM9.7 9.773H8.557c.002.49-.105.976-.31 1.415a3.09 3.09 0 0 1-.873 1.113l-.453.364 1.756 2.564h1.443l-1.615-2.36c.38-.405.683-.888.888-1.42A4.61 4.61 0 0 0 9.7 9.774ZM6.782 9.773H5.636v5.456h1.146V9.773Z"
				/>
			</g>
			<defs>
				<clipPath id="klarna-icon_svg__a">
					<path fill="#fff" d="M2 6h30v13H2z" />
				</clipPath>
			</defs>
		</Icon>
	);
};
export default SvgKlarnaIcon;
