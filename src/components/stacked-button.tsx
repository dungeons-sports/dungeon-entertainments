const StackButton = ({content, bgColor, textColor, width}:{content:string, bgColor:string, textColor:string, width:string}) => (
	<div className="relative">
		<div className={`container ${width} h-12 bg-zinc-800 border-white border-2`}>
			<div className={`container flex justify-center items-center ${width} h-12 ${bgColor} border-white border-2 mt-0.5 ml-0.5 py-4 px-4`}>
        <div className={`text-m text-start ml-3 mr-3 ${textColor}`}>{content}</div>
      </div>
		</div>
	</div>
);

export default StackButton;