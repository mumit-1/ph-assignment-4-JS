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

