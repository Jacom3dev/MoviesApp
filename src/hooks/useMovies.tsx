import { useEffect, useState } from 'react'
import { api } from '../api'
import { IMovie,Movie } from '../interfaces'

interface IMoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming : Movie[]
}
export const useMovies = () => {
    const [moviesState, setMoviesState] = useState<IMoviesState>({
        nowPlaying:[],
        popular: [],
        topRated: [],
        upcoming: []
    });
    
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const nowPlayingPromise = api.get<IMovie>('/now_playing');
        const popularPromise = api.get<IMovie>('/popular');
        const toRatedPromise = api.get<IMovie>('/top_rated');
        const upcomingPromise = api.get<IMovie>('/upcoming');
      
       const response = await Promise.all([nowPlayingPromise,popularPromise,toRatedPromise,upcomingPromise]);
        setMoviesState({
            nowPlaying:response[0].data.results,
            popular:response[1].data.results,
            topRated:response[2].data.results,
            upcoming:response[3].data.results,
        })
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return {
        ... moviesState,
        isLoading
    }
}
