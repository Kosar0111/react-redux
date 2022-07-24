import './ListItem.css'
import React, { useState } from 'react'
import FormEdit from '../FormEdit/FormEdit'

const ListItem = ({ theme, edit, editCheck }) => {
    const [editMode, setEditMode] = useState(false)

    const click = () => {
        setEditMode(!editMode)
        editCheck()
    }
    console.log(edit);
    return (
        <><div className={edit ? 'theme-visible' : 'theme'} onClick={click}>
            {theme.title}
        </div>
            {editMode ? <FormEdit
                editCheck={editCheck}
                {...theme}
            /> : ''}
        </>

    )
}

export default ListItem