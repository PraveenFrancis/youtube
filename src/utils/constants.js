const GOOGLE_API_KEY = "AIzaSyDl2U2g3kGhSPmB4ZhWe9pEkDfhdfgDAv8";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const NO_OF_COMMENTS = 20;

export const SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=" + GOOGLE_API_KEY