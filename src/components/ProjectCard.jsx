export default function ProjectCard(props) {
    return (
        <a className="cursor-pointer" href={props.url} target="_blank">
            <div className="min-w-full bg-white overflow-hidden border-2 border-gray-200 border-solid rounded-2xl shadow-3xl hover:scale-105 transition ease-out">
                <div className={`w-full h-44 bg-cover bg-center bg-no-repeat `} style={{ backgroundImage: `url(${props.img})` }}>
                </div>
                <div className="p-2.5 min-w-86">
                    <p className="font-bold text-md">{props.name}</p>
                    <p className="text-neutral-400 text-sm">{props.language}</p>
                </div>
            </div>
        </a>
    )
}