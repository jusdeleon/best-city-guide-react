function Header() {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center md:flex md:justify-between md:items-center">
        <h1 className="text-xl text-indigo-900 mb-5 md:mb-0 cursor-pointer">Best City Guide</h1>
        <div className="flex flex-col md:flex-row">
          <span className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide cursor-pointer">
            Ice Cream
          </span>
          <span className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide cursor-pointer">
            Donuts
          </span>
          <span className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide cursor-pointer">
            Tea
          </span>
          <span className="py-2 md:py-0 md:mx-5 text-teal-500 hover:text-indigo-900 uppercase tracking-wide cursor-pointer">
            Coffee
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;