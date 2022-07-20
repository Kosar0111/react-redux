import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Form.css'
import bucet from '../../img/bucet.svg'
import { saveTheme } from '../../store/listSlice'

const Form = ({ hiddenForm, visibleForm }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const addTheme = (e) => {
        e.preventDefault()
        dispatch(saveTheme({ title, description }))
        setTitle('')
        setDescription('')
        hiddenForm()
    }

    const inputChange = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    const check = (title.length >= 5 && description.length >= 10)


    return (
        <form className={visibleForm ? 'form-hidden' : 'form'}>
            <img
                className='img-bucet'
                src={bucet}
                alt='bucet'
            />
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength="500"
                    row='25'>
                </textarea>
            </div>

            <button className={check ? 'save' : 'save-hidden'} onClick={(e) => addTheme(e)}>Save</button>
        </form>
    )
}

export default Form