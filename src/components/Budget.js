import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch,currency } = useContext(AppContext);
    const [value, setValue] = useState(budget)
    const handleBudgetChange = (e) => {
        const newBudget = e.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(newBudget > 20000) {
            alert(`Budget cannot exceed ${e.target.max}`)
        }if(newBudget < totalExpenses){
            alert(`You cannot reduce the budget lower than the spending: £${totalExpenses}`)
        } 
        else {
            setValue(newBudget)
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type='number' required step={10} value={value} max='20000' onChange={handleBudgetChange} style={{textAlign:'center', borderRadius:'5px'}} /></span>
        </div>
    );
};
export default Budget;