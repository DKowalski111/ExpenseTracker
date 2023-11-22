import MonthlyExpenseCategoryDistribution from "./components/MonthlyExpenseCategoryDistribution";
import MonthlySpendingsAnalysis from "./components/MonthlySpendingsAnalysis";
import TopInformations from "./components/TopInformations";
import YearlyExpenseCategoryDistribution from "./components/YearlyExpenseCategoryDistribution";
import YearlySpendingsAnalysis from "./components/YearlySpendingsAnalysis";

const Analytics = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center" style={{ padding: '0px 0px' }}>
        <TopInformations />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <MonthlySpendingsAnalysis />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <YearlySpendingsAnalysis />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <MonthlyExpenseCategoryDistribution />
      </div>
      <div className="container d-lg-flex justify-content-lg-center">
        <YearlyExpenseCategoryDistribution />
      </div>
    </div>
  );
}

export default Analytics;