import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
})
export class CryptoComponent implements OnInit {
  usdValue: string;
  rubValue: string;
  eurValue: string;
  active_cryptocurrencies: number;
  active_exchanges: number;
  active_market_pairs: number;
  total_cryptocurrencies: number;
  total_exchanges: number;
  last_updated: string;
  getCryptoInfo;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      console.log(
        '[CryptoComponent] - You are already logged in! Your token = ' +
          localStorage.getItem('token')
      );
    } else {
      console.log('[CryptoComponent] - You are NOT logged! Please login!');
      this.router.navigate(['/forbidden']);
    }
  }

  usdToBtc() {
    this.http
      .get<any>(
        'https://blockchain.info/tobtc?currency=USD&value=' + this.usdValue
      )
      .subscribe((data) => {
        return (this.usdValue = data);
      });
  }

  rubToBtc() {
    this.http
      .get<any>(
        'https://blockchain.info/tobtc?currency=RUB&value=' + this.rubValue
      )
      .subscribe((data) => {
        this.rubValue = data;
      });
  }

  eurToBtc() {
    this.http
      .get<any>(
        'https://blockchain.info/tobtc?currency=EUR&value=' + this.eurValue
      )
      .subscribe((data) => {
        this.eurValue = data;
      });
  }

  getCryproInfo() {
    this.http
      .get<any>(
        'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=ff3b5997-df21-4c28-a187-a07171a2b8dd'
      )
      .subscribe((data) => {
        this.active_cryptocurrencies = data.data.active_cryptocurrencies;
        this.active_exchanges = data.data.active_exchanges;
        this.active_market_pairs = data.data.active_market_pairs;
        this.total_cryptocurrencies = data.data.total_cryptocurrencies;
        this.total_exchanges = data.data.total_exchanges;
        this.last_updated = data.data.last_updated;
      });
    document.getElementById('infoBlocks').style.display = 'block';
  }
}
