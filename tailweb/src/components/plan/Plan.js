import React from 'react'

function Plan() {
  return (
    <div className="container mx-auto p-6">
    <div className="text-center">
      <a href="/" className="text-blue-600 underline">OUR PRICING</a>
      <h1 className="text-3xl font-bold mt-2">Choose A Plan That's Right For You</h1>
      <div className="flex justify-center items-center mt-4">
        <span className="mr-2">Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="ml-2">Yearly</span>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-white hover:bg-blue-400 flex flex-col justify-center items-center hover:text-white rounded-lg shadow-2xl p-8 w-80 scale-100 duration-700 hover:scale-105 hover:cursor-pointer">
        <h2 className="text-xl font-bold mb-4">Basic Plan</h2>
        <img src="https://storage.googleapis.com/a1aa/image/fTVP82p_V74TaCbOV2x9r9JCqXbyd-kgVB-GXOvoEn4.jpg" alt="Map illustration" className="mx-auto mb-4" width="100" height="100" />
        <p className="text-3xl font-bold text-blue-600">
          $150
          <span className="text-lg font-normal text-gray-600">/Month</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full ">Start Now</button>
      </div>
      <div className="bg-white hover:bg-blue-400 flex flex-col justify-center items-center hover:text-white rounded-lg shadow-2xl p-8 w-80 scale-100 duration-700 hover:scale-105 hover:cursor-pointer">
        <h2 className="text-xl font-bold mb-4">Standart Plan</h2>
        <img src="https://storage.googleapis.com/a1aa/image/n-X5CrstXiloymkIdmwujJTkPpnYkbFLjbvMlrqte8I.jpg" alt="Calendar illustration" className="mx-auto mb-4" width="100" height="100" />
        <p className="text-3xl font-bold text-blue-600">
          $99
          <span className="text-lg font-normal text-gray-600">/Month</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full ">Start Now</button>
      </div>
      <div className="bg-white hover:bg-blue-400 flex flex-col justify-center items-center hover:text-white rounded-lg shadow-2xl p-8 w-80 scale-100 duration-700 hover:scale-105 hover:cursor-pointer">
        <h2 className="text-xl font-bold mb-4">Premium Plan</h2>
        <img src="https://storage.googleapis.com/a1aa/image/HfpHlhrOkHWnldExkGRGuH0cAiIimuBw1pbYffygTZ0.jpg" alt="Premium plan illustration" className="mx-auto mb-4" width="100" height="100" />
        <p className="text-3xl font-bold text-blue-600">
          $150
          <span className="text-lg font-normal text-gray-600">/Month</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li>Graphic Design</li>
          <li>Web Design</li>
          <li>UI/UX</li>
          <li>HTML/CSS</li>
          <li>SEO Marketing</li>
          <li>Business Analysis</li>
        </ul>
        <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full ">Start Now</button>
      </div>
    </div>
  </div>
  )
}

export default Plan