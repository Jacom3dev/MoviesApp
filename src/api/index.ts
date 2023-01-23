import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie";

export const api = axios.create({
    baseURL,
    params:{
        api_key: "22a2712722016e104d55fdaaeea138b2",
        language:"es-ES"
    }
});