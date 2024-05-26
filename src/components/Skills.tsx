import { SKILL_DATA } from "../utils/Data"
const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-[72px] py-10">
      <div className="container max-w-6xl mx-auto ">
        <h1 className="font-bold text-[40px]">Skill</h1>
        <div className="flex flex-col gap-[50px] py-10">
          {SKILL_DATA.map((item) => (
            <div key={item.id}>
              <h1 className="font-bold text-2xl">{item.type}</h1>
              <div className="flex flex-row justify-end gap-[50px] mr-[50px] mt-[30px]">

                {item.list.map((index) => (
                  <div key={index.id}>
                    <div className="max-h-[100px] ">
                      <img src={index.icon} alt="" className="size-20" />
                    </div>
                    <h1 className="text-center font-semibold">{index.name}</h1>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
