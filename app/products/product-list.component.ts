import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
        selector: 'pm-products',
        moduleId: module.id, 
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
})


export class ProductListComponent implements OnInit{
  
    pageTitle: string='Product List';
    showImage: boolean=false;
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 3,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];
    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }
    ngOnInit() : void
    {
        console.log('called init');
    }
    onRatingClick(message:string): void {
        this.pageTitle = 'Product list : '+message
    }
}
