import ProjectCard from "./ProjectCard.jsx"

export default function Main() {
    return (
        <main className="m-0 pr-10 pl-10">
            <img className="w-48" src="/profile-pic.png" alt="profile picture of bobby shaw" />
            <h1 className="font-bold text-6xl mt-5">Portfolio</h1>
            <h2 className="text-3xl font-bold text-neutral-500 m-3 mb-9">Bobby Shaw</h2>
            <p className="bio">
                Check out some of the things I have built throughout my coding journey.
                I started to get a taste of coding in secondary school where I would
                learn the basic of python scripting. I eventually moved onto to teaching
                myself web development as well as enrolling into the University of Chester
                as a Computer Science student.
            </p>
            <section className="mt-24 mb-24 grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                <ProjectCard url="https://github.com/Bobby-Shaw/Donkey-Kong" name="Donkey Kong Remake" language="Python" img="/dk-img.png" />
                <ProjectCard url="https://github.com/Bobby-Shaw/todo" name="To-do App" language="JavaScript"  img="/placeholder.jpg"/>
                <ProjectCard url="https://github.com/Bobby-Shaw/strava-stats" name="Strava Stats" language="JavaScript" img="placeholder.jpg" />
            </section>
        </main>
    )
}