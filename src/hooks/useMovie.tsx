import { useState, useEffect } from 'react';
import { MovieFull,CreditsResponse,Cast} from "../interfaces";
import { api } from '../api/index';



interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull
    cast: Cast[]
}

export const useMovie = (id: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetail = async () => {
        const movieDetailsPromise =  api.get<MovieFull>(`/${id}`);
        const castPromise =  api.get<CreditsResponse>(`/${id}/credits`);
        const [movieDetailsResp,castPromiseResp] = await Promise.all([movieDetailsPromise,castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetail();
    }, [])

    return {
       ... state
    }
}
