import './ListItem.css'
import React, { useState } from 'react'
import FormEdit from '../FormEdit/FormEdit'

const ListItem = ({ theme }) => {
    const [editMode, setEditMode] = useState(false)
    const click = () => setEditMode(!editMode)

    return (
        <><div className='theme' onClick={click}>
            {theme.title}
        </div>
            {editMode ? <FormEdit {...theme} /> : ''}
        </>

    )
}

export default ListItem