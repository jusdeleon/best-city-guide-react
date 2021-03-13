function Header() {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center md:flex md:justify-between md:items-center">
        <h1 className="text-xl text-indigo-900 mb-5 md:mb-0">
          <a href="#">Best City Guide</a>
        </h1>
        <div className="flex flex-col md:flex-row">
          <a href="#" className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide">
            Ice Cream
          </a>
          <a href="#" className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide">
            Donuts
          </a>
          <a href="#" className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide">
            Tea
          </a>
          <a href="#" className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide">
            Coffee
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;