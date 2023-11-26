import { useEffect, useState } from "react";
import CategoriesAmount from "./components/CategoriesAmount";
import RecentExpenses from "./components/RecentExpenses";
import TopInformations from "./components/TopInformation";

export const Dashboard = () => {

  const [topInformation, setTopInformation] = useState<{ [category: string]: string }>();
  const [recentExpenses, setRecentExpenses] = useState<{ [category: string]: string }>();
  const [categoriesAmount, setCategoriesAmount] = useState<{ [category: string]: string }>();


  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API}/dashboard`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const responseJson = await response.json();
    setTopInformation(responseJson['top information']);
    setRecentExpenses(responseJson['recent expenses']);
    setCategoriesAmount(responseJson['categories amount']);
    topInformation && console.log(topInformation['total expenses']);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="my-5">
      {topInformation && <TopInformations topInformation={topInformation} />}
      <div className="container">
        <div className="row text-start">
          {categoriesAmount && topInformation && <CategoriesAmount categoriesAmount={categoriesAmount} totalExpenses={Number.parseFloat(topInformation['total expenses'])} />}
          {recentExpenses && <RecentExpenses recentExpenses={recentExpenses} />}
        </div>
      </div>
    </div>
  );
}