// import ava from "../assets/ava.jpg"
const About = () => {
  return (
    <section id="about" className=" scroll-mt-[72px]">
      <div className="container max-w-6xl mx-auto ">

        <div className="flex flex-row justify-evenly gap-[70px] items-center py-[80px] ">
          <div className="max-w-[400px] [&>p]:py-3">
            <h1 className="font-bold text-5xl">Hello, <br /> I’m Tung Anh!</h1>
            <p className="my-5 font-medium text-xl">Web Developer, JavaScript Developer</p>
            <div className="mt-5 flex flex-row gap-8 [&>*]:px-5 [&>*]:py-3  [&>*]:bg-red-500 text-white [&>*]:rounded-xl font-bold [&>*]:w-[150px] text-center">
              <a href="#contact">Contact Me</a>
              <a href="#">Download CV</a>
            </div>
          </div>
          <div className="max-h-[450px] max-w-[350px]">
           
            {/* <img src={ava} alt="" className="h-full border border-black  rounded-xl" /> */}
            <img src="https://picsum.photos/350/450" alt="" className="h-full border border-black  rounded-xl" />



          </div>
        </div>
      </div>
    </section>
  )
}

export default About
