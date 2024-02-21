import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key :  'ae47593dc3e0cb32ce1e038a728791b6',
        language : 'ko-KR'
    }
})

export default instance;