import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<pm-products-header></pm-products-header><div><h1>Product Manager</h1>

    </div><pm-products></pm-products>
    <pm-orders></pm-orders>`
})
export class AppComponent { }