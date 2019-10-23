export class MedsModel {
  public id: number;

  public name: string;
  public note: string;

  public onDemande: boolean;
  public count: number;

  public hour: number;
  public minute: number;

  public sunday: boolean;
  public monday: boolean;
  public tuesday: boolean;
  public wednesday: boolean;
  public thursday: boolean;
  public friday: boolean;
  public saturday: boolean;

  constructor() {
    this.count  = 0;
    this.hour   = 0;
    this.minute = 0;
  }
}
