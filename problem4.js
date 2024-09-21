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


