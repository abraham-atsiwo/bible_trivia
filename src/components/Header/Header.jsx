
import React, {useState} from 'react'
import data from '../Data/Data'

import './Header.css'

const Dropdown = (props) => {
  
  return (
    <div className='dropdown-container'>
      <select value={props.value} onChange={props.onChange} className='dropdown-option'>
        <option value="">Select an option</option>
        {props.data.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


function NumericInput(props) {

  return (
    <input type="number" min={props.min} max={props.max} value={props.value} onChange={props.onChange}/>
  );
}

function Header() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='header-container'>
      <div className='logo'>QUIZ APP</div>
      <div className='option-box-container'>
          <Dropdown value = {selectedOption} 
                    onChange = {event => setSelectedOption(event.target.value)} data = {data}/>
          <NumericInput min={1} 
                        max={20} 
                        value = {numberOfQuestions} 
                        onChange = {event => setNumberOfQuestions(event.target.value)} />

          <button>Generate</button>
      </div>
    </div>
  )
}


export default Header