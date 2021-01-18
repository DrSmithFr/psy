import {AfterContentInit, Component, Input} from '@angular/core';
import {color, create, Image, LinearGradient} from '@amcharts/amcharts4/core';
import {DateAxis, LineSeries, ValueAxis, ValueAxisDataItem, XYChart} from '@amcharts/amcharts4/charts';
// Importing themes
import {OverviewModel} from '../../../../../models/overview.model';
import {OverviewService} from '../../../shared/services/overview.service';
import {MoodChartService} from '../../../shared/services/mood-chart.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

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
    this.loadWeeklyValues();
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

    // mood image legend
    const image            = new Image();
    image.horizontalCenter = 'right';
    image.width            = 20;
    image.height           = 20;
    image.verticalCenter   = 'middle';

    image.adapter.add('href', (href, target) => {
      const item  = target.dataItem as ValueAxisDataItem;
      const value = item.value + 5;

      if (value >= 0 && value <= 10) {
        return '/assets/mood-levels/' + value + '.svg';
      }

      return href;
    });

    valueAxis.dataItems.template.bullet = image;

    // creating series
    const series             = chart.series.push(new LineSeries());
    series.dataFields.dateX  = 'createdAt';
    series.dataFields.valueY = 'mood';
    series.tensionX          = 0.8;
    series.strokeWidth       = 2;

    series.strokeOpacity = 1;
    series.stroke        = color('#2f2f2f');
    series.strokeWidth   = 2;

    // maniac state
    const maniacRange         = valueAxis.createSeriesRange(series);
    maniacRange.contents.fill = maniacRange.contents.stroke;

    maniacRange.value    = 5;
    maniacRange.endValue = 3;

    const maniacGradient    = new LinearGradient();
    maniacGradient.rotation = 90;

    maniacGradient.addColor(color('#c96264'), 0.8);
    maniacGradient.addColor(color('#FFFFFF'), 0.8, 0.2);

    maniacRange.contents.fillOpacity = 1;
    maniacRange.contents.fill        = maniacGradient;

    maniacRange.contents.strokeOpacity = 1;
    maniacRange.contents.stroke        = color('#2f2f2f');
    maniacRange.contents.strokeWidth   = 2;

    // depressed state
    const depressedRange         = valueAxis.createSeriesRange(series);
    depressedRange.contents.fill = depressedRange.contents.stroke;

    depressedRange.value    = -3;
    depressedRange.endValue = -5;

    const depressedGradient    = new LinearGradient();
    depressedGradient.rotation = 180 + 90;

    depressedGradient.addColor(color('#2f2f2f'), 0.8);
    depressedGradient.addColor(color('#FFFFFF'), 0.8, 0.2);

    depressedRange.contents.fillOpacity = 1;
    depressedRange.contents.fill        = depressedGradient;

    depressedRange.contents.strokeOpacity = 1;
    depressedRange.contents.stroke        = color('#2f2f2f');
    depressedRange.contents.strokeWidth   = 2;
  }

  updateGraphValue(e: MatButtonToggleChange) {
    this.chart.dispose();
    this.instantiateChart();

    switch (e.value) {
      case 'weekly':
        this.loadWeeklyValues();
        break;
      case 'monthly':
        this.loadMonthlyValues();
        break;
      case 'yearly':
        this.loadYearlyValues();
        break;
    }
  }

  loadWeeklyValues() {
    this.chart.data = this
      .service
      .getOverviewOfTheWeek(this.overviews)
      .map(overview => {
        return {
          mood:      overview.mood - 5,
          createdAt: overview.createdAt
        };
      });
  }

  loadMonthlyValues() {
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

  loadYearlyValues() {
    this.chart.data = this
      .service
      .getOverviewOfTheYear(this.overviews)
      .map(overview => {
        return {
          mood:      overview.mood - 5,
          createdAt: overview.createdAt
        };
      });
  }
}
