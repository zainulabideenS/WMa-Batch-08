import React from 'react'

function Trust() {
  return (
    <div className="text-center text-white p-6 bg-blue-500 h-auto w-auto">
      <div className="container mx-auto py-14">
        <h1 className="text-4xl font-bold text-center mb-12">We’re trusted by clients.</h1>
        <div className="flex flex-col justify-center items-center md:flex-row space-x-0 md:space-x-8 space-y-3 md:space-y-0">
          <div className="max-w-lg flex flex-col p-6 hover:bg-blue-600 shadow-lg scale-100 duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-2">Mina Whatson</h2>
            <p className="text-blue-300 mb-4">CONSULTANT</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          </div>
          <div className="max-w-lg flex flex-col p-6 hover:bg-blue-600 shadow-lg scale-100 duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-2">Edward Hunter</h2>
            <p className="text-blue-300 mb-4">IT SPECIALIST</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trust