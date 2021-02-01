import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount =1;
  from ='ZAR';
  to='USD';

  rates: {[key: string]: number};
  
  convert(): number{
    return this.amount * this.rates[this.to];
  }

  LoadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }


  getAllCurrencies(): string[]{
     return Object.keys(this.rates);
  }

  constructor(private service: ExchangeRatesService) { 
   

  }


  ngOnInit(): void {
    this.LoadRates();
  }

}
