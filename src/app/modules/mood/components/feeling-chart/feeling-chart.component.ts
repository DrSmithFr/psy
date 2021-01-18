import {AfterContentInit, Component, Input} from '@angular/core';
import {color, create, Image, LinearGradient} from '@amcharts/amcharts4/core';
import {DateAxis, LineSeries, ValueAxis, ValueAxisDataItem, XYChart} from '@amcharts/amcharts4/charts';
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
    this.instantiateChart();
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

  instantiateChart() {
    const chart = this.chart = create('mood-chart', XYChart);

    chart.titles.template.fontSize   = 10;
    chart.titles.template.textAlign  = 'end';
    chart.titles.template.isMeasured = false;

    chart.padding(20, 5, 2, 20);

    const dateAxis                             = chart.xAxes.push(new DateAxis());
    dateAxis.renderer.grid.template.disabled   = true;
    dateAxis.renderer.labels.template.disabled = true;
    // dateAxis.startLocation                     = 0.5;
    dateAxis.endLocation                       = 0.7;
    dateAxis.cursorTooltipEnabled              = false;

    const valueAxis                             = chart.yAxes.push(new ValueAxis());
    valueAxis.renderer.grid.template.disabled   = false;
    valueAxis.renderer.baseGrid.disabled        = false;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled              = false;

    // ensure graph consistency without extreme values
    valueAxis.min          = -5;
    valueAxis.max          = 5;
    valueAxis.strictMinMax = true;

    const image            = new Image();
    image.horizontalCenter = 'right';
    image.width            = 20;
    image.height           = 20;
    image.verticalCenter   = 'middle';

    image.adapter.add('href', (href, target) => {
      const item  = target.dataItem as ValueAxisDataItem;
      const value = item.value + 5;
      return '/assets/mood-levels/' + value + '.svg';
    });

    valueAxis.dataItems.template.bullet = image;

    const series             = chart.series.push(new LineSeries());
    series.dataFields.dateX  = 'createdAt';
    series.dataFields.valueY = 'mood';
    series.tensionX          = 0.8;
    series.strokeWidth       = 2;

    const positiveGradient    = new LinearGradient();
    positiveGradient.rotation = 90;

    positiveGradient.addColor(color('#c96264'), 0.8);
    positiveGradient.addColor(color('#e8b465'), 0.8, 0.1);
    positiveGradient.addColor(color('#ffffff'), 0.8, 0.2);
    positiveGradient.addColor(color('#ffffff'), 0.8, 0.8);
    positiveGradient.addColor(color('#575757'), 0.8, 0.9);
    positiveGradient.addColor(color('#282828'), 0.8, 1);

    series.fillOpacity = 1;
    series.fill        = positiveGradient;

    series.strokeOpacity = 1;
    series.stroke        = color('#2f2f2f');
    series.strokeWidth   = 2;
  }
}
