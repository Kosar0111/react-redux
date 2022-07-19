import React, { useState } from 'react'
import bucet from '../../img/bucet.svg'
import { updateTheme, deleteTheme } from '../../store/listSlice'
import './FormEdit.css'
import { useDispatch, useSelector } from 'react-redux'

const FormEdit = (theme) => {
    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('')
    const dispatch = useDispatch()

    console.log(theme);


    const EditTheme = (e) => {
        e.preventDefault()
        dispatch(({ title, discription }))
        setTitle('')
        setDiscription('')
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
        <div>
            <form className='form-edit'>
                <img
                    className='img-bucet'
                    src={bucet}
                    alt=''
                    onClick={removeTheme} />
                <div className="title-edit">Title</div>
                <input
                    className='input-title-edit'
                    type='text'
                    name='title'
                    maxLength='120'
                    value={title}
                    onKeyDown={inputChange}
                    onChange={(e) => setTitle(e.target.value)} />
                <div className='form-discription-edit'>
                    Discription
                </div>
                <div className='textarea-edit'>
                    <textarea
                        className='form-textarea-edit'
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        maxLength="500"
                        row='25'>
                    </textarea>
                </div>

                <button className={check ? 'save' : 'save-hidden'} onClick={(e) => EditTheme(e)}>Update</button>
            </form>
        </div>
    )
}

export default FormEdit