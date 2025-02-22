import React from 'react'

function Footer() {
  return (
    <>
    <div className="bg-blue-500 text-white w-auto p-14 flex flex-col space-y-3 md:space-y-0 items-center justify-center md:flex-row md:justify-evenly">
          <div className="container mx-auto flex  flex-col md:flex-row justify-around items-start md:items-center">
            <div className="text-white">
              <h1 className="text-3xl font-bold">Logo</h1>
              <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae.</p>
              <div className="flex mt-4 space-x-2">
                <div className="w-6 h-6 border-2 border-white hover:bg-white rounded-full"></div>
                <div className="w-6 h-6 border-2 border-white hover:bg-white rounded-full"></div>
                <div className="w-6 h-6 border-2 border-white hover:bg-white rounded-full"></div>
              </div>
              <image
                src="https://placehold.co/50x50"
                alt="Profile picture of a person"
                className="mt-4 w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
              <div>
                <h2 className="text-xl font-bold underline">Our Links</h2>
                <ul className="mt-2 space-y-1">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Team</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold underline">Our Company</h2>
                <ul className="mt-2 space-y-1">
                  <li>About Company</li>
                  <li>Our Testimonials</li>
                  <li>Latest News</li>
                  <li>Our mission</li>
                  <li>Get a free Quot</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold underline">Our Services</h2>
                <ul className="mt-2 space-y-1">
                  <li>App Development</li>
                  <li>Web Development</li>
                  <li>Graphic Design</li>
                  <li>Web Solution</li>
                  <li>App Design</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-blue-500 text-white border-gray-300 text-center w-auto">
            <p>© Copyright 2020 Brandoxide. All rights reserved.</p>
          </div>
    </>
    
  )
}

export default Footer