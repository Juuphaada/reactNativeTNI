<<<<<<< HEAD
// กำหนด enum สำหรับสถานะสินค้า
enum ProductStatus {
    Available = "Available",
    OutOfStock = "Out of Stock",
    Discontinued= "Discontinued"
}

// กำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: any[]=[
    {name:"Lapptop", status:ProductStatus.Available,price:1200},
    {name:"Smartphone", status:ProductStatus.OutOfStock,price:700},
    {name:"Tablet", status:ProductStatus.Discontinued,price:300}
];

function displayProductDetails(productdetail:any[]){
    productdetail.forEach(product =>{
        console.log(`Product: ${product.name}, Status: ${product.status}, price: ${product.price}`)
    });
}

=======
// กำหนด enum สำหรับสถานะสินค้า
enum ProductStatus {
    Available = "Available",
    OutOfStock = "Out of Stock",
    Discontinued= "Discontinued"
}

// กำหนด array ของสินค้าใช้ชนิดข้อมูล any
let products: any[]=[
    {name:"Lapptop", status:ProductStatus.Available,price:1200},
    {name:"Smartphone", status:ProductStatus.OutOfStock,price:700},
    {name:"Tablet", status:ProductStatus.Discontinued,price:300}
];

function displayProductDetails(productdetail:any[]){
    productdetail.forEach(product =>{
        console.log(`Product: ${product.name}, Status: ${product.status}, price: ${product.price}`)
    });
}

>>>>>>> 9c395221106ee23d098a72b6bcc78fbcaf8ede49
displayProductDetails(products);