import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [value, setValue] = useState(budget)
    const handleBudgetChange = (e) => {
        console.log(e.target.max)
        const newBudget = e.target.value;
        console.log(newBudget)
        if(newBudget > 20000) {
            alert(`Budget cannot exceed ${e.target.max}`)
        } else {
            setValue(newBudget)
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type='number' required step={10} value={value} max='20000' onChange={handleBudgetChange} /></span>
        </div>
    );
};
export default Budget;