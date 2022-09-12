import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Infinix Smart 6",
      amount: 54.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Chupez Usb 3in1",
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Screen Guage $ Pouch",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "HND form",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Udemy Course(React.js)",
      amount: 500,
      date: new Date(2022, 8, 1)
    }
  ];

  const addExpenseHandler = expense =>{
    console.log("I'm log from App.jsx");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses 
        expenses={expenses}
      />
    </div>
  );
}

export default App;
