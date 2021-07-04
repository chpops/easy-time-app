import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})

export class WeatherWidgetComponent implements OnInit {

  inputCity: string;
  defaultCity: string = 'Moscow';
  // TODO :: реализовать получение параметра "defaultCity"
  // TODO :: предварительно вытащив IP пользователя 
  // TODO :: и с помощью множества открытых api по IP получем неточное местоположение
  // TODO :: город используем как параметр "defaultCity"
  WeatherData: any;
  currentCity: string;

  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData(this.defaultCity);
  }

  onSubmit(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.inputCity+'&appid=373afb9fe7d2587cd3837754899bf7f1')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  getWeatherData(defaultCity){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+defaultCity+'&appid=373afb9fe7d2587cd3837754899bf7f1')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  } 

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
