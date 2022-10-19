import React, { useEffect, useState } from 'react'
import { getMovies } from './movieApis'

function Movie() {
    const [movies, setMovies] = useState<string[] | undefined>(undefined)
    useEffect(() => {
        setMovies(getMovies())
    }, [])
    return (
        <div>
            {movies}
        </div>
    )
}

export default Movie;