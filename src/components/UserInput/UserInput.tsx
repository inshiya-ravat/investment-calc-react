import { ChangeEvent } from "react";

type Input = number | undefined;
interface UserInputProp {
    initialInvestment:Input,
    annualInvestment:Input,
    expectedReturn:Input,
    duration:Input,
    inputChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

const UserInput = ({initialInvestment,annualInvestment,expectedReturn,duration,inputChange}:UserInputProp) => {
  return (
    <div id="user-input" onChange={inputChange}>
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            name="inital-investment"
            value={initialInvestment}
            type="number"
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            name="annual-investment"
            value={annualInvestment}
            type="number"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input name="expected-return" value={expectedReturn} type="number" />
        </div>
        <div>
          <label>DURATION</label>
          <input name="duration" value={duration} type="number" />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
