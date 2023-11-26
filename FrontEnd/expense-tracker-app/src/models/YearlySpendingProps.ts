class YearlySpendingProps {
  yearlySpendingData: {
    [year:string]: string;
  }
  constructor(yearlySpendingData: { [year: string]: string }) {
    this.yearlySpendingData = yearlySpendingData;
  }
}

export default YearlySpendingProps;