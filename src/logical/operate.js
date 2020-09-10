import Big from 'big.js';

const operate = (number1,number2, operator) => {
    if (number2 === undefined) return number1;
    if (number1 === undefined) return number2;

    Big.DP = 10;
    const a = Big(number1);
    const b = Big(number2);

    try{
            switch(operator){
                case '+':
                    return a.plus(b).toString();
                case '-':
                    return a.minus(b).toString();
                case 'X':
                    return a.times(b).toString();
                case '÷':
                    return a.div(b).toString();
                    default:
                        return null;
             }
        } catch(error){
            return error.message.slice(9);
        }
};

export default operate;