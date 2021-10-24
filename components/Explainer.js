import ShortCard from "./ShortCard"
import ReactCardFlip from "react-card-flip";
import { useState } from 'react'; 

export default function Explainer() {
	const AutoNetwork = "Autonomy is a descentralized network for automated conditional ordering. It is built on users, executors and the blockchain."
	const EasyToIntegrate = "Set your condition, call our contract and done!"
	const Composable = "Anyone dApp can integrate Autonomy"
	const [isFlipped1, setFlipped1] = useState(false)
	const [isFlipped2, setFlipped2] = useState(false)
	const handleHover1 = e => {
		e.preventDefault();
		setFlipped1(!isFlipped1)
	};
	const handleHover2 = e => {
		e.preventDefault();
		setFlipped2(!isFlipped2)
	};
    return (
	<div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
		<div className="relative">
			<h1 className="text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">The Autonomy Network is ...</h1>
		</div>
		<div className="relative mt-2 sm:mt-2 lg:mt-2">
			<div className="flex flex-col sm:flex-row">
				<dl className="mt-6 space-y-6">
					<div>
						<dd className="ml-4 text-xl leading-6 font-medium text-white">An off-the-shelf generalized automation solution</dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">Powering the Web3 with on-chain conditional execution</dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">A decentralized network built on users, executors and the blockchain.</dd>
					</div>
				</dl>
				<dl className="mt-2 space-y-6">
					<div>
						<h1 className="ml-4 justify-center text-xl leading-8 font-extrabold tracking-tight text-white sm:text-xl">The AUTO Token</h1>
						<dd className="mt-1 ml-4 text-xl leading-6 font-medium text-white">Autonomy's genuine utility token</dd>
						<dd className="mt-1 ml-4 text-xl leading-6 font-medium text-white">Enabling users to pay discounted network fees, defer execution payment</dd>
						<dd className="mt-1 ml-4 text-xl leading-6 font-medium text-white">and required to execute transactions</dd>
					</div>
				</dl>
			</div>
		</div>
		<div className="relative mt-24">
			<h1 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">Use cases for Autonomy</h1>
		</div>
		<div className="relative mt-6 sm:mt-6 lg:mt-6">
			<div className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:justify-center">
				<ShortCard title={"Automated loss prevention"} content={EasyToIntegrate} photo={"bear.svg"}/>
				<ShortCard title={"Limit orders"} content={Composable} photo={"conditional.svg"}/>
				<ShortCard title={"Impermanent loss protection"} content={AutoNetwork} photo={"portfolio.svg"}/>
				<ShortCard title={"Recurring Payments"} content={AutoNetwork} photo={"payment.svg"}/>
			</div>
		</div>
		<div className="relative mt-8">
			<div className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:justify-center">
				<a className="text-center cursor-pointer w-2/3 h-18 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md
				text-gray-500 bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo transition 
				duration-150 ease-in-out md:py-4 md:text-lg md:px-10 border-gray-400 border-2">Try our community built dapps</a>	
			</div>
		</div>
    </div>
    )
}