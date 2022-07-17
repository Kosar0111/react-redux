import React from 'react'
import './Form.css'
import bucet from '../../img/bucet.svg'

function Form() {
    return (
        <form className='form'>
            <img className='img-bucet' src={bucet} alt='' />
            <div className="title">Title</div>

            <input className='input-title' type='text' name='title' placeholder='Title the questions' />
            <div className='form-discription'>
                Discription
            </div>
            <div className='textarea'>
                <textarea className='form-textarea'
                    maxLength="500"
                    row='25'>
                </textarea>
            </div>

            <button className='save'>Save</button>
        </form>
    )
}

export default Form