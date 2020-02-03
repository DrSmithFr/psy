import {AfterContentInit, Component, Input} from '@angular/core';
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
export class FeelingChartComponent implements AfterContentInit {

  @Input() overviews: OverviewModel[];

  private chart: am4charts.XYChart;

  constructor(
    private stats: OverviewService,
    private service: MoodChartService
  ) {
  }

  ngAfterContentInit(): void {
    this.instanciateChart();
    this.chart.data = this.service.getOverviewOfTheMonth(this.overviews);
  }

  instanciateChart() {
    const chart = this.chart = am4core.create('mood-chart', am4charts.XYChart);

    chart.titles.template.fontSize   = 10;
    chart.titles.template.textAlign  = 'end';
    chart.titles.template.isMeasured = false;

    chart.padding(20, 5, 2, 5);

    const dateAxis                             = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.disabled   = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.startLocation                     = 0.5;
    dateAxis.endLocation                       = 0.7;
    dateAxis.cursorTooltipEnabled              = false;

    const valueAxis                             = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min                               = 0;
    valueAxis.renderer.grid.template.disabled   = true;
    valueAxis.renderer.baseGrid.disabled        = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled              = false;

    chart.cursor                = new am4charts.XYCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.behavior       = 'none';

    const series             = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX  = 'createdAt';
    series.dataFields.valueY = 'mood';
    series.tensionX          = 0.8;
    series.strokeWidth       = 2;


// bullet is added because we add tooltip to a bullet for it to change color
    const bullet       = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = '{valueY}';

    bullet.adapter.add('fill', (fill, target) => {
      // @ts-ignore
      if (target.dataItem.valueY < 5) {
        return am4core.color('#cb5154');
      }

      return fill;
    });

    const range           = valueAxis.createSeriesRange(series);
    range.value           = 5;
    range.endValue        = 0;
    range.contents.stroke = am4core.color('#cb5154');
    range.contents.fill   = range.contents.stroke;

// Add scrollbar
    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();
  }
}
