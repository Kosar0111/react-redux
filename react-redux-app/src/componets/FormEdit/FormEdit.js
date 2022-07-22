import React, { useState } from 'react'
import bucet from '../../img/bucet.svg'
import { updateTheme, deleteTheme } from '../../store/listSlice'
import './FormEdit.css'
import { useDispatch } from 'react-redux'

const FormEdit = (theme) => {
    const editTitle = theme.title
    const editDescription = theme.description
    const editId = theme.id

    const [title, setTitle] = useState(editTitle)
    const [id] = useState(editId)
    const [description, setDescription] = useState(editDescription)
    const [formEditHidden, setFormEditHidden] = useState(true)
    const formHidden = () => setFormEditHidden(!formEditHidden)
    const dispatch = useDispatch()

    const EditTheme = (e) => {
        e.preventDefault()
        dispatch(updateTheme({ title, description, id }))
        setTitle('')
        setDescription('')
        formHidden()
    }

    const removeTheme = () => {
        dispatch(deleteTheme({ id }))
        setTitle('')
        setDescription('')
        formHidden()
    }

    const inputChange = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    const check = (title.length >= 5 && description.length >= 10)

    return (
        <div >
            <form className={formEditHidden ? 'form-edit' : 'form-edit-hidden'}>
                <img
                    className='img-bucet'
                    src={bucet}
                    alt='bucet'
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength="500"
                        row='25'>
                    </textarea>
                </div>
                <button className={check ? 'save-edit' : 'save-edit-hidden'} onClick={(e) => EditTheme(e)}>Update</button>
            </form>
        </div>
    )
}

export default FormEdit