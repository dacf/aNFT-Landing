import Link from 'next/link'
import Typewriter from 'typewriter-effect';


export default function Hero() {
    return (
		<main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<div className="text-center">
				<h1 className="text-2xl tracking-tight leading-6 font-extrabold text-white whitespace-nowrap sm:text-5xl sm:leading-none md:text-6xl">
					CyberLife
				</h1>
				<h1 className="text-2xl tracking-tight leading-6 font-extrabold text-blue-600 whitespace-nowrap sm:text-5xl sm:leading-none md:text-6xl">
					Sentient NFT's
				</h1>
				<h1 className="text-2xl tracking-tight leading-6 font-extrabold text-blue-400 whitespace-nowrap sm:text-5xl sm:leading-none md:text-6xl">
					A new form of Life
				</h1>
				<div className="typewriter">
					<Typewriter
						options={{
						strings: [
							'On-chain NPC Metaverse',
							'Autonomous arbitrage NFT\'s',
							'Conditional NFT mutation',
						],
						autoStart: true,
						loop: true,
						}}
					/>
				</div>
				<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-4 hidden">
					<div className="rounded-md-shadow">
					<a href="https://www.autoswap.trade/#/swap" target="_blank" rel="noopener noreferrer" className="mt-4 cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md
					text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo transition 
					duration-150 ease-in-out md:py-4 md:text-lg md:px-10">First aNFT auction</a>
					</div>
				</div>
				<div className="pt-4 sm:pt-20 text-center">
					<div className="pt-3 flex flex-wrap justify-center space-x-4">
					<span>
						<Link my={{base: 2, md: 1}} mx={{base: 1, md: 2}} aria-label="ProtocolLabs" rel="noreferrer" target="_blank" href="https://protocol.ai/">
							<img className="content-center h-12 mr-4 ml-5 lg:mb-1" src=" ethlisbon.webp"/>
						</Link>
						<h1 className="text-white">ETHLISBON</h1>
						</span>
						<Link my={{base: 2, md: 1}} mx={{base: 1, md: 2}} aria-label="ProtocolLabs" rel="noreferrer" target="_blank" href="https://protocol.ai/">
							<img className="content-center h-12 mr-4 ml-4" src="autonomylogo.png"/>
						</Link>
						<Link my={{base: 2, md: 1}} mx={{base: 1, md: 2}} aria-label="ProtocolLabs" rel="noreferrer" target="_blank" href="https://protocol.ai/">
							<img className="content-center h-12 mr-4 ml-4" src="rarible.svg"/>
						</Link>
						<h1 className="text-white mt-3 font-black">Rarible</h1>
					</div>
				</div>
			</div>
		</main>

    )
}