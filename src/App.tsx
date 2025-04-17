import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { ChangeEvent, useState } from "react";
import Header from './components/Header/Header';
import { Input } from "./components/UserInput/UserInput";
import { getResult } from "./utils/computeResult";

export const InputEnums = {
  InitialInvestment: "initialInvestment",
  AnnualInvestement: "annualInvestment" ,
  ExpectedReturn: "expectedReturn",
  Duration: "duration"
} as const
export type InputEnumType = typeof InputEnums[keyof typeof InputEnums]

function App() {
  const [initialInvestment, setInitialInvestment] = useState<Input>(undefined);
  const [annualInvestment, setAnnualInvestment] = useState<Input>(undefined);
  const [expectedReturn, setExpectedReturn] = useState<Input>(undefined);
  const [duration, setDuration] = useState<Input>(undefined);
  const shouldGenerateResult = initialInvestment && annualInvestment && expectedReturn && duration
  
  function handleUserInputchange(e: ChangeEvent<HTMLInputElement>,name:InputEnumType) {
    switch (name.toString()) {
      case InputEnums.InitialInvestment: {
        setInitialInvestment(() => +e.target.value);
        break;
      }
      case InputEnums.AnnualInvestement: {
        setAnnualInvestment(() => +e.target.value);
        break;
      }
      case InputEnums.ExpectedReturn: {
        setExpectedReturn(() => +e.target.value);
        break;
      }
      case InputEnums.Duration: {
        setDuration(() => +e.target.value);
        break;
      }
    }
  }
  return (
    <>
      <Header/>
      <UserInput initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} inputChange={handleUserInputchange}/>
      {shouldGenerateResult && (
        <ResultTable resultData={getResult(initialInvestment,annualInvestment,expectedReturn,duration)}/>
      )}
    </>
  );
}

export default App;
