import { useEffect, useState } from "react";
import MonthlyExpenseCategoryDistribution from "./components/CategoriesAmount";
import MonthlySpendingsAnalysis from "./components/MonthlySpendingsAnalysis";
import TopInformations from "./components/TopInformations";
import YearlyExpenseCategoryDistribution from "./components/YearlyExpenseCategoryDistribution";
import YearlySpendingsAnalysis from "./components/YearlySpendingsAnalysis";
import TopInformationProps from "../../models/TopInformationProps";
import MonthlySpendingProps from "../../models/MonthlySpendingProps";
import YearlySpendingProps from "../../models/YearlySpendingProps";
import CategoriesAmountProps from "../../models/CategoriesAmountProps";

const Analytics = () => {
  const [monthlySpending, setMonthlySpending] = useState<{ [category: string]: string } | undefined>();
  const [yearlySpending, setYearlySpending] = useState<{ [category: string]: string } | undefined>();
  const [topInformations, setTopInformations] = useState<TopInformationProps | undefined>(undefined);
  const [categoriesAmount, setCategoriesAmount] = useState<{ [category: string]: string }>();

  const fetchExpenses = async () => {
    try {
      const url = `${process.env.REACT_APP_API}/analytics`;
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const topInformationProps = new TopInformationProps(
        responseJson['top informations']['top category'],
        responseJson['top informations']['total expenses'],
        responseJson['top informations']['this month expenses'],
        responseJson['top informations']['month trend']
      );

      setTopInformations(topInformationProps);
      setMonthlySpending(responseJson['monthly spending']);
      setYearlySpending(responseJson['yearly spending']);
      setCategoriesAmount(responseJson['categories amount']);
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // useEffect(() => {
  //   console.log(topInformations);
  //   console.log(monthlySpending);
  //   console.log(yearlySpending);
  //   console.log(categoriesAmount);
  // })

  return (
    <div>
      <div className="container d-flex justify-content-center" style={{ padding: '0px 0px' }}>
        {topInformations && <TopInformations informations={topInformations} />}
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        {monthlySpending && <MonthlySpendingsAnalysis monthlySpending={monthlySpending} />}
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        {yearlySpending && <YearlySpendingsAnalysis yearlySpendings={yearlySpending} />}
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        {categoriesAmount && topInformations && <MonthlyExpenseCategoryDistribution categoriesAmount={categoriesAmount} totalAmount={topInformations.totalExpenses} />}
      </div>
    </div>
  );
}

export default Analytics;