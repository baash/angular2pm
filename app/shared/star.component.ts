import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'pm-star',
	templateUrl: 'app/shared/star.component.html'
})

export class StarComponent implements OnChanges
{
	@Input() rating: number;
	starWidth: number;
	@Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();


	ngOnChanges(): void 
	{
		this.starWidth = this.rating * 86/5;
	} 	

	onClick(): void 
	{
		this.ratingClick.emit(`rating is $(this.rating)`); 
	}
}