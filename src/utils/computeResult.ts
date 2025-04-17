import { AnnualData } from "../components/ResultTable/ResultTable";

export function getResult(initialInvestment:number,annualInvestment:number,expectedReturn:number,duration:number){
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