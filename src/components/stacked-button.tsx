const StackButton = ({
	content,
	bgColor,
	textColor,
	width,
	onClick,
}: {
	content: string;
	bgColor: string;
	textColor: string;
	width: string;
	onClick?: () => void;
}) => (
	<div className="relative cursor-pointer" onClick={onClick}>
		<div
			className={`container ${width} h-12 sm:h-14 bg-zinc-800 border-white border-2`}
		>
			<div
				className={`container flex justify-center items-center ${width} h-12 sm:h-14 ${bgColor} border-white border-2 mt-0.5 ml-0.5 py-4 px-4`}
			>
				<div className={`text-m sm:text-xl  text-start ml-3 mr-3 ${textColor}`}>
					{content}
				</div>
			</div>
		</div>
	</div>
);

export default StackButton;
