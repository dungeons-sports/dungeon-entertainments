/* eslint-disable @next/next/no-img-element */
'use client';

import ServiceContainer from '@/components/service-container';
import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';

// import StackButton from '@/components/stacked-button';

export default function Partner() {
	const openUrl = (url: string) => {
		window.location.href = url;
	};

	const getEnvironmentValue = async (): Promise<string> => {
		const res = await fetch('/env.json');
		const data = await res.json();
		console.log(data);
		return data['env'];
	}


	const openRegister = async () => {
		const env: string = await getEnvironmentValue();
		if(env === "dev"){
			openUrl('https://dev-console-dungeon.web.app//signup');
			return;
		}
		openUrl('https://console.dungeonofgames.com/signup');
	};

	const openConnectWithUs = async () => {
		const env: string = await getEnvironmentValue();
		if(env === "dev"){
			openUrl('https://dev-console-dungeon.web.app//connect');
		}
		openUrl('https://console.dungeonofgames.com/connect');
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
							width="w-44 sm:w-56"
							onClick={openRegister}
						/>
					</div>
				</div>
			</div>
			<div className="relative w-screen h-screen bg-black"></div>
			<div className="absolute top-[95vh] left-[5vw] z-20">
				<StackContainer width={'w-[90vw]'} height={'sm:h-[100vh] h-auto'}>
					<div className="flex flex-wrap m-10 w-[90vw] justify-evenly">
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Seamless Lounge Reservations
								</div>
								<div className="font-roboto mb-1">
									Book your favorite gaming lounges online with ease, anytime,
									anywhere.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Flexible Playtime Options
								</div>
								<div className="font-roboto mb-1">
									Offer flexible hourly and session-based slots to suit your
									gamers&apos; preferences.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Customizable Membership Plans
								</div>
								<div className="font-roboto mb-1">
									Provide special benefits and discounted rates with
									personalized membership plans.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Loyalty Rewards Program
								</div>
								<div className="font-roboto mb-1">
									Reward your loyal customers with points, vouchers, and
									exclusive perks.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Gift Cards and Day Passes
								</div>
								<div className="font-roboto mb-1">
									Sell gift cards and day passes that make perfect presents for
									gamers.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Targeted Audience Promotions
								</div>
								<div className="font-roboto mb-1">
									Promote your lounge to the right audience with targeted ads
									and campaigns.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Simplified Finance Management
								</div>
								<div className="font-roboto mb-1">
									Manage bookings, payments, and invoices effortlessly in one
									place.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Access to the Latest Games
								</div>
								<div className="font-roboto mb-1">
									Offer the latest and greatest games to your customers at
									unbeatable prices.
								</div>
							</div>
						</ServiceContainer>
						<ServiceContainer className="w-96 bg-zinc-900 p-8 my-5">
							<div className="flex flex-col">
								<div className="font-pixel text-xl mb-1">
									Real-Time Notifications
								</div>
								<div className="font-roboto mb-1">
									Keep your customers updated about bookings, deals, and events.
								</div>
							</div>
						</ServiceContainer>
					</div>
				</StackContainer>
			</div>
			<div className="relative flex flex-col sm:flex-row justify-center items-start sm:items-center w-[100vw] py-5">
				<img
					alt="icon"
					src="/assets/panda.png"
					className="w-40 transform -scale-x-100 sm:w-96"
				/>
				<div className="sm:w-16"></div>
				<div className="flex flex-col justify-center items-start sm:h-[60vh]">
					<div className="font-pixel text-2xl sm:text-4xl pb-2">
						Chat with us
					</div>
					<div className="pb-3 sm:text-2xl sm:w-[40vw]">
						Interested? We&apos;d love to have a chat with you to understand
						your needs and align to it.
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
		</div>
	);
}
