class TopInformationProps {
  topCategory: string;
  totalExpenses: string;
  thisMonthExpenses: string;
  monthTrend: string;

  constructor(topCategory: string, totalExpenses:string, thisMonthExpenses:string, monthTrend:string){
    this.topCategory = topCategory;
    this.totalExpenses = totalExpenses;
    this.thisMonthExpenses = thisMonthExpenses;
    this.monthTrend = monthTrend;
  }
}

export default TopInformationProps;