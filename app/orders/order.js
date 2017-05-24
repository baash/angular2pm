"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = (function () {
    function Order(orderId, productCode, shipDate, price, shipAddress) {
        this.orderId = orderId;
        this.productCode = productCode;
        this.shipDate = shipDate;
        this.price = price;
        this.shipAddress = shipAddress;
    }
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map