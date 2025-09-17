let  dog:string = "woof";//type restrictions exist and will not compile if not fixed.
console.log(dog);

let number:number = 5;//infers the type
console.log(number);

let isMarried:boolean = false;
let wasMarried:boolean;

const getFullName = (fname: string, lname: string): string => {return `${fname}-${lname}`}

console.log(getFullName("Joe","Schmo"))
// console.log(getFullName(24,false))

let names:string[] = ["Joe","Schmo","Cody"];
let newNames: Array<string> = ["Joe","Schmo","Cody"];

console.log(names);
console.log(newNames);