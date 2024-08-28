import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStateModel } from '../../models/task-state-model';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements AfterViewInit, OnDestroy {
  @Input() statistics: Observable<TaskStateModel[]> | undefined;
  @ViewChild('chartDiv') chartDiv!: ElementRef<HTMLDivElement>;
  private chart!: am4charts.PieChart3D;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.statistics) {
      this.statistics.subscribe((stats) => {
        this.initializeChart();
        this.setChartData(stats);
        this.configureSeries();
        this.applyCustomStyling();
      });
    }
  }

  private initializeChart(): void {
    this.chart = am4core.create(this.chartDiv.nativeElement, am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  }

  private setChartData(stats: TaskStateModel[]): void {
    this.chart.data = stats.map((stat) => ({
      category: stat.name,
      value: stat.amount || 0,
      color: stat.color || 'gray',
    }));
  }

  private configureSeries(): void {
    const series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'category';
    series.slices.template.propertyFields.fill = 'color';
    series.slices.template.propertyFields.stroke = 'color';

    // Add black borders between slices
    series.slices.template.strokeWidth = 2;
    series.slices.template.strokeOpacity = 1;

    // Adjust the 3D depth and angle for more tilt
    this.chart.depth = 40; // Increase depth for more 3D effect
    this.chart.angle = 30; // Increase angle for more tilt

    // Add shadow to each slice
    let shadow = series.slices.template.filters.push(new am4core.DropShadowFilter());
    shadow.opacity = 0.5; // Set shadow opacity
    shadow.blur = 10; // Set blur radius
    shadow.dx = 5; // Horizontal shadow offset
    shadow.dy = 5; // Vertical shadow offset
  }

  private applyCustomStyling(): void {
    let series = this.chart.series.values[0] as am4charts.PieSeries3D;
    let label = series.labels.template;
    label.fontFamily =
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    label.fontSize = 30;
    label.fontWeight = '900';
    label.fill = am4core.color('#0dc91d');
    label.stroke = am4core.color('#000000');
    label.strokeWidth = 2;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
