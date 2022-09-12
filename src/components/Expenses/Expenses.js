import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props){

    const [filter, setFilter] = useState(2022)
    function getFilterDate (filterDate){
      setFilter(filterDate);
    }


    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter defaultDate={filter} onFilterDate={getFilterDate} />
          <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
          />
          <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
          />
          <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
          />
          <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}
          />
          <ExpenseItem
            title={props.expenses[4].title}
            amount={props.expenses[4].amount}
            date={props.expenses[4].date}
          />
        </Card>
      </div>
    )
}

export default Expenses;