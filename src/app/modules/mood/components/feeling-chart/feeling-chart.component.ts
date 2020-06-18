import {AfterContentInit, Component, Input} from '@angular/core';
import {color, create, LinearGradient} from '@amcharts/amcharts4/core';
import {DateAxis, LineSeries, ValueAxis, XYChart, XYChartScrollbar, XYCursor} from '@amcharts/amcharts4/charts';
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

  private chart: XYChart;

  constructor(
    private stats: OverviewService,
    private service: MoodChartService
  ) {
  }

  ngAfterContentInit(): void {
    this.instanciateChart();
    this.chart.data = this
      .service
      .getOverviewOfTheMonth(this.overviews)
      .map(overview => {
        return {
          mood:      overview.mood - 5,
          createdAt: overview.createdAt
        };
      });
  }

  instanciateChart() {
    const chart = this.chart = create('mood-chart', XYChart);

    chart.titles.template.fontSize   = 10;
    chart.titles.template.textAlign  = 'end';
    chart.titles.template.isMeasured = false;

    chart.padding(20, 5, 2, 5);

    const dateAxis                             = chart.xAxes.push(new DateAxis());
    dateAxis.renderer.grid.template.disabled   = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.startLocation                     = 0.5;
    dateAxis.endLocation                       = 0.7;
    dateAxis.cursorTooltipEnabled              = false;

    const valueAxis                             = chart.yAxes.push(new ValueAxis());
    // valueAxis.min                               = 0;
    valueAxis.renderer.grid.template.disabled   = true;
    valueAxis.renderer.baseGrid.disabled        = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled              = false;

    chart.cursor                = new XYCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.behavior       = 'none';

    const series             = chart.series.push(new LineSeries());
    series.dataFields.dateX  = 'createdAt';
    series.dataFields.valueY = 'mood';
    series.tensionX          = 0.8;
    series.strokeWidth       = 2;

    const positiveGradient    = new LinearGradient();
    positiveGradient.rotation = 90;

    positiveGradient.addColor(color('#c96264'), 0.8);
    positiveGradient.addColor(color('#FFFFFF'), 0.8, 0.3);

    series.fillOpacity = 1;
    series.fill        = positiveGradient;

    series.strokeOpacity = 1;
    series.stroke        = color('#cb5154');
    series.strokeWidth   = 2;

    const range         = valueAxis.createSeriesRange(series);
    range.contents.fill = range.contents.stroke;

    range.value    = -5;
    range.endValue = 0;

    const negativeGradient    = new LinearGradient();
    negativeGradient.rotation = 180 + 90;

    negativeGradient.addColor(color('#575757'), 0.8);
    negativeGradient.addColor(color('#FFFFFF'), 0.8, 0.3);

    range.contents.fillOpacity = 1;
    range.contents.fill        = negativeGradient;

    range.contents.strokeOpacity = 1;
    range.contents.stroke        = color('#2f2f2f');
    range.contents.strokeWidth   = 2;


// Add scrollbar
    const scrollbarX = new XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new XYCursor();
  }
}
