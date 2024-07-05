import React from 'react';
import { Link, useParams } from 'react-router-dom';
const movies = [
  { id: 1, name: 'Movie 1', description: 'Kalki 2898 – A.D is an Indian epic mythological-science fiction dystopian film written and directed by Nag Ashwin and produced by C. Aswani Dutt of Vyjayanthi Movies. The film stars an ensemble cast featuring Prabhas, Amitabh Bachchan, Kamal Haasan, Deepika Padukone, and Disha Patani.', image: '/images/movie1.jpg' },
  { id: 2, name: 'Movie 2', description: 'Description 2', image: '/images/movie2.jpg' },
];
function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
}
export default MovieDetails;
