import React, { ReactNode } from 'react';

const StackContainer = ({children} : {children: ReactNode}) => {
  return (
    <div className="relative">
		<div className="container w-40 h-12 bg-zinc-800 border-white border-2">
			<div className="container flex justify-center items-center w-40 h-12 bg-zinc-800 border-white border-2 mt-0.5 ml-0.5 py-4 px-4">
        {children}
      </div>
		</div>
	</div>
  );
}

export default StackContainer;