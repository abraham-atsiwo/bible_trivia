
import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCheck, faBars, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'

import data from '../Data/Data'
import COLOSIANS from '../Data/Colossians/Colosians'

import './Flashcard.css'

function Flashcard({flashcard}) {
  const [flip, setFlip] = useState(false)
  const frontEl = useRef()
  const backEl = useRef()
  const [height, setHeight] = useState('initial')

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = frontEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  


  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
      return () => window.removeEventListener('resize', setMaxHeight)
  }
  , [])

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick = {() => setFlip(!flip)} style={{height: height}}>

      <div className = 'front' ref = {frontEl}>
        {flashcard.question}

        <div className = 'flashcard-options'>
          {flashcard.options.map(option => 
              <div className = 'flashcard-option' key={option}>
                <FontAwesomeIcon icon={faBars} style={{'paddingRight':'5px', 'color': 'blue'}} className='fa-solid'/>
                {option}
              </div>
            )}
        </div>
      </div>

      <div className = 'back' ref = {backEl}>
      <FontAwesomeIcon icon={faCheckSquare} style={{'paddingRight':'3px', 'color': 'red'}} />
        {flashcard.answer}
      </div>

      {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

export default Flashcard