const numberOFFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personaMuvieDB = {
	count: numberOFFilms,
	muvies: {},
	actors: {},
	genres: {},
	privat: false
};
const a = prompt('Один из просмотренніх фильмов?', ''),
	b = prompt('На сколько оцените его', ''),
	c = prompt('Один из последних просмотренніх фильмов?', ''),
	d = prompt('На сколько оцените его', '');

personaMuvieDB.muvies[a] = b;
personaMuvieDB.muvies[c] = d;

console.log(personaMuvieDB);
