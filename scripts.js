// plik scripts.js

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	}
	return a * h / 2
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
console.log( 'Pole pierwszego trójkąta ' + triangle1Area );

var triangle2Area = getTriangleArea(13, 0);
console.log( 'Pole drugiego trójkąta ' + triangle2Area );

var triangle3Area = getTriangleArea(100, 13.7);
console.log( 'Pole trzeciego trójkąta ' + triangle3Area );