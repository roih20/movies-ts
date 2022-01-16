import mongoose from 'mongoose'

const moviesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }, 
    release: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    elenco: {
        type: [String],
        required: true
    },
    image: {
        type: String
    }
})

const Movies = mongoose.model('Movies', moviesSchema)

export default Movies;