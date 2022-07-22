import React from 'react'
import { useSelector } from 'react-redux'
import './List.css'
import ListItem from '../ListItem/ListItem'

const List = ({ hiddenForm, searceTitle }) => {
    const themes = useSelector(state => state.themes.lists);
    const sortTitle = themes.filter(theme =>
        theme.title.toLowerCase().includes(searceTitle.toLowerCase()))

    return (
        <div className='list'>
            <button
                onClick={hiddenForm}
                className='new'> + New</button>
            {sortTitle.map(theme => {

                return (
                    <ListItem
                        key={theme.id}
                        theme={theme}
                    />
                )
            })}
        </div>
    )
}

export default List