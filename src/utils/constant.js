export const API_KEY = 'AIzaSyDAqLcC8TLLml4uMc__HecfFFrcVo2dYxc';

export let YoutubeVideosAPI = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=IN&q=sports|culture|movies|songs&ports&key=' + API_KEY;

export const YoutubeSearchSuggestionAPI = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='