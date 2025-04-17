type AnnualData= {
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
        <th>year</th>
        <th>Investment Value</th>
        <th>Interest(year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
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
