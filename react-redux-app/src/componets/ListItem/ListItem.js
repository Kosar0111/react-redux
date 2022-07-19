import './ListItem.css'
import React from 'react'

const ListItem = (theme) => {

    return (
        <div className='theme'>
            {theme.title}
        </div>
    )
}

export default ListItem