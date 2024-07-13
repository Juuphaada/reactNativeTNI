var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var books = [
    { name: 'Coffer Maker', gare: "fiction", price: 302 },
    { name: ' Maker', gare: "educational", price: 100 },
    { name: 'Coffer ', gare: "fiction", price: 250 },
    { name: 'Coffierr ', gare: "educational", price: 400 },
];
function filterBook(books) {
    var filter_book = books.filter(function (book) { return book.gare == "fiction" && book.price > 300; });
    return filter_book.map(function (filter_book) { return (__assign(__assign({}, filter_book), { price: filter_book.price * (1 - 0.1) })); });
}
/*
function Book(books:Book[]):Book[]{
    return books.filter(book=>book.gare=="fiction"&&book.price>300);
}
    */
console.log(filterBook(books));
