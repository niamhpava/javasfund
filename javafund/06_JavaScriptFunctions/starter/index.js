const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

 /* function findMovie(movieTitle) {
  for (let mt of movies) {
    if (mt.title === movieTitle) {
      console.log(`${mt.title} is a film directed by ${mt.director} released in ${
          mt.year
        }`);
    }
    console.log(mt);
  }
  console.log(mt);
}

console.log(mt);

var mt = "Thor: Ragnorok";

console.log(mt);

findMovie("Star Wars");
findMovie(mt);
*/

// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
  for (let movie of movies) {
    if (movie.title === movieTitle) {
      return movie;
    } 
      console.log(movie);

    }

    return `Movie not found`;

  }

let myMovie = returnMovie("Avengers: Infinity War");

console.log(myMovie);

console.log("The movie is " + myMovie.title + ". It was directed by " + myMovie.director + " in " + myMovie.year + ".");

myOtherMovie = returnMovie("Thor: Ragnorok");

console.log(myOtherMovie);


function myMovieDetails(anyMovie) {
  if (typeof anyMovie === "object") {
    return `${anyMovie.title} is a film directed by ${
      anyMovie.director
    } released in ${anyMovie.year}`;
  } else {
    return anyMovie;
  }
  }

console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));