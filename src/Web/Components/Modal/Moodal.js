import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function Moodal({children, closeModal}) {
  const navigate = useNavigate();
  return (
    <div className='modal-container'>
      <div className='modal-body'>
      <button className='modal-closeButton' onClick={()=> closeModal(false)}>X</button>

        {children}

      </div>
    </div>
  )
}
