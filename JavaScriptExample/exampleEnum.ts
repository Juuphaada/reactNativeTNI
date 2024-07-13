// กำหนดตัวแปรประเภท enum
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Cancelled = "Cancelled"
}

//สร้างฟังก์ชัน
function displayOrderStatus(status: OrderStatus): void{
    switch (status) {
        case OrderStatus.Pending:
            console.log("your order is pending");
            break;
        case OrderStatus.Shipped:
            console.log("your order has been shipped");
            break;
        case OrderStatus.Cancelled:
            console.log("your order has been cancelled");
            break;
        default:
            console.log("Unknow order status");
        // alt + shift + f จัดcode 
    }
}//end function

//Testing the function
displayOrderStatus(OrderStatus.Shipped)
displayOrderStatus(OrderStatus.Cancelled)

