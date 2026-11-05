import ProjectCard from "./ProjectCard.jsx"
import projects from "../projects.json"


export default function Main() {

    return (
        <main className="m-0 pr-10 pl-10">
            <img className="w-48" src="/profile-pic.png" alt="profile picture of bobby shaw" />
            <h1 className="font-bold text-6xl mt-5">Portfolio</h1>
            <h2 className="text-3xl font-bold text-neutral-500">Bobby Shaw</h2>
            <p className="bio mt-5">
                Check out some of the things I have built throughout my coding journey.
                I started to get a taste of coding in secondary school where I would
                learn the basic of python scripting. I eventually moved onto to teaching
                myself web development as well as enrolling into the University of Chester
                as a Computer Science student.
            </p>
            <section className="mt-24 mb-24 grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        id={index}
                        name={project.projectName}
                        language={project.mainLanguage}
                        img={project.imgUrl}
                    />
                ))}
            </section>
        </main>
    )
}