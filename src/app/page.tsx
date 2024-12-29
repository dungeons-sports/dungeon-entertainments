/* eslint-disable @next/next/no-img-element */
'use client';

import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

  const openConnectWithUs = () => {
    router.push("/partner"); // Navigate to the 'About' page
  };

	return (
		<div className="flex flex-col">
			{/* Section One */}
			<div className="relative w-screen h-[90vh]">
				<div className="absolute inset-0 bg-black opacity-80 z-10 h-[100vh]"></div>
				<div className="absolute inset-0 flex justify-center items-center blur-lg z-0">
					<img
						alt="background"
						src="/assets/background_image.png"
						className="w-full sm:w-[70vw]"
					/>
				</div>
				<div className="relative z-20 p-8 lg:px-24">
					<div className="flex flex-row justify-between items-start">
						<img alt="icon" src="/assets/Icon.png" width="60" height="60" />
						<div className="flex space-x-4">
							{/* <div
								className="text-xl text-white px-3 py-2 cursor-pointer"
								onClick={openAuthentication}
							>
								Login
							</div>
							<div onClick={openAuthentication} className='cursor-pointer'>
								<StackContainer width="w-24" height={'h-10'}>
									<div className="text-mg text-white">Sign-up</div>
								</StackContainer>
							</div> */}
						</div>
					</div>

					<div className="flex flex-col items-start justify-center h-[80vh]">
						<div className="font-pixel text-4xl pb-4 sm:text-6xl">Dungeon</div>
						<div className="pb-6 sm:text-xl sm:w-[60vw]">
							Find the best gaming arenas around you from our hand-picked places
							for the best esports experience.
						</div>
						<StackButton
							content="Get started"
							bgColor="bg-purple-500"
							textColor="text-white"
							width="w-40 sm:w-48"
							onClick={openConnectWithUs}
						/>
					</div>
				</div>
				<div className="absolute bottom-[-5vh] right-[-7vw] z-30">
					<img
						alt="dragon icon"
						src="/assets/dragon.png"
						className="w-40 sm:w-72 lg:w-96"
					/>
				</div>
			</div>

			{/* Section Two */}
			<div className="h-[90vh] w-screen z-20 flex items-center justify-center py-8">
				<StackContainer width="w-[90vw]" height="h-auto sm:h-[70vh]">
					<div className="relative flex flex-col sm:flex-row justify-center items-start w-[100vw] py-5">
						<img alt="icon" src="/assets/rocket.png" className="w-40 sm:w-72" />
						<div className="sm:w-20"></div>
						<div className="flex flex-col justify-start items-start">
							<div className="font-pixel text-2xl pb-2">For Players</div>
							<div className="pb-3">
								Find about latest games and get to experience them in the
								nearest arena.
							</div>
							<div className="flex flex-row justify-center items-center pb-2">
								<div className="w-4 h-4 rounded-xl bg-green-400"></div>
								<div className="ps-2">Best equipments</div>
							</div>
							<div className="flex flex-row justify-center items-center pb-2">
								<div className="w-4 h-4 rounded-xl bg-purple-400"></div>
								<div className="ps-2">Friendly environment</div>
							</div>
							<div className="flex flex-row justify-center items-center pb-2">
								<div className="w-4 h-4 rounded-xl bg-red-400"></div>
								<div className="ps-2">Latest games</div>
							</div>
							<div className="flex flex-row justify-center items-center pb-2">
								<div className="w-4 h-4 rounded-xl bg-orange-400"></div>
								<div className="ps-2">Colab and compete</div>
							</div>
							<div className="pt-4"></div>
							<div className='flex flex-wrap'>
								<img src="/assets/googleplay.png" alt="google play" className='w-34 h-20 mb-4'/>
								<div className='ml-4'></div>
								<img src="/assets/appstore.png" alt="google play" className='w-34 h-20'/>
							</div>
						</div>
					</div>
				</StackContainer>
			</div>

			{/* Section Three */}
			<div className="px-12">
				<div className="relative flex flex-col sm:flex-row-reverse justify-center items-start w-[100vw]">
					<img alt="icon" src="/assets/house.png" className="w-40 sm:w-72" />
					<div className="sm:w-16"></div>
					<div className="flex flex-col justify-start items-start">
						<div className="font-pixel text-2xl pb-2">For Arenas</div>
						<div className="pb-3 w-[50vw]">
							Become top rated hang-out place for gaming enthusiast and take
							your business to the next level.
						</div>
						<div className="flex flex-row justify-center items-center pb-2">
							<div className="w-4 h-4 rounded-xl bg-green-400"></div>
							<div className="ps-2">Get promoted</div>
						</div>
						<div className="flex flex-row justify-center items-center pb-2">
							<div className="w-4 h-4 rounded-xl bg-purple-400"></div>
							<div className="ps-2">Access to latest games</div>
						</div>
						<div className="flex flex-row justify-center items-center pb-2">
							<div className="w-4 h-4 rounded-xl bg-red-400"></div>
							<div className="ps-2">Manage booking digitally</div>
						</div>
						<div className="flex flex-row justify-center items-center pb-2">
							<div className="w-4 h-4 rounded-xl bg-orange-400"></div>
							<div className="ps-2">Transparent payments</div>
						</div>
						<div className="pt-4"></div>
						<StackButton
							content="Register Now!"
							bgColor="bg-orange-400"
							textColor="text-black"
							width="w-48"
							onClick={openConnectWithUs}
						/>
					</div>
				</div>
			</div>

			{/* Section four */}
			<div className="h-[90vh] w-screen z-20 flex items-center justify-center">
				<StackContainer width="w-[90vw]" height="h-auto sm:h-[70vh]">
					<div className="relative flex flex-col sm:flex-row justify-center items-start sm:items-center w-[100vw] py-5">
						<img
							alt="icon"
							src="/assets/panda.png"
							className="w-40 transform -scale-x-100 sm:w-72"
						/>
						<div className="sm:w-16"></div>
						<div className="flex flex-col justify-center items-start sm:h-[60vh]">
							<div className="font-pixel text-2xl pb-2">Connect with us</div>
							<div className="pb-3">
								Let&apos;s connect and grow the gaming community together. Fill
								in the details and we will get in touch with you.
							</div>
							<div className="pt-4"></div>
							{/* https://dungeon-console.web.app/connect */}
							<StackButton
								content="Connect with us"
								bgColor="bg-red-400"
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
