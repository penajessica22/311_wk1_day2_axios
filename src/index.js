// import axios here
const axios = require('axios');
const api_key = require('../config')
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account


const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}`
  // code here
  
    axios.get(url).then(function(response) {
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
    return axios(url).then(response => response)
  }
  discoverMovie()

//   axios.get(url)
//   .then(function(response){
//     return axios.get(url + response.data.results);
//   })
//   .catch(function(error){
//     return (error);
//   })
//   .finally(function(){
//   })
// }
// discoverMovie()

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key.API_KEY}`
  // code here
  axios.get(url).then(function(data) {
    // params: {
    //   ID: 500
    // }
    
    // console.log(response.data)
    // return axios(url).then(original_title => original_title)
    
  })
  console.log(id)
  // .catch(function(error){
  //   return error
  // })
  // axios.get(url, {
  //   params: {
  //     ID: 500
  //   }
    // .then(function(response){
    //   return response.data.original_title
    // })
    // .catch(function(error){
    //   return error
    // })
    // .finally(function(){
    // })
}
getMovieById(500)

// const getMovieByIdFailure = () => {
//   const fakeId = 1 // FAKE ID HERE
//   const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key.API_KEY}`
//   // code here
// }



module.exports = {
  discoverMovie,
  getMovieById,
  // getMovieByIdFailure
}