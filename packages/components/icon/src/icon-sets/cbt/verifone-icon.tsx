import { Icon } from '../../../src/icon';
import { IIconProps } from '../../../src/types';
const SvgVerifoneIcon = ({ className, ...props }: IIconProps) => {
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
				fill="#1A1919"
				fillRule="evenodd"
				d="M14.59 10.305h1.107l.177-.91h-1.107l-.177.91Zm-.115.586h1.107l-.703 3.597c-.051.018-.21.082-.429.082-.295 0-.566-.117-.566-.531 0-.078.009-.167.029-.268.22-1.122.562-2.88.562-2.88Zm10.99-.082c-.736 0-1.03.438-1.167.705h-.013l.043-.622h-1.094a9.17 9.17 0 0 1-.125.94l-.3 1.556c-.037.19-.103.473-.103.637 0 .349.174.545.563.545.218 0 .375-.06.432-.082l.366-1.873c.101-.517.47-.856.907-.856.353 0 .522.262.522.476 0 .186-.046.393-.081.575l-.158.802c-.018.097-.059.281-.059.427 0 .354.197.531.571.531.204 0 .334-.051.425-.082l.329-1.68c.07-.379.097-.579.097-.82 0-.695-.4-1.179-1.155-1.179Zm-4.916.87c-.619 0-.962.642-.962 1.215 0 .483.215.807.704.807.551 0 .983-.477.983-1.292 0-.372-.195-.73-.725-.73Zm-.326 2.891c-1.185 0-1.752-.722-1.752-1.642 0-1.263.853-2.119 2.172-2.119 1.144 0 1.752.704 1.752 1.608 0 1.355-.912 2.153-2.172 2.153Zm-4.145-.866c-.025.13-.041.22-.041.332 0 .412.271.534.559.534.23 0 .372-.063.424-.082l.532-2.726h.86l.17-.87h-.86l.042-.215c.078-.402.264-.579.586-.579.215 0 .389.039.45.055l.161-.828a3.506 3.506 0 0 0-.857-.096c-.75 0-1.242.462-1.387 1.208l-.089.454h-.56l-.17.87h.56l-.38 1.943ZM13.53 10.81c-.555 0-.86.392-.98.705h-.013l.042-.623h-1.094c-.01.216-.054.58-.165 1.154-.113.582-.223 1.162-.337 1.726-.02.096-.028.19-.028.27 0 .296.144.53.568.53.21 0 .357-.056.427-.083l.325-1.667c.118-.638.33-1.06.949-1.06.28 0 .548.06.604.078l.187-.96a1.442 1.442 0 0 0-.485-.07Zm16.054 1.54c.059-.33-.13-.67-.557-.67-.52 0-.75.361-.852.67h1.409Zm.494 1.338c0 .5-.477.884-1.321.884-1.167 0-1.738-.738-1.738-1.642 0-.898.587-2.12 2.018-2.12.943 0 1.649.477 1.649 1.568 0 .268-.06.56-.084.676h-2.508c-.005.262.212.715 1.084.715.389 0 .829-.14.9-.175v.095ZM9.585 12.35c.059-.33-.13-.67-.557-.67-.52 0-.75.361-.852.67h1.409Zm.493 1.338c0 .5-.476.884-1.32.884-1.167 0-1.738-.738-1.738-1.642 0-.898.587-2.12 2.018-2.12.943 0 1.649.477 1.649 1.568 0 .268-.06.56-.085.676H8.096c-.005.262.212.715 1.084.715.389 0 .829-.14.9-.175v.095Zm-6.65-4.02h1.113v3.577c0 .537.264.812.686.812a.32.32 0 0 0 .077-.008c-.185.285-.425.52-.977.52-.584 0-.9-.413-.9-1.03v-3.87Z"
				clipRule="evenodd"
			/>
			<path
				fill="#00A3DA"
				fillRule="evenodd"
				d="M5.006 12.63a1 1 0 0 0-.154.533v.087c0 .362.193.492.403.492.215 0 .33-.148.436-.317.177-.282 2.34-3.758 2.34-3.758H6.873L5.006 12.63Z"
				clipRule="evenodd"
			/>
		</Icon>
	);
};
export default SvgVerifoneIcon;
