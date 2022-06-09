var numberOfFilms = +prompt('Сколько фильмов вы ужек посмотрели?', '');
var personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
var
    a = prompt('Один из последних фильмов?'),
    b = prompt('Ваша оценка?'),
    c = prompt('Один из последних фильмов?'),
    d = prompt('Ваша оценка?');

personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;
console.log(personalMoveDB);