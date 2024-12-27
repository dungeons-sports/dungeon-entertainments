import React, { ReactNode } from 'react';

const StackContainer = ({children, width, height} : {children: ReactNode, width: string, height: string}) => {
  return (
    <div className="relative">
		<div className={`container ${width} ${height} bg-zinc-800 border-white border-2`}>
			<div className={`container flex justify-center items-center ${width} ${height} bg-zinc-800 border-white border-2 mt-0.5 ml-0.5 py-4 px-4`}>
        {children}
      </div>
		</div>
	</div>
  );
}

export default StackContainer;