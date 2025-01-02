/* eslint-disable @next/next/no-img-element */
'use client';

import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';
// import { useRouter } from 'next/navigation';

export default function Home() {
	// const router = useRouter();
	const openUrl = (url: string) => {
		window.location.href = url;
	};

	const openRegister = () => {
		openUrl('https://console.dungeonofgames.com/signup');
	};

	const openLogin = () => {
		openUrl('https://console.dungeonofgames.com/login');
	};

	// const openSignup = () => {
	// 	openUrl('https://dungeon-console.web.app/signup');
	// }

	const openConnectWithUs = () => {
		openUrl('https://console.dungeonofgames.com/connect');
	};

	return (
		<div className="relative flex flex-col">
			<div className="relative flex flex-col">
				{/* Section one */}
				<div className="relative">
					<div className="absolute inset-0 bg-black opacity-80 z-10 h-[105vh]"></div>

					<img
						alt="background"
						src="/assets/world5.jpg"
						className="w-full h-full object-cover absolute inset-0  blur-lg z-0"
					/>

					<div className="relative z-20 p-8 lg:px-24 h-screen">
						<div className="flex flex-row items-start justify-between">
							<img alt="icon" src="/assets/Icon.png" width="60" height="60" />
							<button
								onClick={openLogin}
								className="px-4 py-2 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition-all"
							>
								Go to console
							</button>
						</div>

						<div className="flex flex-col-reverse justify-center items-start sm:flex-row sm:justify-start sm:items-center  h-[80vh]">
							<div className="flex flex-col items-start justify-center">
								<div className="font-pixel text-3xl pb-4 sm:text-4xl">
									Dungeon
								</div>
								<div className="text-xl pb-6 sm:text-3xl font-roboto font-thin sm:w-[60vw]">
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
									width="w-56 sm:w-56"
									onClick={openRegister}
								/>
							</div>
							<div className="sm:flex-grow"></div>
							<img
								alt="icon"
								src="/assets/dragon.png"
								className="hidden w-32 h-32 sm:w-96 sm:h-96 sm:block"
							/>
						</div>
					</div>
				</div>

				{/* Section Two */}
				<div className="absolute top-[85vh] h-[90vh] w-screen z-20 flex flex-col items-center justify-center py-8">
					<StackContainer width="w-[90vw]" height="h-auto sm:h-[70vh]">
						<div className="relative flex flex-col sm:flex-row justify-center items-start w-[100vw] py-5">
							<img
								alt="icon"
								src="/assets/rocket.png"
								className="w-40 sm:w-72"
							/>
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
								<div className="flex flex-wrap">
									<img
										src="/assets/googleplay.png"
										alt="google play"
										className="w-34 h-20 mb-4"
									/>
									<div className="ml-4"></div>
									<img
										src="/assets/appstore.png"
										alt="google play"
										className="w-34 h-20"
									/>
								</div>
							</div>
						</div>
					</StackContainer>
				</div>
			</div>

			{/* Section Three */}
			<div className="relative flex px-12 h-auto pt-[80vh]">
				<div className="relative flex flex-col sm:flex-row-reverse justify-center items-start w-[100vw] z-20">
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
							onClick={openRegister}
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
							<div className="pb-3 w-auto sm:w-[40vw]">
								Join us in building an incredible gaming community! Connect with
								us to share your ideas, and our team will reach out to you
								personally. Together, let&apos;s create unforgettable gaming
								experiences and grow stronger as a community!
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
