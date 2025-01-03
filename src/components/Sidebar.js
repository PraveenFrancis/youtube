import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiShortcut } from "react-icons/si";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";

const Sidebar = () => {
  const isOpenHambergerMenu = useSelector((store) => store.app.isMenuOpen);

  if (!isOpenHambergerMenu) return;
  return (
    <div className="p-4 mt-3 fixed h-full top-12">
      <div>
        <div className="flex py-4 px-4">
          <IoHome className="h-6 mr-6" />

          <h2>
            <Link to={"/"}> Home</Link>
          </h2>
        </div>
        <div className="flex py-4 px-4">
          <MdOutlineWatchLater className="h-6 mr-6" />

          <h2>Shorts</h2>
        </div>
        <div className="flex py-4 px-4">
          <SiShortcut className="h-6 mr-6" />
          <h2>Subscriptions</h2>
        </div>
      </div>
      <div>
        <h1 className="font-bold px-4 py-1">You</h1>
        <div className="flex py-4 px-4">
          <IoMdTrendingUp className="h-6 mr-6" />

          <h2>History</h2>
        </div>
        <div className="flex py-4 px-4">
          <IoMusicalNote className="h-6 mr-6" />

          <h2>Playlist</h2>
        </div>
        <div className="flex py-4 px-4">
          <PiFilmSlateBold className="h-6 mr-6" />

          <h2>Your videos</h2>
        </div>
      </div>
      <div>
        <h1 className="font-bold px-4 py-1">Subscriptions</h1>
        <div className="flex py-4 px-4">
          <IoGameController className="h-6 mr-6" />

          <h2>Flowers</h2>
        </div>
        <div className="flex py-4 px-4">
          <FaRegNewspaper className="h-6 mr-6" />

          <h2>Asianet</h2>
        </div>
        <div className="flex py-4 px-4">
          <MdPodcasts className="h-6 mr-6" />

          <h2>New 18</h2>
        </div>
      </div>
      <div>
        <h1 className="font-bold px-4 py-1">Explore</h1>
        <div className="flex py-4 px-4">
          <FaLaptopCode className="h-6 mr-6" />

          <h2>Trending</h2>
        </div>
        <div className="flex py-4 px-4">
          <img
            className="h-6 mr-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87tKjusyyRal97ePbUUfejewcSzwYbx0MgA&s"
            alt=""
          />
          <h2>Shopping</h2>
        </div>
        <div className="flex py-4 px-4">
          <img
            className="h-6 mr-6"
            src="https://www.svgrepo.com/show/520438/youtube-music.svg"
            alt=""
          />
          <h2>Music</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
