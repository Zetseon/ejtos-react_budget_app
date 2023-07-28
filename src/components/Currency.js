import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext)
    function changeCurrency(event) {
        const newCurrency = event.target.value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        })
    }

    return (
        <div className="alert alert-secondary" style={{textAlign:'center'}}> Currency:   {
            <select className='custom-select' value={currency} onChange={changeCurrency}
                style={
                    {
                        backgroundColor: '#45D331',
                        color: 'white',
                        width: '150px',
                        height: '25px',
                        textAlign: 'center',
                        fontSize: '15px',
                        borderRadius: '5px',
                        opacity:'.90'
                    }
                }>
                
            <option value='$' name='Dollar'>$ Dollar</option>
                <option value='£' name='Pound'>£ Pound</option>
                <option value='€' name='Euro'>€ Euro</option>
                <option value='₹' name='Rupee'>₹ Rupee</option>
            </select>
            }
            </div>
    )
}
export default Currency;
/*
  { id: '$', name: 'Dollar' },
        { id: '£', name: 'Pound' },
        { id: '€', name: 'Euro' },
        { id: '₹', name: 'Rupee' }
*/