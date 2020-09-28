import axios from 'axios';

const KEY = "AIzaSyD9Vz-gspQsMjGgxBCu8xSfon_c7-GaQs4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});