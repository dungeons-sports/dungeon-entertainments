/* eslint-disable @next/next/no-img-element */
'use client';

import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Section One */}
			<div className="relative w-screen h-[90vh]">
				<div className="absolute inset-0 bg-black opacity-80 z-10"></div>
				<div className="absolute inset-0 flex justify-center items-center blur-lg z-0">
					<img
						alt="background"
						src="/assets/background_image.png"
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
				<div className="relative z-20 p-8">
					<img alt="icon" src="/assets/Icon.png" width="60" height="60" />
					<div className="flex flex-col items-start justify-center h-[80vh]">
						<div className="font-pixel text-4xl pb-4">Dungeon</div>
						<div className="pb-6">
							Find the best gaming arenas around you from our hand-picked places
							for the best esports experience.
						</div>
						<StackButton
							content="Get started"
							bgColor="bg-purple-500"
							textColor="text-white"
							width="w-40"
						/>
					</div>
				</div>
				<div className="absolute bottom-[-5vh] right-[-7vw] z-30">
					<img
						alt="dragon icon"
						src="/assets/dragon.png"
						width="200"
						height="200"
					/>
				</div>
			</div>

			{/* Section Two */}
			<div className="h-[70vh] w-screen z-20 flex items-center justify-center">
				<StackContainer width="w-[90vw]" height="h-auto">
					<div className="relative flex flex-col justify-center items-start w-[100vw] py-5 h-">
						<img alt="icon" src="/assets/rocket.png" width="160" height="160" />

						<div className="font-pixel text-2xl pb-2">For Players</div>
						<div className="pb-3">
							Find about latest games and get to experience them in the nearest
							arena.
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
						<StackButton
							content="Book Now"
							bgColor="bg-green-400"
							textColor="text-black"
							width="w-40"
						/>
					</div>
				</StackContainer>
			</div>

			{/* Section Three */}
			<div className="h-[70vh] w-[100vw]">
				<div className="relative flex flex-col justify-center items-start w-[100vw] p-5 h-">
					<img alt="icon" src="/assets/house.png" width="160" height="160" />

					<div className="font-pixel text-2xl pb-2">For Arenas</div>
					<div className="pb-3">
						Become top rated hang-out place for gaming enthusiast and take your
						business to the next level.
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
					/>
				</div>
			</div>

			{/* Section four */}
			<div className="h-[70vh] w-screen z-20 flex items-start justify-center">
				<StackContainer width="w-[90vw]" height="h-auto">
					<div className="relative flex flex-col justify-center items-start w-[100vw] py-5 h-">
						<img
							alt="icon"
							src="/assets/panda.png"
							width="160"
							height="160"
							style={{ transform: 'scaleX(-1)' }}
						/>

						<div className="font-pixel text-2xl pb-2">Connect with us</div>
						<div className="pb-3">
							Let&apos;s connect and grow the gaming community together. Fill in
							the details and we will get in touch with you.
						</div>
						<input
							type="text"
							className="bg-black border-2 placeholder-zinc-500 p-2 w-[80vw]"
							placeholder="Phone or Email"
						/>
						<div className="pt-4"></div>
						<StackButton
							content="Connect with us"
							bgColor="bg-red-400"
							textColor="text-black"
							width="w-48"
						/>
					</div>
				</StackContainer>
			</div>
		</div>
	);
}
