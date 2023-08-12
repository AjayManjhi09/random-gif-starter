
import React from 'react'
import Sipinner from './Sipinner';
import useGif from '../hooks/useGif';


const Random = () => {
  
 const{gif,loading,fetchData} = useGif();


  function clickHandaler() {
    fetchData();
  }
  return (
    <div className=' w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

        {
          loading ? (<Sipinner/>) : (<img src={gif} width="450" alt='gif'/>)
        }

        <button onClick={clickHandaler}
        className="bg-white w-10/12 text-lg py-2 rounded-lg mb-[20px]">
            Generate
        </button>
    </div>
  )
}

export default Random