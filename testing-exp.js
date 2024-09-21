function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
      const output = "Invalid Input";
      return output;
    } else {
      profit = income - expenses;
      tax = profit * (20 / 100);
      return tax;
    }
  }



  function sendNotification(email) {
    if(email.includes("@")===false){
        const output = 'Invalid Input';
        return output;
    }
    else{
        array = email.split('@');
        output = array[0]+ ' sent you an email from ' + array[1];
        return output;
    }
}





function checkDigitsInName(name) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (typeof name !== "string") {
      const output = "Invalid Input";
      return output;
    } else {
      for (let i = 0; i < 10; i++) {
        if (name.includes(i)) {
          output = false;
          return output;
        }
      }
      array = name.split("");
      for (let a = 0; a < array.length; a++) {
        value = array[a];
        if (!letters.includes(value)) {
          output = false;
          return output;
        }
      }
      output2 = true;
      return output2;
    }
  }







  function calculateFinalScore(obj) {
    if(typeof obj === 'object' && typeof obj.name === 'string' && typeof obj.testScore === 'number' && typeof obj.schoolGrade === 'number' && typeof obj.isFFamily === 'boolean'){
        farmer = 20;
        passmark = 80;
        if(obj.isFFamily===true){
            result = obj.testScore + obj.schoolGrade + farmer;
            if(result >= passmark){
                output = true;
            }
            else{
                output = false;
            }
        }
        else{
            result = obj.testScore + obj.schoolGrade ; 
            if(result >= passmark){
                output = true;
            }
            else{
                output = false;
            }
        }
        return output;
    }
    else{
        output = 'Invalid Input';
        return output;
    }
}






function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) && typeof serialNumber === 'number'){
        let sum =0;
     for (let i = 0; i< waitingTimes.length;i++){
         sum = sum + waitingTimes[i];
     }
     let averageValue = sum / waitingTimes.length;
     let average = Math.round(averageValue)
     let serialahead = (serialNumber - 1) - waitingTimes.length;
     let timeForHim = serialahead * average;
     output = timeForHim;
     return output;
    }
    else{
     output = "Invalid Input";
     return output;
    }
 }
 
 
