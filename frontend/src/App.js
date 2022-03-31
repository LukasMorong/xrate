import { useState, useEffect } from 'react';
import axios from 'axios';

//components
import Navbar from './components/layout/Navbar';
import ValueInput from './components/ValueInput';

function App() {
  const [rates, setRates] = useState([]);
  const [curr1Amount, setCurr1Amount] = useState(1);
  const [curr2Amount, setCurr2Amount] = useState(1);
  const [currency1, setCurency1] = useState('USD');
  const [currency2, setCurency2] = useState('EUR');

  useEffect(() => {
    axios
      .get('http://data.fixer.io/api/latest?access_key=24ad502032d75aef57c648f1586dd230')
      .then((res) => {
        setRates(res.data.rates);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ValueInput
        onAmountChange={setCurr1Amount}
        onCurrencyChange={setCurency1}
        currencies={Object.keys(rates)}
        amount={curr1Amount}
        currency={currency1}
      />
      <ValueInput
        onAmountChange={setCurr2Amount}
        onCurrencyChange={setCurency2}
        currencies={Object.keys(rates)}
        amount={curr2Amount}
        currency={currency2}
      />
    </div>
  );
}

export default App;
