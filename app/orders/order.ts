export class Order {
	constructor(
		public orderId	: number,
		public productCode : string,
		public shipDate	: string,
		public price	: number,
		public shipAddress : string){}
}