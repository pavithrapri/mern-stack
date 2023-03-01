// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Expenses from './component/expenses/Expenses';
import NewExpense from './component/new_expenses/NewExpense';
import Counter from './Counter';
//import ExpenseItem from './component/expenses/expense_item/ExpenseItem';
//import ExpenseItem from './component/expenses/expense_item/ExpenseItem';
//import ExpenseItem from './component/ExpenseItem';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 

const EspenseTracker=()=>{
  const[expenses,setExpenses]=useState(DUMMY_DATA);
  const[isloading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('http://localhost:8080/api/v1/expenses').
    then(response=>response.json())
    .then(json=>{
      console.log(json);
      setExpenses(json);
      setLoading(json);
    })
  },[]);
}
function App() {
  return(
    <Counter/>
  )
}
  
//   const[expenses,setExpenses]=useState(DUMMY_DATA)
const onAddExpense=(new_expense)=>{
 setExpenses((...expenses,newvalue))
//     //setExpenses((prev)=>[...prev,newValue])
//   }
// // const DUMMY_DATA = [
// //   {
// //     id: 'e1',
// //     title: 'Groceries',
// //     amount: 94.12,
// //     date: new Date(2021, 7, 14),
// //   },
// //   { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
// //   {
// //     id: 'e3',
// //     title: 'Car Repair',
// //     amount: 294.67,
// //     date: new Date(2021, 2, 28),
// //   },
// //   {
// //     id: 'e4',
// //     title: 'New work desk',
// //     amount: 450,
// //     date: new Date(2021, 5, 12),
// //   },
// // ]; 
//   return (
//     <div className="App">
//       {/* EMPTY PROJECT */}
//       <NewExpense onAddExpense={onAddExpense}/>
//       <Expenses expenses={expenses}/>
//       {/* <form>
//         <label for="Title" >Title</label>
//         <input name='Title' type="text" id="Title"></input><br></br>
//         <label for="Amount" >Amount</label>
//         <input name='Amount' type="text" id="Amount"></input><br></br>
//         <label for="Date" >Date</label>
//         <input name='Date' type="date" id="Date"></input><br></br>
//         <button>Add Expense</button><br></br>
//         <button>Cancel</button>
//       </form> */}
//       {/* <ExpenseItem
//       title={DUMMY_DATA[0].title}
//       amount={DUMMY_DATA[0].amount}
//       date={DUMMY_DATA[0].date}
//       // title={"Expense Request"}
//       // amount={100}
//       // date={new Date(2023, 4,7)} 
//       />
//       <ExpenseItem
//       title={DUMMY_DATA[1].title}
//       amount={DUMMY_DATA[1].amount}
//       date={DUMMY_DATA[1].date}/>
//       <ExpenseItem
//       title={DUMMY_DATA[2].title}
//       amount={DUMMY_DATA[2].amount}
//       date={DUMMY_DATA[2].date}/>
//       <ExpenseItem
//       title={DUMMY_DATA[3].title}
//       amount={DUMMY_DATA[3].amount}
//       date={DUMMY_DATA[3].date}/> */}
//       {/* <ExpenseItem /><ExpenseItem /><ExpenseItem /><ExpenseItem /> */}
//       {/* <p>SUBASRI V</p>
//       <button>SUBMIT</button><br></br>
//       <form id='form-container' >
//         <div>
//           <label for="name">NAME</label>
//           <input type="text" name="name" id="name"/>
//         </div>
//         <div>
//           <label for="pswd">PASSWORD</label>
//           <input type="password" name="pswd" id="pswd"/>
//         </div>
//         <button>CLICK</button>
//       </form> */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );

export default App;
