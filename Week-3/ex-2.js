const famousMovieCar = {
  car: 'Lotus Esprit',
};

const logFamousMovieCar = function (movie, year) {
  console.log(`${this.car} from the movie ${movie} released in ${year}`);
};

logFamousMovieCar.call(famousMovieCar, 'The Spy Who Loved Me', 1977);

const famousMovieCar2 = {
  car: 'Toyota Supra',
};

// call method
logFamousMovieCar.call(famousMovieCar2, 'The Fast and The Furious', 2001);

// apply method
logFamousMovieCar.apply(famousMovieCar2, ['The Fast and The Furious', 2001]);

// bind method
const logMyFamousMovieCar = logFamousMovieCar.bind(
  famousMovieCar2,
  'The Fast and The Furious',
  2001
);
logMyFamousMovieCar();
