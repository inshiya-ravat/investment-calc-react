export type AnnualData= {
    year : number,
    investmentValue: number,
    interest :number,
    totalInterest :number,
    investedCapital :number,
  }[]
interface ResultTableProp {
    resultData: AnnualData
}
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
const ResultTable = ({resultData}:ResultTableProp) => {
  return (
    <table id="result">
      <thead>
        <td>year</td>
        <td>Investment Value</td>
        <td>Interest(year)</td>
        <td>Total Interest</td>
        <td>Invested Capital</td>
      </thead>
      <tbody>
        {
            resultData.map((data)=>(
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.investmentValue)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.totalInterest)}</td>
                    <td>{formatter.format(data.investedCapital)}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default ResultTable;
