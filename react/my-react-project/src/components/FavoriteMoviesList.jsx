import React, { useState } from 'react'

const FavoriteMoviesList = () => {
    
    const [movies,setMovies] = useState([
        { title: "Titanic", year: 1997, watched: true },
        { title: "Avengers", year: 2012, watched: true },
        { title: "Inception", year: 2010, watched: true },
        { title: "Interstellar", year: 2014, watched: false },
        { title: "The Dark Knight", year: 2008, watched: true },
        { title: "Joker", year: 2019, watched: false },
        { title: "Parasite", year: 2019, watched: false },
        { title: "Avatar", year: 2009, watched: false }
    ])

    const [formData,setFormData] = useState({
         title: "", year: "", watched: false 
    })

    const handlerFormData = (e) =>{
         const {name,type,value,checked} = e.target
         setFormData({...formData,
            [name]: type==="checkbox" ? checked : value
         })
    }
  
    const toggleWatched = (index) => {
        setMovies(prev =>
           prev.map(
               (movie,i) => 
                index === i ? {...movie,watched: !movie.watched} : movie
           )
        )
    }

    const handleAddMovie = (e) =>{
        e.preventDefault()
        setMovies([...movies,formData])
        setFormData({title:"",year:"",watched:false})
    }
  
    return (
    <>
       <h1>Favorite Movies List</h1>
       <ul>
        {movies.map(
            (movie,index) => 
                (<li key={index}>Title: {movie.title} - {movie.year}
                        <input type="checkbox" name="isWatched" checked={movie.watched} onChange={() => toggleWatched(index)}/>
                </li>)
        )}
       </ul>
       <form onSubmit={handleAddMovie}>
            <label htmlFor="title">
                Title:
            </label>
            <input type="text" name="title" value={formData.title} onChange={(e) => handlerFormData(e)}/>
            <label htmlFor="year">
                Year:
            </label>
            <input type="text" name="year" value={formData.year} onChange={(e) => handlerFormData(e)}/>
            <label htmlFor="watched">
                Watched:
            </label>
            <input type="checkbox" name="watched" value={formData.watched} onChange={(e) => handlerFormData(e)}/>
            <button type='submit'>Add New Movie</button>
       </form>
    </>
  )
}

export default FavoriteMoviesList