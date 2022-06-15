import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {observable, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categs: string[] = ['Mechanical', 'Automatic'];
  subCategs: string[] = ['HVAC Fans', 'Air Conditioner'];
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable<Array<string>>();


  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    
  }

}
