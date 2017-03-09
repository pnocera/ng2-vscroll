import { ObjectListItems } from './domain/ObjectListItems';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx";
import { ListItem } from './domain/ListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  protected items: ObjectListItems = new ObjectListItems();

  scrollItems: ListItem[] = [];

  indices: any;

  constructor(private http: Http) { }

  //at init time we only need the length
  ngOnInit() {
     this.http.get('assets/items.json')
            .map(response => response.json()).toPromise()
            .then(data => this.items.length = data.length);
  }

  //fired when scrolling
  onUpdate(event) {
    let start = event.start;
    let end = event.end;

    this.http.get('assets/items.json')
      .map(response => response.json()).toPromise()
      .then(data => this.scrollItems = data.slice(start, end));

  }

}
