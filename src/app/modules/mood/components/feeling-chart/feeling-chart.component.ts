import {Component, Input, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// Importing themes
import {OverviewModel} from '../../../../../models/overview.model';
import {OverviewService} from '../../../shared/services/overview.service';
import {MoodChartService} from '../../../shared/services/mood-chart.service';

@Component(
  {
    selector:    'app-feeling-chart',
    templateUrl: './feeling-chart.component.html',
    styleUrls:   ['./feeling-chart.component.scss']
  }
)
export class FeelingChartComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  private chart: am4charts.XYChart;

  constructor(
    private stats: OverviewService,
    private service: MoodChartService
  ) {
  }

  ngOnInit() {
    if (!this.overviews.length) {
      // avoid display errors
      return;
    }

    this.instanciateChart();
    this.chart.data = this.service.getOverviewOfTheWeek(this.overviews);
  }

  instanciateChart() {
    const chart = this.chart = am4core.create('mood-chart', am4charts.XYChart);

    // axis
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'mood';
    series.dataFields.dateX = 'createAt';
    series.name = name;

    // adding cursor
    chart.cursor = new am4charts.XYCursor();
  }

}
