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

