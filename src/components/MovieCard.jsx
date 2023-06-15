import "./MovieCard/MovieCard.css"
export const MovieCard = ({movie}) => {

    const{name,imdb_rating,genre,duration,img_link} = movie;

    return (
        <div className="w-72 bg-slate-600 rounded-md ">
            <div className="card-img-container w-full h-[320px]">
                <img className="w-full h-full object-contain container mx-auto" src={img_link} alt="movie-card"/>
            </div>
            <div className="bg-slate-600 flex flex-col gap-y-2 p-4">
            <div>
                <span className="title">{name}</span>
            </div>
            <div>
                <span className="genre">{genre}</span>
            </div>
            <div className="flex justify-between">
                <span>Rating: {imdb_rating}</span>
                <span>{duration} mins</span>
            </div>

            </div>
            
        </div>
    )
}