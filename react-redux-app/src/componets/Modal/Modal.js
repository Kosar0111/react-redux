import React from 'react'
import './Modal.css'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')
const Modal = ({ active, setActive, title, description }) => {
    if (active) {
        return createPortal(
            <div className='modal' onClick={() => setActive(!active)}>
                <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                    <p>{title.length >= 7 ? null : 'You wroute too short title'}
                    </p>
                    <p>{description.length >= 15 ? null : 'You wroute too short description'}
                    </p>
                </div>
            </div>,
            modalRoot
        )
    }

    return null
}

export default Modal