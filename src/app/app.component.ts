import { Component } from '@angular/core';
import { LoaderService } from './Components/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-time-app';

  constructor(
    public loaderService: LoaderService
    ) { }
}

