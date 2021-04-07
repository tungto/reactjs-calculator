import { Component } from 'react';
import './Calculator.css';
import Display from './components/Display';
import KeyBoard from './container/KeyBoard';
import ReactFCCtest from 'react-fcctest';

class App extends Component {
  state = {
    previousNum: 0,
    currentNum: 0,
    operator: null,
    isDecimal: false,
    displayContent: 0,
  };

  appendNumber = (e) => {
    const nextNum = e.target.dataset.value;
    let currentNum;
    if (this.state.operator) {
      currentNum = parseFloat(`${this.state.currentNum}${nextNum}`);
      this.setState({
        currentNum,
        displayContent: currentNum,
      });
    } else {
      const regex = /^0+(?=[0-9])/;
      currentNum = `${this.state.previousNum}${nextNum}`.replace(regex, '');
      this.setState({
        previousNum: parseFloat(currentNum),
        displayContent: currentNum,
      });
    }
  };

  handleDecimal = () => {
    if (this.state.isDecimal) return;

    let { displayContent, currentNum, previousNum } = this.state;
    if (!this.state.operator) {
      previousNum = `${parseFloat(this.state.previousNum)}.`;
      displayContent = previousNum;
    } else {
      currentNum = `${parseFloat(this.state.currentNum)}.`;
      displayContent = currentNum;
    }
    this.setState({
      isDecimal: true,
      currentNum,
      previousNum,
      displayContent,
    });
  };

  handleOperator = (e) => {
    const operator = e.target.dataset.label;
    const displayContent = e.target.dataset.value;
    const { currentNum } = this.state;
    if (this.state.operator) {
      if (currentNum && currentNum !== '-') {
        this.updateDisplay(operator);
      } else if (!currentNum && operator === 'subtract') {
        this.setState({ currentNum: '-' });
      } else if (currentNum === '-') {
        this.setState({
          operator,
          currentNum: 0,
          displayContent,
        });
      } else {
        this.setState({
          operator,
        });
      }
    } else {
      this.setState({
        operator,
        displayContent,
        isDecimal: false,
      });
    }
  };

  compute = () => {
    let currentVal = 0;
    const { operator, currentNum, previousNum } = this.state;
    if (operator === 'add') {
      currentVal = parseFloat(previousNum) + parseFloat(currentNum);
    } else if (operator === 'multiply') {
      currentVal = previousNum * currentNum;
    } else if (operator === 'divide') {
      currentVal = previousNum / currentNum;
    } else if (operator === 'subtract') {
      currentVal = parseFloat(previousNum) - parseFloat(currentNum);
    }
    return currentVal;
  };

  updateDisplay = (operator) => {
    const previousNum = this.compute();
    this.setState({
      previousNum,
      currentNum: 0,
      operator,
      isDecimal: false,
      displayContent: previousNum,
    });
  };

  handleReset = () => {
    this.setState({
      previousNum: 0,
      currentNum: 0,
      operator: null,
      isDecimal: false,
      displayContent: 0,
    });
  };

  render() {
    return (
      <div className='Calculator'>
        <ReactFCCtest />
        <Display
          value={this.state.displayContent}
          updateDisplay={this.updateDisplay}
        />
        <KeyBoard
          handleOperator={this.handleOperator}
          updateDisplay={this.updateDisplay}
          handleReset={this.handleReset}
          handleNumber={this.appendNumber}
          handleDecimal={this.handleDecimal}
        />
      </div>
    );
  }
}

export default App;
