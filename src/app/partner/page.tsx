/* eslint-disable @next/next/no-img-element */
'use client';

import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';

// import StackButton from '@/components/stacked-button';

export default function Partner() {
	const openUrl = (url: string) => {
		window.location.href = url;
	};

	const openRegister = () => {	
		openUrl('https://dungeon-console.web.app/signup?isPartner=true');
	};


	const openConnectWithUs = () => {
		openUrl('https://dungeon-console.web.app/connect');
	};

	return (
		<div>
			{/* Section one */}
			<div className="relative">
				<div className="absolute inset-0 bg-black opacity-80 z-10 h-full"></div>

				<img
					alt="background"
					src="/assets/world3.jpg"
					className="w-full h-full object-cover absolute inset-0  blur-lg z-0"
				/>

				<div className="relative z-20 p-8 lg:px-24 h-screen">
					<img alt="icon" src="/assets/Icon.png" width="60" height="60" />
					<div className="flex flex-col items-start justify-center h-[80vh]">
						<div className="font-pixel text-xl pb-4 sm:text-4xl">
							Partner With Us
						</div>
						<div className="pb-6 sm:text-3xl font-roboto font-thin sm:w-[60vw]">
							Become part of India&apos;s E-Sports revolution and
							<br />
							increase your outreach by creating an awesome
							<br />
							digital presence.
						</div>
						<StackButton
							content="Become a partner"
							bgColor="bg-purple-500"
							textColor="text-white"
							width="w-40 sm:w-48"
							onClick={openRegister}
						/>
					</div>
				</div>
			</div>
			<div className="relative w-screen h-screen bg-black"></div>
			<div className="absolute top-[95vh] left-[5vw] z-20">
				<StackContainer width={'w-[90vw]'} height={'h-[90vh]'}>
        <div className="relative flex flex-col sm:flex-row justify-center items-start sm:items-center w-[100vw] py-5">
						<img
							alt="icon"
							src="/assets/panda.png"
							className="w-40 transform -scale-x-100 sm:w-96"
						/>
						<div className="sm:w-16"></div>
						<div className="flex flex-col justify-center items-start sm:h-[60vh]">
							<div className="font-pixel text-2xl sm:text-4xl pb-2">Chat with us</div>
							<div className="pb-3 sm:text-2xl sm:w-[40vw]">
              Interested? We&apos;d love to have a chat with you to understand your needs and align to it. 
							</div>
							<div className="pt-4"></div>
							{/* https://dungeon-console.web.app/connect */}
							<StackButton
								content="Chat with us"
								bgColor="bg-yellow-400"
								textColor="text-black"
								width="w-48 sm:w-52"
								onClick={openConnectWithUs}
							/>
						</div>
					</div>
				</StackContainer>
			</div>
		</div>
	);
}
