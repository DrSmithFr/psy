import {Component, EventEmitter, Input, OnInit, Output, Renderer} from '@angular/core';
import {number} from '@amcharts/amcharts4/core';

@Component(
  {
    selector:    'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls:   ['./calendar.component.scss']
  }
)
export class CalendarComponent implements OnInit {

  @Input() dates: string[];
  @Output() selection: EventEmitter<Date> = new EventEmitter<Date>();

  public selected: Date;

  constructor(
    private renderer: Renderer
  ) {
    this.selected = new Date();
  }

  ngOnInit() {
    this.renderCalendarCells();
  }

  renderCalendarCells() {
    const currentYear  = this.selected.getFullYear();
    const currentMonth = this.selected.getMonth();
    const date         = new Date(this.selected.getFullYear(), currentMonth, 1);

    date.setDate(date.getDate() - date.getDay());
    let displayDate = true;

    for (let row = 0; row <= 5; row++) {
      for (let column = 0; column <= 6; column++) {
        const elem = this.getCell(row, column);

        if (displayDate) {
          this.renderer.createText(elem, '' + date.getDate());
          this.renderer.setElementAttribute(elem, 'data-date', '' + date.getTime());
        } else {
          this.renderer.setText(elem, null);
        }

        this.onCellRender(date, elem);
        date.setDate(date.getDate() + 1);
      }

      if (date.getMonth() > currentMonth || date.getMonth() < currentMonth && date.getFullYear() > currentYear) {
        displayDate = false;
      }
    }
  }

  onCellRender(date: Date, elem: any): void {
    this.renderer.setElementClass(
      elem,
      'selectable',
      date.getMonth() === this.selected.getMonth()
    );

    const today = new Date();

    this.renderer.setElementClass(
      elem,
      'currentDay',
      date.toDateString() === today.toDateString()
    );

    this.renderer.setElementClass(
      elem,
      'has-event',
      this.dates.indexOf(date.toDateString()) !== -1
    );
  }

  getCell(row: number, column: number): any {
    return this.renderer.selectRootElement('[data-row="' + row + '"] [data-column="' + column + '"]');
  }

  previousMonth() {
    const currentMonth = this.selected.getMonth();
    this.selected      = new Date(this.selected.getFullYear(), currentMonth - 1, this.selected.getDate());
    this.renderCalendarCells();
  }

  nextMonth() {
    const currentMonth = this.selected.getMonth();
    this.selected      = new Date(this.selected.getFullYear(), currentMonth + 1, this.selected.getDate());
    this.renderCalendarCells();
  }

  isInDefault(): boolean {
    const today = new Date();

    return today.getMonth() === this.selected.getMonth() &&
           today.getFullYear() === this.selected.getFullYear();
  }

  reset(): void {
    this.selected = new Date();
    this.renderCalendarCells();
  }

  select(e: MouseEvent) {
    const cell      = e.toElement;
    const attribute = cell.attributes.getNamedItem('data-date');

    if (attribute) {
      const date = new Date(parseInt(attribute.value, 10));
      this.selection.emit(date);
    }
  }
}
