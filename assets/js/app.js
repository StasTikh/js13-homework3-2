function to2(num) {
    return Math.floor(num*100) / 100;
}

function annuityCalc() {
    let amount = +sumInput.value; 
    let term = +termInput.value; 
    let percent = +percentInput.value;
    let mRate = percent / (100 * 12);
    let monthPay = to2(amount * mRate / (1 - Math.pow(1 + mRate, -term)));
    let overPay = to2((monthPay * term) - amount);
    console.log(amount, overPay, amount+overPay);
    
    // let i = 0;
    // let allPay = {
    //     monthDay: [],
    //     creditBod: [],
    //     creditPay: [],
    //     monthPerc: [],
    //     monthPayment: []
    // }
    
    
    
    
    for (m = 1; m<=term; m++){
        if(m == term) {
            monthPay = amount;
        }
        let bodyPart = to2(monthPay - (amount * mRate));
        let monthRate = mRate * 1;
        let percentPay = to2(amount * monthRate);
        amount = to2(amount - bodyPart);
        console.log(`Body: ${amount}, Body payment: ${bodyPart}, Rate payment: ${percentPay}, Monthly payment: ${monthPay}`)
        
       
        // i++;
        // allPay.monthDay[m-1] = i;
        // allPay.creditBod[m-1] = amount;
        // allPay.creditPay[m-1] = bodyPart;
        // allPay.monthPerc[m-1] = percentPay;
        // allPay.monthPayment[m-1] = monthPay; 

          
    }
    //console.log(allPay);
    
}
