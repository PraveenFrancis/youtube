import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const latestVideos = useSelector((store) => store.videos.videos);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (latestVideos.length) {
      setVideos(latestVideos);
    } else {
      getVideos();
    }
  }, [latestVideos]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos.length) return;
  // console.log(videos);

  return (
    <div className="flex flex-wrap justify-around px-10">
      {videos.map((video) => (
        <Link key={video.etag} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
