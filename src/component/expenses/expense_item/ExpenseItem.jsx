import React,{useState} from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
const ExpenseItem=(props)=>{
   // const {date=new Date(),title='',amount=0}=props;
    //let title=props.title;
   // let amount=props.amount;
     //let date=props.date;
    const [title,setTitle]=useState(props.title)
    const [date,setDate]=useState(props.date)
    const [amount,setAmount]=useState(props.amount)
    // function onChangeClick(event){
    //     console.log('ExpenseItemExpenseItemExpenseItem');
    //     //title='updated';
    //     setTitle('Updated');
    //     setAmount(0);
    //     setDate(new Date());
    //     console.log(title);
    // }
    // const date=new Date(2023, 2, 3).toISOString();
    // const title="New TV";
    // const amount='100';
    // console.log(props);
    // const year=date.getFullYear();
    // const month=date.toLocaleDateString('en-US',{month:'long'});
    // const day=date.toLocaleDateString('en-US',{day:'2-digit'});

    // console.log(year);
    return(
        <div className="expense-item">
            <ExpenseDate date={date}/>
            {/* <div className="date"> */}
            {/* <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div> */}
            {/* {date.toISOString()} */}
            {/* </div> */}
            <div className="expense-item__description"><h2>{title}</h2>
            <div className="expense-item__price ">${amount}</div>
            </div>
            {/* <button onClick={onChangeClick}>Change</button> */}
        </div>
    )
    
}

export default ExpenseItem;