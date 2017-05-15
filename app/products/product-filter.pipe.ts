import {PipeTranform,Pipe} from "@angular/core";
import {IProduct} from './product';

@Pipe({})
export class ProductFilterPipe implements PipeTranform{
	transform(value: IProduct[], filterBy:string):Iproduct[]{
	 return;
	}}