
const Navbar = () => {
  return (
    <header className="md:sticky sticky top-0 left-0 py-6 scroll-mt-[72px] bg-red-500 text-white">
      <div className="container max-w-6xl mx-auto flex flex-row justify-between items-center font-semibold">
        <div>
          <a href="#" className="text-2xl">
            Dawn
          </a>
        </div>
        <div className="flex flex-row gap-5">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
