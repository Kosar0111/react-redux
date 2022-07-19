import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Form.css'
import bucet from '../../img/bucet.svg'
import { saveTheme, deleteTheme } from '../../store/listSlice'
//let formHidden = false

const Form = ({ hiddenForm, visibleForm }) => {
    console.log(visibleForm);

    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('')
    const dispatch = useDispatch()

    const addTheme = (e) => {
        e.preventDefault()
        dispatch(saveTheme({ title, discription }))
        setTitle('')
        setDiscription('')
        hiddenForm()
    }

    const removeTheme = (id) => {
        dispatch(deleteTheme({ id }))
        setTitle('')
        setDiscription('')
    }

    const inputChange = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    const check = (title.length >= 5 && discription.length >= 10)


    return (
        <form className={visibleForm ? 'form-hidden' : 'form'}>
            <img
                className='img-bucet'
                src={bucet}
                alt=''
                onClick={removeTheme} />
            <div className="title">Title</div>
            <input
                className='input-title'
                type='text'
                name='title'
                placeholder='Title the questions'
                maxLength='120'
                value={title}
                onKeyDown={inputChange}
                onChange={(e) => setTitle(e.target.value)} />
            <div className='form-discription'>
                Discription
            </div>
            <div className='textarea'>
                <textarea
                    className='form-textarea'
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                    maxLength="500"
                    row='25'>
                </textarea>
            </div>

            <button className={check ? 'save' : 'save-hidden'} onClick={(e) => addTheme(e)}>Save</button>
        </form>
    )
}

export default Form