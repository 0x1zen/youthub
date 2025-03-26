const YT_LOGO =
  "data:image/png;base64,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";
const HAM_ICON =
  "data:image/png;base64,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";
const USER_ICON =
  "data:image/png;base64,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";
const SEARCH_LOGO =
  "data:image/png;base64,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";
const DUMMY_SUBS =
  "data:image/jpeg;base64,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";
const API_KEY = "AIzaSyBIdGMX3TGzbrTNaYlEUG9zy4PdDv3ndi8";
const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const YOUTUBE_SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

const LIVE_CHAT_ICON = "https://yt4.ggpht.com/ytc/AIdro_meZQDvkVwIytlz05tUr4sKYRoxduo30MYm6fDWZDFwo5Dx5x44u4bpmQY2f_R4uW4yGQ=s64-c-k-c0x00ffffff-no-rj";

const OFFSET_LIVE_CHAT=5;
export {
  YT_LOGO,
  HAM_ICON,
  USER_ICON,
  SEARCH_LOGO,
  DUMMY_SUBS,
  YOUTUBE_API,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_RESULTS_API,
  LIVE_CHAT_ICON,
  OFFSET_LIVE_CHAT
};
