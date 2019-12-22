import axios from 'axios';
const baseUrl = 'http://www.omdbapi.com/?apikey=6f9d09bf';
export const apiCall=(url,data,headers,method)=> axios({
    method,
    url :baseUrl + url,
    data,
    headers

});