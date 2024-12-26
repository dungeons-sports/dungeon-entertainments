const StackButton = ({content, bgColor}:{content:string, bgColor:string}) => (
	<div className="relative">
		<div className="container w-40 h-12 bg-zinc-800 border-white border-2">
			<div className={`container flex justify-center items-center w-40 h-12 ${bgColor} border-white border-2 mt-0.5 ml-0.5 py-4 px-4`}>
        <div className="text-m text-start ml-3 mr-3">{content}</div>
      </div>
		</div>
	</div>
);

export default StackButton;