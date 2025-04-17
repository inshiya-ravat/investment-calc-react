import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { ChangeEvent, useState } from "react";

type Input = number | undefined;

function App() {
  const [initialInvestment, setInitialInvestment] = useState<Input>(undefined);
  const [annualInvestment, setAnnualInvestment] = useState<Input>(undefined);
  const [expectedReturn, setExpectedReturn] = useState<Input>(undefined);
  const [duration, setDuration] = useState<Input>(undefined);
  function handleUserInputchange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "inital-investment": {
        setInitialInvestment(() => +e.target.value);
        break;
      }
      case "annual-investment": {
        setAnnualInvestment(() => +e.target.value);
        break;
      }
      case "expected-return": {
        setExpectedReturn(() => +e.target.value);
        break;
      }
      case "duration": {
        setDuration(() => +e.target.value);
        break;
      }
    }
  }
  return (
    <>
      <UserInput initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} inputChange={handleUserInputchange}/>
      <ResultTable />
    </>
  );
}

export default App;
