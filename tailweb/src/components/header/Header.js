function Header() {
  return (
    <div className="bg-blue-600 min-h-screen">
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold">Logo</span>
      </div>
      <nav className="hidden md:flex space-x-4 text-center">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/" className="text-white hover:text-gray-300">About</a>
        <a href="/" className="text-white hover:text-gray-300">Services</a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative">
    <input type="text" placeholder="Search..." className="px-4 py-2 rounded-full text-black" />
          <i className="fas fa-search absolute right-3 top-2 text-gray-500"></i>
        </div>
        <img src="https://storage.googleapis.com/a1aa/image/TPDIUxlpHfW9NCVZHLsCpr4NHWPgjrBhZrFbG8SV6mvDzI4JA.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Creative Digital Agency</h1>
      <p className="mt-4 text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <button className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white text-lg">Learn More</button>
    </main>
  </div>
  )
}

export default Header