import React from 'react'

function About() {
  return (
    <section className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
      <h1 className="text-blue-400 text-center text-3xl font-bold">About us</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stay Updated with the Latest News</h1>
        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
Read More</p>
        <a href="/" className="bg-blue-600 text-center justify-center text-white px-4 py-2 rounded">Read More</a>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={require("./../image-2.jpg")} alt="A collage of various news images representing different categories like politics, business, technology, and sports" className="rounded shadow-md" />
      </div>
    </div>
  </section>
  )
}

export default About