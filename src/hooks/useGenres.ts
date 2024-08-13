//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// THIS IMPLEMENTATION IS FOR GETTING GENRES FROM SERVER
// const useGenres = () => {
//     const {data, error, isLoading} =  useData<Genre>("/genres")
//     return {data, error, isLoading}
// }

// THIS IMPLEMETATION IS FOR READING GENRES FROM A STORED STATIC DATA
const useGenres = () => ({data: genres, error: null, isLoading: false} )

export default useGenres;
