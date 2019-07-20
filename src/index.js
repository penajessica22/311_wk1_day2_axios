// import axios here
const axios = require("axios");
const api_key = require("../config");
// Please note that it is normally not considered best practice to commit
// api keys to github as it presents a security risk. It is done here only
// for practice purposes as we are sharing the same account

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}`;
  // code here

  axios.get(url).then(function(response) {
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error);
    });
  return axios(url).then(response => response);
};
discoverMovie()

const getMovieById = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key.API_KEY}`;
  return axios(url).then(response => response.data);
  // axios.get(url).then(function(result) {
  //   return result.data.id
  // })
};
getMovieById(500);

const getMovieByIdFailure = () => {
  const fakeId = 5783 
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key.API_KEY}`
  // code here
  return axios(url).then(response => response.status)
  .catch(err => err.response.status)
  
  };


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
};
