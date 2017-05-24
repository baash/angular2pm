"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderListComponent = (function () {
    function OrderListComponent() {
        this.pageTitle = 'Orders List';
        this.orders = [{
                "orderId": 1234, "productCode": "GDN-0023", "shipDate": "March 18, 2016", "price": 32.99, "shipAddress": "879 gallon capacity rolling garden cart"
            }, { "orderId": 1235, "productCode": "TBX-0048", "shipDate": "May 21, 2016", "price": 8.9, "shipAddress": "234 Some St, Some State, Some Country" }];
    }
    return OrderListComponent;
}());
OrderListComponent = __decorate([
    core_1.Component({
        selector: 'pm-orders',
        moduleId: module.id,
        templateUrl: 'order-list.component.html'
    })
], OrderListComponent);
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map