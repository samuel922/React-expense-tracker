import React from "react"
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"
const ExpensesList = ({expenses}) => {

 if (expenses.length === 0) {
  return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
 }

  return (
    <ul className="esxpenses-list">
      {expenses
      .map(({title, amount, date, id}) =>
      <ExpenseItem
        key={id} 
        title={title} 
        amount={amount} 
        date={date}
    />)}
    </ul>
  )
}

export default ExpensesList