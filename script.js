(function () {
    "use strict";
    let numberOfFilms;


    start();
    writeYourGenres();
    rememberMyFilms();
    detectPersonalLevel();

    function start() {
        numberOfFilms = +prompt('Skoka filmov posmotrel?');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Skoka filmov posmotrel?');
        }
    }
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    showMyDB(personalMovieDB.privat);

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }


    function writeYourGenres() {
        for (let i = 0; i <= 2; i++) {
            personalMovieDB.genres[i] = prompt(`Nazovite vash lyubimiy ganr # ${i+1}`);
        }
    }



    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Posledniy prosmotrenniy film?'),
                b = prompt('Ocenka filma?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }



    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('malo filmov smotrel');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Klassika, ' + personalMovieDB.count + ' filmov');
        } else if (personalMovieDB.count >= 30) {
            console.log('pogulyat shodi, zadrot');
        } else {
            console.log('ERORR ERROR ERROR');
        }
    }

}());