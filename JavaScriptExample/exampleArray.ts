//สร้างและเข้าถึง array
let numbers : number[]=[10,20,30,40,50];
console.log(numbers[2]); //30

// การใช้งาน loop ร่วมกับ array
let names:string[]=['Alice','Bob','Charlie'];
for(let name of names){
    console.log(name);
}
/**
 * Alice
 * Bob
 * Charlie
*/

let fruites: string[] = ["Apple","Banana"];
fruites.push("Cherry");
console.log(fruites);// [ 'Apple', 'Banana', 'Cherry' ]
fruites.pop();
console.log(fruites);//[ 'Apple', 'Banana' ]


