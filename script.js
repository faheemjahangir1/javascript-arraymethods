//1 — Looping Through an Array
const numbers = [10,20,30,40];

//for loop
for(let i = 0; i < numbers.length ;i++){
    console.log(numbers[i]);
    };


//for each
numbers.forEach(num => console.log(num));


//for ... of
for(let num of numbers){
   console.log(num);
}


//for ... in 
for(let i in numbers){
    console.log(numbers[i]);
}




//2 — Loop Through an Object //Use for...in to print both key and value.
const student = {
    name: "bala",
    age: 21,
    grade: "A"
}

for(s in student){
    console.log(s,student[s]);
}




//  3 — Using map()
const marks = [50,60,70,80];

const result = marks.map(num => num - 10);

console.log(result);




// 4 — Using filter()
const marks = [5,12,8,25,3,15];

const total = marks.filter(mark => mark > 10);

console.log(total);




// 5 — Using reduce()
const marks = [5,10,15,20];

const total = marks.reduce((num,sum) => num + sum,0);

console.log(total);


