import React, {useEffect} from 'react'
import './card.css'

export default function Card(props) {
  const {title, group} = props

  return (
    <>
      <div className='card' data-group={group}>
        <div className="card-title">
          <p>Card {title}</p>
        </div>
      </div>
    </>
  )
}