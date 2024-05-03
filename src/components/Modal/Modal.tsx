import React from 'react'
import './Modal.css'

export default function Modal({ text, show = false, hideModal = {} }) {
  return (
    <div className={`modal-container ${show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div>{text}</div>
        <button className='modal-btn' onClick={hideModal}>
          Ok
        </button>
      </div>
    </div>
  )
}
