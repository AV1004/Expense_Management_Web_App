import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bike Insurance",
      amount: 114.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 134.12,
      date: new Date(2022, 9, 19)
    },
    {
      id: "e3",
      title: "Wooden Table",
      amount: 294.12,
      date: new Date(2021, 4, 11)
    },
    {
      id: "e4",
      title: "Personal Computer",
      amount: 394.12,
      date: new Date(2019, 4, 1)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
