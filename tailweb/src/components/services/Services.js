import React from 'react'

function Services() {
  return (
    <div className="bg-white text-gray-800">
    <section className="py-12">
        <div className="text-center mb-8">
            <h3 className="text-blue-500 font-bold uppercase">Our Services</h3>
            <h2 className="text-3xl font-bold">We Are Providing Digital services</h2>
        </div>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-[#92c8d3] hover:bg-white scale-100 duration-500 hover:scale-105 hover:border-blue-500 hover:cursor-pointer border rounded-lg p-8 shadow-lg">
                        <div className="flex justify-center">
                            <img src="https://storage.googleapis.com/a1aa/image/2TSHMXfrhdX5t0uIu7kXpnfwJWbpcRGUIdgC9p6pwtE.jpg" alt="Web Development Icon" className="mb-4" width="100" height="100" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Web Development</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-[#92c8d3] hover:bg-white scale-100 duration-500 hover:scale-105 hover:border-blue-500 hover:cursor-pointer border rounded-lg p-8 shadow-lg">
                        <div className="flex justify-center">
                            <img src="https://storage.googleapis.com/a1aa/image/EvSv-h5A1SOdlszk6K5dWiYOgUCrPndAFnHVsEk-5cI.jpg" alt="Graphic Design Icon" className="mb-4" width="100" height="100" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-[#92c8d3] hover:bg-white scale-100 duration-500 hover:scale-105 hover:border-blue-500 hover:cursor-pointer border rounded-lg p-8 shadow-lg">
                        <div className="flex justify-center">
                            <img src="https://storage.googleapis.com/a1aa/image/8taoeXvwcJOP_1AFHp84tNzWYvBVSInF8ngYnMhuPOY.jpg" alt="Digital Marketing Icon" className="mb-4" width="100" height="100" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-3">
                <button className="hover:bg-[#92c8d3] scale-125 duration-500 hover:scale-150 bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="hover:bg-[#92c8d3] scale-125 duration-500 hover:scale-150 bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>
</div>
  )
}

export default Services