import axios from "axios";

const KEY = "AIzaSyBvZmC7J3YiYA3mKp56PzK3nCUXadeW_Bo";

export default axios.create({

  baseURL: "https://www.googleapis.com/youtube/v3",  params: {    part: "snippet",    type: "video",    maxResults: 5,    key: KEY },

                            });
