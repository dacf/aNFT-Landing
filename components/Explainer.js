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
			<h1 className="text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">There is arguably nothing more life-like than giving birth to another ...</h1>
		</div>
		<div className="relative mt-2 sm:mt-2 lg:mt-2">
			<div className="flex flex-col sm:flex-row">
				<dl className="mt-6 space-y-6">
					<div>
						<dd className="ml-4 text-xl leading-6 font-medium text-white">An interesting property of smart contracts is the ability of a contract to create more contracts.</dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">Replication can be programmed into a blockchain entity</dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">Paired with an Automation Network, cyber life is a possibility</dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">It has been done.... </dd>
						<dd className="mt-2 ml-4 text-xl leading-6 font-medium text-white">a ‘family-tree’ that reproduces by itself is the first version of cyber life.</dd>
					</div>
				</dl>
			</div>
		</div>
		<div className="relative mt-24">
			<h1 className="text-center text-3xl leading-8 font-extrabold tracking-tight object-scale-down text-white sm:text-3xl">The Tree of CyberLife</h1>
		</div>
		<div className="relative mt-6 sm:mt-6 lg:mt-6">
			<div className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:justify-center">
				<img className="h-1/2 w-1/2 rounded-lg"src="TREE.png"></img>
			</div>
		</div>
		<div className="relative mt-24">
			<h1 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">Autonomous NPC's</h1>
		</div>
		<div className="relative mt-6 sm:mt-6 lg:mt-6">
			<div className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:justify-center">
				<ShortCard title={"Leto"} content={""} photo={"WOLF2.png"}/>
				<ShortCard title={"Matrix Azul"} content={""} photo={"BABY2.png"}/>
				<ShortCard title={"Quanta Grey"} content={""} photo={"BABY1.png"}/>
				<ShortCard title={"Matter"} content={""} photo={"SHEEP2.png"}/>
				<ShortCard title={"Particle"} content={""} photo={"SHEEP3.png"}/>
				<ShortCard title={"Photon"} content={""} photo={"BABYSHEEP.png"}/>
				<ShortCard title={"Electron"} content={""} photo={"BABYSHEEP2.png"}/>
				<ShortCard title={"Alpha Decay"} content={""} photo={"DEADSHEEP.png"}/>
			</div>
		</div>
    </div>
    )
}