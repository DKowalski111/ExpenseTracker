import ChartArea from "./components/ChartArea";
import RecentExpenses from "./components/RecentExpensesArea";
import TopInformations from "./components/TopInformations";

export const Dashboard = () => {
  return (
    <div className="my-5">
      <TopInformations />
      <div className="container">
        <div className="row text-start">
          <ChartArea />
          <RecentExpenses />
        </div>
      </div>
    </div>
  );
}