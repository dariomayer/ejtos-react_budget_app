import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const changeCurrency = (val, event) => {
    setSelectedCurrency(event.target.innerText);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }

  return (
    <div>
      <Dropdown id="dropdown-basic" onSelect={changeCurrency}>
        <Dropdown.Toggle>
        {selectedCurrency ? `Currency (${selectedCurrency})` : 'Currency ()'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
          <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
          <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
          <Dropdown.Item eventKey="₹">₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Currency;
