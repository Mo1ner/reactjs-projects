import "./style/style.css";
import { Block } from "./Block";
import { useEffect, useState } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Failed to retrieve information");
      });
  }, []);

  const onChangeFromPrice = (value) => {};

  return (
    <div className="App">
      <Block
        value={0}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;
