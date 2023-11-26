class AddExpenseRequest{
  amount:string;
  category:string;
  date:string;
  constructor(amount:string, category:string, date:string){
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}

export default AddExpenseRequest;