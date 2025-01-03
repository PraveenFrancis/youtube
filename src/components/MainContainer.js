import React from 'react'
import Button from './Button'
import VideoContainer from './VideoContainer'
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isOpenHambergerMenu = useSelector((store) => store.app.isMenuOpen);

  return (
    <div  className={`${
      !isOpenHambergerMenu ? "ml-0" : "ml-44"
    } flex flex-col ml-44 mt-16 z-0`}>
        <Button></Button>
        <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer