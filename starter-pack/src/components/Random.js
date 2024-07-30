import React from 'react';
import Spinner from './Spinner';
import useCustomHooks from './CustomHooks/useCustomHooks';

// Assuming the keyWord is empty for initial load, you can adjust it as needed
function Random() {
    const { gif, loading, fetchData } = useCustomHooks('');

    return (
        <div className='w-full md:w-[50%] h-full flex flex-col items-center rounded-lg bg-white bg-opacity-30 backdrop-blur-md shadow-lg border border-gray-300'>
            <h1 className='bg-white bg-opacity-70 text-gray-800 h-[60px] w-[90%] text-4xl font-extrabold text-center rounded-t-lg mt-8 mx-auto shadow-md'>
                Random Gif
            </h1>

            <div className='flex flex-col justify-between items-center w-auto h-[70%] overflow-hidden '>

                {
                    loading ? (
                        <div className='flex items-center justify-center h-full'>
                            <Spinner />
                        </div>
                    ) : (
                        gif && <img src={gif} alt="Random GIF" className='w-[90%] mt-4  object-contain shadow-lg border border-gray-500 rounded-lg' />
                    )
                }
            </div>

            <button
                onClick={() => fetchData()}
                className='w-[60%] mt-4 bg-white text-gray-800 rounded-lg text-lg py-2 shadow-md hover:bg-gray-200 transition duration-300 ease-in-out'>
                Generate Gifs
            </button>
        </div>
    );
}

export default Random;
