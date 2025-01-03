import React from 'react'
import useFetch from '../utils/useFetch';

const ButtonList = ({name}) => {
  const fetchVideos = useFetch();

  const handleButtonClick = (name) => {
    fetchVideos(name);

  }
  return (
    <div className='flex'>
      <button onClick={() => handleButtonClick(name)}  className=' font-bold  p-2 rounded-lg bg-gray-100'>{name}</button>
    </div>
  )
}

export default ButtonList