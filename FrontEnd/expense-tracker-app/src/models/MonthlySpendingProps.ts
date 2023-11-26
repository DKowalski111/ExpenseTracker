class MonthlySpendingProps {
  monthlySpendingData: {
    [monthYear:string]: string;
  }
  constructor(monthlySpendingData: { [monthYear: string]: string }) {
    this.monthlySpendingData = monthlySpendingData;
  }
}

export default MonthlySpendingProps;