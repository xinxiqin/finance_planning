function SSAmountCalculator() {
  return (
    <div >
      <p>
        The indexed earnings from these 35 years are added together and divided by 420 (the number of months in 35 years). 
        This result is your AIME, rounded down to the nearest dollar.
      </p>
       <p>
        Apply the percentages to the AIME.
        90% of the AIME up to the first bend point ($1,226). 
        32% of the AIME between the first and second bend points ($1,226 and $7,391). 
        15% of the AIME above the second bend point. 
        Sum the results from each percentage calculation. This sum is your PIA.
      </p>
      <p>
        For more information, visit the <a href="https://www.ssa.gov/oact/cola/AWI.html">Social Security Administration</a>.
      </p>
    </div>
  );
}
export default SSAmountCalculator;


