import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-red-600 font-bold mb-4 hover:text-blue-600 transition duration-400">My App</h1>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam est fuga, reiciendis sapiente eos et! Vitae, in. Nostrum odit labore ipsa.
        </p>
      </div>
      <button className="flex items-center justify-center bg-black text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
        Get Started
        <BsArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default Home;
