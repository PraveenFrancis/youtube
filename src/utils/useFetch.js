import React, { useCallback, useEffect, useState } from "react";
import { SEARCH_API } from "./constants";
import { useDispatch } from "react-redux";
import { getVideos } from "./videoList";

const useFetch = ( searchQuery ) => {
  const dispatch = useDispatch();

  const fetchVideos = useCallback(async (searchQuery) => {
    if (!searchQuery) return;

    try {
      const updatedUrl = SEARCH_API.replace(
        "YOURKEYWORD",
        encodeURIComponent(searchQuery)
      );
      const data = await fetch(updatedUrl);
      const json = await data.json();

      // Dispatch the fetched data to the Redux store
      dispatch(getVideos(json.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  // Return the fetch function so it can be called manually
  return fetchVideos;
};

export default useFetch;
