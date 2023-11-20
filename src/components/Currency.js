import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

    return (
        <div style={{backgroundColor: 'green', width: '200px', padding: '10px'}}> 
            <select style={{width: '100%', color: 'white', backgroundColor: 'green', border: 'none', appearance: 'none'}} name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">Dollar($)</option>
                <option value="£">Pound(£)</option>
                <option value="€">Euro(€)</option>
                <option value="₹">Rupee(₹)</option>
            </select>	
        </div>
    );
    
};

export default Currency;