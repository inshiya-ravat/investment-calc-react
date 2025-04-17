import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { ChangeEvent, useState } from "react";
import Header from './components/Header/Header';
import { Input } from "./components/UserInput/UserInput";

export const InputEnums = {
  InitialInvestment: "initialInvestment",
  AnnualInvestement: "annualInvestment" ,
  ExpectedReturn: "expectedReturn",
  Duration: "duration"
} as const
export type InputEnumType = typeof InputEnums[keyof typeof InputEnums]
type AnnualData= {
  year : number,
  investmentValue: number,
  interest :number,
  totalInterest :number,
  investedCapital :number,
}[]
function getResult(initialInvestment:number,annualInvestment:number,expectedReturn:number,duration:number){
  const annualData:AnnualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    if(i === 0){
      annualData.push({
        year: i + 1,
        investmentValue: Math.ceil(investmentValue), 
        interest: Math.ceil(interestEarnedInYear), 
        totalInterest: Math.ceil(interestEarnedInYear), 
        investedCapital: Math.ceil(initialInvestment+annualInvestment),
      });
    }else{
      annualData.push({
        year: i + 1,
        investmentValue: Math.ceil(investmentValue), 
        interest: Math.ceil(interestEarnedInYear), 
        totalInterest: Math.ceil(annualData[i-1].interest + interestEarnedInYear), 
        investedCapital: Math.ceil(annualData[i-1].investedCapital + annualInvestment),
      });
    }
  }

  return annualData;
}

function App() {
  const [initialInvestment, setInitialInvestment] = useState<Input>(undefined);
  const [annualInvestment, setAnnualInvestment] = useState<Input>(undefined);
  const [expectedReturn, setExpectedReturn] = useState<Input>(undefined);
  const [duration, setDuration] = useState<Input>(undefined);
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
      {initialInvestment && annualInvestment && expectedReturn && duration && (
        <ResultTable resultData={getResult(initialInvestment,annualInvestment,expectedReturn,duration)}/>
      )}
    </>
  );
}

export default App;
