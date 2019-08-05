export class OverviewModel {
  public mood: number;
  public note: string;
  public feelings: Array<string> = [];
  public events: Array<string> = [];
  public createdAt: Date = new Date();

  constructor() {
    this.mood = 5;
  }

  addFeeling(value: string): void {
    this.feelings.push(value);
  }

  removeFeeling(value: string): void {
    this.feelings = this.feelings.filter(s => s !== value);
  }

  hasFeeling(value: string): boolean {
    return this.feelings.indexOf(value) !== -1;
  }

  toggleFeeling(value: string): void {
    if (this.hasFeeling(value)) {
      this.removeFeeling(value);
    } else {
      this.addFeeling(value);
    }
  }
}
