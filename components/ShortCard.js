
export default function ShortCard({title, content, photo,children}) {
    return (
	<div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg m-4 bg-gray-200">
		<div className="px-6 py-4">
			<div className="text-xl text-black font-semibold text-center">{title}</div>
		</div>
		<div className="px-6 py-2 self-center">
			<img src={photo} className="ml-12 w-32 h-32 object-center"></img>
		</div>
    </div>
    )
}


ShortCard.defaultProps = {
    title: 'Autonomy Network',
    content: '',
	photo: ''
}