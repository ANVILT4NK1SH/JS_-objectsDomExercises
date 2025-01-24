// Exercise 1:
const car = {
	make: "Ford",
	model: "Ranger",
	year: "1995",
	getInfo: function () {
		console.log(`The car is a ${this.year} ${this.make} ${this.model}`);
	},
};

car.getInfo();

//Exercise 2:
const student = {
	name: "Shawn",
	age: "39",
	grades: [99, 100, 80, 92, 75],
	calculateAverageGrade: function () {
		let total = 0;

		for (index = 0; index < this.grades.length; index++) {
			let currentIndex = grades[index];
			total += currentIndex;
		}
	},
};

//Exercise 3
const colorArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
const btn = document.getElementById("btn");
const bgColor = document.getElementById("bgColor");
let i = 1;
console.log(colorArray[Math.floor(Math.random() * 16)])
btn.addEventListener("click", function () {
  const hexCode = `#${colorArray[Math.floor(Math.random() * 16)]}${
		colorArray[Math.floor(Math.random() * 16)]
	}${colorArray[Math.floor(Math.random() * 16)]}${
		colorArray[Math.floor(Math.random() * 16)]
	}${colorArray[Math.floor(Math.random() * 16)]}${
		colorArray[Math.floor(Math.random() * 16)]
	}`;
  console.log(hexCode);
  bgColor.style.backgroundColor = hexCode
	// if (i === 0) {
	// 	bgColor.style.backgroundColor = "white";
	// 	i++;
	// } else if (i === 1) {
	// 	bgColor.style.backgroundColor = "red";
	// 	i++;
	// } else if (i === 2) {
	// 	bgColor.style.backgroundColor = "blue";
	// 	i++;
	// } else {
	// 	bgColor.style.backgroundColor = "yellow";
	// 	i = 0;
	// }
});

//Exercise 4
let changePara = document.getElementById('changePara');
const changePBtn = document.getElementById('changePBtn');

changePBtn.addEventListener("click", function(){
  
  changePara.textContent = "Hello!"

})

//Exercise 5
const addLiBtn = document.getElementById('addLiBtn');

addLiBtn.addEventListener("click", function () {
  const ul = document.querySelector('ul');
  const newItem = document.createElement('li');
  ul.appendChild(newItem);
  newItem.textContent = "Lorem ipsum";
})
