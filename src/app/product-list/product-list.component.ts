import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  startyear: null = null;
  endyear: null = null;

  categs: string[] = ['HVAC Fans'];
  subCategs: string[] = [];

  minairflow:  number = 2000 ;
  maxairflow: number = 10000 ;
  options: Options = {
    floor: 0,
    ceil: 10000,
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  minpower: number = 9.84;
  maxpower: number = 96.52;
  minsoundspeed: number = 20;
  maxsoundspeed: number = 80;
  mindiameter: number = 18;
  maxdiameter: number = 96;
  minheight: number = 18;
  maxheight: number = 96;
  options1: Options = {
    floor: 0,
    ceil: 100,
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  searchText: any;


  products= [{
    "id" : 1,
    "manufacturer": "Emerson",
    "series": "Luray Eco Series",
    "model": "CF860",
    "airflow" : "8500",
    "maxpower":"33",
    "sound" : "40",
    "diameter": "60",
    "pastselection":"Past specifications:10 firm / 1492 global"
  },
{"id" : 2,
"manufacturer": "Minka",
"series": "Aviation Series",
"model": "F853-RW",
"airflow" : "8500",
"maxpower":"25.92",
"sound" : "36",
"diameter": "60",
"pastselection":"Past specifications:8 firm / 1132 global"
},
{
  "id" : 3,
    "manufacturer": "Westinghouse",
    "series": "Industrial Ceiling Fan",
    "model": "78003",
    "airflow" : "6846",
    "maxpower":"60",
    "sound" : "48",
    "diameter": "56",
    "pastselection":"Past specifications:10 firm / 1492 global"
},
{
  "id" : 4,
    "manufacturer": "Big Ass",
    "series": "Haiku H Series",
    "model": "S3150-S0-BC-04-01-C-01",
    "airflow" : "5467",
    "maxpower":"21.14",
    "sound" : "35",
    "diameter": "60",
    "pastselection":"Past specifications: 0 firm / 1297 global"
}];

  constructor() { }

  ngOnInit(): void {
  }

  handleCheckbox(event: any, product: any) {
  }

  handleCompare() {
  }

  onSubmit() {
    
  }

  logout() {
    
  }

  onFilterClear() {


  }

  onFilterSubmit(){
    
  }

}
