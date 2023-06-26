import { cn } from '@code-internet-applications/tailwind-utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import type { ILogoProps } from './types';

const logoVariants = cva('inline-block', {
	variants: {
		variant: {
			regular: true,
			monochrome: true,
		},
		size: {
			regular: 'h-7',
			small: 'h-4',
		},
	},
	defaultVariants: {
		variant: 'regular',
		size: 'regular',
	},
});

const Logo: FC<ILogoProps> = ({ className, size, variant, brand = true }) => {
	const isMonochrome = variant === 'monochrome';
	const colorBlack = '#000000';
	const colorWhite = '#FFFFFF';
	const logoViewbox = brand ? '0 0 105 28' : '0 0 28 28';

	const colors = {
		primary: isMonochrome ? colorBlack : '#FFE0D6',
		secondary: isMonochrome ? colorWhite : '#1294D7',
		tertiary: isMonochrome ? colorBlack : '#FC441A',
		quaternary: isMonochrome ? colorWhite : '#262626',
		quinary: isMonochrome ? colorBlack : '#FFCC33',
		senary: isMonochrome ? colorBlack : '#C8E4D2',
	};

	return (
		<div className={cn(logoVariants({ size, className }))}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox={logoViewbox}
				height="100%"
				width="100%"
			>
				<g clipPath="url(#a)">
					<path
						fill={colors.primary}
						d="M28 14 14 0h14v14Z M14 0 28 14H14V0Z"
					/>
					<path fill={colors.secondary} d="M14 0 28 14H14V0Z" />
					<path fill={colors.tertiary} d="M14 28 28 14v14H14Z" />
					<path fill={colors.quaternary} d="M28 14 14 28V14h14Z" />
					<path fill={colors.quinary} d="M0 14h14V0C6.268 0 0 6.268 0 14Z" />
					<path fill={colors.senary} d="M14 28V14H0c0 7.731 6.268 14 14 14Z" />
				</g>

				<defs>
					<clipPath id="a">
						<path d="M0 0h28v28H0z" />
					</clipPath>
				</defs>

				{brand ? (
					<path
						fill="#000000"
						d="M57.048 22.06c-1.52.605-3.845.873-6.149.873-2.414 0-4.538-.626-6.238-2.013C42.984 19.533 42 17.432 42 15.04c0-2.46.962-4.651 2.616-6.06 1.633-1.387 3.846-2.258 6.35-2.258 2.191 0 4.405.245 5.925.805.202 1.52.18 2.616.47 5.031l-.29.045c-.783-1.118-5.434-4.987-6.44-5.3-.828.38-1.79 1.32-2.415 2.594-.604 1.23-.917 2.818-.917 4.719 0 2.257.537 3.98 1.364 5.299.805 1.274 1.834 2.012 2.773 2.414.783-.201 5.232-3.6 6.06-4.785l.29.067c-.29 1.542-.492 3.332-.738 4.45ZM62.52 12.803c1.074-.559 2.617-.872 3.936-.872 1.633 0 3.31.492 4.494 1.364 1.364 1.007 2.035 2.415 2.035 4.092 0 1.968-1.207 3.734-3.287 4.74-.872.425-2.146.783-3.354.783-1.744 0-3.488-.447-4.762-1.34-1.364-.962-2.124-2.327-2.124-4.026 0-2.08 1.162-3.757 3.063-4.74Zm3.489-.38c-.984.447-1.52 2.303-1.52 4.472 0 2.862.804 4.897 2.012 5.5.894-.38 1.453-2.325 1.453-4.561 0-2.884-.827-5.12-1.945-5.411ZM82.863 20.92c-.962.917-2.46 1.99-3.913 1.99-1.163 0-2.102-.491-2.818-1.252-.916-.984-1.34-2.236-1.34-3.8 0-2.304 1.072-3.758 1.877-4.428 1.23-1.028 2.818-1.498 4.562-1.498.604 0 1.185.09 1.61.246 0-.537-.022-1.14-.045-1.744-.067-1.543-.268-2.124-.537-2.505-.268-.38-.783-.626-1.408-.626l-.067-.29C81.432 6.878 86.754 5 87.156 5l.201.112c.112.335.157.827.157 1.543 0 2.683-.09 6.506-.09 10.173v.716c0 1.409.179 2.236.447 2.639.179.268.425.425.694.425.09 0 .178 0 .268-.023l.044.246C87.961 21.21 84.137 23 83.4 23l-.202-.135c-.089-.156-.223-.693-.335-1.945Zm-1.52-8.497c-.09 0-.202.023-.246.044-.671.515-1.32 1.968-1.32 4.428 0 1.207.18 2.124.627 2.907.313.536.872.917 1.386.984a2.28 2.28 0 0 0 1.028-.492c0-.38.023-1.006.023-1.678V13.16c-.335-.447-.94-.738-1.499-.738ZM98.04 20.584c1.32 0 2.37-.648 3.176-1.543l.245.18c-1.006 1.9-2.84 3.689-5.59 3.689-1.542 0-2.862-.335-3.98-1.207-1.117-.872-1.878-2.37-1.878-4.293 0-2.951 2.392-5.478 5.88-5.478 3.332 0 4.965 1.945 5.501 3.98.067.246.112.492.112.671 0 .157-.067.223-.112.269l-6.395.133v.09c0 2.302 1.23 3.51 3.041 3.51Zm-3.018-4.091c.827-.023 1.655-.067 2.169-.134-.112-1.879-.537-3.488-1.186-3.936-.603.649-.938 2.012-.983 4.07Z"
					/>
				) : null}
			</svg>
		</div>
	);
};

export { Logo, logoVariants };
