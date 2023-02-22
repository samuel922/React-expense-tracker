import React from "react"
import "./App.css"
import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses"

const App = ()  => {
  const expenses = [
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: 10.24,
      date: new Date(2023, 2, 20)
    },
    {
      id: 'e2',
      title: "Sun Glasses",
      amount: 50.20,
      date: new Date(2023, 1, 20)
    },
    {
      id: 'e3',
      title: "Jordan Sneakers",
      amount: 70.00,
      date: new Date(2023, 2, 20)
    },
    {
      id: 'e4',
      title: "Kaki Trouser",
      amount: 10.24,
      date: new Date(2023, 2, 20)
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App