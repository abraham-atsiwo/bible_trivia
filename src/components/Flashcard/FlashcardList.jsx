
import React, {useState, useRef, useEffect} from 'react'

import COLOSIANS from '../Data/Colossians/Colosians'
import ESTHER from '../Data/Esther/Esther'
import GENERAL_BIBLE_KNOWLEDGE from '../Data/GeneralBibleKnowledge/GeneralBibleKnowledge'
import CHURCH_HISTORY from '../Data/ChurchHistory/ChurchHistory'

import data from '../Data/Data'
import Flashcard from './Flashcard'

import './FlashcardList.css'

function FlashcardList() {
  const [categories, setCategories] = useState([])
  const categoryEl = useRef()
  const amountEl = useRef()

  const [maxLength, setMaxLength] = useState(5)

  const [selectedOption, setSelectedOption] = useState('');

  // useEffect(() => {
  //   // add an event listener to detect changes in the dropdown
  //   const dropdown = document.getElementById('category');
  //   dropdown.addEventListener('change', handleDropdownChange);

  //   if (categoryEl.current.value.toLowerCase() === 'colosians'){
  //     setMaxLength(() => 35)
  //   }
  //   else if (categoryEl.current.value.toLowerCase() === 'esther'){
  //     setMaxLength(() => 43)
  //   }
  //   else{
  //     setMaxLength(10)
  //   }

  //   // cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     dropdown.removeEventListener('change', handleDropdownChange);
  //   };
  // }, []);

  // const handleDropdownChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   window.location.reload(); // refresh the page
  // };

  // useEffect(() => {
  //   getMaxLength()

  // }, [categoryEl])

  function handleSubmit(e){
    e.preventDefault()

    console.log(categories.length)

    // const tmp = data.filter(function (selected) {
    //   return selected.label === categoryEl.current.value;
    // });

    if (categoryEl.current.value.toLowerCase() === 'colosians'){
      setCategories(COLOSIANS)
      setMaxLength(35)
    }
    else if (categoryEl.current.value.toLowerCase() === 'esther'){
      setCategories(ESTHER)
      setMaxLength(43)
    }
    else if (categoryEl.current.value.toLowerCase() === 'general bible knowledge'){
      setCategories(GENERAL_BIBLE_KNOWLEDGE)
      setMaxLength(43)
    }
    else if (categoryEl.current.value.toLowerCase() === 'church history'){
      setCategories(CHURCH_HISTORY)
      setMaxLength(43)
    }
    else{
      setCategories([])
    }

    // getMaxLength()

    // setCategories(tmp)
    console.log(categories.length)

  }
    
  // function getMaxLength() {
  //   return setMaxLength((prev) => Math.max(categories.length, prev))
  // } 

  return (

    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl} onChange={handleSubmit}>
            {data.map(category => {
              return <option value={category.label} key={category.label}>{category.label}</option>
            }
            )}
            
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="amount" style={{'display': 'none'}}>Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={1} ref={amountEl} max={maxLength} style={{'display': 'none'}}/>
        </div>

        <div className='form-group'>
          <button className="btn">Generate</button>
        </div>
      </form>

      <div className = 'container'>
        <div className='card-grid'>
        {
          categories.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id}/>
           
          })
        }
      </div>
      </div>
    </>
  )
}

export default FlashcardList