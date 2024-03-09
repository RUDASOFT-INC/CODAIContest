const s = 'aukks'
const skip = 'wbqd'
const index = 5

const formatString = (s, skip, index) => {
	let result = ''
	let a = [], b = []
	for (let i = 0; i < s.length; i++) {
		a.push(s[i].charCodeAt())
	}
	for (let i = 0; i < skip.length; i++) {
		b.push(skip[i].charCodeAt())
	}
	a.map((item) => {
		let newArr = []
		let i = 0
		while (newArr.length < index) {
			let num = item + i + 1
			if (num > 122) {
				num = 97 + num - 122 - 1
			}
			if (b.includes(num)) {
				newArr.unshift()
			} else {
				newArr.push(num)
			}
			i++
		}
		result += String.fromCharCode(newArr[index - 1])
	})
	return result
}

console.log(formatString(s, skip, index))
