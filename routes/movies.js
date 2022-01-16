import express from 'express'

const router = express.Router()

import {getMovies, getMoviesByid, postMovies, updateMovies , getActionMovies, getMoviesBySearch, getHorrorMovies, deleteMovies} from '../controllers/movies.controller.js'
import auth from '../middleware/auth.js'

router.get('/',auth, getMovies);
router.post('/',auth, postMovies);
router.get('/action',auth, getActionMovies);
router.get('/horror',auth, getHorrorMovies )
router.get('/search',auth,getMoviesBySearch);
router.delete('/:id',auth, deleteMovies);
router.patch('/:id',auth, updateMovies);
router.get('/:id',auth, getMoviesByid);



export default router;