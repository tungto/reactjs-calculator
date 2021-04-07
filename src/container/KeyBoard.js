import React, { Component } from 'react';
import Button from '../components/Button';
import './KeyBoard.css';

class KeyBoard extends Component {
  render() {
    return (
      <div className='KeyBoard'>
        <Button
          value='AC'
          handleClick={this.props.handleReset}
          label='clear'
          key='AC'
          data-size-width='2'
        />
        <Button
          value='/ '
          handleClick={this.props.handleOperator}
          label='divide'
          key='divide'
        />
        <Button
          value='X'
          handleClick={this.props.handleOperator}
          label='multiply'
          key='multiply'
        />

        <Button
          label='seven'
          handleClick={this.props.handleNumber}
          value='7'
          key='7'
        />
        <Button
          label='eight'
          handleClick={this.props.handleNumber}
          value='8'
          key='8'
        />
        <Button
          label='nine'
          handleClick={this.props.handleNumber}
          value='9'
          key='9'
        />
        <Button
          value='- '
          label='subtract'
          key='subtract'
          handleClick={this.props.handleOperator}
        />

        <Button
          label='four'
          handleClick={this.props.handleNumber}
          value='4'
          key='4'
        />
        <Button
          label='five'
          handleClick={this.props.handleNumber}
          value='5'
          key='5'
        />
        <Button
          label='six'
          handleClick={this.props.handleNumber}
          value='6'
          key='6'
        />
        <Button
          value='+'
          handleClick={this.props.handleOperator}
          label='add'
          key='add '
        />

        <div className='bottom-row'>
          <div className='bottom-row-number'>
            <Button
              label='one'
              handleClick={this.props.handleNumber}
              value='1'
              key='1'
            />
            <Button
              label='two'
              handleClick={this.props.handleNumber}
              value='2'
              key='2'
            />
            <Button
              label='three'
              handleClick={this.props.handleNumber}
              value='3'
              key='3'
            />
            <Button
              label='zero'
              handleClick={this.props.handleNumber}
              value='0'
              key='0'
            />
            <Button
              value='.'
              handleClick={this.props.handleDecimal}
              label='decimal'
              key='decimal'
            />
          </div>

          <Button
            value='='
            handleClick={this.props.updateDisplay}
            label='equals'
            key='equals'
          />
        </div>
      </div>
    );
  }
}
export default KeyBoard;
