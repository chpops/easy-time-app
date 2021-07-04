import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent implements OnInit {
  usdValue: string;
  rubValue: string;
  eurValue: string;
  lastValues: string;
  getCryptoInfo;

  constructor(private http: HttpClient) {}
   
  ngOnInit() {
         
  }

  usdToBtc(){
    this.http.get<any>('https://blockchain.info/tobtc?currency=USD&value='+this.usdValue).subscribe(data => {
      this.usdValue = data;
    }) 
  }

  rubToBtc(){
    this.http.get<any>('https://blockchain.info/tobtc?currency=RUB&value='+this.rubValue).subscribe(data => {
      this.rubValue = data;
    }) 
  }

  eurToBtc(){
    this.http.get<any>('https://blockchain.info/tobtc?currency=EUR&value='+this.eurValue).subscribe(data => {
      this.eurValue = data;
    }) 
  }

  getLast(){
    this.http.get<any>('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=ff3b5997-df21-4c28-a187-a07171a2b8dd').subscribe(data => {
      this.lastValues = data;
    })
  }
}