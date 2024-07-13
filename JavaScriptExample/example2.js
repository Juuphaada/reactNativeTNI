//สร้างและเข้าถึง array
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30
// การใช้งาน loop ร่วมกับ array
var names = ['Alice', 'Bob', 'Charlie'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
var fruites = ["Apple", "Banana"];
fruites.push("Cherry");
console.log(fruites);
fruites.pop();
console.log(fruites);
