
import React, { useState } from 'react'
import useGif from '../hooks/useGif';
import Sipinner from './Sipinner';


const Tag = () => {
  
  const [tag, setTag]= useState("");

 
  

 const {gif,loading,fetchData} = useGif(tag);


  function clickHandaler() {
    fetchData(tag);
  }

  function changeHandelr(event) {
    setTag(event.target.value);
  }
  return (
    <div className=' w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

        {
          loading ? (<Sipinner/>) : (<img src={gif} width="450" alt='gif'/>)
        }

        <input
          className=' w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center'
          onChange={changeHandelr}
          value={tag}

        />

        <button onClick={clickHandaler}
        className="bg-white w-10/12 text-lg py-2 rounded-lg mb-[20px]">
            Generate
        </button>
    </div>
  )
}

export default Tag