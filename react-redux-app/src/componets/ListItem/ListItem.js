import './ListItem.css'
import React, { useState } from 'react'
import FormEdit from '../FormEdit/FormEdit'

const ListItem = ({ theme }) => {
    const [edit, setEdit] = useState(false)
    const click = (edit) => setEdit(!edit);

    return (
        <div className='theme' onClick={() => click()}>
            {theme.title}
            {edit ? <FormEdit {...theme} /> : ''}
        </div>
    )
}

export default ListItem