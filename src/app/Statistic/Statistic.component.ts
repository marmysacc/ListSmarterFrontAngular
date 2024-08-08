import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { statisticModel } from '../models/statistic-model';

@Component({
  selector: 'app-Statistic',
  templateUrl: './Statistic.component.html',
  styleUrls: ['./Statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input('statistic') statistic: statisticModel = {} as statisticModel;
  
  constructor() { }
    

  ngOnInit() {
  }

}
