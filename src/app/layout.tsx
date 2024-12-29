"use client"

/* eslint-disable @next/next/no-img-element */
import { Roboto, Pixelify_Sans } from '@next/font/google';
import './globals.css';
import { useRouter } from 'next/navigation';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-roboto',
});

const pixelifySans = Pixelify_Sans({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-pixel',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	
	const openPartnerWithUs = () => {
		router.push("/partner"); // Navigate to the 'About' page
	}

	return (
		<html lang="en">
			<body className={`${roboto.variable}, ${pixelifySans.variable}`}>
				{children}
				<footer className='sm:h-[50vh]'>
					<div className="h-0.5 bg-gray-700 mx-[5vw]"></div>
					<div className="flex flex-wrap">
						<div className="p-10 mx-[5vw] flex flex-col justify-start items-start">
							<img alt="icon" src="/assets/Icon.png" width="60" height="60" />
							<div className="mb-3"></div>
							<div className="font-pixel text-3xl">Dungeon Entertainments</div>
							<div className="mb-3"></div>
							<div className="font-roboto text-lg">
								© 2025 Dungeon Entertainments Pvt. Ltd.
							</div>
							<div className="font-roboto text-lg">All rights reserved</div>
						</div>
						<div className="flex flex-wrap sm:justify-end sm:w-[60vw] items-start">
							<div className="flex flex-col p-16">
								<div className="font-roboto text-lg">Company</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">About us</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Electronic Sports</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Contact</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Career</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600" onClick={openPartnerWithUs}>Partner with us</div>
                <div className="mb-3"></div>
							</div>
							<div className="flex flex-col p-16">
								<div className="font-roboto text-lg">Social</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Join our Discord</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Stream Sponcership</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Instagram</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Youtube</div>
							</div>
							<div className="flex flex-col p-16">
								<div className="font-roboto text-lg">Miscellanious</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">FAQ</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Terms and Conditions</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Privacy Policy</div>
                <div className="mb-3"></div>
                <div className="font-roboto text-lg text-zinc-600">Cancellation Policy</div>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
