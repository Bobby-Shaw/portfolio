export default function ProjectCard(props) {
    return (
        <a className="cursor-pointer" href={props.url} target="_blank">
            <div className="overflow-hidden border-2 border-gray-200 border-solid rounded-2xl shadow-3xl hover:scale-105 transition ease-out">
                <img src="/dk-img.png" />
                <div className="p-2.5">
                    <p className="font-bold text-md">{props.name}</p>
                    <p className="text-neutral-400 text-sm`">{props.language}</p>
                </div>
            </div>
        </a>
    )
}