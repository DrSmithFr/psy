export class MedsModel {
  public id: number;
  public name: string;
  public count: number;
  public reminder: number | null;
  public takenAt: Date | null;
  public createdAt: Date = new Date();

  constructor() {
    this.count = 0;
  }
}
