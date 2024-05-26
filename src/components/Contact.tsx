import { SOCIAL_MEDIA } from "../utils/Data"

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-[72px]">
      <div className="container max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-5xl">Let's Talk With Me !</h1>

          <div className="flex flex-row gap-10 my-40">
            {SOCIAL_MEDIA.map(({ id, link, name }) => (
              <div key={id} className="">
                <a href={link}>
                  <img src={name} alt="" className="size-10" />
                </a>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact