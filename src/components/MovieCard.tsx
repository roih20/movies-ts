import { IMovies } from "../interface"

interface ICardProps {
    movie: IMovies
    viewMovie: (id: string) => void
}

const MovieCard = ({movie, viewMovie} : ICardProps) => {
         return(
             <>
                <div className="bg-white rounded-lg shadow-lg max-w-xs md:max-w-md w-full h-60 relative overflow-hidden lg:max-w-lg">
                    <img src={movie.image} alt={movie.name} className="h-60 rounded-lg  w-full"/>
                    <div className="flex flex-col absolute bottom-0 right-0">
                    <div className="self-end mb-4 mr-4">
                        <button type="button" className="bg-red-500 px-3 py-2 rounded-md text-white font-medium" onClick={() => viewMovie(movie._id)}>View Movie</button>
                    </div>
                    </div>
                </div> 
             </>
         )
}



export default MovieCard