import React from 'react'
import ButtonList from './ButtonList'

const Button = () => {
    const list = [
        "All",
        "News",
        "Sports",
        "music",
        "Dance",
        "Gaming",
        "Smart Phones",
        "Mixes",
        "Tamil Cinema",
      ];
  return (
    <div className='flex pt-8 gap-4 ml-[73px]'>
        {
            list.map( (item, index) => (<ButtonList key={index} name={item}/>))
        }
    </div>
  )
}

export default Button