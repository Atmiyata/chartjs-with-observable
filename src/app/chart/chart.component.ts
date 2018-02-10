import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";


@Component({
  selector: 'chart-demo',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {

  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public myObservable$
  ngOnInit() {

    this.myObservable$ = Observable.interval(1000).subscribe(response => { this.randomize() })
    setTimeout(() => { this.myObservable$.unsubscribe() }, 10000)
  }
  //public barChartData:any[] = []
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {

    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}
