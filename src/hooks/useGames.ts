import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
    metacritic: number;
  }

const useGames = (gameQuery: GameQuery) => {
  const {data, error, isLoading} =  
      useData<Game>(
        '/games', 
        {
          params: {
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder
          }
        }, 
        [gameQuery]
      )
  return {data, error, isLoading}
}

export default useGames;