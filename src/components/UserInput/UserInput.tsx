import { ChangeEvent } from "react";
import { InputEnumType,InputEnums } from "../../App";
export type Input = number | undefined;

interface UserInputProp {
    initialInvestment:Input,
    annualInvestment:Input,
    expectedReturn:Input,
    duration:Input,
    inputChange: (e:ChangeEvent<HTMLInputElement>, name: InputEnumType)=>void
}

const UserInput = ({initialInvestment,annualInvestment,expectedReturn,duration,inputChange}:UserInputProp) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            name="inital-investment"
            value={initialInvestment}
            type="number"
            onChange={(e)=>inputChange(e,InputEnums.InitialInvestment)}
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            name="annual-investment"
            value={annualInvestment}
            type="number"
            onChange={(e)=>inputChange(e,InputEnums.AnnualInvestement)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input name="expected-return" value={expectedReturn} type="number" onChange={(e)=>inputChange(e,InputEnums.ExpectedReturn)}/>
        </div>
        <div>
          <label>DURATION</label>
          <input name="duration" value={duration} type="number" onChange={(e)=>inputChange(e,InputEnums.Duration)}/>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
