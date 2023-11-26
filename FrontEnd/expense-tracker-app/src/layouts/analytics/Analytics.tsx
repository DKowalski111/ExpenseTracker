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
  const [monthlySpending, setMonthlySpending] = useState<MonthlySpendingProps | undefined>(undefined);
  const [yearlySpending, setYearlySpending] = useState<YearlySpendingProps | undefined>(undefined);
  const [topInformations, setTopInformations] = useState<TopInformationProps | undefined>(undefined);
  const [categoriesAmount, setCategoriesAmount] = useState<CategoriesAmountProps | undefined>(undefined);

  useEffect(() => {

    const fetchExpenses = async () => {

      const url = "http://localhost:8080/api/expenses/analytics";
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const topInformationProps =
        new TopInformationProps(responseJson['top informations']['top category'], responseJson['top informations']['total expenses'],
          responseJson['top informations']['this month expenses'], responseJson['top informations']['month trend']);
      const monthlySpendingProps = new MonthlySpendingProps(responseJson['monthly spending']);
      const yearlySpendingProps = new YearlySpendingProps(responseJson['yearly spending']);
      const categoriesAmountProps = new CategoriesAmountProps(responseJson['categories amount']);
      setTopInformations(topInformationProps);
      setMonthlySpending(monthlySpendingProps);
      setYearlySpending(yearlySpendingProps);
      setCategoriesAmount(categoriesAmountProps);

      for (var l in responseJson['categories amount']) {
        console.log(l);
      }
    }
    try {
      fetchExpenses();
    } catch (e: any) {
      console.error(e);
    }

  }, [])

  return (
    <div>
      <div className="container d-flex justify-content-center" style={{ padding: '0px 0px' }}>
        {topInformations && <TopInformations informations={topInformations} />}
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <MonthlySpendingsAnalysis />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <YearlySpendingsAnalysis />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <MonthlyExpenseCategoryDistribution categoriesAmount={categoriesAmount} />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <YearlyExpenseCategoryDistribution />
      </div>
    </div>
  );
}

export default Analytics;