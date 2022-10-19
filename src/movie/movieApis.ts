
export function getMovies(): string[] {
    let movies: string[] = []
    fetch("http://localhost:8000/api/v1/movies")
        .then((res) => res.json())
        .then((data) => movies = data)
    return movies
}



