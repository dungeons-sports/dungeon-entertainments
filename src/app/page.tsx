import StackButton from '@/components/stacked-button';
import StackContainer from '@/components/stacked-container';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Section One */}
			<div className="relative w-screen h-screen">
				<div className="absolute inset-0 bg-black opacity-80 z-10"></div>
				<div className="absolute inset-0 flex justify-center items-center blur-lg z-0">
					<Image
						alt="background"
						src={'/assets/background_image.png'}
						layout="responsive"
						quality={100}
						width={9}
						height={16}
					/>
				</div>
				<div className="relative z-20 p-8">
					<Image alt="icon" src="/assets/Icon.png" width={60} height={60} />
					<div className="flex flex-col items-start justify-center h-[80vh]">
						<div className="font-pixel text-4xl pb-4">Dungeon</div>
						<div className="pb-6">
							Find the best gaming arenas around you from our hand-picked places
							for the best esports experience.
						</div>
						<StackButton content="Get started" bgColor="bg-purple-500" />
					</div>
				</div>
				<div className="absolute bottom-[-3vh] right-[-7vw] z-20">
					<Image
						alt="dragon icon"
						src="/assets/dragon.png"
						width={200}
						height={200}
					/>
				</div>
			</div>

			{/* Section Two */}
			<div className="h-screen w-screen z-20 flex items-center justify-center p-8">
				<StackContainer>
					<div></div>
				</StackContainer>
			</div>
		</div>
	);
}
