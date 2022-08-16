import axios from 'axios';

const KEY = 'AIzaSyDPqOrPGUEk8Jao3B4pKL3vJMCoA7rLoNo';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults : 10,
        type: 'video',
        key: KEY,
    }
});
