import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStateModel } from '../../models/task-state-model';
import { Chart, ChartData, ChartOptions, ArcElement, PieController, Tooltip, Legend } from 'chart.js';

// Rejestracja kontrolerów i elementów
Chart.register(PieController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements AfterViewInit {
  @Input() statistics: Observable<TaskStateModel[]> | undefined;
  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLCanvasElement>;
  private pieChart!: Chart<'pie'>;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.statistics) {
      this.statistics.subscribe((stats) => {
        const labels = stats.map((stat) => stat.name).filter((label): label is string => label !== undefined);
        const data = stats.map((stat) => stat.amount || 0);
        const backgroundColor = stats.map((stat) => stat.color || 'gray');

        this.createPieChart(labels, data, backgroundColor);
      });
    }
  }

  private createPieChart(labels: string[], data: number[], backgroundColor: string[]): void {
    const ctx = this.pieChartRef.nativeElement.getContext('2d');
    if (ctx) {
      this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: backgroundColor,
          }]
        },
        options: {
          responsive: true,
        } as ChartOptions<'pie'>
      });
    }
  }
}
