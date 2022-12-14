let api = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'"



async function fetchMovie(url, domelement, path) {
  let movieobject = fetch(url)
  let movieinfo = await movieobject.then(function(response) {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Failed To Retrieve")
    }
  }).then(function(data) {
    showmovie(data, domelement, path)
  }).catch(
    function(error) {
      return console.log(error)
    }
  )
  return  movieinfo
}


function showmovie(movie, domelement, path) {
  var elementselector = document.querySelector(domelement)
  for (var movies of movie.results) {
    let addimg = document.createElement("img")
    addimg.setAttribute("data-id", movies.id)
    addimg.src = 'https://image.tmdb.org/t/p/original' + movies[path]
    elementselector.appendChild(addimg)
  }

}


function getOriginals() {
  var url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovie(url, '.original__movies', 'poster_path')
}


function getTrendingNow() {
  var url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovie(url, '#trending', 'backdrop_path')
}

function getTopRated() {
  var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovie(url, '#top_rated', 'backdrop_path')
}

window.onload = function() {
  getOriginals()
  getTopRated()
  getTrendingNow()
}