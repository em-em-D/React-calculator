import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { result, nextVal, operation } = calculator;

  const operButns = ['+', '-', 'X', '÷'];
  const numButns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    result = null;
    nextVal = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    result *= -1;
    nextVal *= -1;
  }
  if (buttonName === '%') {
    result /= 100;
    nextVal /= 100;
  }

  if (numButns.includes(buttonName)) {
    while (nextVal === null) {
      nextVal = '';
    }
    nextVal += buttonName;
  }

  if (buttonName === '.') {
    if (buttonName.includes('.')) {
      nextVal += buttonName;
    }
  }

  if (operButns.includes(buttonName)) {
    while (nextVal !== null && operation !== null) {
      result = operate(result, nextVal, operation);
      operation = buttonName;
      nextVal = null;
    }
    while (nextVal !== null) {
      result = nextVal;
      nextVal = null;
    }
    if (nextVal == null || operation == null) {
      operation = buttonName;
    }
  }

  if (buttonName === '=') {
    while (nextVal !== null) {
      result = operate(result, nextVal, operation);
      nextVal = null;
    }
  }
  return { result, nextVal, operation };
};
export default calculate;
