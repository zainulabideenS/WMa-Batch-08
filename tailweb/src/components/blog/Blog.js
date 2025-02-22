import React from 'react'

function Blog() {
  return (
    <div className="flex items-center justify-center m-5 p-5 bg-white">
                    <div className="text-center">
                        <h2 className="text-blue-600 text-xl hover:underline hover:cursor-pointer font-bold">OUR BLOG</h2>
                        <h1 className="text-3xl font-bold mt-2">Letest News & Blog</h1>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labo.</p>
                        <div className="mt-4 flex justify-center">
                            <input type="email" placeholder="Enter Your Email" className="border border-gray-300 p-2 w-64" />
                            <button className="bg-blue-600 text-white p-2">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
  )
}

export default Blog