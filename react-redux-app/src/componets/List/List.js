import React from 'react'
import { useSelector } from 'react-redux'
import './List.css'
import ListItem from '../ListItem/ListItem'

const List = ({ hiddenForm }) => {
    const themes = useSelector(state => state.themes.themes);

    return (
        <div className='list'>
            <button
                onClick={hiddenForm}
                className='new'> + New</button>
            {themes.map(theme => {
                return (
                    <ListItem
                        key={theme.id}
                        {...theme}
                    />
                )
            })}
        </div>
    )
}

export default List