
export default function ShortCard({title, content, photo,children}) {
    return (
	<div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg m-4 bg-white">
		<div className="px-6 py-4">
			<div className="text-xs text-black font-semibold text-center">{title}</div>
		</div>
		<div className="px-6 py-1 self-center">
			<img src={photo} className="ml-2 w-16 h-16 object-center"></img>
		</div>
    </div>
    )
}


ShortCard.defaultProps = {
    title: 'Autonomy Network',
    content: '',
	photo: ''
}