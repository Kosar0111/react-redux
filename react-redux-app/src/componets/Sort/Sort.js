import React from 'react'
import './Sort.css'
import arrow from '../../img/arrow.svg'
import searce from '../../img/searce.png'

function Sort() {
    return (
        <div className='sort'>
            <div className='sort-list' >
                <div className='sort-title'>
                    <p>Title</p>
                    <img className='arrow' src={arrow} alt='' />
                </div>
                <div className='sort-date'>
                    <p>Date </p>
                    <img className='arrow' src={arrow} alt='' />
                </div>
            </div>
            <input className='sort-searce' type='text' name='title' placeholder='Searce the questions' /><img className='searce' src={searce} alt='' />
        </div>
    )
}

export default Sort