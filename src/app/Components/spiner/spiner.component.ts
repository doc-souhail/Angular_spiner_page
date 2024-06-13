import { Component } from '@angular/core';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent {

  isLoading = false;

  showSpinner(loading: boolean): void {
    this.isLoading = loading;
  }
}
