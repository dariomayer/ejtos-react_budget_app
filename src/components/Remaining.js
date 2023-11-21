import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    useEffect(() => {
        // Mostra un alert quando totalExpenses supera il budget
        if (totalExpenses > budget) {
          window.alert('You cannot reduce the budget value lower than the spending');
        }
      }, [totalExpenses, budget]);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
