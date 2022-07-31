const numberOFFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personaMuvieDB = {
	count: numberOFFilms,
	muvies: {},
	actors: {},
	genres: {},
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из просмотренніх фильмов?', ''),
		b = prompt('На сколько оцените его', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personaMuvieDB.muvies[a] = b;
	} else {
		console.log('error');
		i--;
	}
}
// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из просмотренніх фильмов?', ''),
// 		b = prompt('На сколько оцените его', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personaMuvieDB.muvies[a] = b;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++
// }
// let i = 0;
// do {
// 	const a = prompt('Один из просмотренніх фильмов?', ''),
// 		b = prompt('На сколько оцените его', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personaMuvieDB.muvies[a] = b;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++
// } while (i < 2);

if (personaMuvieDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов');
} else if (personaMuvieDB.count >= 10 && personaMuvieDB.count < 30) {
	console.log('Вы класический зритель');
} else if (personaMuvieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}
console.log(personaMuvieDB);
