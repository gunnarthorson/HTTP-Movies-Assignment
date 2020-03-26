import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = props => {
    const [addMovie, setAddMovie] = useState({
        title: '',
        director: '',
        metascore: '',
        stars: ''
    })

    const handleChange = e => {
        setAddMovie({
            ...addMovie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(`http://localhost:5000/api/movies`, addMovie)
        .then(res => {
            props.history.push('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1 className='title'>Add Movie Info</h1>
          <div className='addMovie'>
            <input
              name='title'
              placeholder='Title'
              value={addMovie.title}
              onChange={handleChange}
            />
            <input
              name='director'
              placeholder='Director'
              value={addMovie.director}
              onChange={handleChange}
            />
            <input
              name='metascore'
              placeholder='Metascore'
              value={addMovie.metascore}
              onChange={handleChange}
            />
            <input
              name='stars'
              placeholder='Stars'
              value={addMovie.stars}
              onChange={handleChange}
            />
            <button>Submit!</button>
          </div>
          <h1 className='title'>Card Preview</h1>
          <div className='cardPreview'>
            <h1>Title:{addMovie.title}</h1>
            <p>Director:{addMovie.director}</p>
            <p>Metascore:{addMovie.metascore}</p>
            <p>Actors:{addMovie.stars}</p>
          </div>
        </form>
      );
    };
    
    export default AddMovie;