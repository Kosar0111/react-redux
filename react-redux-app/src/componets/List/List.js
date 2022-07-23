import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './List.css'
import ListItem from '../ListItem/ListItem'

const List = ({ hiddenForm, searceTitle }) => {
    const themes = useSelector(state => state.themes.lists);
    const sortTitle = themes.filter(theme =>
        theme.title.toLowerCase().includes(searceTitle.toLowerCase()))
    const [edit, setEdit] = useState(false)
    const editCheck = edit => setEdit(!edit)

    return (
        <div className='list'>
            <button
                onClick={hiddenForm}
                className={edit ? 'new-visible' : 'new'}> + New</button>
            {sortTitle.map(theme => {

                return (
                    <ListItem
                        edit={edit}
                        key={theme.id}
                        theme={theme}
                        editCheck={editCheck}
                    />
                )
            })}
        </div>
    )
}

export default List