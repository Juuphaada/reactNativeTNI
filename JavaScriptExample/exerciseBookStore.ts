type Book = {
    name: string,
    gare: string,
    price: number,
}

let books : Book[] = [
    {name:'Coffer Maker',gare:"fiction",price:302},
    {name:' Maker',gare:"educational",price:100},
    {name:'Coffer ',gare:"fiction",price:250},
    {name:'Coffierr ',gare:"educational",price:400},
]
    
function filterBook(books:Book[]):Book[]{
    let filter_book = books.filter(book=>book.gare=="fiction"&&book.price>300);
    return filter_book.map(filter_book=>({...filter_book,price:filter_book.price*(1-0.1)}));
}
/*
function Book(books:Book[]):Book[]{
    return books.filter(book=>book.gare=="fiction"&&book.price>300);
}
    */

console.log(filterBook(books));