
import React, {useState, useRef} from 'react'

import COLOSIANS from '../Data/Colossians/Colosians'
import ESTHER from '../Data/Esther/Esther'

import data from '../Data/Data'
import Flashcard from './Flashcard'

import './FlashcardList.css'

function FlashcardList() {
  const [categories, setCategories] = useState([])
  const categoryEl = useRef()
  const amountEl = useRef()


  function handleSubmit(e){
    e.preventDefault()

    // const tmp = data.filter(function (selected) {
    //   return selected.label === categoryEl.current.value;
    // });

    if (categoryEl.current.value.toLowerCase() === 'colosians'){
      setCategories(COLOSIANS)
    }
    else if (categoryEl.current.value.toLowerCase() === 'esther'){
      setCategories(ESTHER)
    }
    else{
      setCategories([])
    }

    // setCategories(tmp)
    console.log(categories)

    // console.log(amountEl.current.value)
    // console.log(categoryEl.current.value)
    // console.log(categories.length)
    
    // tmp.map(res => {
    //   res.value.map(el => {
    //     console.log(el.question)
    //   })
    // })

  }
    
  return (

    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {data.map(category => {
              return <option value={category.label} key={category.label}>{category.label}</option>
            }
            )}
            
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={1} ref={amountEl} max={3}/>
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