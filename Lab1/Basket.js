var prodcuts = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

class ProductLineItem {
 	
	constructor(product) {
		this.amount = 1;
		this.product = product;
	}
	
	 setAmount(quantity) {
		this.amount = quantity;
	 }
	
	
	
}


var basket = (function(){
	var a = []
	return {
		addProduct : function(productID){
			if(a[productID] == null) {
				if ( prodcuts[productID].inventory-1 >= 0) {
					a[productID] = new ProductLineItem(prodcuts[productID]);
					a[productID].product.inventory--;
				} else {
					alert("Немає продуктів на складі!");
				}
			} else {
				alert("Ви вже вибрали цей продукт");
			}
				
		},
		removeProduct : function(productID){
			prodcuts[productID].inventory = prodcuts[productID].inventory + a[productID].amount;
			delete a[productID];
		},
		updateProductQuantity : function(productID, quantity) {
			if ( a[productID].getProduct().inventory-quantity+ a[productID].getAmount() >= 0) {
				a[productID].product.inventory = a[productID].product.inventory - quantity + a[productID].amount;
				a[productID].setAmount(quantity);
			} else {
				alert("Немає продуктів на складі!");
			}
		},
		getTotalPrice : function(){
			var totalPrice = 0;
			a.forEach(function(item, i, arr) {
				if ( item != null) {
					totalPrice += item.product.price * item.amount;
				}
			});
			return totalPrice;
		}
	}
})();
