import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';

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
    private renderer: Renderer2
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
          const text = this.renderer.createText('' + date.getDate());
          this.renderer.appendChild(elem, text);
          this.renderer.setAttribute(elem, 'data-date', '' + date.getTime());
        } else {
          this.renderer.setValue(elem, null);
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
    if (date.getMonth() === this.selected.getMonth()) {
      this.renderer.addClass(elem, 'selectable');
    } else {
      this.renderer.removeClass(elem, 'selectable');
    }

    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      this.renderer.addClass(elem, 'currentDay');
    } else {
      this.renderer.removeClass(elem, 'currentDay');
    }

    if (this.dates.indexOf(date.toDateString()) !== -1) {
      this.renderer.addClass(elem, 'has-event');
    } else {
      this.renderer.removeClass(elem, 'has-event');
    }
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
    const cell      = e.target as HTMLInputElement;
    const attribute = cell.attributes.getNamedItem('data-date');

    if (attribute) {
      const date = new Date(parseInt(attribute.value, 10));
      this.selection.emit(date);
    }
  }
}
