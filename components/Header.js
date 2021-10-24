import Link from 'next/link'

export default function Header() {
    return (
		<div className="max-w-screen-xl mx-auto px-4 mt-10 sm:px-6">
			<nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
				<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
					<h1 className="font-bold text-white">CyberLife - Autonomous NFT's </h1>
				</div>
				<div className="hidden md:flex md:space-x-10">
					<Link href="/">
						<a className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
					</Link>
					<a href="https://blog.autonomynetwork.io/sentient-nfts-a-new-form-of-life-part-1-the-roadmap-590237e18753" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Devpost</a>
					<a href="https://blog.autonomynetwork.io/sentient-nfts-a-new-form-of-life-part-1-the-roadmap-590237e18753" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Medium</a>
					<a href="" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">aNFT Family Tree</a>
					<a href="https://github.com/Autonomy-Network" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Github</a>
				</div>
				<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
					<span className="inline-flex rounded-md shadow">
					<a href="https://autonomy-network.gitbook.io/autonomy-docs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6
					font-medium rounded-md text-white bg-pink-cyber hover:text-white focus:outline-none focus:border-white-300 
					focus:shadow-outline-indigo active:bg-gray-50 active:text-white transition duration-150 ease-in-out">Meet an aNFT</a>
					</span>
				</div>
			</nav>
		</div>
    )
}