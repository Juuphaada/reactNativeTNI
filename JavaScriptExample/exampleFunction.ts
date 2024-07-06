type Product ={
    name :string;
    price : number;
    category: string;
}

let products : Product[] = [
    {name:'Coffer Maker',price:2500,category:'Appliances'},
    {name:' Maker',price:25000,category:'Appliances'},
    {name:'Coffer ',price:30000,category:'Appliances'},
]

function filterProductByPrice(products):Product[]{
    return products.filter(product => product.price>10000);
}

function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price*0.9})); // "..." copy array to return a new one
}

let filterProduct = filterProductByPrice(products);
let discountProducts = discountProduct(filterProduct);

//console.log(filterProduct);
console.log(discountProducts);

/*
interface Person{
    name:string;
    age:number;    
}

const people: Person[] =[
    {name:"John Lee", age:30},
    {name:"Marry Burner", age:25},
    {name:"Harry Kill", age:35}
]

function filterAdults(persons:Person[]):Person[]{
    return persons.filter(person=>person.age>=30);
}

const adults = filterAdults(people);
console.log(adults); //{ name: 'John Lee', age: 30 }, { name: 'Harry  Kill', age: 35 } ]
*/