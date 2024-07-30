import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-center background p-8'>
      <h1 className='bg-gray-300 text-gray-800 h-16 w-[90%] text-4xl font-extrabold text-center rounded-lg shadow-md mb-8 place-content-center'>
        RANDOM GIFS
      </h1>
      <div className='w-screen max-w-6xl h-[80%] flex flex-row gap-8 justify-between'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
