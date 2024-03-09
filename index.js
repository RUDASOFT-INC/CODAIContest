let s = "aukks";
let skip = "wbqd";
let index = 5;

let newS = "";
let existArr;
let newC;
let i;
let idx = 0;
let upperLowerArr = [];

for (const c of s) {
	let tmp = c;
	if (c >= "A" && c <= "Z") {
		tmp = c.toLowerCase();
		upperLowerArr.push(true);
	} else {
		upperLowerArr.push(false);
	}
	existArr = [];
	i = 1;
	while (existArr.length < index) {
		let checkC = String.fromCharCode(c.charCodeAt(0) + i);
		if (checkC > "z") {
			checkC = String.fromCharCode("a".charCodeAt(0) + (checkC.charCodeAt(0) - "z".charCodeAt(0) - 1));
		}
		if (skip.indexOf(checkC) < 0) {
			existArr.push(checkC);
		}
		i++;
	}
	newC = existArr[existArr.length - 1];
	if (upperLowerArr[idx]) {
		newC = newC.toUpperCase();
	}
	newS += newC;
	idx++;
}

console.log(newS);
