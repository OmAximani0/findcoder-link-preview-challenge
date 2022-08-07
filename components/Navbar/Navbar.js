export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-b-2 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src='/preview.png' className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap dark:text-white">Previewer</span>
          </a>
        </div>
      </nav>
    </>
  )
}