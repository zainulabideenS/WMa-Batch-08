import React from 'react'

function Desc() {
  return (
<div className="bg-blue-100 p-10 rounded-lg shadow-lg h-auto">
          <div className="flex flex-col justify-center items-center space-y-[30px] md:space-y-0 md:space-x-0 md:flex-row md:justify-around outline-none border-2 p-[25px] border-white">
            <div className="text-center w-[250px] hover:border hover:cursor-pointer hover:border-white rounded-md p-6 hover:shadow-xl scale-95 duration-500 hover:scale-100">
              <image
                src="https://placehold.co/100x100"
                alt="Placeholder image for Smart planning"
                className="mx-auto mb-4 rounded-full"
                width="100"
                height="100"
              />
              <h3 className="font-bold text-lg text-gray-800">Smart planing</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div className="text-center w-[250px] hover:border hover:cursor-pointer hover:border-white rounded-md p-6 hover:shadow-xl scale-95 duration-500 hover:scale-100">
              <image
                src="https://placehold.co/100x100"
                alt="Placeholder image for Our partnership"
                className="mx-auto mb-4 rounded-full"
                width="100"
                height="100"
              />
              <h3 className="font-bold text-lg text-gray-800">Our partnership</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div className="text-center w-[250px] hover:border hover:cursor-pointer hover:border-white rounded-md p-6 hover:shadow-xl scale-95 duration-500 hover:scale-100">
              <image
                src="https://placehold.co/100x100"
                alt="Placeholder image for Super ideas"
                className="mx-auto mb-4 rounded-full"
                width="100"
                height="100"
              />
              <h3 className="font-bold text-lg text-gray-800">Super ideas</h3>
              <p className="text-gray-600">
                There are many variations of passages available, but the majority have suffered alteration in some form,
              </p>
            </div>
          </div>
        </div>
  )
}

export default Desc