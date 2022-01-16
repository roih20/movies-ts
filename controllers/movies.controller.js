import mongoose from "mongoose";
import express from "express";
import MoviesModel from "../models/movies.model.js";

const router = express.Router();

export const getMovies = async (req, res) => {

  try {
    const movies = await MoviesModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ error: error });
  }
  
};

export const postMovies = async (req, res) => {
  const { name, description, gender, release, director, elenco, image } = req.body;
  
  if (!name.trim()) {
    return res.json({ message: "name is empty" });
  } else if (!description.trim()) {
    return res.json({ message: "description is empty" });
  } else if (!gender.trim()) {
    return res.json({ message: "gender is empty" });
  } else if (!release.trim()) {
    return res.json({ message: "release date is empty" });
  } else if (!director.trim()) {
    return res.json({ message: "director is empty" });
  } else if (elenco.length === 0) {
    return res.json({ message: "elenco is empty" });
  } else if (!image.trim()){
    return res.json({message: 'Image is empty'})
  }

  const movies = { name, description, gender, release, director, elenco, image };

  const newMovie = new MoviesModel(movies);

  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ error: error });
  }
};

export const deleteMovies = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id))
    return res.status(404).json({ message: `No movies with the id: ${id}` });

  await MoviesModel.findByIdAndRemove(id);

  res.json({ message: "Movie delete correctly" });
};

export const updateMovies = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id))
    return res.status(404).json({ message: `No movies with the id: ${id}` });

  const { name, description, gender, release, director, elenco } = req.body;

  if (!name.trim()) {
    return res.json({ message: "name is empty" });
  } else if (!description.trim()) {
    return res.json({ message: "description is empty" });
  } else if (!gender.trim()) {
    return res.json({ message: "gender is empty" });
  } else if (!release.trim()) {
    return res.json({ message: "release date is empty" });
  } else if (!director.trim()) {
    return res.json({ message: "director is empty" });
  } else if (elenco.length === 0) {
    return res.json({ message: "elenco is empty" });
  }

  const movie = {
    name,
    description,
    gender,
    release,
    director,
    elenco,
    _id: id,
  };

  await MoviesModel.findByIdAndUpdate(id, movie, { new: true });

  res.json({ message: "movie updated correctly", data: movie });
};

export const getActionMovies = async (req, res) => {
  try {
    const actionMovies = await MoviesModel.find({ gender: "Accion" });
    res.status(200).json(actionMovies);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const getMoviesByid = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.isValidObjectId(id)) 
    return res.status(404).json({message: `Not found the movie with the id: ${id}`})
   

  try {

     const movieByid = await MoviesModel.findById(id);
     res.status(200).json(movieByid);

  } catch (error) {
      res.status(404).json({error: error})
  }
}

export const getMoviesBySearch = async (req, res) => {
  const { searchQuery } = req.body;

  if (!searchQuery.trim()) {
    return res.status(500).json({ error: "Search field is empty" });
  }

  try {
    const movieName = new RegExp(searchQuery, "i");

    const movies = await MoviesModel.find({ $or: [{ name: movieName }] });

    res.status(200).json({ data: movies });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

export const getHorrorMovies = async (req, res) => {
  try {
    const horrorMovies = await MoviesModel.find({ gender: "Horror" });

    res.status(200).json(horrorMovies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default router;
