import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgBitpayIcon = ({ className, ...props }: IIconProps) => {
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
				fill="#002855"
				fillRule="evenodd"
				d="M6.936 13.767c-.186.106-.384.159-.594.159H6.18a1.53 1.53 0 0 1-.276-.035l.587-2.57a.778.778 0 0 1 .36-.196c.134-.031.221-.04.305-.04.258 0 .458.078.554.246.096.169.144.403.144.703a2.17 2.17 0 0 1-.436 1.307c-.136.177-.296.32-.482.426Zm1.323-3.691a1.637 1.637 0 0 0-.747-.16c-.138 0-.267.016-.387.048a2.01 2.01 0 0 0-.353.127l.55-2.413-1.394.225-1.556 6.81c.173.087.358.156.553.206.195.05.38.087.553.112.174.025.329.04.464.042l.283.005c.42 0 .81-.083 1.17-.248.36-.165.672-.39.936-.675a3.272 3.272 0 0 0 .855-2.225c0-.28-.034-.543-.1-.786a1.83 1.83 0 0 0-.306-.637 1.495 1.495 0 0 0-.521-.431Zm3.688-.76.205-.898h-1.336l-.205.898h1.336Zm1.934 4.573a.886.886 0 0 1-.406-.077.434.434 0 0 1-.207-.216.701.701 0 0 1-.047-.331c.01-.128.033-.266.07-.413l.405-1.767h1.522l.277-1.17h-1.531l.35-1.489-1.43.23-.903 3.975a5.21 5.21 0 0 0-.129.931c-.012.295.03.556.13.783.097.227.263.406.497.537.234.132.563.197.987.197.295 0 .55-.026.765-.077l.078-.019.278-1.212a2.116 2.116 0 0 1-.277.075 2.098 2.098 0 0 1-.43.043Zm16.233-3.973H28.78L28 13.319h.002l-.107.469a2.099 2.099 0 0 1-.651.1.887.887 0 0 1-.406-.077.434.434 0 0 1-.208-.216.702.702 0 0 1-.046-.331 2.42 2.42 0 0 1 .07-.413l.405-1.767.268-1.17v-.001h-1.365l-.618 2.717a5.21 5.21 0 0 0-.129.931c-.012.295.03.556.13.783.097.227.263.406.497.537.234.131.563.197.987.197.295 0 .55-.025.765-.077l.026-.006v.002c-.06.28-.182.508-.376.685-.195.178-.483.267-.866.267-.164 0-.312-.01-.447-.03l-.263 1.152c.178.024.375.037.593.037.407 0 .763-.049 1.068-.145a2.11 2.11 0 0 0 .785-.44c.219-.196.401-.442.548-.738.146-.296.265-.646.354-1.05l.925-4.047-.003-.001.175-.771Zm-6.553 1.17c-.623 0-.741 0-.997.137a1.485 1.485 0 0 0-.463.417 2.01 2.01 0 0 0-.31.594 2.201 2.201 0 0 0-.112.701c0 .3.048.537.144.712.096.174.272.261.53.261a.813.813 0 0 0 .373-.084c.11-.056.23-.15.355-.28.012-.156.031-.32.058-.492.025-.156.056-.302.084-.436l.008-.038.33-1.492Zm.949 1.737a3.23 3.23 0 0 0-.072 1.072c.036.358.168.908.296 1.183h-1.293a1.285 1.285 0 0 1-.161-.419.636.636 0 0 0-.02-.077 2.383 2.383 0 0 1-.556.356 1.62 1.62 0 0 1-.684.14c-.3 0-.555-.055-.768-.164a1.462 1.462 0 0 1-.521-.44 1.793 1.793 0 0 1-.292-.645 3.33 3.33 0 0 1-.09-.79c0-.431.073-.836.22-1.217.147-.38.35-.712.611-.996.26-.284.89-.91 1.922-.91h2.073l-.665 2.907Zm-7.437 1.106c-.15 0-.277-.013-.38-.038l.647-2.806.527.001c.284.002.485.102.6.29a1.3 1.3 0 0 1 .171.688c0 .276-.038.529-.113.758-.075.23-.18.425-.316.589-.136.163-.3.29-.494.381a1.488 1.488 0 0 1-.642.137Zm2.687-.712c.145-.38.217-.799.217-1.257 0-.283-.038-.548-.113-.796a1.811 1.811 0 0 0-.348-.65 1.63 1.63 0 0 0-.602-.438 2.17 2.17 0 0 0-.873-.16H16.256l-1.553 6.81h1.338l.408-1.705c.205.038.41.057.615.057.422 0 .813-.077 1.172-.23.358-.155.666-.37.922-.646.257-.276.457-.604.602-.985ZM9.294 15.08l1.179-5.166h1.336l-1.18 5.166H9.295Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgBitpayIcon;