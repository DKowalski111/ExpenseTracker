export default class Expense{
  id:number;
  amount:number;
  date:string;
  category:string;
  constructor(id:number, amount:number, date:string, category:string){
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.category = category;
  }
}