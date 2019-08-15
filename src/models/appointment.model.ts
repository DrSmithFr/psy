export class AppointmentModel {
  public id: number;
  public date: Date;
  public title: string;
  public description: string;
  public city: string;
  public address: string;
  public report: string;
  public createdAt: Date = new Date();
}
