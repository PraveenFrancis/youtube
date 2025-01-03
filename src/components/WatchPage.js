import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeSidebar());
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDl2U2g3kGhSPmB4ZhWe9pEkDfhdfgDAv8&textFormat=plainText&part=snippet&videoId=" +
        searchParams.get("v") +
        "&maxResults=50"
    );
    const json = await data.json();
    console.log(json, "comments");
  };
  return (
    <div className="p-10 rounded-lg pl-20 flex w-full gap-10">
      <div className="flex flex-col rounded-lg">
        <iframe
          width="800"
          height="400"
          style={{ borderRadius: "15px", overflow: "hidden", border: "none" }}
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="w-[41%] mr-14">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
