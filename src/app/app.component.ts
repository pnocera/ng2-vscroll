import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx";
import { ListItem } from './domain/ListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  protected items: ListItem[];

  indices: any;

  constructor(private http: Http) { }

  ngOnInit(){
     this.http.get('assets/items.json')
            .map(response => response.json())
            .subscribe(data => this.items = data);
  }

}
