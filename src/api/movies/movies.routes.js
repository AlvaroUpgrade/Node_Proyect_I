const express = require("express");
const Movie = require("./movies.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movieToFind = await Movie.findById(id);
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json("No se encontró la pelicula");
  }
});

router.get("/findbytitle/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const movieToFind = await Movie.findOne({ title: title });
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json("No se encontró la pelicula");
  }
});

router.get("/findbygenre/:genre", async (req, res) => {
  try {
    const genre = req.params.genre;
    const movieToFind = await Movie.findOne({ genre: genre });
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json("No se encontró la pelicula");
  }
});

// router.get("/findbyyearGT2010", async (req, res) => {
//   try {
//     const movieToFind = await Movie.find({ year: { "$gt": 2010 } });
//     console.log(movieToFind);
//     return res.status(200).json(movieToFind);
//   } catch (error) {
//     return res
//       .status(500)
//       .json(
//         "No se ha podido realizar la consulta de las peliculas estrenadas a partir de 2010..."
//       );
//   }
// });

module.exports = router;
