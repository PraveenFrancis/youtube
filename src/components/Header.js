import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API, YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { setSuggestions } from "../utils/searchSlice";
import { getVideos } from "../utils/videoList";
import useFetch from "../utils/useFetch";

const Header = () => {
  const dispatch = useDispatch();
  const catchSuggestions = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // useFetch(searchQuery);
  const fetchVideos = useFetch();


  useEffect(() => {
    const timer = setTimeout(() => {
      if (catchSuggestions[searchQuery]) {
        setSuggestion(catchSuggestions[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      setSuggestions({
        [searchQuery]: json[1],
      })
    );
  };

  const handleHambergerMenu = (e) => {
    dispatch(toggleMenu());
  };
  const handleSuggestionClick = (item) => {
    setSearchQuery(item? item : searchQuery);
    // useFetch(searchQuery)
    // callFetch()
    fetchVideos(item? item : searchQuery);
    setShowSuggestions(false); // Hide suggestions after selecting one
  };
  // const getSearchedContentS = async () =>{
  //   // const url = SEARCH_API
  //   const updatedUrl = SEARCH_API.replace('YOURKEYWORD', encodeURIComponent(searchQuery));
  //   const data = await fetch(updatedUrl);
  //   const json = await data.json()
  //   console.log(json, 'list');
  //   dispatch(getVideos(json.items))
    
  // }
  return (
    <div className="flex justify-between  items-center shadow-lg fixed w-full bg-white z-10">
      <div className="flex items-center p-1 m-2 gap-6 ">
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          onClick={handleHambergerMenu}
          alt=""
        />
        <img
          className="h-14"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-center relative">
        <div className="flex flex-1 justify-center">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 flex-[.5] px-4 border rounded-l-full border-gray-400  border-spacing-2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
          <button className="border p-2 border-gray-400 bg-gray-100 rounded-r-full" onClick={() => handleSuggestionClick()}>
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-full left-80 p-4 w-[47%] rounded-lg bg-white shadow-lg border-gray-100">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  onMouseDown={() => handleSuggestionClick(item)}
                  className="hover:bg-gray-100 p-2 px-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
