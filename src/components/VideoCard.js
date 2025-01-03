import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  let currentTime = new Date();
  let postedAt = new Date(publishedAt);

  let daysAgo = Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24));

  const days = (daysAgo) => {
    if (daysAgo < 30) {
      return daysAgo + " day";
    } else if (daysAgo > 30) {
      return Math.floor(daysAgo / 30) + " month";
    } else if (daysAgo > 365) {
      return Math.floor(daysAgo / 365) + " year";
    }
  };
  return (
    <div className="py-3 pt-8 w-[22rem] shadow-md rounded-lg">
      <img src={thumbnails.medium.url} alt="" className="rounded-lg w-[22rem]"  />
      <div className="p-2 ">
        <h2
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "3em", // Adjust based on your line height
            lineHeight: "1.5em", // Set your desired line height
          }}
        >
          {title}
        </h2>
        <h3>{channelTitle}</h3>
        <div className="flex items-center">
          <span>
            {statistics
              ? (statistics.viewCount / 1000000).toFixed(1) + "M views"
              : null}
          </span>
          <GoDotFill className="text-black mt-1 mx-1 text-[0.5rem]" />
          <span>{days(daysAgo) + " ago"}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
