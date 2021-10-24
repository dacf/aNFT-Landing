
import { GrFormClose } from 'react-icons/gr'
import Link from 'next/link'

export default function Discord() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="px-6 py-6 bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
				<div className="xl:w-0 xl:flex-1">
					<h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">You belong here.</h2>
					<p className="mt-3 text-sm leading-5 text-indigo-200">We are a group of innovators, builders and dreamers</p>
					<p className="mt-1 text-sm leading-5 text-indigo-200">changing the way we interact with blockchains</p>
				</div>
				<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
					<div className="flex">
							<a href="https://discord.gg/2X6fwV54tT" target="_blank" rel="noopener noreferrer"  className="w-screen rounded-lg bg-yellow-300 text-gray-800 font-bold p-4 uppercase text-center">Join the Community!</a>
					</div>
				</div>
			</div>
        </div>
    )
}

