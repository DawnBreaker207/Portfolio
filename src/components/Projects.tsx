import { PROJECT_DATA } from "../utils/Data";

const Projects = () => {

  return (
    <section id="projects" className="scroll-mt-[72px] ">
      <div className="container max-w-6xl mx-auto pt-10 ">
        <h1 className="font-bold text-[40px]">
          Project
        </h1>
        <div className="grid grid-cols-3 gap-5 my-20">
          {PROJECT_DATA.map(({ id, name, thumbnail, language, description, link }) => (
            <div key={id} className="flex flex-col border-2 " >
              <div>
                <img src={thumbnail} alt="" className="min-w-full" />
              </div>
              <div className="border-y-2 px-5 py-2">
                <h1 className="font-semibold">{language}</h1>
              </div>
              <div className="p-5">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h1 className="my-5 h-[70px]">{description}</h1>
                <a href={link} target="_blank" className="py-2 px-5 rounded-3xl text-white font-semibold bg-red-500">Github</a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects