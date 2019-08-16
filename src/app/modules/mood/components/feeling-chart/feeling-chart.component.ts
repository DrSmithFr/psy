import {Component, Input, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

// Importing themes
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {OverviewModel} from '../../../../../models/overview.model';
import {OverviewService} from '../../../../services/overview.service';
import {MoodChartService} from '../../../../services/mood-chart.service';

@Component(
  {
    selector:    'app-feeling-chart',
    templateUrl: './feeling-chart.component.html',
    styleUrls:   ['./feeling-chart.component.scss']
  }
)
export class FeelingChartComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  private chart: am4charts.SlicedChart;

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

    const overviews = this.service.getOverviewOfTheWeek(this.overviews);
    const feelings  = this.stats.getFeelings(overviews);

    const data = [];

    feelings.forEach((count: number, feel: string) => {
      data.push(
        {
          name:  feel,
          value: count
        }
      );
    });

    data.sort((a, b) => {
      return b.value - a.value;
    });

    if (data.length === 0) {
      data.push(
        {
          name: 'undefined',
          value: 1
        }
      );
    }

    this.chart.data = data;
  }

  instanciateChart() {
    function am4themes_myTheme(target) {
      if (target instanceof am4core.ColorSet) {
        target.list = [
          am4core.color('#85d6cd'),
          am4core.color('#94c1d7'),
          am4core.color('#857ed0'),
          am4core.color('#ad8cc2'),
          am4core.color('#c582c1'),
          am4core.color('#cb8291'),
          am4core.color('#ce9483'),
          am4core.color('#cfae78'),
          am4core.color('#d1cb78'),
          am4core.color('#acce7a'),
          am4core.color('#76c178'),
        ];

        target.minLightness = 0.2;
        target.maxLightness = 0.7;
        target.reuse = true;
      }
    }

    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme);

    // tslint:disable-next-line:max-line-length
    const iconPath = 'M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z';

    const chart                          = am4core.create('mood-chart', am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [];

    const series               = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value    = 'value';
    series.dataFields.category = 'name';
    series.alignLabels         = true;

    series.maskSprite.path          = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0.5;

    series.labelsContainer.width = 150;

    this.chart = chart;
  }

}
